import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";

export const runtime = "nodejs";

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

  const body = await req.json();
  const {
    name,
    message,
    imageUrl,
    country,
    program,
    year,
    highlight,
    isFeatured,
  } = body;

  if (!name || !message) {
    return NextResponse.json(
      { error: "Name and message required" },
      { status: 400 }
    );
  }

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

  return NextResponse.json(item);
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
