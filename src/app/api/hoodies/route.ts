import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
// import { initTables } from "@/lib/init-db";

// ------------------------------
// POST /api/hoodies
// Create (insert) a new hoodie
// ------------------------------
export async function POST(req: Request) {
  // 1. Ensure the "hoodies" table exists before inserting
  //   await initTables();

  // 2. Read the request body (expects JSON with name + price)
  const { name, price } = await req.json();

  // 3. Validate input
  if (!name || !price) {
    return NextResponse.json(
      { error: "Name and price are required" },
      { status: 400 }
    );
  }

  // 4. Insert new hoodie row into "hoodies" table
  const { data, error } = await supabase
    .from("hoodies")
    .insert([{ name, price }]);

  // 5. Handle errors
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 6. Return the inserted row(s)
  return NextResponse.json({ data });
}

// ------------------------------
// GET /api/hoodies
// Retrieve all hoodies
// ------------------------------
export async function GET() {
  // 1. Ensure the "hoodies" table exists before querying
  //   await initTables();

  // 2. Fetch all rows from "hoodies", ordered by latest created_at
  const { data, error } = await supabase
    .from("hoodies")
    .select("*")
    .order("created_at", { ascending: false });

  // 3. Handle errors
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // 4. Return the list of hoodies
  return NextResponse.json({ data });
}
