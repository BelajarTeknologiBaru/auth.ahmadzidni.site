import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const { email } = body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "user tidak ditemukan" }, { status: 404 });
    }

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      image: user.image,
    };

    return NextResponse.json({ message: "berhasil", data: payload });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};
