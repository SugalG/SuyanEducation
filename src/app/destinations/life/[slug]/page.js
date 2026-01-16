import HeroSection from "@/components/destinations/lifeInCountry/HeroSection";
import LifeInCountryContent from "@/components/destinations/lifeInCountry/LifeInCountryContent";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function LifeInCountryPage({ params }){
    const {slug} = await params;
    
    const lifeInfo = await prisma.destination.findUnique({
        where: { slug },
        select: {
          country: true,
          heroImage: true,
          lifeInCountry: {
            select: {
              livingCost: true,
              accommodation: true,
              insurance: true,
              transportation: true,
              foodLifestyle: true,   // ✅ correct
              safety: true,           // ✅ correct
              workLifeBalance: true,  // ✅ correct
            },
          },
        },
      });

    if (!lifeInfo) notFound();

    if(!lifeInfo.lifeInCountry) {
        redirect(`/destinations/${slug}`)
    }
    return (
        <div className="mt-5">
            <HeroSection country={lifeInfo.country} heroImage={lifeInfo.heroImage} title = "Life in" description="Cost of living, accommodation, work culture & student life"/>
            <LifeInCountryContent lifeInfo={lifeInfo}/>
        </div>
    )

}