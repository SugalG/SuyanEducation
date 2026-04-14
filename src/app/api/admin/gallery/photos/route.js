import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import sharp from "sharp";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const IMAGE_DIR = "/var/www/suyan/images";
const MAX_IMAGE_WIDTH = 1200;
const WEBP_QUALITY = 90;

async function saveImageAsWebp(file) {
  if (!file || typeof file.arrayBuffer !== "function") {
    throw new Error("Invalid file upload");
  }

  if (file.type && !file.type.startsWith("image/")) {
    throw new Error("Only image files are allowed");
  }

  const id = crypto.randomUUID();
  const finalFilename = `${id}.webp`;
  const filePath = path.join(IMAGE_DIR, finalFilename);
  const inputBuffer = Buffer.from(await file.arrayBuffer());

  await sharp(inputBuffer)
    .resize({ width: MAX_IMAGE_WIDTH, withoutEnlargement: true })
    .toFormat("webp", { quality: WEBP_QUALITY })
    .toFile(filePath);

  return `/images/${finalFilename}`;
}

export async function POST(req) {
  let imageUrls = [];

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
      where: { id: String(albumId) },
      select: { id: true, coverImage: true },
    });

    if (!album) {
      return NextResponse.json({ error: "Album not found" }, { status: 404 });
    }

    if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

    for (const file of files) {
      imageUrls.push(await saveImageAsWebp(file));
    }

    const result = await prisma.$transaction(async (tx) => {
      const created = await tx.galleryPhoto.createMany({
        data: imageUrls.map((url) => ({
          imageUrl: url,
          publicId: "",
          albumId: album.id,
        })),
        // skipDuplicates only works if imageUrl (or a composite) is unique in schema
        // skipDuplicates: true,
      });

      if (!album.coverImage && imageUrls[0]) {
        await tx.galleryAlbum.update({
          where: { id: album.id },
          data: { coverImage: imageUrls[0] },
        });
      }

      return created;
    });

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Gallery upload error:", error);

    for (const url of imageUrls) {
      const filePath = path.join(IMAGE_DIR, path.basename(url));
      try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      } catch {}
    }

    return NextResponse.json(
      { success: false, error: error.message || "Failed to upload photos" },
      { status: 500 }
    );
  }
}
