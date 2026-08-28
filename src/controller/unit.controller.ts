import { Response } from 'express';
import { prisma } from '../config/prisma.js';
import { AuthRequest } from '../middleware/auth.middleware.js';

export default function UnitController() {
  /**
   * Menambahkan Unit baru
   * Hanya Role ADMIN / SUPERADMIN dengan Departemen PLANT / OPERATIONS
   */
  async function createUnit(req: AuthRequest, res: Response) {
    try {
      const {
        unitNo,
        category,
        brand,
        description,
        ownerName,
        km,
        hourMeter,
        status,
      } = req.body;

      if (!unitNo || !category || !brand || !description || !ownerName || km === undefined) {
        return res.status(400).json({
          success: false,
          message:
            'Data unit tidak lengkap: unitNo, category, brand, description, ownerName, dan km wajib diisi',
        });
      }

      // Cek apakah Unit No sudah ada
      const existingUnit = await prisma.unit.findUnique({
        where: { unitNo: String(unitNo).trim() },
      });

      if (existingUnit) {
        return res.status(400).json({
          success: false,
          message: `Unit dengan nomor ${unitNo} sudah terdaftar`,
        });
      }

      const unit = await prisma.unit.create({
        data: {
          unitNo: String(unitNo).trim(),
          category,
          brand,
          description,
          ownerName,
          km: Number(km),
          hourMeter: hourMeter !== undefined && hourMeter !== null ? Number(hourMeter) : null,
          status: status || undefined,
        },
      });

      return res.status(201).json({
        success: true,
        message: 'Unit berhasil ditambahkan',
        data: unit,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat menambahkan unit',
      });
    }
  }

  /**
   * Mengambil semua data Unit
   */
  async function getAllUnits(req: AuthRequest, res: Response) {
    try {
      const { category, status, search } = req.query;

      const whereClause: any = {};

      if (category) {
        whereClause.category = String(category);
      }

      if (status) {
        whereClause.status = String(status);
      }

      if (search) {
        whereClause.OR = [
          { unitNo: { contains: String(search), mode: 'insensitive' } },
          { brand: { contains: String(search), mode: 'insensitive' } },
          { ownerName: { contains: String(search), mode: 'insensitive' } },
        ];
      }

      const units = await prisma.unit.findMany({
        where: whereClause,
        orderBy: { createdAt: 'desc' },
      });

      return res.json({
        success: true,
        count: units.length,
        data: units,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengambil data unit',
      });
    }
  }

  /**
   * Mengambil detail Unit berdasarkan ID
   */
  async function getUnitById(req: AuthRequest, res: Response) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID unit tidak valid',
        });
      }

      const unit = await prisma.unit.findUnique({
        where: { id },
      });

      if (!unit) {
        return res.status(404).json({
          success: false,
          message: 'Unit tidak ditemukan',
        });
      }

      return res.json({
        success: true,
        data: unit,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat mengambil detail unit',
      });
    }
  }

  /**
   * Mengupdate data Unit
   * Hanya Role ADMIN / SUPERADMIN dengan Departemen PLANT / OPERATIONS
   */
  async function updateUnit(req: AuthRequest, res: Response) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID unit tidak valid',
        });
      }

      const existingUnit = await prisma.unit.findUnique({
        where: { id },
      });

      if (!existingUnit) {
        return res.status(404).json({
          success: false,
          message: 'Unit tidak ditemukan',
        });
      }

      const {
        unitNo,
        category,
        brand,
        description,
        ownerName,
        km,
        hourMeter,
        status,
      } = req.body;

      // Jika unitNo diubah, pastikan tidak duplikat dengan unit lain
      if (unitNo && unitNo !== existingUnit.unitNo) {
        const duplicate = await prisma.unit.findUnique({
          where: { unitNo: String(unitNo).trim() },
        });
        if (duplicate) {
          return res.status(400).json({
            success: false,
            message: `Unit dengan nomor ${unitNo} sudah digunakan`,
          });
        }
      }

      const updatedUnit = await prisma.unit.update({
        where: { id },
        data: {
          unitNo: unitNo ? String(unitNo).trim() : undefined,
          category: category || undefined,
          brand: brand || undefined,
          description: description || undefined,
          ownerName: ownerName || undefined,
          km: km !== undefined ? Number(km) : undefined,
          hourMeter:
            hourMeter !== undefined
              ? hourMeter === null
                ? null
                : Number(hourMeter)
              : undefined,
          status: status || undefined,
        },
      });

      return res.json({
        success: true,
        message: 'Data unit berhasil diperbarui',
        data: updatedUnit,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat memperbarui unit',
      });
    }
  }

  /**
   * Menghapus Unit
   * Hanya Role ADMIN / SUPERADMIN dengan Departemen PLANT / OPERATIONS
   */
  async function deleteUnit(req: AuthRequest, res: Response) {
    try {
      const id = Number(req.params.id);

      if (isNaN(id)) {
        return res.status(400).json({
          success: false,
          message: 'ID unit tidak valid',
        });
      }

      const existingUnit = await prisma.unit.findUnique({
        where: { id },
      });

      if (!existingUnit) {
        return res.status(404).json({
          success: false,
          message: 'Unit tidak ditemukan',
        });
      }

      await prisma.unit.delete({
        where: { id },
      });

      return res.json({
        success: true,
        message: 'Unit berhasil dihapus',
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Terjadi kesalahan saat menghapus unit',
      });
    }
  }

  /**
   * Menambahkan banyak Unit sekaligus (Bulk Create / Import)
   * Hanya Role ADMIN / SUPERADMIN dengan Departemen PLANT / OPERATIONS
   */
  async function bulkCreateUnits(req: AuthRequest, res: Response) {
    try {
      const unitsData: any[] = Array.isArray(req.body)
        ? req.body
        : req.body?.units;

      if (!unitsData || !Array.isArray(unitsData) || unitsData.length === 0) {
        return res.status(400).json({
          success: false,
          message: 'Data unit tidak boleh kosong. Harap sertakan array data unit.',
        });
      }

      if (unitsData.length > 500) {
        return res.status(400).json({
          success: false,
          message: 'Maksimal 500 unit dalam satu kali impor bulk.',
        });
      }

      // Ambil seluruh unitNo yang sudah ada di database untuk validasi cepat
      const existingDbUnits = await prisma.unit.findMany({
        select: { unitNo: true },
      });
      const existingUnitNoSet = new Set(
        existingDbUnits.map((u) => u.unitNo.toUpperCase().trim())
      );

      const categoryMap: Record<string, any> = {
        LIGHT_VECHICLE: 'LIGHT_VECHICLE',
        LIGHT_VEHICLE: 'LIGHT_VECHICLE',
        LV: 'LIGHT_VECHICLE',
        TELEHENDLER: 'TELEHENDLER',
        TELEHANDLER: 'TELEHENDLER',
        TH: 'TELEHENDLER',
        STORING_TRUCK: 'STORING_TRUCK',
        STORING: 'STORING_TRUCK',
        ST: 'STORING_TRUCK',
        FUEL_TRUCK: 'FUEL_TRUCK',
        FUEL_TANKER: 'FUEL_TRUCK',
        FT: 'FUEL_TRUCK',
        GENSET: 'GENSET',
        GENERATOR: 'GENSET',
        GS: 'GENSET',
        COMPRESSOR: 'COMPRESSOR',
        KOMPRESOR: 'COMPRESSOR',
        CP: 'COMPRESSOR',
        COMPACTOR: 'COMPACTOR',
        ROLLER: 'COMPACTOR',
        CMP: 'COMPACTOR',
        DOZER: 'DOZER',
        BULLDOZER: 'DOZER',
        DZ: 'DOZER',
        EXCAVATOR: 'EXCAVATOR',
        EXCA: 'EXCAVATOR',
        HEX: 'EXCAVATOR',
        CRANE_TRUCK: 'CRANE_TRUCK',
        TRUCK_CRANE: 'CRANE_TRUCK',
        MOBILE_CRANE: 'MOBILE_CRANE',
        MC: 'MOBILE_CRANE',
        AMBULANCE: 'AMBULANCE',
        AMBULAN: 'AMBULANCE',
      };

      const seenInBatch = new Set<string>();
      const createdUnits: any[] = [];
      const errors: Array<{
        row: number;
        unitNo?: string;
        reason: string;
      }> = [];

      for (let i = 0; i < unitsData.length; i++) {
        const item = unitsData[i];
        const rowNumber = i + 1;

        const unitNoRaw = item.unitNo ? String(item.unitNo).trim() : '';
        const unitNoUpper = unitNoRaw.toUpperCase();

        if (!unitNoRaw) {
          errors.push({
            row: rowNumber,
            unitNo: unitNoRaw,
            reason: 'Nomor Lambung (Unit No) wajib diisi',
          });
          continue;
        }

        if (seenInBatch.has(unitNoUpper)) {
          errors.push({
            row: rowNumber,
            unitNo: unitNoRaw,
            reason: `Nomor lambung "${unitNoRaw}" duplikat di dalam file impor`,
          });
          continue;
        }

        if (existingUnitNoSet.has(unitNoUpper)) {
          errors.push({
            row: rowNumber,
            unitNo: unitNoRaw,
            reason: `Nomor lambung "${unitNoRaw}" sudah terdaftar di sistem`,
          });
          continue;
        }

        const rawCat = item.category
          ? String(item.category).trim().toUpperCase().replace(/[\s\-_]+/g, '_')
          : '';
        const validCategory = categoryMap[rawCat];

        if (!validCategory) {
          errors.push({
            row: rowNumber,
            unitNo: unitNoRaw,
            reason: `Kategori "${item.category || '-'}" tidak valid. Pilihan: LIGHT_VECHICLE, TELEHENDLER, STORING_TRUCK, FUEL_TRUCK, GENSET, COMPRESSOR, EXCAVATOR, DOZER, COMPACTOR, CRANE_TRUCK, MOBILE_CRANE, AMBULANCE.`,
          });
          continue;
        }

        const brand = item.brand ? String(item.brand).trim() : 'Standard Brand';
        const description = item.description ? String(item.description).trim() : brand;
        const ownerName = item.ownerName ? String(item.ownerName).trim() : 'PT Batara Dharma Persada';
        
        let km = 0;
        if (item.km !== undefined && item.km !== null && item.km !== '') {
          const parsedKm = Number(item.km);
          if (isNaN(parsedKm) || parsedKm < 0) {
            errors.push({
              row: rowNumber,
              unitNo: unitNoRaw,
              reason: 'Nilai Kilometer (KM) harus berupa angka >= 0',
            });
            continue;
          }
          km = parsedKm;
        }

        let hourMeter: number | null = null;
        if (item.hourMeter !== undefined && item.hourMeter !== null && item.hourMeter !== '') {
          const parsedHm = Number(item.hourMeter);
          if (isNaN(parsedHm) || parsedHm < 0) {
            errors.push({
              row: rowNumber,
              unitNo: unitNoRaw,
              reason: 'Nilai Hour Meter (HM) harus berupa angka >= 0 atau dikosongkan',
            });
            continue;
          }
          hourMeter = parsedHm;
        }

        let status: 'ACTIVE' | 'INACTIVE' = 'ACTIVE';
        if (item.status) {
          const stClean = String(item.status).trim().toUpperCase();
          if (stClean === 'INACTIVE' || stClean === 'NONAKTIF' || stClean === 'NON_AKTIF' || stClean === 'NON-AKTIF') {
            status = 'INACTIVE';
          }
        }

        seenInBatch.add(unitNoUpper);

        try {
          const newUnit = await prisma.unit.create({
            data: {
              unitNo: unitNoRaw,
              category: validCategory,
              brand,
              description,
              ownerName,
              km,
              hourMeter,
              status,
            },
          });
          existingUnitNoSet.add(unitNoUpper);
          createdUnits.push(newUnit);
        } catch (err: any) {
          errors.push({
            row: rowNumber,
            unitNo: unitNoRaw,
            reason: err.message || 'Gagal menyimpan ke database',
          });
        }
      }

      return res.status(200).json({
        success: true,
        message: `Impor bulk unit selesai: ${createdUnits.length} unit berhasil dibuat, ${errors.length} gagal/dilewati.`,
        summary: {
          totalProcessed: unitsData.length,
          successCount: createdUnits.length,
          failedCount: errors.length,
        },
        createdUnits,
        errors,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message || 'Terjadi kesalahan pada server saat memproses bulk create unit',
      });
    }
  }

  return {
    createUnit,
    getAllUnits,
    getUnitById,
    updateUnit,
    deleteUnit,
    bulkCreateUnits,
  };
}
