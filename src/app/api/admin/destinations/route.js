import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.destination.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(
      {
        items,
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Couldn't fetch data!!!",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const body = await req.json();

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

    return NextResponse.json(
      {
        item,
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Couldn't post data!!!",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  try {
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

    return NextResponse.json(
      {
        item,
        success: true,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        message: "Couldn't update data!!!",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    await prisma.destination.delete({
      where: { id },
    });

    return NextResponse.json({ success: true }, {status: 200});
  } catch (e) {
      console.error(e);
      return NextResponse.json({
        success: false
      }, {status: 500})
  }
}
