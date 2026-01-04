import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";

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
    <main className="max-w-4xl mx-auto px-5 py-16">

    {/* HERO */}
<section className="relative w-full h-[70vh] min-h-[520px] mt-24 md:mt-28 mb-20 overflow-hidden">

  {/* Background image */}
  <img
    src={`/destinations/${destination.slug}.webp`}
    alt={`Study in ${destination.country}`}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Global dark overlay */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Directional gradient for text area */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

  {/* Vignette to hide cropped edges */}
  <div className="absolute inset-0 pointer-events-none"
    style={{
      boxShadow: "inset 0 0 120px rgba(0,0,0,0.85)"
    }}
  />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
    <Reveal>
      <div className="max-w-2xl text-white">

        <span className="inline-block mb-4 text-sm tracking-widest uppercase text-red-400">
          Study Abroad
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-red-500">
          Study in {destination.country}
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-white/90">
          World-class education, globally recognized degrees, and expert
          guidance for Nepalese students planning to study in{" "}
          {destination.country}.
        </p>

        {/* Trust points */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/90">
          <span>✔ Top Universities</span>
          <span>✔ Visa Guidance</span>
          <span>✔ Career Pathways</span>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg"
          >
            Get Free Counseling
          </a>
        </div>

      </div>
    </Reveal>
  </div>

</section>


      {/* INTRO */}
      <Reveal className="mb-14">
        <h2 className="text-3xl font-bold text-red-500 mb-4">
          Study in {destination.country} – A Premier Destination for Nepalese Students
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {destination.description}
        </p>
      </Reveal>

      {/* WHY COUNTRY */}
      {whyPoints.length > 0 && (
        <Reveal className="mb-20">
          <h3 className="text-3xl font-bold text-red-500 mb-10">
            Why Study in {destination.country}?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPoints.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {point}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* EDUCATION SYSTEM */}
      {destination.education && (
        <Reveal className="mb-24">
          <h3 className="text-3xl font-bold text-red-500 mb-6">
            {destination.country} Education System
          </h3>

          <div className="prose prose-lg max-w-none text-gray-700">
            {destination.education.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </Reveal>
      )}

      {/* POPULAR FIELDS */}
      {fields.length > 0 && (
        <Reveal className="mb-24">
          <h3 className="text-3xl font-bold text-red-500 mb-4">
            Popular Fields of Study
          </h3>

          <p className="text-gray-600 mb-10 max-w-3xl">
            Nepalese students commonly choose these study areas in{" "}
            {destination.country}, based on career prospects, affordability,
            and post-study opportunities.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fields.map((field, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg hover:border-red-300 transition-all"
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {field}
                </h4>

                <p className="text-sm text-gray-600">
                  Explore programs and universities offering{" "}
                  {field.toLowerCase()} in {destination.country}.
                </p>

                <span className="mt-4 inline-flex items-center text-red-600 font-medium">
                  Learn more →
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      )}

      {/* VISA UPDATES */}
      {visaUpdates.length > 0 && (
        <Reveal className="mb-24">
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 sm:p-10">
            <h3 className="text-3xl font-bold text-red-500 mb-6">
              Visa Updates for Studying in {destination.country}
            </h3>

            <ul className="space-y-4">
              {visaUpdates.map((v, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-red-600 font-bold">•</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      )}

      {/* FINAL CTA */}
      <Reveal className="mt-28 text-center">
        <a
          href="/contact"
          className="inline-block bg-red-600 text-white px-10 py-4 rounded-lg font-semibold text-lg shadow hover:bg-red-700 transition"
        >
          Get Free Counseling
        </a>
      </Reveal>

    </main>
  );
}
