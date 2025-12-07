import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client using environment variables
// These are loaded from .env.local during development
// and from your hosting platform's environment settings in production
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

// Create a client even with placeholder values to prevent app crashes
// The app will work in demo mode without real Supabase connection
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase };
