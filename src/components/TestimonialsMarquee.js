"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { GraduationCap, Plane, CheckCircle, Star } from "lucide-react";

function initialsFromName(name) {
  return (name || "ST")
    .split(" ")
    .map((n) => n?.[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }) {
  const initials = initialsFromName(t?.name);
  const [expanded, setExpanded] = useState(false);

  const message = t?.message || "";
  const shouldShowExpand = message.length > 170;

  return (
    <article className="group relative h-full min-h-[390px] w-[280px] sm:w-[320px] lg:w-[360px] flex-shrink-0 overflow-hidden rounded-3xl border border-gray-200 bg-white/90 backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-600 to-blue-900 opacity-80" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-red-50/70 via-white/20 to-blue-50/70" />

      <div className="relative flex h-full flex-col p-6">
        <div className="flex items-start gap-4">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-red-600 to-blue-800 opacity-20 blur-md transition-opacity group-hover:opacity-30" />
            <div className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden rounded-full border-2 border-white bg-white shadow-md">
              {t?.imageUrl ? (
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}/${t.imageUrl}`}
                  alt={t.name || "Student"}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="64px"
                  unoptimized={process.env.NODE_ENV !== "production"}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-red-50 to-blue-50">
                  <span className="text-lg font-bold text-gray-700">
                    {initials}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate font-semibold leading-tight text-gray-900">
                  {t?.name || "Student"}
                </h3>

                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
                  {t?.country && (
                    <span className="inline-flex items-center gap-1.5">
                      <Plane className="h-3.5 w-3.5 text-red-500" />
                      <span className="truncate">{t.country}</span>
                    </span>
                  )}

                  {t?.year && (
                    <span className="text-gray-500">Class of {t.year}</span>
                  )}
                </div>
              </div>

              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700">
                <CheckCircle className="h-3.5 w-3.5" />
                Verified
              </span>
            </div>

            {t?.program && (
              <div className="mt-2 inline-flex max-w-full items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
                <GraduationCap className="h-3.5 w-3.5 flex-shrink-0" />
                <span className="truncate">{t.program}</span>
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-current opacity-90" />
          ))}
          <span className="ml-2 text-xs text-gray-500">5.0</span>
        </div>

        <div className="mt-4 flex-1">
          <p
            className={`leading-relaxed text-gray-800 text-[15px] sm:text-base ${
              expanded ? "" : "line-clamp-5"
            }`}
          >
            <span className="mr-1 text-2xl font-bold text-gray-300">“</span>
            <span className="font-medium">{message}</span>
            <span className="ml-1 text-2xl font-bold text-gray-300">”</span>
          </p>

          {shouldShowExpand && (
            <button
              type="button"
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-3 text-sm font-medium text-blue-800 transition hover:text-red-600"
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-gray-200/70 pt-4">
          <span className="text-xs text-gray-500">
            Guided by Suyan Education
          </span>
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-red-600 to-blue-800 opacity-70" />
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsMarquee({ items }) {
  const track = useMemo(() => [...items, ...items, ...items], [items]);

  return (
    <section className="relative mx-auto mt-16 max-w-[1400px] overflow-x-hidden px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-24 lg:px-8 xl:mt-16">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-96px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-red-200/30 to-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-blue-200/25 to-red-200/20 blur-3xl" />
      </div>

      <div className="mx-auto mb-10 max-w-4xl px-4 text-center sm:mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600" />
          </span>
          <span className="text-sm font-medium text-gray-700">
            Student Voices
          </span>
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Success Stories
          </span>
        </h2>

        <div className="mt-4 flex justify-center">
          <div className="h-1.5 w-44 rounded-full bg-gradient-to-r from-red-600 to-blue-800 sm:w-52" />
        </div>

        <p className="mt-7 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
          Real experiences from students who secured admissions with{" "}
          <span className="font-semibold text-red-600">
            our expert guidance
          </span>{" "}
          worldwide.
        </p>
      </div>

      <div className="relative w-full overflow-hidden rounded-[28px]">
        <div className="marquee-viewport py-2">
          <div className="marquee gap-6">
            {track.map((t, idx) => (
              <TestimonialCard key={`${t.id ?? "t"}-${idx}`} t={t} />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-center text-xs text-gray-500">
        Hover over the carousel to pause.
      </p>
    </section>
  );
}
