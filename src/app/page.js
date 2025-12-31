import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GlobalReachSection from "@/components/GlobalReachSection";
import TestPreparationPreview from "@/components/TestPreparationPreview";
import Footer from "@/components/Footer";
import DestinationPreview from "@/components/DestinationsPreview";
import SuccessStoriesPreview from "@/components/SuccessStoriesPreview";
import Testimonials from "@/components/Testimonials";


export default async function HomePage() {
  const settings = await prisma.siteSettings.findFirst();

  return (
    <>
      <Navbar settings={settings} />
      <Hero />
   
      <GlobalReachSection />
      <TestPreparationPreview />
      <DestinationPreview />
      {/* <SuccessStoriesPreview /> */}
      <Testimonials/>
      
      
    </>
  );
}
