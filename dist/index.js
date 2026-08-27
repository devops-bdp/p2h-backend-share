import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { supabase } from './config/supabase.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// Endpoint cek kesehatan server & query sederhana ke Supabase
app.get('/', async (req, res) => {
    try {
        // Contoh query mengambil data dari tabel 'users' (sesuaikan dengan nama tabel di database Anda)
        const { data, error } = await supabase.from('users').select('*').limit(5);
        if (error) {
            return res.status(400).json({ success: false, error: error.message });
        }
        return res.json({
            success: true,
            message: 'Server Express & TypeScript berjalan!',
            data,
        });
    }
    catch (err) {
        return res.status(500).json({ success: false, message: err.message });
    }
});
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map