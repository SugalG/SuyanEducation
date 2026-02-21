import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import sharp from "sharp";


export const runtime = "nodejs";
const IMAGE_DIR = "/var/www/suyan/images";

function safeString(v) {
  if (v === null || v === undefined) return "";
  return String(v).trim();
}

function safeBool(v) {
  // FormData sends strings like "true"/"false"/"on"
  const s = String(v ?? "").toLowerCase();
  return s === "true" || s === "1" || s === "on" || s === "yes";
}


async function saveSingleImageAsWebp(file) {
 
  // Ensure it is a File-like object from FormData
  if (typeof file !== "object" || typeof file.arrayBuffer !== "function") {
    throw new Error("Invalid file upload");
  }
  const id = crypto.randomUUID();
  const finalFilename = `${id}.webp`;
  const filePath = path.join(IMAGE_DIR, finalFilename);

  const inputBuffer = Buffer.from(await file.arrayBuffer());

  // Convert + resize
  await sharp(inputBuffer)
    .resize({ width: 1200, withoutEnlargement: true })
    .toFormat("webp", { quality: 90 })
    .toFile(filePath);

  return `/images/${finalFilename}`;
}



export async function GET() {
  const items = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function POST(req) {
  const admin = await getAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const formData = await req.formData();

    const name = safeString(formData.get("name"));
    const message = safeString(formData.get("message"));
    const country = safeString(formData.get("country"));
    const program = safeString(formData.get("program"));
    const year = safeString(formData.get("year"));
    const highlight = safeString(formData.get("highlight"));
    const isFeatured = safeBool(formData.get("isFeatured"));

    if (!name || !message) {
      return NextResponse.json(
        { error: "Name and message required" },
        { status: 400 }
      );
    }

    const file = formData.get("image");
    if (!file) {
      return NextResponse.json(
        { error: "Image is required" },
        { status: 400 }
      );
    }
    
    let imageUrl = await saveSingleImageAsWebp(file);
    const item = await prisma.testimonial.create({
      data: {
        name,
        message,
        imageUrl,
        country,
        program,
        year,
        highlight,
        isFeatured: Boolean(isFeatured),
      },
    });

    return NextResponse.json({
      success:true
    }, {status:200})
  }catch(e){
    console.error(e);
    if (imageUrl){
      const filePath = path.join(IMAGE_DIR, path.basename(imageUrl));
      try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      } catch {}
    }
    return NextResponse.json({
      success:false
    }, {status:500})

  }
}

export async function DELETE(req) {
  const admin = await getAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();

  if (!id) {
    return NextResponse.json(
      { error: "Missing testimonial id" },
      { status: 400 }
    );
  }

  const item = await prisma.testimonial.findUnique({where: {id}});
  const filePath = path.join(IMAGE_DIR, path.basename(item.imageUrl));
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch {
    return NextResponse.json(
      { error: "Image doesn't exist!!!" },
      { status: 400 }
    );
  }

  await prisma.testimonial.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}


export async function PUT(req) {
  const admin = await getAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const {
    id,
    name,
    message,
    imageUrl,
    country,
    program,
    year,
    highlight,
    isFeatured,
  } = await req.json();

  if (!id || !name || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const updated = await prisma.testimonial.update({
    where: { id },
    data: {
      name,
      message,
      imageUrl,
      country,
      program,
      year,
      highlight,
      isFeatured: Boolean(isFeatured),
    },
  });

  return NextResponse.json(updated);
}
