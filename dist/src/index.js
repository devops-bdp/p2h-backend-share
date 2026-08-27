import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from './config/prisma.js';
import authRouter from './router/auth.router.js';
import unitRouter from './router/unit.router.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());
// Routes
app.use('/api/auth', authRouter);
app.use('/api/units', unitRouter);
// Endpoint cek kesehatan server
app.get('/', (_req, res) => {
    res.json({
        success: true,
        message: 'Server Express & TypeScript berjalan!',
    });
});
// Endpoint test Prisma query ke Supabase
app.get('/api/users', async (_req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.json({ success: true, count: users.length, data: users });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map