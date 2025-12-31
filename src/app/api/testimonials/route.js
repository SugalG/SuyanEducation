import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const items = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });

  return NextResponse.json(items);
}
