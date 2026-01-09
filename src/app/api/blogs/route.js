import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const countryId = searchParams.get("countryId");

    const blogs = await prisma.blogPost.findMany({
      where: countryId ? { countryId } : {},
      orderBy: { publishedAt: "desc" },
      include: {
        country: true,
      },
    });

    return NextResponse.json({ success: true, items: blogs });
  } catch (e) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
