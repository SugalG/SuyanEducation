import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* =========================
   GET – List universities
========================= */
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
        countryId: true,
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json(
      { success: true, items: universities },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/admin/universities error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}

/* =========================
   POST – Create university
========================= */
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, city, websiteUrl, imageUrl, countryId } = body;

    if (!name || !imageUrl || !countryId) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, logo URL, and destination are required",
        },
        { status: 400 }
      );
    }

    // Ensure destination exists
    const destinationExists = await prisma.destination.findUnique({
      where: { id: countryId },
    });

    if (!destinationExists) {
      return NextResponse.json(
        { success: false, message: "Invalid destination ID" },
        { status: 400 }
      );
    }

    const university = await prisma.university.create({
      data: {
        name,
        city,
        websiteUrl,
        imageUrl,
        countryId,
      },
    });

    return NextResponse.json(
      { success: true, item: university },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST /api/admin/universities error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to create university",
      },
      { status: 500 }
    );
  }
}

/* =========================
   PUT – Update university
========================= */
export async function PUT(request) {
  try {
    const body = await request.json();
    const { id, name, city, websiteUrl, imageUrl } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "University ID is required" },
        { status: 400 }
      );
    }

    const university = await prisma.university.update({
      where: { id },
      data: {
        name,
        city,
        websiteUrl,
        imageUrl,
      },
    });

    return NextResponse.json(
      { success: true, item: university },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT /api/admin/universities error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to update university",
      },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE – Remove university
========================= */
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "University ID is required" },
        { status: 400 }
      );
    }

    await prisma.university.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/admin/universities error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to delete university",
      },
      { status: 500 }
    );
  }
}
