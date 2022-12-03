import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "your API url", 
    "your API key"
)