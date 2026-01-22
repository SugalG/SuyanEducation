import HeroSection from "@/components/destinations/lifeInCountry/HeroSection";
import JobsAndCareerContent from "@/components/destinations/lifeInCountry/JobsAndCareerContent";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function LifeInCountryPage({ params }){
    const {slug} = await params;
    
    const jobsInfo = await prisma.destination.findUnique({
        where: { slug },
        select: {
          country: true,
          heroImage: true,
          jobsAndCareer: {
            select: {
                partTimeRules: true,
                partTimeSectors: true,
                avgWage: true,
                internshipInfo: true,
                postStudyWork: true,
                prPathways: true,
                demandJobs: true     
            }
          }
        },
      });

   
    if (!jobsInfo) notFound();

    if(!jobsInfo.jobsAndCareer) {
        redirect(`/destinations/${slug}`)
    }
    return (
        <div className="mt-24">
            <HeroSection country={jobsInfo.country} heroImage={jobsInfo.heroImage} title = "Jobs and Career In" description="Careers, salaries & opportunities"/>
            <JobsAndCareerContent jobsInfo={jobsInfo}/>
        </div>
    )

}