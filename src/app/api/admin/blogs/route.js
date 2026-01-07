import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        const body = await req.json();

        const item = await prisma.blogPost.create({
            data: {
                title: body.title,
                slug: body.slug,
                countryId: body.countryId,
                imageUrl: body.imageUrl,
                excerpt: body.excerpt,
                content: body.content,
                coverImage: body.coverImage,
                publishedAt: body.publishedAt ? new Date(body.publishedAt) : null

            }
        })

        return NextResponse.json({
            success: true,
            item
        }, {status: 200})
    }catch(e){
        console.error(e);
        return NextResponse.json({
            success: false,
            message: "Bad response from server"
        }, {status:500})
    }
}

export async function GET(req){
    try {
        const url = new URL(request.url);
        const destinationId = url.searchParams.get("destinationId");
        let blogs ;
        
        if(destinationId){
            blogs  = await prisma.blogPost.findMany({
                where: {countryId : destinationId},
                orderBy: {publishedAt: 'desc'}
            }); 
        }else {
            blogs  = await prisma.blogPost.findMany({
                orderBy: { createdAt: "desc" },
                select: {
                    country: {
                        select: {
                            country: true,
                            id: true
                        }
                    }
                }
              });
        }
        return NextResponse.json(
            { success: true, items: blogs  },
            { status: 200 }
          );
    }catch(e){
        console.error("GET /blogs  error:", e);
        return NextResponse.json(
          { success: false, message: "Failed to fetch blogs " },
          { status: 500 }
        );
    }
}