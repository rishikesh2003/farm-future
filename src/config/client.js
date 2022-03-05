import { createClient } from "@supabase/supabase-js";

const supabaseURL = "";
const pubKey =
  "";

const supabase = createClient(supabaseURL, pubKey);

export default supabase;
