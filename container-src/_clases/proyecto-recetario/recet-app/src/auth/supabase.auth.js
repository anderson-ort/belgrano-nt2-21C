import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;


export const supabase = createClient("https://hkunjvmotpatbvjlklgf.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrdW5qdm1vdHBhdGJ2amxrbGdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3Mjg3NzQsImV4cCI6MjA2MzMwNDc3NH0.yD1qhc49_HhwWTpDbvCVLMvoIQaxmNZNtAlC9E1Cyho")