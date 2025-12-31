import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const formData = await req.formData();
    const albumId = formData.get("albumId");
    const files = formData.getAll("images");

    if (!albumId || !files.length) {
      return NextResponse.json(
        { error: "albumId and images are required" },
        { status: 400 }
      );
    }

    const album = await prisma.galleryAlbum.findUnique({
      where: { id: albumId },
    });

    if (!album) {
      return NextResponse.json(
        { error: "Album not found" },
        { status: 404 }
      );
    }

    const uploadedPhotos = [];

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const upload = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          {
            folder: "gallery",
          },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        ).end(buffer);
      });

      const photo = await prisma.galleryPhoto.create({
        data: {
          albumId: album.id,
          imageUrl: upload.secure_url,
          publicId: upload.public_id,
        },
      });

      uploadedPhotos.push(photo);

      // If album has no cover yet, set first image as cover
      if (!album.coverImage) {
        await prisma.galleryAlbum.update({
          where: { id: album.id },
          data: { coverImage: upload.secure_url },
        });
      }
    }

    return NextResponse.json(uploadedPhotos);
  } catch (error) {
    console.error("Upload gallery photos error:", error);
    return NextResponse.json(
      { error: "Failed to upload photos" },
      { status: 500 }
    );
  }
}
