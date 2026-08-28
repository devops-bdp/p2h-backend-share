import { prisma } from '../config/prisma.js';
export const MASTER_P2H_TOKEN = process.env.P2H_DEFAULT_TOKEN || '#BATARAMPH2026';
export const CATEGORY_P2H_TOKENS = {
    LIGHT_VECHICLE: process.env.P2H_TOKEN_LV || '#BATARALV2026',
    TELEHENDLER: process.env.P2H_TOKEN_TH || '#BATARATH2026',
    STORING_TRUCK: process.env.P2H_TOKEN_ST || '#BATARAST2026',
    FUEL_TRUCK: process.env.P2H_TOKEN_FT || '#BATARAFT2026',
    GENSET: process.env.P2H_TOKEN_GS || '#BATARAGS2026',
    COMPRESSOR: process.env.P2H_TOKEN_CP || '#BATARACP2026',
};
/**
 * Generate nomor unik P2H (e.g. P2H-LV-20260826-0001)
 */
function generateP2HNo(category) {
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    let prefix = 'UNIT';
    if (category === 'LIGHT_VECHICLE')
        prefix = 'LV';
    else if (category === 'TELEHENDLER')
        prefix = 'TH';
    else if (category === 'STORING_TRUCK')
        prefix = 'ST';
    else if (category === 'FUEL_TRUCK')
        prefix = 'FT';
    else if (category === 'GENSET')
        prefix = 'GS';
    else if (category === 'COMPRESSOR')
        prefix = 'CP';
    else
        prefix = category.substring(0, 3).toUpperCase();
    return `P2H-${prefix}-${dateStr}-${randomSuffix}`;
}
/**
 * Helper verifikasi Token Akses P2H Publik per Kategori atau Master
 */
export function checkP2HToken(req, targetCategory) {
    const token = req.headers['x-p2h-token'] ||
        req.headers['authorization']?.replace(/^Bearer\s+/i, '') ||
        req.query.token ||
        req.body.token;
    if (!token) {
        return { valid: false, message: 'Token akses P2H publik belum dimasukkan.' };
    }
    const tokenStr = String(token).trim();
    // 1. Master Token (#BATARAMPH2026) selalu diizinkan untuk semua kategori
    if (tokenStr === MASTER_P2H_TOKEN) {
        return { valid: true };
    }
    // 2. Jika kategori spesifik diminta
    if (targetCategory && CATEGORY_P2H_TOKENS[targetCategory]) {
        const expectedToken = CATEGORY_P2H_TOKENS[targetCategory];
        if (tokenStr === expectedToken) {
            return { valid: true };
        }
        // Periksa jika user mengirim token kategori lain
        const matchingCat = Object.keys(CATEGORY_P2H_TOKENS).find((cat) => CATEGORY_P2H_TOKENS[cat] === tokenStr);
        if (matchingCat) {
            return {
                valid: false,
                message: `Token ${tokenStr} hanya berlaku untuk kategori ${matchingCat}. Gunakan token khusus ${targetCategory} (${expectedToken}) atau token Master.`,
            };
        }
        return {
            valid: false,
            message: `Token akses P2H tidak valid untuk kategori ${targetCategory}. Silakan gunakan token ${expectedToken}.`,
        };
    }
    // 3. Jika tanpa kategori spesifik, valid jika cocok dengan salah satu token kategori resmi
    const isValidCategoryToken = Object.values(CATEGORY_P2H_TOKENS).includes(tokenStr);
    if (isValidCategoryToken) {
        return { valid: true };
    }
    return { valid: false, message: 'Token akses P2H publik tidak valid.' };
}
/**
 * Controller: Opsi Publik P2H (Daftar Unit & Driver) via Token
 */
