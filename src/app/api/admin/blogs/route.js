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
    const url = new URL(request.url);
    const destinationId = url.searchParams.get("destinationId");
    let blogs;

    if (destinationId) {
      blogs = await prisma.blogPost.findMany({
        where: { countryId: destinationId },
        orderBy: { publishedAt: "desc" },
      });
    } else {
      blogs = await prisma.blogPost.findMany({
        orderBy: { createdAt: "desc" },
        select: {
          country: {
            select: {
              country: true,
              id: true,
            },
          },
        },
      });
    }
    return NextResponse.json({ success: true, items: blogs }, { status: 200 });
  } catch (e) {
    console.error("GET /blogs  error:", e);
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs " },
      { status: 500 }
    );
  }
}
