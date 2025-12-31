import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET() {
  const items = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function POST(req) {
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
