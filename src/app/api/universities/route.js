import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const destinationId = url.searchParams.get("destinationId");

    const universities = await prisma.university.findMany({
      where: destinationId ? { countryId: destinationId } : undefined,
      select: {
        id: true,
        name: true,
        imageUrl: true,
        websiteUrl: true,
        city: true,
        countryId: true,
      },
      orderBy: { name: "asc" },
    });

    return NextResponse.json({ success: true, items: universities });
  } catch (error) {
    console.error("Public universities error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}
