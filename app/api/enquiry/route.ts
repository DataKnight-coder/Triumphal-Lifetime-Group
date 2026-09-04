import { NextRequest, NextResponse } from "next/server";

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL?.replace(/\/+$/, "");

export async function POST(request: NextRequest) {
  if (!WORDPRESS_API_URL) return NextResponse.json({ message: "Enquiries are temporarily unavailable." }, { status: 503 });
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 25_000) return NextResponse.json({ message: "Request is too large." }, { status: 413 });
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ message: "Invalid request." }, { status: 400 }); }
  const root = WORDPRESS_API_URL.endsWith("/wp-json") ? WORDPRESS_API_URL : `${WORDPRESS_API_URL}/wp-json`;
  try {
    const response = await fetch(`${root}/tlg/v1/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json", Origin: request.nextUrl.origin },
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const result = await response.json().catch(() => ({ message: "The enquiry could not be sent." }));
    return NextResponse.json(result, { status: response.status });
  } catch {
    return NextResponse.json({ message: "The enquiry service is temporarily unavailable." }, { status: 503 });
  }
}
