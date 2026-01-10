import { NextResponse } from "next/server";
import cloudinary from "cloudinary";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import os from "os";

cloudinary.v2.config({
  secure: true,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const type = formData.get("type") || "general";

    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tempPath = path.join(os.tmpdir(), file.name);
    await writeFile(tempPath, buffer);

    const result = await cloudinary.v2.uploader.upload(tempPath, {
      folder: `consultancy/${type}`,
    });

    // clean temp file
    await unlink(tempPath);

    return NextResponse.json({
      url: result.secure_url,
    });
  } catch (err) {
    console.error("Upload failed:", err);
    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}
