import { createClient } from '@supabase/supabase-js';

const SB_URL=import.meta.env.VITE_SUPAURL;
const SB_KEY=import.meta.env.VITE_SUPAKEY;

export const supabase = createClient(SB_URL, SB_KEY)
