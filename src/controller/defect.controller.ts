import { Response } from 'express';
import { prisma } from '../config/prisma.js';
import { AuthRequest } from '../middleware/auth.middleware.js';

export interface DefectItem {
  id: string; // e.g. "DEF-10-1" or "DEF-10-TYRE" or "DEF-10-WARN"
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
  
  // Defect specific info
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
export function extractDefectsFromInspection(inspection: any): DefectItem[] {
  const defects: DefectItem[] = [];
  const unit = inspection.unit || {};
  const isUnitCritical = inspection.unitStatus === 'TIDAK_LAYAK' || inspection.unitStatus === 'TIDAK_SIAP';

  // 1. Check Damage Checks
  if (Array.isArray(inspection.damageChecks)) {
    inspection.damageChecks.forEach((chk: any, idx: number) => {
      const cond = String(chk.condition || '').toUpperCase();
      const isDefect =
        cond === 'MAJOR' ||
        cond === 'RUSAK' ||
        cond === 'TIDAK BAIK' ||
        cond === 'TIDAK_BAIK' ||
        cond === 'TIDAK NORMAL' ||
        cond === 'TIDAK_NORMAL' ||
        cond === 'PERLU TINDAKAN' ||
        cond === 'PERLU_TINDAKAN';

      if (isDefect) {
        let severity: 'CRITICAL' | 'MAJOR' | 'MINOR' = 'MAJOR';
        if (
          isUnitCritical ||
          cond === 'MAJOR' ||
          chk.item?.toLowerCase().includes('rem') ||
          chk.item?.toLowerCase().includes('steering') ||
          chk.item?.toLowerCase().includes('kemudi') ||
          chk.item?.toLowerCase().includes('oli') ||
          chk.item?.toLowerCase().includes('tangki') ||
          chk.item?.toLowerCase().includes('hydraulic') ||
          chk.item?.toLowerCase().includes('boom')
        ) {
          severity = 'CRITICAL';
        } else if (cond === 'PERLU TINDAKAN' || cond === 'PERLU_TINDAKAN') {
          severity = 'MINOR';
        }

        // Determine resolution status from warningDetails or notes
        let status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' = 'OPEN';
        let mechanicName: string | null = null;
        let repairNotes: string | null = null;

        if (chk.status && ['OPEN', 'IN_PROGRESS', 'RESOLVED', 'CLOSED'].includes(chk.status)) {
          status = chk.status;
          mechanicName = chk.mechanicName || null;
          repairNotes = chk.repairNotes || null;
        } else if (inspection.warningDetails?.status) {
          status = inspection.warningDetails.status;
          mechanicName = inspection.warningDetails.mechanicName || null;
          repairNotes = inspection.warningDetails.repairNotes || null;
        }

        defects.push({
          id: `DEF-${inspection.id}-DC-${idx + 1}`,
          inspectionId: inspection.id,
          p2hNo: inspection.p2hNo,
          date: inspection.date,
          shift: inspection.shift,
          section: inspection.section || 'PLANT',
          driverName: inspection.driverName || 'Operator',
          driverNrp: inspection.driverNrp || null,
          unitId: unit.id || inspection.unitId,
          unitNo: unit.unitNo || '-',
          category: unit.category || 'LIGHT_VECHICLE',
          brand: unit.brand || '-',
          description: unit.description || '',
          km: inspection.km || 0,
          hourMeter: inspection.hourMeter || null,
          unitStatus: inspection.unitStatus,
          component: chk.item || `Item Pemeriksaan #${idx + 1}`,
          defectType: 'DAMAGE_CHECK',
          details: chk.note ? `${cond}: ${chk.note}` : `Kondisi: ${chk.condition || 'Rusak'}`,
          severity,
          status,
          mechanicName,
          repairNotes,
          createdAt: inspection.createdAt,
          updatedAt: inspection.updatedAt,
        });
      }
    });
  }

  // 2. Check Tyre Check
  if (inspection.tyreCheck && typeof inspection.tyreCheck === 'object') {
    const tc = inspection.tyreCheck;
    const isTyreDefect =
      tc.condition === 'BOTAK' ||
      tc.condition === 'RUSAK' ||
      tc.pressure === 'KURANG' ||
      (Array.isArray(tc.problemPositions) && tc.problemPositions.length > 0);

    if (isTyreDefect) {
      const positions = Array.isArray(tc.problemPositions) && tc.problemPositions.length > 0
        ? ` (Posisi: ${tc.problemPositions.join(', ')})`
        : '';
      const tyreDesc = `Kondisi Ban: ${tc.condition || 'Bermasalah'}, Tekanan: ${tc.pressure || 'Bermasalah'}${positions}${tc.notes ? `. Catatan: ${tc.notes}` : ''}`;

      defects.push({
        id: `DEF-${inspection.id}-TYRE`,
        inspectionId: inspection.id,
        p2hNo: inspection.p2hNo,
        date: inspection.date,
        shift: inspection.shift,
        section: inspection.section || 'PLANT',
        driverName: inspection.driverName || 'Operator',
        driverNrp: inspection.driverNrp || null,
        unitId: unit.id || inspection.unitId,
        unitNo: unit.unitNo || '-',
        category: unit.category || 'LIGHT_VECHICLE',
        brand: unit.brand || '-',
        description: unit.description || '',
        km: inspection.km || 0,
        hourMeter: inspection.hourMeter || null,
        unitStatus: inspection.unitStatus,
        component: 'Sistem Roda & Ban (Tyre)',
        defectType: 'TYRE_ISSUE',
        details: tyreDesc,
        severity: tc.condition === 'BOTAK' || isUnitCritical ? 'CRITICAL' : 'MAJOR',
        status: inspection.warningDetails?.tyreStatus || 'OPEN',
        mechanicName: inspection.warningDetails?.mechanicName || null,
        repairNotes: inspection.warningDetails?.tyreRepairNotes || null,
        createdAt: inspection.createdAt,
        updatedAt: inspection.updatedAt,
      });
    }
  }

  // 3. Check Safety Tools Missing
  if (Array.isArray(inspection.safetyTools)) {
    const missingTools = inspection.safetyTools.filter((t: any) => t.status === 'TIDAK_ADA' || t.status === 'TIDAK');
    if (missingTools.length > 0) {
      const toolNames = missingTools.map((t: any) => t.item).join(', ');
      defects.push({
        id: `DEF-${inspection.id}-SAFETY`,
        inspectionId: inspection.id,
        p2hNo: inspection.p2hNo,
        date: inspection.date,
        shift: inspection.shift,
        section: inspection.section || 'HSE',
        driverName: inspection.driverName || 'Operator',
        driverNrp: inspection.driverNrp || null,
        unitId: unit.id || inspection.unitId,
        unitNo: unit.unitNo || '-',
        category: unit.category || 'LIGHT_VECHICLE',
        brand: unit.brand || '-',
        description: unit.description || '',
        km: inspection.km || 0,
        hourMeter: inspection.hourMeter || null,
        unitStatus: inspection.unitStatus,
        component: 'Perlengkapan K3 / Safety Tools Tidak Lengkap',
        defectType: 'SAFETY_TOOL_MISSING',
        details: `Perlengkapan tidak ada / belum tersedia: ${toolNames}`,
        severity: toolNames.includes('APAR') || isUnitCritical ? 'CRITICAL' : 'MINOR',
        status: 'OPEN',
        createdAt: inspection.createdAt,
        updatedAt: inspection.updatedAt,
      });
    }
  }

  // 4. Check Operational Warnings / Direct Breakdown
  if (inspection.warningDetails && typeof inspection.warningDetails === 'object') {
    const wd = inspection.warningDetails;
    if (wd.problemType || wd.additionalNotes || wd.actionTaken) {
      defects.push({
        id: `DEF-${inspection.id}-WARN`,
        inspectionId: inspection.id,
        p2hNo: inspection.p2hNo,
        date: inspection.date,
        shift: inspection.shift,
        section: inspection.section || 'PLANT',
        driverName: inspection.driverName || 'Operator',
        driverNrp: inspection.driverNrp || null,
        unitId: unit.id || inspection.unitId,
        unitNo: unit.unitNo || '-',
        category: unit.category || 'LIGHT_VECHICLE',
        brand: unit.brand || '-',
        description: unit.description || '',
        km: inspection.km || 0,
        hourMeter: inspection.hourMeter || null,
        unitStatus: inspection.unitStatus,
        component: wd.problemType || 'Kendala Operasional / Breakdown Unit',
        defectType: 'OPERATIONAL_WARNING',
        details: `${wd.additionalNotes || wd.problemType || 'Kendala Unit'}. Tindakan: ${wd.actionTaken || 'Perlu Perbaikan'}`,
        severity: 'CRITICAL',
        status: wd.status || 'OPEN',
        mechanicName: wd.mechanicName || null,
        repairNotes: wd.repairNotes || null,
        createdAt: inspection.createdAt,
        updatedAt: inspection.updatedAt,
      });
    }
  }

  // 5. Check Unit Breakdown Status (TIDAK LAYAK / TIDAK SIAP) even if no specific damageCheck was recorded
  if (isUnitCritical && defects.length === 0) {
    defects.push({
      id: `DEF-${inspection.id}-STATUS`,
      inspectionId: inspection.id,
      p2hNo: inspection.p2hNo,
      date: inspection.date,
      shift: inspection.shift,
      section: inspection.section || 'PLANT',
      driverName: inspection.driverName || 'Operator',
      driverNrp: inspection.driverNrp || null,
      unitId: unit.id || inspection.unitId,
      unitNo: unit.unitNo || '-',
      category: unit.category || 'LIGHT_VECHICLE',
      brand: unit.brand || '-',
      description: unit.description || '',
      km: inspection.km || 0,
      hourMeter: inspection.hourMeter || null,
      unitStatus: inspection.unitStatus,
      component: 'Unit Dinyatakan TIDAK LAYAK / TIDAK SIAP Operasi',
      defectType: 'BREAKDOWN_REPORT',
      details: inspection.supervisorNotes || 'Unit dalam kondisi tidak siap pakai dan memerlukan perbaikan menyeluruh sebelum dapat dioperasikan kembali.',
      severity: 'CRITICAL',
      status: 'OPEN',
      createdAt: inspection.createdAt,
      updatedAt: inspection.updatedAt,
    });
  }

  return defects;
}

/**
 * Controller: Get All Defects with filters
 */
export async function getAllDefects(req: AuthRequest, res: Response) {
  try {
    const {
      category,
      status,
      severity,
      search,
      page = 1,
      limit = 50,
    } = req.query;

    // Fetch all inspections from DB
    const inspections = await prisma.p2HInspection.findMany({
      include: {
        unit: {
          select: {
            id: true,
            unitNo: true,
            category: true,
            brand: true,
            description: true,
            km: true,
            hourMeter: true,
            status: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Extract all defects from all inspections
    let allDefects: DefectItem[] = [];
    for (const insp of inspections) {
      const extracted = extractDefectsFromInspection(insp);
      allDefects.push(...extracted);
    }

    // Apply In-Memory Filters
    if (category && category !== 'ALL') {
      allDefects = allDefects.filter((d) => d.category === String(category));
    }

    if (status && status !== 'ALL') {
      allDefects = allDefects.filter((d) => d.status === String(status));
    }

    if (severity && severity !== 'ALL') {
      allDefects = allDefects.filter((d) => d.severity === String(severity));
    }

    if (search) {
      const s = String(search).toLowerCase();
      allDefects = allDefects.filter(
        (d) =>
          d.unitNo.toLowerCase().includes(s) ||
          d.p2hNo.toLowerCase().includes(s) ||
          d.component.toLowerCase().includes(s) ||
          d.details.toLowerCase().includes(s) ||
          d.driverName.toLowerCase().includes(s) ||
          (d.mechanicName && d.mechanicName.toLowerCase().includes(s))
      );
    }

    // Sort: CRITICAL first, then OPEN / IN_PROGRESS, then newest date
    allDefects.sort((a, b) => {
      const severityRank = { CRITICAL: 3, MAJOR: 2, MINOR: 1 };
      const statusRank = { OPEN: 3, IN_PROGRESS: 2, RESOLVED: 1, CLOSED: 0 };

      const diffStatus = (statusRank[b.status] || 0) - (statusRank[a.status] || 0);
      if (diffStatus !== 0) return diffStatus;

      const diffSeverity = (severityRank[b.severity] || 0) - (severityRank[a.severity] || 0);
      if (diffSeverity !== 0) return diffSeverity;

      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const total = allDefects.length;
    const pageNum = Number(page) || 1;
    const limitNum = Number(limit) || 50;
    const skip = (pageNum - 1) * limitNum;
    const paginatedData = allDefects.slice(skip, skip + limitNum);

    return res.json({
      success: true,
      data: paginatedData,
      pagination: {
        total,
        page: pageNum,
        limit: limitNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error: any) {
    console.error('Error fetching defects:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal mengambil data defect & breakdown: ' + error.message,
    });
  }
}

/**
 * Controller: Get Defect KPI Statistics
 */
export async function getDefectStats(_req: AuthRequest, res: Response) {
  try {
    const inspections = await prisma.p2HInspection.findMany({
      include: {
        unit: {
          select: {
            id: true,
            unitNo: true,
            category: true,
          },
        },
      },
    });

    let totalDefects = 0;
    let criticalDefects = 0;
    let majorDefects = 0;
    let minorDefects = 0;
    let openDefects = 0;
    let inProgressDefects = 0;
    let resolvedDefects = 0;
    const byCategory: { [key: string]: number } = {
      LIGHT_VECHICLE: 0,
      TELEHENDLER: 0,
      STORING_TRUCK: 0,
      FUEL_TRUCK: 0,
      GENSET: 0,
      COMPRESSOR: 0,
    };

    for (const insp of inspections) {
      const defects = extractDefectsFromInspection(insp);
      for (const d of defects) {
        totalDefects += 1;
        if (d.severity === 'CRITICAL') criticalDefects += 1;
        else if (d.severity === 'MAJOR') majorDefects += 1;
        else if (d.severity === 'MINOR') minorDefects += 1;

        if (d.status === 'OPEN') openDefects += 1;
        else if (d.status === 'IN_PROGRESS') inProgressDefects += 1;
        else if (d.status === 'RESOLVED' || d.status === 'CLOSED') resolvedDefects += 1;

        if (byCategory[d.category] !== undefined) {
          byCategory[d.category] += 1;
        }
      }
    }

    return res.json({
      success: true,
      data: {
        totalDefects,
        criticalDefects,
        majorDefects,
        minorDefects,
        openDefects,
        inProgressDefects,
        resolvedDefects,
        byCategory,
      },
    });
  } catch (error: any) {
    console.error('Error fetching defect stats:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal mengambil statistik defect: ' + error.message,
    });
  }
}

/**
 * Controller: Update Defect Status & Mechanic Work Order
 */
export async function updateDefectStatus(req: AuthRequest, res: Response) {
  try {
    const { defectId } = req.params;
    const {
      status, // 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED'
      mechanicName,
      repairNotes,
    } = req.body;

    const idStr = Array.isArray(defectId) ? defectId[0] : String(defectId);
    if (!idStr || !status) {
      return res.status(400).json({
        success: false,
        message: 'Parameter defectId dan status wajib diisi.',
      });
    }

    // Parse inspectionId from defectId (e.g. DEF-12-DC-3 -> inspectionId 12)
    const match = idStr.match(/^DEF-(\d+)-/);
    if (!match) {
      return res.status(400).json({
        success: false,
        message: 'Format defectId tidak valid.',
      });
    }

    const inspectionId = Number(match[1]);
    const inspection = await prisma.p2HInspection.findUnique({
      where: { id: inspectionId },
      include: { unit: true },
    });

    if (!inspection) {
      return res.status(404).json({
        success: false,
        message: 'Data inspeksi P2H terkait tidak ditemukan.',
      });
    }

    // Update inspection's damageChecks or warningDetails with the repair status
    let updatedDamageChecks: any = inspection.damageChecks;
    if (Array.isArray(updatedDamageChecks) && idStr.includes('-DC-')) {
      const dcIndexMatch = idStr.match(/-DC-(\d+)$/);
      if (dcIndexMatch) {
        const itemIdx = Number(dcIndexMatch[1]) - 1;
        const currentItem = updatedDamageChecks[itemIdx] as any;
        if (currentItem && typeof currentItem === 'object') {
          updatedDamageChecks[itemIdx] = {
            ...currentItem,
            status,
            mechanicName: mechanicName || currentItem.mechanicName,
            repairNotes: repairNotes || currentItem.repairNotes,
            resolvedAt: status === 'RESOLVED' ? new Date() : undefined,
          };
        }
      }
    }

    const currentWd = (inspection.warningDetails as any) || {};
    const updatedWd = {
      ...currentWd,
      status,
      mechanicName: mechanicName || currentWd.mechanicName,
      repairNotes: repairNotes || currentWd.repairNotes,
      lastUpdated: new Date().toISOString(),
    };

    // If marked as RESOLVED and unit was INACTIVE, update unit status if desired
    let newUnitStatus = inspection.unitStatus;
    if (status === 'RESOLVED') {
      newUnitStatus = 'LAYAK';
      if (inspection.unitId) {
        await prisma.unit.update({
          where: { id: inspection.unitId },
          data: { status: 'ACTIVE' },
        });
      }
    }

    await prisma.p2HInspection.update({
      where: { id: inspectionId },
      data: {
        damageChecks: updatedDamageChecks as any,
        warningDetails: updatedWd as any,
        unitStatus: newUnitStatus,
      },
    });

    return res.json({
      success: true,
      message: `Status defect ${defectId} berhasil diperbarui menjadi ${status}.`,
      data: {
        defectId,
        status,
        mechanicName,
        repairNotes,
      },
    });
  } catch (error: any) {
    console.error('Error updating defect status:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal memperbarui status defect: ' + error.message,
    });
  }
}

/**
 * Controller: Buat Laporan Breakdown / Defect Lapangan Cepat
 */
export async function createDirectBreakdown(req: AuthRequest, res: Response) {
  try {
    const userId = req.user?.id || 1;
    const {
      unitId,
      component,
      details,
      severity = 'CRITICAL',
      driverName,
      driverNrp,
      shift = 'PAGI',
      km,
      hourMeter,
    } = req.body;

    if (!unitId || !component || !details) {
      return res.status(400).json({
        success: false,
        message: 'unitId, component (komponen rusak), dan details (deskripsi kerusakan) wajib diisi.',
      });
    }

    const unit = await prisma.unit.findUnique({
      where: { id: Number(unitId) },
    });

    if (!unit) {
      return res.status(404).json({
        success: false,
        message: 'Unit armada tidak ditemukan.',
      });
    }

    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const p2hNo = `BD-${unit.unitNo}-${dateStr}-${randomSuffix}`;

    const newInsp = await prisma.p2HInspection.create({
      data: {
        p2hNo,
        unitId: Number(unitId),
        userId,
        driverName: driverName || 'Mekanik Lapangan',
        driverNrp: driverNrp ? Number(driverNrp) : undefined,
        shift,
        km: Number(km || unit.km || 0),
        hourMeter: hourMeter ? Number(hourMeter) : unit.hourMeter,
        damageChecks: [
          {
            id: 1,
            item: component,
            condition: severity === 'CRITICAL' ? 'MAJOR' : 'RUSAK',
            note: details,
            status: 'OPEN',
          },
        ],
        tyreCheck: {
          condition: 'BAIK',
          pressure: 'BAIK',
          problemPositions: [],
        },
        safetyTools: [],
        fitToWork: [],
        warningDetails: {
          problemType: `BREAKDOWN: ${component}`,
          actionTaken: 'Unit stop operasi, menunggu perbaikan',
          additionalNotes: details,
          status: 'OPEN',
        },
        unitStatus: 'TIDAK_LAYAK',
        driverStatus: 'LAYAK',
        supervisorNotes: `Laporan breakdown darurat: ${details}`,
      },
    });

    // Update unit status to INACTIVE if breakdown
    await prisma.unit.update({
      where: { id: Number(unitId) },
      data: { status: 'INACTIVE' },
    });

    return res.status(201).json({
      success: true,
      message: `Laporan breakdown unit ${unit.unitNo} berhasil dicatat (${p2hNo}).`,
      data: newInsp,
    });
  } catch (error: any) {
    console.error('Error creating breakdown:', error);
    return res.status(500).json({
      success: false,
      message: 'Gagal mencatat breakdown: ' + error.message,
    });
  }
}
