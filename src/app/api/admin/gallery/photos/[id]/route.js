import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

export async function DELETE(req, { params }) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    const photo = await prisma.galleryPhoto.findUnique({
      where: { id },
      include: { album: true },
    });

    if (!photo) {
      return NextResponse.json(
        { error: "Photo not found" },
        { status: 404 }
      );
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(photo.publicId);

    // Delete from DB
    await prisma.galleryPhoto.delete({
      where: { id },
    });

    // If this photo was cover image, reset cover
    if (photo.album.coverImage === photo.imageUrl) {
      const nextPhoto = await prisma.galleryPhoto.findFirst({
        where: { albumId: photo.albumId },
        orderBy: { createdAt: "asc" },
      });

      await prisma.galleryAlbum.update({
        where: { id: photo.albumId },
        data: { coverImage: nextPhoto?.imageUrl || null },
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete gallery photo error:", error);
    return NextResponse.json(
      { error: "Failed to delete photo" },
      { status: 500 }
    );
  }
}

export async function PATCH(req, { params }) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { caption } = await req.json();

    await prisma.galleryPhoto.update({
      where: { id: params.id },
      data: { caption },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update photo caption error:", error);
    return NextResponse.json(
      { error: "Failed to update caption" },
      { status: 500 }
    );
  }
}
