import { NextRequest, NextResponse } from "next/server";

const z = process.env.R2_PUBLIC_DOMAIN;
export async function GET(req: NextRequest) {
  const imageKey = req.nextUrl.searchParams.get("key");
  if (!imageKey) {
    return NextResponse.json({ error: "Image key is required" }, { status: 400 });
  }

  const imageUrl = `${z}/${imageKey}`;
  console.log("Fetching from:", imageUrl);

  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    const contentType = response.headers.get("content-type") || "image/jpeg";
    const imageBuffer = await response.arrayBuffer();

    return new NextResponse(Buffer.from(imageBuffer), {
      status: 200,
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 });
  }
}
