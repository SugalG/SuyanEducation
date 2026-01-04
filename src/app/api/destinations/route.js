import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: { country: "asc" },
      select: {
        slug: true,
        country: true,
      },
    });

    return NextResponse.json(destinations);
  } catch (error) {
    console.error("Fetch destinations error:", error);
    return NextResponse.json(
      { error: "Failed to fetch destinations" },
      { status: 500 }
    );
  }
}
