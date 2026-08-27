import { Request, Response, NextFunction } from 'express';
export interface UserPayload {
    id: number;
    nrp: number;
    role: string;
    department?: string;
}
export interface AuthRequest extends Request {
    user?: UserPayload;
}
export declare function authenticateToken(req: AuthRequest, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
export declare function authorizeRoles(...allowedRoles: string[]): (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
export declare function authorizeDepartments(...allowedDepartments: string[]): (req: AuthRequest, res: Response, next: NextFunction) => Promise<void | Response<any, Record<string, any>>>;
/**
 * Middleware khusus pengelolaan Unit:
 * Hanya role ADMIN atau SUPERADMIN DENGAN departemen PLANT atau OPERATIONS
 */
export declare function authorizeUnitManagement(req: AuthRequest, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
//# sourceMappingURL=auth.middleware.d.ts.map