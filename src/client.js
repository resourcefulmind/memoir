import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://odkjpfzpigcmezbehoxa.supabase.co", 
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ka2pwZnpwaWdjbWV6YmVob3hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njk5ODY5MjEsImV4cCI6MTk4NTU2MjkyMX0.bD19trHjS8_zynsb_jYvU9jAf5DVvgD5NIPhoanlvEg"
)