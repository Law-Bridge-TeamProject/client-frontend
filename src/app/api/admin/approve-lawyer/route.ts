import { NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";

export async function PUT(req: Request) {
  const body = await req.json();
  const userId: string = body.userId;

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      role: "lawyer",
      isApproved: true,
      lawyerRequest: {
        status: "approved",
      },
    },
  });

  return NextResponse.json({ success: true });
}
