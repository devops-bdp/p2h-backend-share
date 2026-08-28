import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js';
export interface DefectItem {
    id: string;
    inspectionId: number;
    p2hNo: string;
    date: Date;
    shift: string;
    section: string;
    driverName: string;
    driverNrp: number | null;
    unitId: number;
    unitNo: string;
    category: string;
    brand: string;
    description: string;
    km: number;
    hourMeter: number | null;
    unitStatus: string;
    component: string;
    defectType: 'DAMAGE_CHECK' | 'TYRE_ISSUE' | 'SAFETY_TOOL_MISSING' | 'OPERATIONAL_WARNING' | 'BREAKDOWN_REPORT';
    details: string;
    severity: 'CRITICAL' | 'MAJOR' | 'MINOR';
    status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
    mechanicName?: string | null;
    repairNotes?: string | null;
    resolvedAt?: Date | null;
    createdAt: Date;
    updatedAt: Date;
}
/**
 * Helper: Extract all defect items from a P2H Inspection record
 */
export declare function extractDefectsFromInspection(inspection: any): DefectItem[];
/**
 * Controller: Get All Defects with filters
 */
export declare function getAllDefects(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Get Defect KPI Statistics
 */
export declare function getDefectStats(_req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Update Defect Status & Mechanic Work Order
 */
export declare function updateDefectStatus(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
/**
 * Controller: Buat Laporan Breakdown / Defect Lapangan Cepat
 */
export declare function createDirectBreakdown(req: AuthRequest, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=defect.controller.d.ts.map