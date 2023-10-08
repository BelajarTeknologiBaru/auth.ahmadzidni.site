import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
export const POST = async (req) => {
  const body = await req.json();
  const { email } = body;

  try {
    await prisma.user.update({
      where: {
        email,
      },
    });

    return NextResponse.json({ message: "berhasil mengupdate nama" });
  } catch (error) {}
};
