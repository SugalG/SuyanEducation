import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { Users, BookOpen, Globe, GraduationCap, Calendar, Target, Award, Briefcase } from "lucide-react";
import RevealTest from "@/components/RevealTest";

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
    <main className="w-full overflow-hidden scroll-mt-[var(--navbar-height)]">
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
                      <path d="m9 18 6-6-6-6" />
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

      {/* Introduction Section */}
      <section
        id="introduction"
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-[var(--navbar-height)]"
      >
        <div className="text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
              <BookOpen className="w-5 h-5 text-red-500" />
              <span className="text-lg font-semibold text-gray-700">
                About Education in {destination.country}
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {destination.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SIDEBAR + CONTENT ================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14">
          {/* ===== Sidebar ===== */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 bg-white rounded-2xl border border-gray-100 shadow-lg p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-5">
                On this page
              </h4>

              <nav className="space-y-3 text-sm font-medium">
                <a
                  href="#introduction"
                  className="block text-gray-600 hover:text-red-600 transition"
                >
                  Introduction
                </a>

                {whyPoints.length > 0 && (
                  <a
                    href="#why-study"
                    className="block text-gray-600 hover:text-red-600 transition"
                  >
                    Why Choose {destination.country}
                  </a>
                )}

                {destination.education && (
                  <a
                    href="#education"
                    className="block text-gray-600 hover:text-red-600 transition"
                  >
                    Education System & Requirements
                  </a>
                )}

                {fields.length > 0 && (
                  <a
                    href="#fields"
                    className="block text-gray-600 hover:text-red-600 transition"
                  >
                    Top Fields of Study
                  </a>
                )}

                {visaUpdates.length > 0 && (
                  <a
                    href="#visa"
                    className="block text-gray-600 hover:text-red-600 transition"
                  >
                    Visa & Immigration Updates
                  </a>
                )}
              </nav>
            </div>
          </aside>

          {/* ===== Main Content ===== */}
          <div className="lg:col-span-3 space-y-32">
            {/* ===== WHY STUDY ===== */}
            {whyPoints.length > 0 && (
              <section id="why-study" className="scroll-mt-[var(--navbar-height)] pt-10">

                <Reveal>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                      Why Choose {destination.country}?
                    </span>
                  </h2>
                </Reveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {whyPoints.map((point, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition">
                        <div className="text-red-600 font-bold text-2xl mb-4">
                          {i + 1}
                        </div>
                        <p className="text-gray-700">{point}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* ===== EDUCATION ===== */}
            {destination.education && (
              <section id="education" className="scroll-mt-[var(--navbar-height)] pt-10">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                      Education System & Requirements
                    </span>
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="bg-white rounded-3xl p-10 border shadow-xl">
                    {destination.education.split("\n").map((p, i) => (
                      <p key={i} className="mb-6 text-gray-700 text-lg">
                        {p}
                      </p>
                    ))}
                  </div>
                </Reveal>
              </section>
            )}

            {/* ===== FIELDS ===== */}
            {fields.length > 0 && (
              <section id="fields" className="scroll-mt-[var(--navbar-height)] pt-10">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                      Top Fields of Study
                    </span>
                  </h2>
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                  {fields.map((field, i) => (
                    <Reveal key={i} delay={i * 0.1}>
                      <div className="bg-white p-8 rounded-3xl border shadow hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {field}
                        </h3>
                        <p className="text-gray-600">
                          High-demand programs with strong career outcomes.
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </section>
            )}

            {/* ===== VISA ===== */}
            {visaUpdates.length > 0 && (
              <section id="visa" className="scroll-mt-[var(--navbar-height)] pt-10">
                <Reveal>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                      Visa & Immigration Updates
                    </span>
                  </h2>
                </Reveal>

                <Reveal delay={0.2}>
                  <ul className="space-y-4">
                    {visaUpdates.map((v, i) => (
                      <li
                        key={i}
                        className="bg-white rounded-2xl p-6 shadow border"
                      >
                        {v}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </section>
            )}
          </div>
        </div>
      </section>
    
    </main>
  );
}