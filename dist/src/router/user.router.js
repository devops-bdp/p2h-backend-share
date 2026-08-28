import { Router } from 'express';
import UserController from '../controller/user.controller.js';
import { authenticateToken, authorizeRoles, } from '../middleware/auth.middleware.js';
const userRouter = Router();
const { getAllUsers, getUserById, createUser, bulkCreateUsers, updateUser, resetUserPassword, deleteUser, } = UserController();
// Mengambil list user & detail user (Hanya role SUPERADMIN & ADMIN)
userRouter.get('/', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), getAllUsers);
// Bulk Create Users (Harus sebelum /:id agar tidak tertangkap sebagai param)
userRouter.post('/bulk', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), bulkCreateUsers);
userRouter.get('/:id', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), getUserById);
// Menambahkan single user baru (Hanya role SUPERADMIN & ADMIN)
userRouter.post('/', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), createUser);
// Memperbarui data user (Hanya role SUPERADMIN & ADMIN)
userRouter.put('/:id', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), updateUser);
// Reset password user (Hanya role SUPERADMIN & ADMIN)
userRouter.patch('/:id/reset-password', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), resetUserPassword);
// Menghapus user (Hanya role SUPERADMIN & ADMIN)
userRouter.delete('/:id', authenticateToken, authorizeRoles('SUPERADMIN', 'ADMIN'), deleteUser);
export default userRouter;
//# sourceMappingURL=user.router.js.map