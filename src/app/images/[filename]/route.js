import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const IMAGE_DIR = "/var/www/suyan/images";

const CONTENT_TYPES = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function GET(req, context) {
  try {
    const { filename } = await context.params;
    const safeFilename = path.basename(String(filename || ""));

    if (!safeFilename || safeFilename !== filename) {
      return NextResponse.json({ error: "Invalid image path" }, { status: 400 });
    }

    const file = await readFile(path.join(IMAGE_DIR, safeFilename));
    const contentType =
      CONTENT_TYPES[path.extname(safeFilename).toLowerCase()] ||
      "application/octet-stream";

    return new NextResponse(file, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    if (error?.code === "ENOENT") {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    console.error("Image fetch error:", error);
    return NextResponse.json({ error: "Failed to load image" }, { status: 500 });
  }
}
