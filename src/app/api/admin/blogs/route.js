import { getAdmin } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req) {
  try {
    const admin = await getAdmin();
    if (!admin) {
      return NextResponse.json(
        {
          message: "You are not authroized!!!",
        },
        { status: 401 }
      );
    }
    const formData = await req.formData();
    const body = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      countryId: formData.get("countryId"),
      excerpt: formData.get("excerpt"),
      content: formData.get("content"),
      publishedAt: formData.get("publishedAt"),
    };

    const image = formData.get("image");
    const coverImage = formData.get("coverImage");

    const uploadToCloudinary = (file, folder = "blogs") => {
      return new Promise(async (resolve, reject) => {
        const buffer = Buffer.from(await file.arrayBuffer());

        cloudinary.uploader
          .upload_stream({ folder }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });
    };

    const uploadedImage = await uploadToCloudinary(image, "blogs");

    // 2️⃣ Upload cover image if exists
    let uploadedCoverImage = null;
    if (coverImage) {
      uploadedCoverImage = await uploadToCloudinary(coverImage, "blogs");
    }

    const item = await prisma.blogPost.create({
      data: {
        title: body.title,
        slug: body.slug,
        countryId: body.countryId,
        imageUrl: uploadedImage.secure_url,
        excerpt: body.excerpt,
        content: body.content,
        coverImage: uploadedCoverImage ? uploadedCoverImage.secure_url : null,
        publishedAt: body.publishedAt ? new Date(body.publishedAt) : null,
      },
    });

    return NextResponse.json(
      {
        success: true,
        item,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      {
        success: false,
        message: "Bad response from server",
      },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const destinationId = searchParams.get("destinationId");
    const all = searchParams.get("all") === "true";
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);

    let blogs;
    let pagination = null;

    // 🔹 Case 3: Fetch ALL blogs explicitly
    if (all) {
      blogs = await prisma.blogPost.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          country: {
            select: { id: true, country: true },
          },
        },
      });
    }

    // 🔹 Case 2: Destination blogs (no pagination)
    else if (destinationId) {
      blogs = await prisma.blogPost.findMany({
        where: { countryId: destinationId },
        orderBy: { publishedAt: "desc" },
        include: {
          country: {
            select: { id: true, country: true },
          },
        },
      });
    }

    // 🔹 Case 1: Paginated blogs
    else {
      const skip = (page - 1) * limit;

      const [items, total] = await Promise.all([
        prisma.blogPost.findMany({
          skip,
          take: limit,
          orderBy: { publishedAt: "desc" },
          select: {
            id: true,
            title: true,
            country: {
              select: { id: true, country: true },
            },
          },
        }),
        prisma.blogPost.count(),
      ]);

      blogs = items;
      pagination = {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      };
    }

    return NextResponse.json(
      { success: true, items: blogs, pagination },
      { status: 200 }
    );
  } catch (e) {
    console.error("GET /blogs error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    await prisma.blogPost.delete({
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