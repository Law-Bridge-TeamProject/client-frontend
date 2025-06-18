"use server";
import { NextRequest, NextResponse } from "next/server";
import { AccessToken } from "livekit-server-sdk";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const room = searchParams.get("room");

  if (!userId || !room) {
    return NextResponse.json({ error: "Missing userId or room" }, { status: 400 });
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_SECRET;

  if (!apiKey || !apiSecret) {
    return NextResponse.json({ error: "Missing API credentials" }, { status: 500 });
  }

  const token = new AccessToken(apiKey, apiSecret, { identity: userId });
  
  token.addGrant({
    roomJoin: true,
    room: room,
    canPublish: true,
    canSubscribe: true,
  });
  console.log(token);
  
  const jwt = await token.toJwt();
  console.log(jwt);
  

  return NextResponse.json({ token: jwt });
}
