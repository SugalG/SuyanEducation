import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Make sure you have prisma client

export async function GET() {
  try {
    const universities = await prisma.university.findMany({
      orderBy: { createdAt: "desc" },
      include: { country: true },
    });

    return NextResponse.json({ success: true, items: universities });
  } catch (e) {
    console.error("GET /universities error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to fetch universities" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, countryId, city, websiteUrl, imageUrl } = body;

    if (!name || !countryId || !imageUrl) {
      return NextResponse.json(
        { success: false, message: "Name, countryId, and imageUrl are required" },
        { status: 400 }
      );
    }

    const university = await prisma.university.create({
      data: { name, countryId, city, websiteUrl, imageUrl },
    });

    return NextResponse.json({ success: true, university });
  } catch (e) {
    console.error("POST /universities error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to create university" },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, name, city, websiteUrl, imageUrl } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "University ID is required" },
        { status: 400 }
      );
    }

    const updated = await prisma.university.update({
      where: { id },
      data: { name, city, websiteUrl, imageUrl },
    });

    return NextResponse.json({ success: true, university: updated });
  } catch (e) {
    console.error("PUT /universities error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to update university" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { success: false, message: "University ID is required" },
        { status: 400 }
      );
    }

    await prisma.university.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("DELETE /universities error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to delete university" },
      { status: 500 }
    );
  }
}
