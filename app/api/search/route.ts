import { NextRequest, NextResponse } from "next/server";
import { searchableContent } from "@/lib/site";

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q")?.trim().toLowerCase() ?? "";

  if (!q) {
    return NextResponse.json({ query: q, results: searchableContent });
  }

  const results = searchableContent.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.summary.toLowerCase().includes(q),
  );

  return NextResponse.json({ query: q, results });
}
