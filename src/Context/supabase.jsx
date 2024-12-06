import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tfgwbmvglzmvxoeskzah.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmZ3dibXZnbHptdnhvZXNremFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDk5MzUsImV4cCI6MjA0OTA4NTkzNX0.g_G5goT3ocTCcg72OFOW-EX0_6MYtY6Ud4BwhEpRv3k';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
