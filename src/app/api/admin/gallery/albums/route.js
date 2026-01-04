import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { slugify } from "@/lib/slugify";
import { getAdmin } from "@/lib/auth";

/* ---------------- GET ALBUMS (ADMIN) ---------------- */

export async function GET() {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const albums = await prisma.galleryAlbum.findMany({
      orderBy: { albumDate: "desc" },
      include: {
        photos: {
          select: { id: true },
        },
      },
    });

    const formatted = albums.map((album) => ({
      id: album.id,
      slug: album.slug,
      title: album.title,
      description: album.description,
      albumDate: album.albumDate,
      coverImage: album.coverImage,
      photoCount: album.photos.length,
    }));

    return NextResponse.json(formatted, { status: 200 });
  } catch (error) {
    console.error("Admin gallery albums fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch albums" },
      { status: 500 }
    );
  }
}

/* ---------------- CREATE ALBUM ---------------- */

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
    if (!baseSlug) {
      return NextResponse.json(
        { error: "Invalid title" },
        { status: 400 }
      );
    }

    const parsedDate = new Date(albumDate);
    if (isNaN(parsedDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid albumDate" },
        { status: 400 }
      );
    }

    let slug = baseSlug;
    let counter = 2;

    while (await prisma.galleryAlbum.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const album = await prisma.galleryAlbum.create({
      data: {
        title,
        slug,
        description,
        albumDate: parsedDate,
      },
    });

    return NextResponse.json(album, { status: 201 });
  } catch (error) {
    console.error("Create gallery album error:", error);
    return NextResponse.json(
      { error: "Failed to create album" },
      { status: 500 }
    );
  }
}
