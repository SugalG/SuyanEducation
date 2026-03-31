"use client";

export default function TestimonialsMarquee({ items }) {
  if (!items?.length) return null;

  return (
    <section className="relative mx-auto mt-16 max-w-[1400px] overflow-x-hidden px-4 sm:mt-16 sm:px-6 md:mt-20 lg:mt-24 lg:px-8 xl:mt-16">
      
      {/* ===== TOP SECTION (UNCHANGED) ===== */}
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

      {/* ===== VIDEO CARDS SECTION (UPDATED) ===== */}
      <div className="relative">
        <div className="flex gap-3 overflow-x-auto pb-4 sm:gap-4 lg:gap-5 no-scrollbar">
          {items.map((item, idx) => {
            const videoId =
              item.videoId ||
              item.youtubeUrl?.split("/shorts/")[1]?.split("?")[0];

            if (!videoId) return null;

            return (
              <div
                key={item.id || idx}
                className="w-[280px] shrink-0 sm:w-[320px] lg:w-[360px]"
              >
                <div className="overflow-hidden rounded-[22px] bg-black shadow-lg ring-1 ring-black/5">
                  <div className="relative aspect-[9/16] w-full">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={
                        item.title || item.name || `Testimonial ${idx + 1}`
                      }
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}