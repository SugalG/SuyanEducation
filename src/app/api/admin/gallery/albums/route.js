import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { getAdmin } from "@/lib/auth"; // adjust if your admin auth helper name differs

export async function POST(req) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, description, albumDate } = await req.json();

    if (!title || !albumDate) {
      return NextResponse.json(
        { error: "Title and albumDate are required" },
        { status: 400 }
      );
    }

    const baseSlug = slugify(title);
    let slug = baseSlug;
    let counter = 2;

    // Ensure unique slug
    while (
      await prisma.galleryAlbum.findUnique({ where: { slug } })
    ) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const album = await prisma.galleryAlbum.create({
      data: {
        title,
        slug,
        description,
        albumDate: new Date(albumDate),
      },
    });

    return NextResponse.json(album);
  } catch (error) {
    console.error("Create gallery album error:", error);
    return NextResponse.json(
      { error: "Failed to create album" },
      { status: 500 }
    );
  }
}
