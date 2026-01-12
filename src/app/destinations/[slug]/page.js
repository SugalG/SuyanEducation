import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { Users, BookOpen, Globe, GraduationCap, Calendar, Target, Award, Briefcase } from "lucide-react";

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

  const whyPoints = destination.whyPoints?.split("\n") || [];
  const fields = destination.popularFields?.split("\n") || [];
  const visaUpdates = destination.visaUpdates?.split("\n") || [];

  return (
    <main className="w-full overflow-hidden mt-24">
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
            <Reveal>
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
                  <a
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    <span>Start Your Journey</span>
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
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </a>
                  <a
                    href="#why-study"
                    className="inline-flex items-center justify-center px-10 py-5 bg-white text-gray-800 font-semibold rounded-2xl border-2 border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Hero Image with Modern Frame */}
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-3xl overflow-hidden border-8 border-white">
                    <img
                      src={`/destinations/${destination.slug}.webp`}
                      alt={`Study in ${destination.country}`}
                      className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
               
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
              <BookOpen className="w-5 h-5 text-red-500" />
              <span className="text-lg font-semibold text-gray-700">About Education in {destination.country}</span>
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {destination.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Study Section */}
      {whyPoints.length > 0 && (
        <section id="why-study" className="relative bg-gradient-to-b from-white to-gray-50/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Why Choose {destination.country}?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the unique advantages that make {destination.country} an exceptional choice for Nepalese students
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyPoints.map((point, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    {/* Number Background */}
                    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-500 to-red-400 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg">
                      {i + 1}
                    </div>
                    
                    <div className="pt-6">
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {point}
                      </p>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education System */}
      {destination.education && (
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Education System And Requirements
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-2 border-gray-100 p-10 shadow-xl">
              <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed">
                {destination.education.split("\n").map((para, i) => (
                  <p key={i} className="mb-8 last:mb-0 text-lg">{para}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Popular Fields */}
      {fields.length > 0 && (
        <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Top Fields of Study
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explore the most sought-after academic disciplines in {destination.country} for Nepalese students
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {fields.map((field, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="group bg-white rounded-3xl border-2 border-gray-100 p-8 hover:border-red-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center text-white font-bold text-lg">
                        {i + 1}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1 group-hover:text-red-600 transition-colors">
                        {field}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      Premier programs and universities offering {field.toLowerCase()} with excellent career prospects.
                    </p>
                    
                    <div className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                      <span>Explore Programs</span>
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                        className="group-hover:translate-x-1 transition-transform"
                      >
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visa Updates */}
      {visaUpdates.length > 0 && (
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Visa & Immigration Updates
                </span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-gradient-to-br from-red-50 via-white to-blue-50 rounded-3xl border-2 border-red-100 shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-red-600 to-blue-950 text-white p-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">Latest Information for Nepalese Students</h3>
                <p className="text-red-100">Updated regularly by our immigration experts</p>
              </div>
              
              {/* Content */}
              <div className="p-8 sm:p-10">
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Calendar className="w-8 h-8 text-red-600" />
                      Important Updates
                    </h4>
                    <ul className="space-y-5">
                      {visaUpdates.slice(0, Math.ceil(visaUpdates.length / 2)).map((v, i) => (
                        <li key={i} className="flex gap-4 text-gray-700">
                          <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Target className="w-8 h-8 text-blue-600" />
                      Requirements & Tips
                    </h4>
                    <ul className="space-y-5">
                      {visaUpdates.slice(Math.ceil(visaUpdates.length / 2)).map((v, i) => (
                        <li key={i} className="flex gap-4 text-gray-700">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-lg">{v}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      )}

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-white to-blue-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gradient-to-r from-red-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <div className="bg-gradient-to-r from-red-600 to-blue-950 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Begin Your Educational Adventure in {destination.country}
              </h3>
              <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                Our dedicated team is ready to guide you through every step of your study abroad journey
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span>Book Free Consultation</span>
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
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </a>
                <a
                  href="tel:+977-1234567890"
                  className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-white text-white font-bold rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  Speak with Expert
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}