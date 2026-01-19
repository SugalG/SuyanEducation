import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { Users, BookOpen, Globe, GraduationCap, Calendar, Target, Award, Briefcase } from "lucide-react";
import RevealTest from "@/components/RevealTest";
import DestinationContent from "@/components/destinations/DestinationContent";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const destination = await prisma.destination.findUnique({
    where: { slug },
  });

  if (!destination) return {};

  return {
    title: `Study in ${destination.country} from Nepal | Suyan Education`,
    description: destination.description,
  };
}


export default async function DestinationPage({ params }) {
  const { slug } = await params;

  const destination = await prisma.destination.findUnique({
    where: { slug },
  });

  if (!destination) notFound();

  return (
    <main className="w-full">
      {/* Hero Section - Modern Design */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Beautiful Background with Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-100/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/20 to-transparent" />

          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/30 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealTest animateImmediately>
              <div>
                {/* Elegant Country Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Premier Study Destination
                  </span>
                </div>

                {/* Main Heading with Elegant Design */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                    {destination.country}
                  </span>
                </h1>

                {/* Animated Decorative Line */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                  <div className="w-4 h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-700 leading-relaxed mb-10">
                  Embark on your educational journey in {destination.country} with world-class institutions,
                  cutting-edge research facilities, and unparalleled opportunities for Nepalese students.
                </p>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <GraduationCap className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">Global Recognition</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <Briefcase className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">Career Opportunities</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <Award className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">Quality Education</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <Target className="w-8 h-8 text-red-600 mb-2" />
                    <span className="text-sm font-semibold text-gray-800">Visa Success</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={`/destinations/life/${destination.slug}`}
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <span>Life in {destination.country}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                  <Link
                    href={`/destinations/career/${destination.slug}`}
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300"
                  >
                    Jobs and Career in {destination.country}
                  </Link>
                </div>
              </div>
            </RevealTest>

            {/* Hero Image with Modern Frame */}
            <RevealTest animateImmediately delay={0.5}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-3xl overflow-hidden border-8 border-white">
                    {destination.heroImage ? (
                      <img
                        src={destination.heroImage}
                        alt={`Study in ${destination.country}`}
                        className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center text-gray-500">
                        No image uploaded
                      </div>
                    )}
                  </div>

                </div>


              </div>
            </RevealTest>
          </div>
        </div>
      </section>

      {/* Sidebar + Content Section */}
      <DestinationContent destination={destination} />
    
    </main>
  );
}