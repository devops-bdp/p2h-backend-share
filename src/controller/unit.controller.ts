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

  return {
    createUnit,
    getAllUnits,
    getUnitById,
    updateUnit,
    deleteUnit,
  };
}
