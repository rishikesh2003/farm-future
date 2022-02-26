import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://ljevudecygxfoenmtszu.supabase.co";
const pubKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxqZXZ1ZGVjeWd4Zm9lbm10c3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU4NDc5NjUsImV4cCI6MTk2MTQyMzk2NX0.pPx8zooqQxdOuySAB0-0Q1N5d9l5qciYwzAF3euJEXU";

const supabase = createClient(supabaseURL, pubKey);

export default supabase;
