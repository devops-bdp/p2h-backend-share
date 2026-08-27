import { Router } from 'express';
import UnitController from '../controller/unit.controller.js';
import {
  authenticateToken,
  authorizeUnitManagement,
} from '../middleware/auth.middleware.js';

const unitRouter = Router();
const {
  createUnit,
  getAllUnits,
  getUnitById,
  updateUnit,
  deleteUnit,
} = UnitController();

// Mengambil list & detail unit (Semua user terautentikasi bisa melihat)
unitRouter.get('/', authenticateToken, getAllUnits);
unitRouter.get('/:id', authenticateToken, getUnitById);

// Menambahkan, mengedit, menghapus unit (Hanya ADMIN / SUPERADMIN dengan Departemen PLANT / OPERATIONS)
unitRouter.post('/', authenticateToken, authorizeUnitManagement, createUnit);
unitRouter.put('/:id', authenticateToken, authorizeUnitManagement, updateUnit);
unitRouter.delete('/:id', authenticateToken, authorizeUnitManagement, deleteUnit);

export default unitRouter;
