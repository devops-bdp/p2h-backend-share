import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js';
export default function UserController(): {
    getAllUsers: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getUserById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    createUser: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    bulkCreateUsers: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateUser: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    resetUserPassword: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteUser: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=user.controller.d.ts.map