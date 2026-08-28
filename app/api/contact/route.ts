import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: {
    name?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const firstName = body.firstName?.trim() ?? "";
  const lastName = body.lastName?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";

  const fullName = name || `${firstName} ${lastName}`.trim();

  if (!fullName || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  return NextResponse.json({
    ok: true,
    message: "Thank you. We have received your message.",
  });
}
