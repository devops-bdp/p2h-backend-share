import bcrypt from 'bcryptjs';
import { prisma } from '../config/prisma.js';
import { uploadUserAvatar, deleteUserAvatar } from '../config/cloudinary.js';
export default function UserController() {
    /**
     * Mengambil semua data user dengan filter dan pencarian
     */
    async function getAllUsers(req, res) {
        try {
            const { search, role, department, posision } = req.query;
            const whereClause = {};
            if (role) {
                whereClause.role = String(role);
            }
            if (department) {
                whereClause.department = String(department);
            }
            if (posision) {
                whereClause.posision = String(posision);
            }
            if (search) {
                const searchStr = String(search).trim();
                const searchNum = Number(searchStr);
                const orConditions = [
                    { firstName: { contains: searchStr, mode: 'insensitive' } },
                    { lastName: { contains: searchStr, mode: 'insensitive' } },
                    { email: { contains: searchStr, mode: 'insensitive' } },
                    { phoneNumber: { contains: searchStr, mode: 'insensitive' } },
                ];
                if (!isNaN(searchNum)) {
                    orConditions.push({ nrp: searchNum });
                }
                whereClause.OR = orConditions;
            }
            const users = await prisma.user.findMany({
                where: whereClause,
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                    phoneNumber: true,
                    email: true,
                    role: true,
                    avatar: true,
                    createdAt: true,
                    updatedAt: true,
                    _count: {
                        select: {
                            p2hInspections: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
            });
            return res.json({
                success: true,
                count: users.length,
                data: users,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Gagal mengambil data user',
            });
        }
    }
    /**
     * Mengambil detail user berdasarkan ID
     */
    async function getUserById(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID user tidak valid',
                });
            }
            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                    phoneNumber: true,
                    email: true,
                    role: true,
                    avatar: true,
                    createdAt: true,
                    updatedAt: true,
                    _count: {
                        select: {
                            p2hInspections: true,
                        },
                    },
                },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan',
                });
            }
            return res.json({
                success: true,
                data: user,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Gagal mengambil detail user',
            });
        }
    }
    /**
     * Menambahkan user baru
     */
    async function createUser(req, res) {
        try {
            const { firstName, lastName, nrp, password, department, position, posision, phoneNumber, email, role, } = req.body;
            if (!firstName || !lastName || !nrp || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Nama depan, nama belakang, NRP, dan password wajib diisi',
                });
            }
            const parsedNrp = Number(nrp);
            if (isNaN(parsedNrp)) {
                return res.status(400).json({
                    success: false,
                    message: 'NRP harus berupa angka',
                });
            }
            // Validasi izin role: Role ADMIN tidak boleh membuat SUPERADMIN
            if (req.user && req.user.role === 'ADMIN' && role === 'SUPERADMIN') {
                return res.status(403).json({
                    success: false,
                    message: 'Akses ditolak: Admin tidak dapat membuat akun dengan role SUPERADMIN',
                });
            }
            // Cek apakah NRP sudah terdaftar
            const existingUser = await prisma.user.findFirst({
                where: { nrp: parsedNrp },
            });
            if (existingUser) {
                return res.status(400).json({
                    success: false,
                    message: `User dengan NRP ${parsedNrp} sudah terdaftar`,
                });
            }
            const hashedPassword = await bcrypt.hash(String(password), 10);
            const user = await prisma.user.create({
                data: {
                    firstName: String(firstName).trim(),
                    lastName: String(lastName).trim(),
                    nrp: parsedNrp,
                    password: hashedPassword,
                    department: department || undefined,
                    posision: posision || position || undefined,
                    phoneNumber: phoneNumber ? String(phoneNumber).trim() : null,
                    email: email ? String(email).trim().toLowerCase() : null,
                    role: role || undefined,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                    phoneNumber: true,
                    email: true,
                    role: true,
                    avatar: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            return res.status(201).json({
                success: true,
                message: 'User baru berhasil didaftarkan',
                data: user,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan saat menambahkan user',
            });
        }
    }
    /**
     * Mengupdate data user
     */
    async function updateUser(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID user tidak valid',
                });
            }
            const existingUser = await prisma.user.findUnique({
                where: { id },
            });
            if (!existingUser) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan',
                });
            }
            const { firstName, lastName, nrp, password, department, position, posision, phoneNumber, email, role, } = req.body;
            // Cek hierarki otorisasi
            if (req.user && req.user.role === 'ADMIN') {
                if (existingUser.role === 'SUPERADMIN' && req.user.id !== existingUser.id) {
                    return res.status(403).json({
                        success: false,
                        message: 'Akses ditolak: Admin tidak dapat mengubah data SUPERADMIN',
                    });
                }
                if (role === 'SUPERADMIN' && existingUser.role !== 'SUPERADMIN') {
                    return res.status(403).json({
                        success: false,
                        message: 'Akses ditolak: Admin tidak dapat mengubah role menjadi SUPERADMIN',
                    });
                }
            }
            // Cek jika NRP diubah, pastikan tidak duplikat dengan user lain
            if (nrp !== undefined && Number(nrp) !== existingUser.nrp) {
                const parsedNrp = Number(nrp);
                if (isNaN(parsedNrp)) {
                    return res.status(400).json({
                        success: false,
                        message: 'NRP harus berupa angka',
                    });
                }
                const duplicateNrp = await prisma.user.findFirst({
                    where: {
                        nrp: parsedNrp,
                        NOT: { id },
                    },
                });
                if (duplicateNrp) {
                    return res.status(400).json({
                        success: false,
                        message: `NRP ${parsedNrp} sudah digunakan oleh user ${duplicateNrp.firstName} ${duplicateNrp.lastName}`,
                    });
                }
            }
            // Hash password baru jika ada
            let hashedPassword = undefined;
            if (password && String(password).trim() !== '') {
                hashedPassword = await bcrypt.hash(String(password), 10);
            }
            const updatedUser = await prisma.user.update({
                where: { id },
                data: {
                    firstName: firstName ? String(firstName).trim() : undefined,
                    lastName: lastName ? String(lastName).trim() : undefined,
                    nrp: nrp !== undefined ? Number(nrp) : undefined,
                    password: hashedPassword,
                    department: department || undefined,
                    posision: posision || position || undefined,
                    phoneNumber: phoneNumber !== undefined ? (phoneNumber ? String(phoneNumber).trim() : null) : undefined,
                    email: email !== undefined ? (email ? String(email).trim().toLowerCase() : null) : undefined,
                    role: role || undefined,
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                    phoneNumber: true,
                    email: true,
                    role: true,
                    avatar: true,
                    createdAt: true,
                    updatedAt: true,
                },
            });
            return res.json({
                success: true,
                message: 'Data user berhasil diperbarui',
                data: updatedUser,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan saat memperbarui user',
            });
        }
    }
    /**
     * Reset Password User
     */
    async function resetUserPassword(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID user tidak valid',
                });
            }
            const targetUser = await prisma.user.findUnique({
                where: { id },
            });
            if (!targetUser) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan',
                });
            }
            // Admin tidak boleh reset password Superadmin
            if (req.user && req.user.role === 'ADMIN' && targetUser.role === 'SUPERADMIN') {
                return res.status(403).json({
                    success: false,
                    message: 'Akses ditolak: Admin tidak dapat mereset password SUPERADMIN',
                });
            }
            const { newPassword } = req.body;
            const finalPassword = newPassword && String(newPassword).trim() !== ''
                ? String(newPassword).trim()
                : 'Batara@123';
            const hashedPassword = await bcrypt.hash(finalPassword, 10);
            await prisma.user.update({
                where: { id },
                data: { password: hashedPassword },
            });
            return res.json({
                success: true,
                message: `Password user ${targetUser.firstName} ${targetUser.lastName} berhasil direset ke "${finalPassword}"`,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan saat mereset password user',
            });
        }
    }
    /**
     * Menghapus user
     */
    async function deleteUser(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID user tidak valid',
                });
            }
            // Cegah menghapus akun sendiri
            if (req.user && req.user.id === id) {
                return res.status(400).json({
                    success: false,
                    message: 'Anda tidak dapat menghapus akun Anda sendiri',
                });
            }
            const existingUser = await prisma.user.findUnique({
                where: { id },
            });
            if (!existingUser) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan',
                });
            }
            // Validasi izin: Admin tidak boleh menghapus Superadmin atau Admin lain
            if (req.user && req.user.role === 'ADMIN') {
                if (existingUser.role === 'SUPERADMIN' || existingUser.role === 'ADMIN') {
                    return res.status(403).json({
                        success: false,
                        message: 'Akses ditolak: Admin hanya dapat menghapus user dengan role USER',
                    });
                }
            }
            await prisma.user.delete({
                where: { id },
            });
            return res.json({
                success: true,
                message: `User ${existingUser.firstName} ${existingUser.lastName} (NRP: ${existingUser.nrp}) berhasil dihapus`,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan saat menghapus user',
            });
        }
    }
    /**
     * Helper Normalisasi Nilai Enum Role
     */
    function normalizeRole(role) {
        if (!role)
            return 'USER';
        const upper = String(role).trim().toUpperCase();
        if (upper === 'SUPERADMIN' || upper === 'SUPER ADMIN' || upper === 'SUPER_ADMIN')
            return 'SUPERADMIN';
        if (upper === 'ADMIN' || upper === 'ADMINISTRATOR')
            return 'ADMIN';
        return 'USER';
    }
    /**
     * Helper Normalisasi Nilai Enum Departemen
     */
    function normalizeDepartment(dept) {
        if (!dept)
            return 'HRGA';
        const upper = String(dept).trim().toUpperCase();
        if (['OPERATIONS', 'OPERASIONAL', 'PRODUKSI & TAMBANG', 'OPS'].includes(upper))
            return 'OPERATIONS';
        if (['PRODUCTION_AND_ENGINEERING', 'PRODUCTION & ENGINEERING', 'ENGINEERING'].includes(upper))
            return 'PRODUCTION_AND_ENGINEERING';
        if (['PLANT', 'MAINTENANCE', 'PLANT & MAINTENANCE'].includes(upper))
            return 'PLANT';
        if (['LOGISTIC', 'LOGISTIK', 'SUPPLY CHAIN'].includes(upper))
            return 'LOGISTIC';
        if (['HSE', 'K3', 'SAFETY', 'SHE'].includes(upper))
            return 'HSE';
        if (['HRGA', 'HR', 'GA', 'HUMAN RESOURCE'].includes(upper))
            return 'HRGA';
        return 'HRGA';
    }
    /**
     * Helper Normalisasi Nilai Enum Posisi
     */
    function normalizePosition(pos) {
        if (!pos)
            return 'OPERATOR';
        const upper = String(pos).trim().toUpperCase().replace(/[\s-]/g, '_');
        if (['SITE_MANAGER', 'PROJECT_MANAGER', 'PM'].includes(upper))
            return 'SITE_MANAGER';
        if (['SITE_SUPERVISOR', 'SUPERVISOR', 'PENGAWAS', 'SPV'].includes(upper))
            return 'SITE_SUPERVISOR';
        if (['SITE_SUPERINTENDENT', 'SUPERINTENDENT', 'SUPT'].includes(upper))
            return 'SITE_SUPERINTENDENT';
        if (['OPERATOR', 'OPERATOR_ALAT_BERAT'].includes(upper))
            return 'OPERATOR';
        if (['MECHANIC', 'MEKANIK', 'FITTER'].includes(upper))
            return 'MECHANIC';
        if (['ELECTRICIAN', 'ELEKTRIKAL', 'LISTRIK'].includes(upper))
            return 'ELECTRICIAN';
        if (['TYREMAN', 'TYRE_MAN', 'BAN'].includes(upper))
            return 'TYREMAN';
        if (['DRIVER', 'PENGEMUDI', 'SOPIR'].includes(upper))
            return 'DRIVER';
        if (['ADMIN', 'STAFF_ADMIN', 'ADMINISTRATOR'].includes(upper))
            return 'ADMIN';
        return 'OPERATOR';
    }
    /**
     * Bulk Create Users
     * Menambahkan banyak user sekaligus dari file CSV / JSON
     */
    async function bulkCreateUsers(req, res) {
        try {
            const usersData = Array.isArray(req.body)
                ? req.body
                : req.body.users;
            if (!usersData || !Array.isArray(usersData) || usersData.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: 'Data user tidak boleh kosong. Harap sertakan array data user.',
                });
            }
            if (usersData.length > 500) {
                return res.status(400).json({
                    success: false,
                    message: 'Maksimal 500 user dalam satu kali impor bulk.',
                });
            }
            // Ambil seluruh NRP yang sudah ada di database untuk validasi cepat
            const existingDbUsers = await prisma.user.findMany({
                select: { nrp: true },
            });
            const existingNrpSet = new Set(existingDbUsers.map((u) => u.nrp));
            const seenInBatch = new Set();
            const createdUsers = [];
            const errors = [];
            // Validasi dan proses tiap baris
            for (let i = 0; i < usersData.length; i++) {
                const item = usersData[i];
                const rowNumber = i + 1;
                const firstName = item.firstName ? String(item.firstName).trim() : '';
                const lastName = item.lastName ? String(item.lastName).trim() : '';
                const nrpRaw = item.nrp;
                const nrp = Number(nrpRaw);
                if (!firstName) {
                    errors.push({
                        row: rowNumber,
                        nrp: nrpRaw,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: 'Nama depan wajib diisi',
                    });
                    continue;
                }
                if (!lastName) {
                    errors.push({
                        row: rowNumber,
                        nrp: nrpRaw,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: 'Nama belakang wajib diisi',
                    });
                    continue;
                }
                if (!nrpRaw || isNaN(nrp)) {
                    errors.push({
                        row: rowNumber,
                        nrp: nrpRaw,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: 'NRP harus berupa angka yang valid',
                    });
                    continue;
                }
                if (seenInBatch.has(nrp)) {
                    errors.push({
                        row: rowNumber,
                        nrp,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: `NRP ${nrp} duplikat di dalam file impor`,
                    });
                    continue;
                }
                if (existingNrpSet.has(nrp)) {
                    errors.push({
                        row: rowNumber,
                        nrp,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: `NRP ${nrp} sudah terdaftar di sistem`,
                    });
                    continue;
                }
                const role = normalizeRole(item.role);
                // Validasi izin role: Role ADMIN tidak boleh membuat SUPERADMIN
                if (req.user && req.user.role === 'ADMIN' && role === 'SUPERADMIN') {
                    errors.push({
                        row: rowNumber,
                        nrp,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: 'Admin tidak diizinkan membuat user dengan role SUPERADMIN',
                    });
                    continue;
                }
                const department = normalizeDepartment(item.department);
                const posision = normalizePosition(item.posision || item.position);
                const rawPassword = item.password && String(item.password).trim() !== ''
                    ? String(item.password).trim()
                    : 'Batara@123';
                try {
                    const hashedPassword = await bcrypt.hash(rawPassword, 10);
                    const newUser = await prisma.user.create({
                        data: {
                            firstName,
                            lastName,
                            nrp,
                            password: hashedPassword,
                            department,
                            posision,
                            phoneNumber: item.phoneNumber ? String(item.phoneNumber).trim() : null,
                            email: item.email ? String(item.email).trim().toLowerCase() : null,
                            role,
                        },
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            nrp: true,
                            department: true,
                            posision: true,
                            phoneNumber: true,
                            email: true,
                            role: true,
                            avatar: true,
                            createdAt: true,
                            updatedAt: true,
                        },
                    });
                    seenInBatch.add(nrp);
                    existingNrpSet.add(nrp);
                    createdUsers.push(newUser);
                }
                catch (dbErr) {
                    errors.push({
                        row: rowNumber,
                        nrp,
                        name: `${firstName} ${lastName}`.trim(),
                        reason: dbErr.message || 'Gagal menyimpan ke database',
                    });
                }
            }
            return res.status(createdUsers.length > 0 ? 201 : 400).json({
                success: createdUsers.length > 0,
                message: `Impor bulk selesai: ${createdUsers.length} user berhasil dibuat, ${errors.length} gagal/dilewati.`,
                summary: {
                    totalProcessed: usersData.length,
                    successCount: createdUsers.length,
                    failedCount: errors.length,
                },
                createdUsers,
                errors,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan pada server saat memproses bulk create',
            });
        }
    }
    /**
     * Upload Avatar Profil User ke Cloudinary (folder: p2h-app/user-avatar)
     */
    async function uploadAvatar(req, res) {
        try {
            const targetUserId = req.params.id ? Number(req.params.id) : req.user?.id;
            if (!targetUserId || isNaN(targetUserId)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID user tidak valid',
                });
            }
            // Validasi izin: User biasa hanya boleh update avatar dirinya sendiri
            if (req.user?.role === 'USER' && req.user.id !== targetUserId) {
                return res.status(403).json({
                    success: false,
                    message: 'Anda tidak memiliki izin untuk mengubah avatar profil pengguna lain',
                });
            }
            const file = req.file;
            if (!file) {
                return res.status(400).json({
                    success: false,
                    message: 'File foto avatar wajib dilampirkan (field: avatar)',
                });
            }
            const user = await prisma.user.findUnique({
                where: { id: targetUserId },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Pengguna tidak ditemukan',
                });
            }
            // Upload ke Cloudinary folder p2h-app/user-avatar
            const uploadRes = await uploadUserAvatar(file.buffer, targetUserId);
            const newAvatarUrl = uploadRes.secure_url;
            // Hapus avatar lama jika ada
            if (user.avatar) {
                deleteUserAvatar(user.avatar).catch((err) => {
                    console.error('Gagal menghapus avatar lama dari Cloudinary:', err);
                });
            }
            // Simpan URL avatar baru ke database PostgreSQL
            const updatedUser = await prisma.user.update({
                where: { id: targetUserId },
                data: { avatar: newAvatarUrl },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                    phoneNumber: true,
                    email: true,
                    role: true,
                    avatar: true,
                    updatedAt: true,
                },
            });
            return res.json({
                success: true,
                message: 'Foto avatar profil berhasil diperbarui',
                avatarUrl: newAvatarUrl,
                data: updatedUser,
            });
        }
        catch (error) {
            console.error('Error saat upload avatar ke Cloudinary:', error);
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan saat mengunggah foto ke Cloudinary',
            });
        }
    }
    /**
     * Hapus Avatar Profil User
     */
    async function deleteAvatar(req, res) {
        try {
            const targetUserId = req.params.id ? Number(req.params.id) : req.user?.id;
            if (!targetUserId || isNaN(targetUserId)) {
                return res.status(400).json({
                    success: false,
                    message: 'ID user tidak valid',
                });
            }
            if (req.user?.role === 'USER' && req.user.id !== targetUserId) {
                return res.status(403).json({
                    success: false,
                    message: 'Anda tidak memiliki izin untuk menghapus avatar pengguna lain',
                });
            }
            const user = await prisma.user.findUnique({
                where: { id: targetUserId },
            });
            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Pengguna tidak ditemukan',
                });
            }
            if (user.avatar) {
                await deleteUserAvatar(user.avatar);
            }
            const updatedUser = await prisma.user.update({
                where: { id: targetUserId },
                data: { avatar: null },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                    phoneNumber: true,
                    email: true,
                    role: true,
                    avatar: true,
                    updatedAt: true,
                },
            });
            return res.json({
                success: true,
                message: 'Foto avatar berhasil dihapus',
                data: updatedUser,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message || 'Terjadi kesalahan saat menghapus foto avatar',
            });
        }
    }
    return {
        getAllUsers,
        getUserById,
        createUser,
        bulkCreateUsers,
        updateUser,
        uploadAvatar,
        deleteAvatar,
        resetUserPassword,
        deleteUser,
    };
}
//# sourceMappingURL=user.controller.js.map