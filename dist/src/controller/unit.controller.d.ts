import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js';
export default function UnitController(): {
    createUnit: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllUnits: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    getUnitById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateUnit: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteUnit: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=unit.controller.d.ts.map