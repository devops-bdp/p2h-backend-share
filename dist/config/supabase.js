import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase URL atau Anon Key belum dikonfigurasi di file .env');
}
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
//# sourceMappingURL=supabase.js.map