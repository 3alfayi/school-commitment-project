import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://fpfsdqgmtgeetwecxtpl.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwZnNkcWdtdGdlZXR3ZWN4dHBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5ODk0NzYsImV4cCI6MjEwMjU2NTQ3Nn0.ofEm1s2OyFeey7D9ps_DtM4srB2Bt3qLEFkCp_q5VHo';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);