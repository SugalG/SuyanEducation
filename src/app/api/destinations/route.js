import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { country: "asc" },
      select: {
        id: true,
        slug: true,
        country: true,
      },
    });

    return NextResponse.json(
      {
        success: true,
        items: destinations,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fetch destinations error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch destinations",
      },
      { status: 500 }
    );
  }
}
