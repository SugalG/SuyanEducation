import prisma from "@/lib/prisma";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestPreparationPreview from "@/components/TestPreparationPreview";
import Footer from "@/components/Footer";
import DestinationPreview from "@/components/DestinationsPreview";
import SuccessStoriesPreview from "@/components/SuccessStoriesPreview";
import Testimonials from "@/components/Testimonials";
import dynamic from "next/dynamic";
import GlobalReachSection from "@/components/GlobalReachSection";
import BlogsPreview from "@/components/BlogsPreview";
import UniversitiesPreview from "@/components/UniversitiesPreview";



export default async function HomePage() {
  const settings = await prisma.siteSettings.findFirst();

  return (
    <>
      {/* <Navbar settings={settings} /> */}
      {/* <Hero /> */}
   
      <GlobalReachSection />
      <TestPreparationPreview />
      {/* <DestinationPreview /> */}
      {/* <SuccessStoriesPreview /> */}
      <UniversitiesPreview/>
      {/* <Testimonials/> */}
      <BlogsPreview/>
      
      
    </>
  );
}
