import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";

export async function POST(req) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { albumId, imageUrl } = await req.json();

    if (!albumId || !imageUrl) {
      return NextResponse.json(
        { error: "albumId and imageUrl are required" },
        { status: 400 }
      );
    }

    // 1️⃣ Ensure album exists
    const album = await prisma.galleryAlbum.findUnique({
      where: { id: albumId },
    });

    if (!album) {
      return NextResponse.json(
        { error: "Album not found" },
        { status: 404 }
      );
    }

    // 2️⃣ Ensure photo belongs to this album
    const photo = await prisma.galleryPhoto.findFirst({
      where: {
        albumId,
        imageUrl,
      },
    });

    if (!photo) {
      return NextResponse.json(
        { error: "Photo does not belong to this album" },
        { status: 400 }
      );
    }

    // 3️⃣ Set cover image
    const updatedAlbum = await prisma.galleryAlbum.update({
      where: { id: albumId },
      data: { coverImage: imageUrl },
    });

    return NextResponse.json(updatedAlbum);
  } catch (error) {
    console.error("Set album cover error:", error);
    return NextResponse.json(
      { error: "Failed to set album cover" },
      { status: 500 }
    );
  }
}
