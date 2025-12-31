import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const items = await prisma.destination.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(items);
}

export async function POST(req) {
  const body = await req.json();
  console.log("DESTINATION POST BODY:", body);

  const item = await prisma.destination.create({
    data: {
      slug: body.slug,
      country: body.country,
      description: body.description,
      whyPoints: body.whyPoints,
      education: body.education,
      popularFields: body.popularFields,
      visaUpdates: body.visaUpdates,
    },
  });

  return NextResponse.json(item);
}

export async function PUT(req) {
  const body = await req.json();

  const item = await prisma.destination.update({
    where: { id: body.id },
    data: {
      slug: body.slug,
      country: body.country,
      description: body.description,
      whyPoints: body.whyPoints,
      education: body.education,
      popularFields: body.popularFields,
      visaUpdates: body.visaUpdates,
    },
  });

  return NextResponse.json(item);
}

export async function DELETE(req) {
  const { id } = await req.json();

  await prisma.destination.delete({
    where: { id },
  });

  return NextResponse.json({ success: true });
}
