import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* ======================
   GET ALL
====================== */
export async function GET() {
  try {
    const items = await prisma.destination.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ success: true, items });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, message: "Couldn't fetch data" },
      { status: 500 }
    );
  }
}

/* ======================
   CREATE
====================== */
export async function POST(req) {
  try {
    const body = await req.json();

    const item = await prisma.destination.create({
      data: {
        slug: body.slug,
        country: body.country,
        description: body.description ?? null,
        whyPoints: body.whyPoints ?? null,
        education: body.education ?? null,
        popularFields: body.popularFields ?? null,
        visaUpdates: body.visaUpdates ?? null,
      },
    });

    return NextResponse.json({ success: true, item });
  } catch (e) {
    console.error("POST destination error:", e);
    return NextResponse.json(
      { success: false, message: "Couldn't create destination" },
      { status: 500 }
    );
  }
}
