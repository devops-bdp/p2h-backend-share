import { Router } from 'express';
import AuthController from '../controller/auth.controller.js';
import { authenticateToken, authorizeRoles, } from '../middleware/auth.middleware.js';
const authRouter = Router();
const { login, register, getMe } = AuthController();
// Public route: Login
authRouter.post('/login', login);
// Protected route: Register user baru (Hanya role ADMIN atau SUPERADMIN)
authRouter.post('/register', authenticateToken, authorizeRoles('ADMIN', 'SUPERADMIN'), register);
// Protected route: Profile user saat ini
authRouter.get('/me', authenticateToken, getMe);
export default authRouter;
//# sourceMappingURL=auth.router.js.map