export async function getPublicP2HOptions(req, res) {
    try {
        const categoryQuery = req.query.category;
        const tokenCheck = checkP2HToken(req, categoryQuery);
        if (!tokenCheck.valid) {
            return res.status(401).json({
                success: false,
                message: tokenCheck.message || 'Token akses P2H tidak valid atau belum dimasukkan.',
            });
        }
        const [units, drivers] = await Promise.all([
            prisma.unit.findMany({
                where: { status: 'ACTIVE' },
                orderBy: { unitNo: 'asc' },
                select: {
                    id: true,
                    unitNo: true,
                    category: true,
                    brand: true,
                    description: true,
                    ownerName: true,
                    km: true,
                    hourMeter: true,
                    status: true,
                },
            }),
            prisma.user.findMany({
                where: {
                    NOT: {
                        posision: 'SITE_MANAGER',
                    },
                },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    nrp: true,
                    department: true,
                    posision: true,
                },
                orderBy: { firstName: 'asc' },
            }),
        ]);
        return res.json({
            success: true,
            data: {
                units,
                drivers,
            },
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Gagal mengambil data pilihan P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Buat Form P2H Publik (Tanpa Login, Menggunakan Token Kategori / Master)
 */
export async function createPublicP2HInspection(req, res) {
    try {
        const { unitId, driverId, driverName, driverNrp, nopol, section, workSystem, shift = 'PAGI', km, hourMeter, damageChecks, tyreCheck, safetyTools, fitToWork, warningDetails, driverValidation = true, unitStatus, driverStatus, supervisorNotes, } = req.body;
        if (!unitId) {
            return res.status(400).json({
                success: false,
                message: 'Pilih unit armada yang diinspeksi (unitId wajib).',
            });
        }
        if (!unitStatus || !driverStatus) {
            return res.status(400).json({
                success: false,
                message: 'Kesimpulan Status Unit dan Status Driver wajib diisi.',
            });
        }
        // Pastikan Unit Ada di Database
        const existingUnit = await prisma.unit.findUnique({
            where: { id: Number(unitId) },
        });
        if (!existingUnit) {
            return res.status(404).json({
                success: false,
                message: 'Unit armada tidak ditemukan di database.',
            });
        }
        // Verifikasi Token Akses Publik Khusus Kategori Unit atau Master Token
        const tokenCheck = checkP2HToken(req, existingUnit.category);
        if (!tokenCheck.valid) {
            return res.status(401).json({
                success: false,
                message: tokenCheck.message ||
                    `Token akses P2H tidak valid untuk kategori ${existingUnit.category}.`,
            });
        }
        // Validasi Angka KM tidak boleh lebih rendah dari KM unit saat ini
        if (km !== undefined && km !== null && km !== "" && existingUnit.km != null && existingUnit.km > 0) {
            if (Number(km) < existingUnit.km) {
                return res.status(400).json({
                    success: false,
                    message: `Angka KM (${km}) tidak boleh lebih rendah dari KM unit saat ini (${existingUnit.km} KM).`,
                });
            }
        }
        // Validasi Angka HM tidak boleh lebih rendah dari HM unit saat ini
        if (hourMeter !== undefined && hourMeter !== null && hourMeter !== "" && existingUnit.hourMeter != null && existingUnit.hourMeter > 0) {
            if (Number(hourMeter) < existingUnit.hourMeter) {
                return res.status(400).json({
                    success: false,
                    message: `Angka Hour Meter / HM (${hourMeter}) tidak boleh lebih rendah dari HM unit saat ini (${existingUnit.hourMeter} HM).`,
                });
            }
        }
        // Cari User pengait inspeksi (dari driverId atau driverNrp atau user pertama)
        let matchedUserId = null;
        if (driverId) {
            const u = await prisma.user.findUnique({ where: { id: Number(driverId) } });
            if (u)
                matchedUserId = u.id;
        }
        if (!matchedUserId && driverNrp) {
            const u = await prisma.user.findFirst({ where: { nrp: Number(driverNrp) } });
            if (u)
                matchedUserId = u.id;
        }
        if (!matchedUserId) {
            const firstUser = await prisma.user.findFirst();
            matchedUserId = firstUser ? firstUser.id : 1;
        }
        const p2hNo = generateP2HNo(existingUnit.category);
        const newInspection = await prisma.p2HInspection.create({
            data: {
                p2hNo,
                unitId: Number(unitId),
                userId: matchedUserId,
                driverName: driverName || 'Driver',
                driverNrp: driverNrp ? Number(driverNrp) : undefined,
                nopol: nopol || null,
                section: section || 'PLANT',
                workSystem: workSystem || ['Tambang'],
                shift,
                km: Number(km || existingUnit.km || 0),
                hourMeter: hourMeter !== undefined && hourMeter !== null && hourMeter !== "" ? Number(hourMeter) : existingUnit.hourMeter,
                damageChecks: damageChecks || [],
                tyreCheck: tyreCheck || {
                    condition: 'BAIK',
                    pressure: 'BAIK',
                    problemPositions: [],
                    notes: '',
                },
                safetyTools: safetyTools || [],
                fitToWork: fitToWork || [],
                warningDetails: warningDetails || null,
                driverValidation: Boolean(driverValidation),
                unitStatus,
                driverStatus,
                supervisorNotes: supervisorNotes || null,
            },
            include: {
                unit: true,
            },
        });
        // Update data KM, HM, dan status operasional Unit
        const updatedKm = (km !== undefined && km !== null && km !== "") ? Math.max(Number(km), existingUnit.km || 0) : existingUnit.km;
        const updatedHm = (hourMeter !== undefined && hourMeter !== null && hourMeter !== "") ? Math.max(Number(hourMeter), existingUnit.hourMeter || 0) : existingUnit.hourMeter;
        await prisma.unit.update({
            where: { id: Number(unitId) },
            data: {
                km: updatedKm,
                hourMeter: updatedHm,
                status: (unitStatus === 'TIDAK_LAYAK' || unitStatus === 'TIDAK_SIAP') ? 'INACTIVE' : 'ACTIVE',
            },
        });
        return res.status(201).json({
            success: true,
            message: `Pemeriksaan P2H ${p2hNo} berhasil dikirim dan tersimpan di sistem.`,
            data: newInspection,
        });
    }
    catch (error) {
        console.error('Error in createPublicP2HInspection:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal mengirim form P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Ambil semua data P2H Checklist (Protected)
 */
export async function getAllP2HInspections(req, res) {
    try {
        const { unitId, unitNo, category, shift, section, unitStatus, driverStatus, startDate, endDate, search, page = '1', limit = '20', } = req.query;
        const pageNumber = Math.max(1, parseInt(page, 10) || 1);
        const limitNumber = Math.max(1, parseInt(limit, 10) || 20);
        const skip = (pageNumber - 1) * limitNumber;
        const where = {};
        if (unitId) {
            where.unitId = Number(unitId);
        }
        if (unitNo) {
            where.unit = {
                unitNo: { contains: String(unitNo), mode: 'insensitive' },
            };
        }
        if (category) {
            where.unit = {
                ...where.unit,
                category: String(category),
            };
        }
        if (shift) {
            where.shift = String(shift);
        }
        if (section) {
            where.section = String(section);
        }
        if (unitStatus) {
            where.unitStatus = String(unitStatus);
        }
        if (driverStatus) {
            where.driverStatus = String(driverStatus);
        }
        if (startDate || endDate) {
            where.date = {};
            if (startDate)
                where.date.gte = new Date(String(startDate));
            if (endDate)
                where.date.lte = new Date(String(endDate));
        }
        if (search) {
            const searchStr = String(search);
            where.OR = [
                { p2hNo: { contains: searchStr, mode: 'insensitive' } },
                { driverName: { contains: searchStr, mode: 'insensitive' } },
                { nopol: { contains: searchStr, mode: 'insensitive' } },
                { section: { contains: searchStr, mode: 'insensitive' } },
                { unit: { unitNo: { contains: searchStr, mode: 'insensitive' } } },
                { unit: { brand: { contains: searchStr, mode: 'insensitive' } } },
                { user: { firstName: { contains: searchStr, mode: 'insensitive' } } },
                { user: { lastName: { contains: searchStr, mode: 'insensitive' } } },
            ];
        }
        const [total, data] = await Promise.all([
            prisma.p2HInspection.count({ where }),
            prisma.p2HInspection.findMany({
                where,
                include: {
                    unit: {
                        select: {
                            id: true,
                            unitNo: true,
                            category: true,
                            brand: true,
                            description: true,
                            ownerName: true,
                            status: true,
                            km: true,
                            hourMeter: true,
                        },
                    },
                    user: {
                        select: {
                            id: true,
                            firstName: true,
                            lastName: true,
                            nrp: true,
                            role: true,
                            department: true,
                            posision: true,
                        },
                    },
                },
                orderBy: { createdAt: 'desc' },
                skip,
                take: limitNumber,
            }),
        ]);
        return res.json({
            success: true,
            data,
            pagination: {
                total,
                page: pageNumber,
                limit: limitNumber,
                totalPages: Math.ceil(total / limitNumber),
            },
        });
    }
    catch (error) {
        console.error('Error fetching P2H inspections:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal mengambil data inspeksi P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Ambil detail 1 data P2H (Protected)
 */
export async function getP2HInspectionById(req, res) {
    try {
        const { id } = req.params;
        const inspection = await prisma.p2HInspection.findUnique({
            where: { id: Number(id) },
            include: {
                unit: true,
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        nrp: true,
                        role: true,
                        department: true,
                        posision: true,
                    },
                },
            },
        });
        if (!inspection) {
            return res.status(404).json({
                success: false,
                message: 'Data inspeksi P2H tidak ditemukan',
            });
        }
        return res.json({
            success: true,
            data: inspection,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Gagal mengambil data inspeksi P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Buat Record P2H Baru (Protected)
 */
export async function createP2HInspection(req, res) {
    try {
        const userId = req.user?.id;
        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'Sesi pengguna tidak valid. Silakan login kembali.',
            });
        }
        const { unitId, driverName, driverNrp, nopol, section, workSystem, shift = 'PAGI', km, hourMeter, damageChecks, tyreCheck, safetyTools, fitToWork, warningDetails, driverValidation = true, unitStatus, driverStatus, supervisorNotes, } = req.body;
        if (!unitId) {
            return res.status(400).json({
                success: false,
                message: 'Pilih unit armada yang akan diinspeksi (unitId wajib)',
            });
        }
        if (!unitStatus || !driverStatus) {
            return res.status(400).json({
                success: false,
                message: 'Kesimpulan Status Unit dan Status Driver wajib diisi (LAYAK / TIDAK_LAYAK / SIAP / TIDAK_SIAP)',
            });
        }
        const existingUnit = await prisma.unit.findUnique({
            where: { id: Number(unitId) },
        });
        if (!existingUnit) {
            return res.status(404).json({
                success: false,
                message: 'Unit armada tidak ditemukan di sistem database',
            });
        }
        // Validasi Angka KM tidak boleh lebih rendah dari KM unit saat ini
        if (km !== undefined && km !== null && km !== "" && existingUnit.km != null && existingUnit.km > 0) {
            if (Number(km) < existingUnit.km) {
                return res.status(400).json({
                    success: false,
                    message: `Angka KM (${km}) tidak boleh lebih rendah dari KM unit saat ini (${existingUnit.km} KM).`,
                });
            }
        }
        // Validasi Angka HM tidak boleh lebih rendah dari HM unit saat ini
        if (hourMeter !== undefined && hourMeter !== null && hourMeter !== "" && existingUnit.hourMeter != null && existingUnit.hourMeter > 0) {
            if (Number(hourMeter) < existingUnit.hourMeter) {
                return res.status(400).json({
                    success: false,
                    message: `Angka Hour Meter / HM (${hourMeter}) tidak boleh lebih rendah dari HM unit saat ini (${existingUnit.hourMeter} HM).`,
                });
            }
        }
        const p2hNo = generateP2HNo(existingUnit.category);
        const newInspection = await prisma.p2HInspection.create({
            data: {
                p2hNo,
                unitId: Number(unitId),
                userId: Number(userId),
                driverName: driverName || `${req.user?.nrp || ''}`,
                driverNrp: driverNrp ? Number(driverNrp) : req.user?.nrp,
                nopol: nopol || null,
                section: section || req.user?.department || 'PLANT',
                workSystem: workSystem || ['Tambang'],
                shift,
                km: Number(km || existingUnit.km || 0),
                hourMeter: hourMeter !== undefined && hourMeter !== null && hourMeter !== "" ? Number(hourMeter) : existingUnit.hourMeter,
                damageChecks: damageChecks || [],
                tyreCheck: tyreCheck || {
                    condition: 'BAIK',
                    pressure: 'BAIK',
                    problemPositions: [],
                    notes: '',
                },
                safetyTools: safetyTools || [],
                fitToWork: fitToWork || [],
                warningDetails: warningDetails || null,
                driverValidation: Boolean(driverValidation),
                unitStatus,
                driverStatus,
                supervisorNotes: supervisorNotes || null,
            },
            include: {
                unit: true,
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        nrp: true,
                        role: true,
                        department: true,
                        posision: true,
                    },
                },
            },
        });
        // Update data KM, HM, dan status operasional Unit
        const updatedKm = (km !== undefined && km !== null && km !== "") ? Math.max(Number(km), existingUnit.km || 0) : existingUnit.km;
        const updatedHm = (hourMeter !== undefined && hourMeter !== null && hourMeter !== "") ? Math.max(Number(hourMeter), existingUnit.hourMeter || 0) : existingUnit.hourMeter;
        await prisma.unit.update({
            where: { id: Number(unitId) },
            data: {
                km: updatedKm,
                hourMeter: updatedHm,
                status: (unitStatus === 'TIDAK_LAYAK' || unitStatus === 'TIDAK_SIAP') ? 'INACTIVE' : 'ACTIVE',
            },
        });
        return res.status(201).json({
            success: true,
            message: `Pemeriksaan P2H ${p2hNo} berhasil disimpan.`,
            data: newInspection,
        });
    }
    catch (error) {
        console.error('Error creating P2H inspection:', error);
        return res.status(500).json({
            success: false,
            message: 'Gagal membuat pemeriksaan P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Update Record P2H (Protected)
 */
export async function updateP2HInspection(req, res) {
    try {
        const { id } = req.params;
        const { driverName, driverNrp, nopol, section, workSystem, damageChecks, tyreCheck, safetyTools, fitToWork, warningDetails, driverValidation, unitStatus, driverStatus, supervisorNotes, km, hourMeter, shift, } = req.body;
        const existing = await prisma.p2HInspection.findUnique({
            where: { id: Number(id) },
        });
        if (!existing) {
            return res.status(404).json({
                success: false,
                message: 'Data inspeksi P2H tidak ditemukan',
            });
        }
        const updated = await prisma.p2HInspection.update({
            where: { id: Number(id) },
            data: {
                ...(driverName !== undefined && { driverName }),
                ...(driverNrp !== undefined && { driverNrp: Number(driverNrp) }),
                ...(nopol !== undefined && { nopol }),
                ...(section !== undefined && { section }),
                ...(workSystem !== undefined && { workSystem }),
                ...(damageChecks !== undefined && { damageChecks }),
                ...(tyreCheck !== undefined && { tyreCheck }),
                ...(safetyTools !== undefined && { safetyTools }),
                ...(fitToWork !== undefined && { fitToWork }),
                ...(warningDetails !== undefined && { warningDetails }),
                ...(driverValidation !== undefined && { driverValidation: Boolean(driverValidation) }),
                ...(unitStatus !== undefined && { unitStatus }),
                ...(driverStatus !== undefined && { driverStatus }),
                ...(supervisorNotes !== undefined && { supervisorNotes }),
                ...(km !== undefined && { km: Number(km) }),
                ...(hourMeter !== undefined && { hourMeter: Number(hourMeter) }),
                ...(shift !== undefined && { shift }),
            },
            include: {
                unit: true,
                user: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        nrp: true,
                        role: true,
                        department: true,
                        posision: true,
                    },
                },
            },
        });
        return res.json({
            success: true,
            message: 'Data P2H berhasil diperbarui',
            data: updated,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Gagal memperbarui data P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Hapus Record P2H (Admin / Superadmin only)
 */
export async function deleteP2HInspection(req, res) {
    try {
        const { id } = req.params;
        const existing = await prisma.p2HInspection.findUnique({
            where: { id: Number(id) },
        });
        if (!existing) {
            return res.status(404).json({
                success: false,
                message: 'Data inspeksi P2H tidak ditemukan',
            });
        }
        await prisma.p2HInspection.delete({
            where: { id: Number(id) },
        });
        return res.json({
            success: true,
            message: `Data inspeksi P2H ${existing.p2hNo} berhasil dihapus`,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Gagal menghapus data P2H: ' + error.message,
        });
    }
}
/**
 * Controller: Ringkasan Statistik P2H (Protected)
 */
export async function getP2HStats(req, res) {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const [totalAll, totalToday, readyCount, notReadyCount] = await Promise.all([
            prisma.p2HInspection.count(),
            prisma.p2HInspection.count({
                where: {
                    date: { gte: today },
                },
            }),
            prisma.p2HInspection.count({
                where: {
                    unitStatus: { in: ['LAYAK', 'SIAP'] },
                    driverStatus: { in: ['LAYAK', 'SIAP'] },
                },
            }),
            prisma.p2HInspection.count({
                where: {
                    OR: [
                        { unitStatus: { in: ['TIDAK_LAYAK', 'TIDAK_SIAP'] } },
                        { driverStatus: { in: ['TIDAK_LAYAK', 'TIDAK_SIAP'] } },
                    ],
                },
            }),
        ]);
        return res.json({
            success: true,
            data: {
                totalAll,
                totalToday,
                readyCount,
                notReadyCount,
            },
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Gagal mengambil statistik P2H: ' + error.message,
        });
    }
}
//# sourceMappingURL=p2h.controller.js.map