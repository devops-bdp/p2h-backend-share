import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js';
export default function AuthController(): {
    login: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    register: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getMe: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getDrivers: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=auth.controller.d.ts.map