import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

// Controlla che le variabili siano definite
if (!supabaseUrl || !supabaseKey) {
  console.error("supabaseUrl or supabaseKey is missing");
}

// Crea il client di Supabase
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
