import { Router } from 'express';
import {
  getAllDefects,
  getDefectStats,
  updateDefectStatus,
  createDirectBreakdown,
} from '../controller/defect.controller.js';
import { authenticateToken } from '../middleware/auth.middleware.js';

const router = Router();

// All defect routes require authentication
router.use(authenticateToken);

// 1. Get KPI Summary Stats
router.get('/stats/summary', getDefectStats);

// 2. Get All Defects with filters
router.get('/', getAllDefects);

// 3. Update defect resolution status / mechanic work order
router.put('/:defectId/status', updateDefectStatus);

// 4. Create direct breakdown report
router.post('/breakdown', createDirectBreakdown);

export default router;
