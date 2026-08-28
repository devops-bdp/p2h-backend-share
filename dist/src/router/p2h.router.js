import { Router } from 'express';
import { getAllP2HInspections, getP2HInspectionById, createP2HInspection, updateP2HInspection, deleteP2HInspection, getP2HStats, getPublicP2HOptions, createPublicP2HInspection, } from '../controller/p2h.controller.js';
import { authenticateToken, authorizeRoles, } from '../middleware/auth.middleware.js';
const router = Router();
// ================= PUBLIC TOKEN-GATED ROUTES (#BATARAMPH2026) =================
// Rute publik untuk pengisian formulir P2H oleh driver/operator di site tanpa akun login
router.get('/public/options', getPublicP2HOptions);
router.post('/public/submit', createPublicP2HInspection);
// ================= PROTECTED ROUTES (JWT REQUIRED) =================
router.use(authenticateToken);
// Ringkasan statistik P2H
router.get('/stats/summary', getP2HStats);
// List semua inspeksi P2H
router.get('/', getAllP2HInspections);
// Detail 1 inspeksi P2H
router.get('/:id', getP2HInspectionById);
// Buat inspeksi P2H baru (Operator, Driver, Admin, Superadmin)
router.post('/', createP2HInspection);
// Update inspeksi P2H (Supervisor notes, kesimpulan)
router.put('/:id', updateP2HInspection);
// Hapus inspeksi P2H (Hanya ADMIN / SUPERADMIN)
router.delete('/:id', authorizeRoles('ADMIN', 'SUPERADMIN'), deleteP2HInspection);
export default router;
//# sourceMappingURL=p2h.router.js.map