import { supabaseAdmin } from "./supabase";

export async function initTables() {
  const hoodiesTable = `
    CREATE TABLE IF NOT EXISTS hoodies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    );
  `;
  // Uses exec_sql RPC (you must create it in Supabase SQL editor once)
  const { error } = await supabaseAdmin.rpc("exec_sql", { sql: hoodiesTable });

  if (error) {
    console.error("❌ Failed to create hoodies table:", error.message);
  } else {
    console.log("✅ Hoodies table ready");
  }
}
