import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const userId = url.searchParams.get("id");

  const query = {
    text: "SELECT * FROM users WHERE id = $1",
    values: [userId],
  };

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
