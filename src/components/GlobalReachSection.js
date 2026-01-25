import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedSection from "./universityPlacement/AnimatedSection";

export default function MessageFromCEOSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-6 sm:space-y-8">
          {/* Badge */}
          <AnimatedSection animation="fade-up" delay={0.1}>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-800">
                  Message from the Founder
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection animation="fade-up" delay={0.2} animateImmediately>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Building Global Futures with Purpose
              </span>
            </h2>
          </AnimatedSection>

          {/* CEO Image */}
          <AnimatedSection animation="fade-up" delay={0.3}>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-[260px] sm:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/q_100,f_auto,e_sharpen:60,w_700/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-[42%_12%]"
                  sizes="
(max-width: 640px) 560px,
100vw
"
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <div className="font-bold text-gray-900 text-sm sm:text-base">
                  SUNIL MAHARJAN
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <AnimatedSection animation="fade-up" delay={0.4}>
            <div className="space-y-3 sm:space-y-4 text-center">
              {[
                "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-xs sm:text-sm text-gray-700 leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Video */}
          <AnimatedSection animation="fade-up" delay={0.5}>
            <div className="relative h-[260px] sm:h-[300px] overflow-hidden rounded-xl sm:rounded-2xl">
              <video
                src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop & Tablet Layout (md and above) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {/* Tablet (768px-1024px): Content on left, Image+Video on right */}
            {/* Desktop (1024px+): Image left, Content middle, Video right */}

            {/* Left Column - CEO Image (only on lg+) */}
            <AnimatedSection
              animation="fade-right"
              delay={0.2}
              className="hidden lg:flex flex-col items-center justify-center"
            >
              <div className="relative w-full max-w-[320px] xl:max-w-[380px] h-[400px] lg:h-[450px] xl:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/q_100,f_auto,e_sharpen:80,w_1200/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={100}
                  className="object-cover object-[42%_center]"
                  sizes="
    (min-width: 1280px) 760px,
    (min-width: 1024px) 640px,
    100vw
  "
                />
              </div>
              <div className="mt-4 xl:mt-6 text-center">
                <div className="font-bold text-gray-900 text-base xl:text-lg">
                  SUNIL MAHARJAN
                </div>
                <div className="text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </div>
            </AnimatedSection>

            {/* Middle Column - Content (full width on tablet, middle on desktop) */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="space-y-4 lg:space-y-6 xl:space-y-8 h-full flex flex-col justify-center">
                {/* Badge */}
                <AnimatedSection animation="fade-up" delay={0.1}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                    <Star className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-semibold tracking-wide text-gray-800">
                      Message from the Founder
                    </span>
                  </div>
                </AnimatedSection>

                {/* Title */}
                <AnimatedSection animation="fade-up" delay={0.2}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                      Building Global Futures with Purpose
                    </span>
                  </h2>
                </AnimatedSection>

                {/* Text Content */}
                <AnimatedSection animation="fade-up" delay={0.3}>
                  <div className="space-y-3 lg:space-y-4">
                    {[
                      "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                      "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                      "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
                    ].map((text, index) => (
                      <p
                        key={index}
                        className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed"
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Right Column - Video & Tablet CEO Image */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="space-y-8 h-full flex flex-col justify-center">
                {/* CEO Image - Only shown on tablet (md), hidden on desktop (lg) */}
                <AnimatedSection
                  animation="fade-up"
                  delay={0.4}
                  className="block lg:hidden"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-[320px] h-[300px] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src="https://res.cloudinary.com/dvx9dcap6/image/upload/q_100,f_auto,e_sharpen:80,w_900/ceo1_sut1bx.jpg"
                        alt="Sunil Maharjan - Founder & CEO"
                        fill
                        priority
                        quality={100}
                        className="object-cover object-[42%_center]"
                        sizes="
    (min-width: 768px) 640px,
    100vw
  "
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="font-bold text-gray-900 text-base">
                        SUNIL MAHARJAN
                      </div>
                      <div className="text-sm text-gray-600">
                        Founder & CEO, Suyan Education
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                {/* Video - Always shown */}
                <AnimatedSection animation="fade-left" delay={0.5}>
                  <div className="relative w-full h-[400px] md:h-[440px] lg:h-[500px] xl:h-[550px] rounded-2xl overflow-hidden">
                    <video
                      src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
