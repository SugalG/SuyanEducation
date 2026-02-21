import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";
import path from "path";
import fs from "fs";

/* ---------------- DELETE ALBUM ---------------- */

const IMAGE_DIR = "/var/www/suyan/images";

export async function DELETE(req, context) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // ✅ FIX: await params
    const { slug } = await context.params;

    if (!slug) {
      return NextResponse.json(
        { error: "Invalid album slug" },
        { status: 400 }
      );
    }

    const album = await prisma.galleryAlbum.findUnique({
      where: { slug },
      include: { photos: true },
    });

    if (!album) {
      return NextResponse.json(
        { error: "Album not found" },
        { status: 404 }
      );
    }

    for (const photo of album.photos) {
      const filePath = path.join(IMAGE_DIR, path.basename(photo.imageUrl));
      try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      } catch {
        return NextResponse.json(
          { error: "Photo Doesn't exist" },
          { status: 400 }
        );
      }
    }

    // 🔥 Delete photos from Cloudinary
    // for (const photo of album.photos) {
    //   if (photo.publicId) {
    //     await cloudinary.uploader.destroy(photo.publicId);
    //   }
    // }

    // 🔥 Delete album (DB cascade deletes photos)
    await prisma.galleryAlbum.delete({
      where: { slug },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete gallery album error:", error);
    return NextResponse.json(
      { error: "Failed to delete album" },
      { status: 500 }
    );
  }
}
