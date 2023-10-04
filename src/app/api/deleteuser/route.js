import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

export const POST = async (req) => {
  const body = await req.json();
  const { email } = body;
  try {
    await prisma.user.delete({
      where: {
        email,
      },
    });
    return NextResponse.json({ message: "Berhasil menghapus user" });
  } catch (error) {
    return NextResponse.json({ message: "Gagal menghapus user" }, { status: 500 });
  }
};
