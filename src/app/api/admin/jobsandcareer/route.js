import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
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

    const jobsandcareer = await prisma.jobsAndCareer.create({
      data: {
        destinationId: body.destinationId,
        partTimeRules: body.partTimeRules,
        partTimeSectors: body.partTimeSectors,
        avgWage: body.avgWage,
        internshipInfo: body.internshipInfo,
        postStudyWork: body.postStudyWork,
        prPathways: body.prPathways,
        demandJobs: body.demandJobs,
      },
    });

    return NextResponse.json(
      {
        success: true,
        item: jobsandcareer,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error("POST /api/admin/jobsandcareer error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Failed to add jobs info",
      },
      { status: 500 }
    );
  }
}
