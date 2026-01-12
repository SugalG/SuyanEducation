import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getAdmin } from "@/lib/auth";

/* =========================
   GET BLOG BY ID (ADMIN)
========================= */
export async function GET(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing blog id" },
        { status: 400 }
      );
    }

    const blog = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        country: {
          select: {
            id: true,
            country: true,
          },
        },
      },
    });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, item: blog }, { status: 200 });
  } catch (error) {
    console.error("GET /api/admin/blogs/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}

/* =========================
   UPDATE BLOG (INLINE EDIT)
========================= */
export async function PATCH(req, { params }) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing blog id" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updatedBlog = await prisma.blogPost.update({
      where: { id },
      data: {
        title: body.title,
        slug: body.slug,
        excerpt: body.excerpt,
        content: body.content,
        publishedAt: body.publishedAt
          ? new Date(body.publishedAt)
          : null,
        countryId: body.countryId,
        imageUrl: body.imageUrl,
        coverImage: body.coverImage,
      },
    });

    return NextResponse.json(
      { success: true, item: updatedBlog },
      { status: 200 }
    );
  } catch (error) {
    console.error("PATCH /api/admin/blogs/[id] error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update blog" },
      { status: 500 }
    );
  }
}

/* =========================
   DELETE BLOG
   (SAFE – NO FK ISSUES)
========================= */
export async function DELETE(req, { params }) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: "Missing blog id" },
        { status: 400 }
      );
    }

    await prisma.blogPost.delete({
      where: { id },
    });

    return NextResponse.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE /api/admin/blogs/[id] error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
