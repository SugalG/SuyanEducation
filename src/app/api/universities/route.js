import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const destinationId = searchParams.get("destinationId");

    const universities = await prisma.university.findMany({
      where: {
        ...(destinationId && { countryId: destinationId }),
        imageUrl: { not: "" },
      },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        websiteUrl: true,
        city: true,
        country: {                
          select: {
            id: true,
            country: true,
            slug: true,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(
      {
        success: true,
        items: universities,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Public universities error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch universities",
      },
      { status: 500 }
    );
  }
}
