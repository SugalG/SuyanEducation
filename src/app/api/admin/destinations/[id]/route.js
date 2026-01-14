import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* ======================
   UPDATE
====================== */
export async function PUT(req, { params }) {
  try {
    const { id } = await params; // ✅ MUST await
    const body = await req.json();

    const item = await prisma.destination.update({
      where: { id },
      data: {
        heroImage: body.heroImage || null,
        slug: body.slug,
        country: body.country,
        description: body.description,
        whyPoints: body.whyPoints,
        education: body.education,
        popularFields: body.popularFields,
        visaUpdates: body.visaUpdates,
      },
    });

    return NextResponse.json({ success: true, item });
  } catch (error) {
    console.error("PUT destination error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update destination" },
      { status: 500 }
    );
  }
}

/* ======================
   DELETE
====================== */
export async function DELETE(req, { params }) {
  try {
    const { id } = await params; // ✅ MUST await

    await prisma.destination.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE destination error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete destination" },
      { status: 500 }
    );
  }
}
