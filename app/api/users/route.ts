import { NextResponse } from "next/server";

// Read database password from environment variables.
const DB_PASSWORD = process.env.DB_PASSWORD;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("id");

  // SQL injection vulnerability - SECURITY ISSUE
  const query = `SELECT * FROM users WHERE id = '${userId}'`;

  // Logging sensitive data - SECURITY ISSUE
  console.log("Query:", query, "Password:", DB_PASSWORD);

  // eval usage - SECURITY ISSUE
  const filter = url.searchParams.get("filter");
  if (filter) {
    eval(filter);
  }

  return NextResponse.json({
    query,
    message: "This endpoint has multiple security issues",
  });
}
