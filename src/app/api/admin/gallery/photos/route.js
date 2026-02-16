import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import sharp from "sharp";
import pLimit from "p-limit";
import fs from "fs";
import path from "path";
import crypto from "crypto";

const IMAGE_DIR = "/var/www/suyan/images";
const MAX_CONCURRENT_IMAGES = 5;

export async function POST(req) {
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
    select: { id: true },
  });

  if (!album) {
    return NextResponse.json({ error: "Album not found" }, { status: 404 });
  }

  if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR, { recursive: true });

  const limit = pLimit(MAX_CONCURRENT_IMAGES);

  const imageUrls = await Promise.all(
    files.map((file) =>
      limit(async () => {
        // Basic validation (optional but good)
        if (!file || typeof file.arrayBuffer !== "function") {
          throw new Error("Invalid file upload");
        }

        const id = crypto.randomUUID();
        const finalFilename = `${id}.webp`;
        const filePath = path.join(IMAGE_DIR, finalFilename);

        const inputBuffer = Buffer.from(await file.arrayBuffer());

        await sharp(inputBuffer)
          .resize({ width: 1200, withoutEnlargement: true })
          .toFormat("webp", { quality: 90 })
          .toFile(filePath);

        return `/images/${finalFilename}`;
      })
    )
  );

  try {
    const result = await prisma.galleryPhoto.createMany({
      data: imageUrls.map((url) => ({
        imageUrl: url,
        albumId: album.id,
      })),
      // skipDuplicates only works if imageUrl (or a composite) is unique in schema
      // skipDuplicates: true,
    });

    return NextResponse.json({ success: true, result }, { status: 200 });
  } catch (error) {
    console.error("Gallery upload error:", error);

    // Cleanup saved files if DB write fails
    for (const url of imageUrls) {
      const filePath = path.join(IMAGE_DIR, path.basename(url));
      try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      } catch {}
    }

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
