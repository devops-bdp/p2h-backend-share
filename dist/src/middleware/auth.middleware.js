import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma.js';
export async function authenticateToken(req, res, next) {
    try {
        const userCount = await prisma.user.count();
        // Izinkan registrasi user pertama kali jika database masih kosong
        if (userCount === 0) {
            return next();
        }
    }
    catch {
        // Abaikan error count jika ada dan lanjutkan validasi token
    }
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Akses ditolak: Token autentikasi tidak ditemukan. Harap sertakan token Bearer.',
        });
    }
    const jwtSecret = process.env.JWT_SECRET || 'secret';
    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        return next();
    }
    catch (error) {
        return res.status(403).json({
            success: false,
            message: 'Token tidak valid atau telah kedaluwarsa',
        });
    }
}
export function authorizeRoles(...allowedRoles) {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Akses ditolak: Harap login terlebih dahulu',
            });
        }
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Akses ditolak: Hanya role [${allowedRoles.join(', ')}] yang diizinkan untuk melakukan aksi ini`,
            });
        }
        return next();
    };
}
export function authorizeDepartments(...allowedDepartments) {
    return async (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Akses ditolak: Harap login terlebih dahulu',
            });
        }
        // Ambil fresh department dari token atau database
        let userDept = req.user.department;
        if (!userDept) {
            const dbUser = await prisma.user.findUnique({
                where: { id: req.user.id },
                select: { department: true },
            });
            userDept = dbUser?.department;
            if (req.user) {
                req.user.department = userDept;
            }
        }
        if (!userDept || !allowedDepartments.includes(userDept)) {
            return res.status(403).json({
                success: false,
                message: `Akses ditolak: Hanya user dari departemen [${allowedDepartments.join(', ')}] yang diizinkan untuk melakukan aksi ini. Departemen Anda: ${userDept || 'Tidak diketahui'}`,
            });
        }
        return next();
    };
}
/**
 * Middleware khusus pengelolaan Unit:
 * Hanya role ADMIN atau SUPERADMIN DENGAN departemen PLANT atau OPERATIONS
 */
export async function authorizeUnitManagement(req, res, next) {
    if (!req.user) {
        return res.status(401).json({
            success: false,
            message: 'Akses ditolak: Harap login terlebih dahulu',
        });
    }
    // 1. Cek Role: Harus ADMIN atau SUPERADMIN
    const allowedRoles = ['ADMIN', 'SUPERADMIN'];
    if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({
            success: false,
            message: `Akses ditolak: Hanya role [${allowedRoles.join(', ')}] yang dapat mengelola data Unit`,
        });
    }
    // 2. Cek Department: Harus PLANT atau OPERATIONS
    let userDept = req.user.department;
    if (!userDept) {
        const dbUser = await prisma.user.findUnique({
            where: { id: req.user.id },
            select: { department: true },
        });
        userDept = dbUser?.department;
        if (req.user) {
            req.user.department = userDept;
        }
    }
    const allowedDepartments = ['PLANT', 'OPERATIONS'];
    if (!userDept || !allowedDepartments.includes(userDept)) {
        return res.status(403).json({
            success: false,
            message: `Akses ditolak: Hanya role ${req.user.role} dari departemen [${allowedDepartments.join(', ')}] yang diizinkan mengelola Unit. Departemen Anda saat ini: ${userDept || 'Tidak diketahui'}`,
        });
    }
    return next();
}
//# sourceMappingURL=auth.middleware.js.map