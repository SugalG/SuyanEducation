import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const albums = await prisma.galleryAlbum.findMany({
      orderBy: { albumDate: "desc" },
      include: {
        photos: {
          select: { id: true },
        },
      },
    });

    const formatted = albums.map((album) => ({
      id: album.id,
      slug: album.slug,
      title: album.title,
      description: album.description,
      albumDate: album.albumDate,
      coverImage: album.coverImage,
      photoCount: album.photos.length,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Gallery albums fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch albums" },
      { status: 500 }
    );
  }
}
