import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js';
export declare const MASTER_P2H_TOKEN: string;
export declare const CATEGORY_P2H_TOKENS: {
    [category: string]: string;
};
/**
 * Helper verifikasi Token Akses P2H Publik per Kategori atau Master
 */
export declare function checkP2HToken(req: Request, targetCategory?: string): {
    valid: boolean;
    message?: string;
};
/**
 * Controller: Opsi Publik P2H (Daftar Unit & Driver) via Token
 */
export declare function getPublicP2HOptions(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Buat Form P2H Publik (Tanpa Login, Menggunakan Token Kategori / Master)
 */
export declare function createPublicP2HInspection(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Ambil semua data P2H Checklist (Protected)
 */
export declare function getAllP2HInspections(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Ambil detail 1 data P2H (Protected)
 */
export declare function getP2HInspectionById(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Buat Record P2H Baru (Protected)
 */
export declare function createP2HInspection(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Update Record P2H (Protected)
 */
export declare function updateP2HInspection(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Hapus Record P2H (Admin / Superadmin only)
 */
export declare function deleteP2HInspection(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Ringkasan Statistik P2H (Protected)
 */
export declare function getP2HStats(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=p2h.controller.d.ts.map