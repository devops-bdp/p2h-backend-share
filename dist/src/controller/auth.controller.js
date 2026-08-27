import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/prisma.js';
export default function AuthController() {
    async function login(req, res) {
        try {
            const { nrp, password } = req.body;
            if (!nrp || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'NRP dan password wajib diisi',
                });
            }
            const user = await prisma.user.findFirst({
                where: { nrp: Number(nrp) },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan',
                });
            }
            const isPasswordValid = (await bcrypt.compare(password, user.password)) ||
                user.password === password;
            if (!isPasswordValid) {
                return res.status(401).json({
                    success: false,
                    message: 'Password salah',
                });
            }
            const jwtSecret = process.env.JWT_SECRET || 'secret';
            const token = jwt.sign({
                id: user.id,
                nrp: user.nrp,
                role: user.role,
                department: user.department,
            }, jwtSecret, { expiresIn: '1d' });
            const { password: _, ...userWithoutPassword } = user;
            return res.json({
                success: true,
                message: 'Login berhasil',
                token,
                user: userWithoutPassword,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan pada server saat login',
            });
        }
    }
    async function register(req, res) {
        try {
            const { firstName, lastName, nrp, password, department, position, posision, phoneNumber, email, role, } = req.body;
            if (!firstName || !lastName || !nrp || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Nama depan, nama belakang, NRP, dan password wajib diisi',
                });
            }
            // Validasi izin role: Role ADMIN tidak boleh membuat SUPERADMIN
            if (req.user && req.user.role === 'ADMIN' && role === 'SUPERADMIN') {
                return res.status(403).json({
                    success: false,
                    message: 'Akses ditolak: User dengan role ADMIN tidak diizinkan mendaftarkan SUPERADMIN',
                });
            }
            const existingUser = await prisma.user.findFirst({
                where: { nrp: Number(nrp) },
            });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: `User dengan NRP ${nrp} sudah terdaftar`,
                });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    nrp: Number(nrp),
                    password: hashedPassword,
                    department: department || undefined,
                    posision: posision || position || undefined,
                    phoneNumber: phoneNumber || null,
                    email: email || null,
                    role: role || undefined,
                },
            });
            const { password: _, ...userWithoutPassword } = user;
            return res.status(201).json({
                success: true,
                message: 'Registrasi user berhasil',
                user: userWithoutPassword,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan pada server saat registrasi',
            });
        }
    }
    async function getMe(req, res) {
        try {
            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'Akses ditolak: Tidak terautentikasi',
                });
            }
            const user = await prisma.user.findUnique({
                where: { id: req.user.id },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan',
                });
            }
            const { password: _, ...userWithoutPassword } = user;
            return res.json({
                success: true,
                user: userWithoutPassword,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan pada server',
            });
        }
    }
    return {
        login,
        register,
        getMe,
    };
}
//# sourceMappingURL=auth.controller.js.map