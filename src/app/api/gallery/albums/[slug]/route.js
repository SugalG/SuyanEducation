import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req, context) {
  // ✅ params MUST be awaited
  const params = await context.params;
  const { slug } = params;

  try {
    const album = await prisma.galleryAlbum.findUnique({
      where: { slug },
      include: {
        photos: {
          orderBy: { createdAt: "asc" },
          select: {
            id: true,
            imageUrl: true,
            caption: true,
          },
        },
      },
    });

    if (!album) {
      return NextResponse.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(album);
  } catch (error) {
    console.error("Fetch gallery album error:", error);
    return NextResponse.json(
      { error: "Failed to load album" },
      { status: 500 }
    );
  }
}
