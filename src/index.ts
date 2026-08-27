import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.js';
import { prisma } from './config/prisma.js';
import authRouter from './router/auth.router.js';
import unitRouter from './router/unit.router.js';
import p2hRouter from './router/p2h.router.js';
import userRouter from './router/user.router.js';
import defectRouter from './router/defect.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/units', unitRouter);
app.use('/api/p2h', p2hRouter);
app.use('/api/users', userRouter);
app.use('/api/defects', defectRouter);

// Endpoint cek kesehatan server
app.get('/', (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: 'Server Express & TypeScript berjalan!',
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});