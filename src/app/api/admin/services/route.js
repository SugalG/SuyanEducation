import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getAdmin } from "@/lib/auth";

export async function GET() {
  const items = await prisma.service.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function POST(req) {
  const admin = await getAdmin();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { title, slug, summary, content, heroImage, isActive } =
    await req.json();

  if (!title || !slug) {
    return NextResponse.json(
      { error: "Title and slug required" },
      { status: 400 }
    );
  }

  const item = await prisma.service.create({
    data: {
      title,
      slug,
      summary,
      content,
      heroImage,
      isActive: Boolean(isActive),
    },
  });

  return NextResponse.json(item);
}

export async function PUT(req) {
  const admin = await getAdmin();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id, title, slug, summary, content, heroImage, isActive } =
    await req.json();

  if (!id || !title || !slug) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const updated = await prisma.service.update({
    where: { id },
    data: {
      title,
      slug,
      summary,
      content,
      heroImage,
      isActive: Boolean(isActive),
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(req) {
  const admin = await getAdmin();
  if (!admin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await req.json();

  await prisma.service.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
