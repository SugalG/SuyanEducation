import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const param = await params;
    const id = param.id;

    const blog = await prisma.blogPost.findUnique({
      where: { id },
      include: { country: { select: { id: true, country: true } } },
    });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, item: blog }, { status: 200 });
  } catch (e) {
    console.error("GET /blogs/[id] error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

// Optional: Update blog
export async function PATCH(req, { params }) {
  try {
    const param = await params;
    const id = param.id;
    
    const body = await req.json();

    const updatedBlog = await prisma.blogPost.update({
      where: { id },
      data: body,
    });

    return NextResponse.json({ success: true, item: updatedBlog });
  } catch (e) {
    console.error("PATCH /blogs/[id] error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to update blog" },
      { status: 500 }
    );
  }
}

// Optional: Delete blog
export async function DELETE(req, {params}) {
    try {
      const param = await params;
      const id = param?.id;
      if (!id) {
        return NextResponse.json(
          { success: false, message: "Missing id" },
          { status: 400 }
        );
      }
  
      console.log("Deleting blog with id:", id);
  
      // If your Prisma id is String
      await prisma.blogPost.delete({
        where: { id }, 
      });
  
      return NextResponse.json({ success: true });
    } catch (e) {
      console.error("DELETE /blogs/[id] error:", e);
      return NextResponse.json(
        { success: false, message: e.message },
        { status: 500 }
      );
    }
  }