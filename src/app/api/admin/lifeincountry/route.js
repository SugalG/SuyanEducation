
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        const body = await req.json();
        const destinationExists = await prisma.destination.findUnique({
            where: { id: body.destinationId },
          });
      
          if (!destinationExists) {
            return NextResponse.json(
              { success: false, message: "Invalid destination ID" },
              { status: 400 }
            );
          }

          const lifeandcareer = await prisma.lifeInCountry.create({
            data: {
                destinationId: body.destinationId,
                livingCost: body.livingCost,
                accommodation: body.accommodation,
                insurance: body.insurance,
                transportation: body.transportation,
                foodLifestyle: body.foodLifestyle,
                safety: body.safety,
                workLifeBalance: body.workLifeBalance
            }
          })

          return NextResponse.json({
            success: true, item: lifeandcareer
          }, { status: 200})

    }catch(e){
        console.error("POST /api/admin/lifeandcareer error:", error)
        return NextResponse.json(
            {
              success: false,
              message: error.message || "Failed to create university",
            },
            { status: 500 }
          );
    }
}