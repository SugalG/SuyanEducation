import Image from "next/image";
import { GraduationCap, Plane, CheckCircle, Star } from "lucide-react";
import prisma from "@/lib/prisma";

async function getTestimonials() {
  const items = await prisma.testimonial.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return items;
}

function initialsFromName(name) {
  return (name || "ST")
    .split(" ")
    .map((n) => n?.[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }) {
  const initials = initialsFromName(t?.name);

  return (
    <article className="group relative w-[320px] sm:w-[360px] lg:w-[420px] flex-shrink-0 overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Top gradient line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 to-blue-900 opacity-80" />

      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-red-50/70 via-white/30 to-blue-50/70" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-blue-800 opacity-20 blur-md group-hover:opacity-30 transition-opacity" />
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white shadow-md bg-white">
              {t?.imageUrl ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/${t.imageUrl}`}
                  alt={t.name || "Student"}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="64px"
                  unoptimized={process.env.NODE_ENV !== "production"}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center">
                  <span className="font-bold text-lg text-gray-700">{initials}</span>
                </div>
              )}
            </div>
          </div>

          {/* Name / meta */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-semibold text-gray-900 leading-tight truncate">
                  {t?.name}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
                  {t?.country && (
                    <span className="inline-flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-red-500" />
                      <span className="truncate">{t.country}</span>
                    </span>
                  )}
                  {t?.year && (
                    <span className="text-gray-500">Class of {t.year}</span>
                  )}
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 px-2.5 py-1 rounded-full">
                <CheckCircle className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

            {/* Program */}
            {t?.program && (
              <div className="mt-2 inline-flex items-center gap-1.5 text-xs text-gray-600 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                <GraduationCap className="w-3.5 h-3.5" />
                <span className="truncate max-w-[260px]">{t.program}</span>
              </div>
            )}
          </div>
        </div>

        {/* Stars */}
        <div className="mt-5 flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current opacity-90" />
          ))}
          <span className="ml-2 text-xs text-gray-500">5.0</span>
        </div>

        {/* Quote */}
        <div className="mt-4">
          <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base">
            <span className="text-gray-300 text-2xl font-bold mr-1">“</span>
            <span className="font-medium">{t?.message}</span>
            <span className="text-gray-300 text-2xl font-bold ml-1">”</span>
          </p>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200/70 flex items-center justify-between">
          <span className="text-xs text-gray-500">Guided by Suyan Education</span>
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-600 to-blue-800 opacity-70" />
        </div>
      </div>
    </article>
  );
}

export default async function Testimonials() {
  const items = await getTestimonials();
  console.log(items);
  if (!items?.length) return null;
  
  // Duplicate for seamless marquee
  const track = [...items, ...items, ...items];

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-red-200/30 to-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-blue-200/25 to-red-200/20 blur-3xl" />
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-gray-200 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-30" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>
          <span className="text-sm font-medium text-gray-700">Student Voices</span>
        </div>

        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>

        <div className="flex justify-center mt-4">
          <div className="w-44 sm:w-52 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full" />
        </div>

        <p className="mt-7 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
          Real experiences from students who secured admissions with{" "}
          <span className="font-semibold text-red-600">our expert guidance</span> worldwide.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden rounded-[28px]">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-10" />

        <div className="marquee gap-6 py-2">
          {track.map((t, idx) => (
            <TestimonialCard key={`${t.id ?? "t"}-${idx}`} t={t} />
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-5">
        Hover over the carousel to pause.
      </p>
    </section>
  );
}