import { auth, clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await auth()


  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { role }: { role: "user" | "lawyer" } = await req.json();

  console.log( role, "role");
  

  if (!["user", "lawyer"].includes(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 });
  }

  const client = await clerkClient();
  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      role,
    },
  });

  return NextResponse.json({ message: "Role saved" }, { status: 200 });
}
