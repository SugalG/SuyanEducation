
import Image from "next/image";
import { Star } from "lucide-react";
import AnimatedSection from "./universityPlacement/AnimatedSection";

export default function MessageFromCEOSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Badge */}
          <AnimatedSection animation="fade-right" delay={0.1}>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                <Star className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  Message from the Founder
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection animation="fade-right" delay={0.2}>
            <h2 className="text-2xl sm:text-3xl font-bold text-center">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Building Global Futures with Purpose
              </span>
            </h2>
          </AnimatedSection>

          {/* CEO Image */}
          <AnimatedSection animation="fade-right" delay={0.3}>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[360px] h-[300px] rounded-[22px] overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={85}
                  className="object-cover object-[42%_12%]"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="mt-4 text-center">
                <div className="font-bold text-gray-900">SUNIL MAHARJAN</div>
                <div className="text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text Content */}
          <AnimatedSection animation="fade-right" delay={0.4}>
            <div className="space-y-4 text-center">
              {[
                "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
              ].map((text, i) => (
                <p
                  key={i}
                  className="text-sm text-gray-700 leading-relaxed"
                >
                  {text}
                </p>
              ))}
            </div>
          </AnimatedSection>

          {/* Video */}
          <AnimatedSection animation="fade-right" delay={0.5}>
            <div className="relative w-full overflow-hidden rounded-[22px] shadow-xl">
              <video
                src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 items-center">
          {/* Left Column - CEO Image */}
          <AnimatedSection 
            animation="fade-right" 
            delay={0.1}
            className="order-2 lg:order-1"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[420px] h-[500px] lg:h-[600px] rounded-[22px] overflow-hidden shadow-xl">
                <Image
                  src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                  alt="Sunil Maharjan - Founder & CEO"
                  fill
                  priority
                  quality={85}
                  className="object-cover object-[42%_center]"
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 320px, 100vw"
                />
              </div>
              <div className="mt-6 text-center">
                <div className="font-bold text-gray-900 text-lg">
                  SUNIL MAHARJAN
                </div>
                <div className="text-sm text-gray-600">
                  Founder & CEO, Suyan Education
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Middle Column - Content */}
          <AnimatedSection 
            animation="fade-right" 
            delay={0.2}
            className="order-1 lg:order-2"
          >
            <div className="space-y-6 lg:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                <Star className="w-4 h-4 text-red-600" />
                <span className="text-sm font-semibold tracking-wide text-gray-800">
                  Message from the Founder
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Building Global Futures with Purpose
                </span>
              </h2>

              {/* Text Content */}
              <div className="space-y-4">
                {[
                  "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                  "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                  "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Video */}
          <AnimatedSection 
            animation="fade-right" 
            delay={0.3}
            className="order-3 lg:order-3"
          >
            <div className="flex justify-center items-center">
              <div className="relative w-full max-w-[420px] h-[500px] lg:h-[600px] rounded-[22px] overflow-hidden shadow-xl">
                <video
                  src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Tablet Layout (md only) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-12 items-start">
            {/* Left Column - Content */}
            <AnimatedSection animation="fade-right" delay={0.1}>
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100">
                  <Star className="w-4 h-4 text-red-600" />
                  <span className="text-sm font-semibold tracking-wide text-gray-800">
                    Message from the Founder
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Building Global Futures with Purpose
                  </span>
                </h2>

                {/* Text Content */}
                <div className="space-y-4">
                  {[
                    "At Suyan Education, we believe that studying abroad is more than an academic journey — it is a transformational step toward a student's future and global perspective.",
                    "Our mission has always been rooted in honest guidance, transparent processes, and personalized counseling built on real experience.",
                    "From a strong foundation in Japanese education, we have grown into a global consultancy supporting students across multiple destinations.",
                  ].map((text, index) => (
                    <p
                      key={index}
                      className="text-base text-gray-700 leading-relaxed"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Image & Video Stack */}
            <AnimatedSection animation="fade-right" delay={0.2}>
              <div className="space-y-8">
                {/* CEO Image */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-[300px] rounded-[22px] overflow-hidden shadow-xl">
                    <Image
                      src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768383148/ceo1_sut1bx.jpg"
                      alt="Sunil Maharjan - Founder & CEO"
                      fill
                      priority
                      quality={85}
                      className="object-cover object-[42%_center]"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <div className="font-bold text-gray-900">SUNIL MAHARJAN</div>
                    <div className="text-sm text-gray-600">
                      Founder & CEO, Suyan Education
                    </div>
                  </div>
                </div>

                {/* Video */}
                <div className="relative w-full h-[250px] rounded-[22px] overflow-hidden shadow-xl">
                  <video
                    src="https://res.cloudinary.com/dvx9dcap6/video/upload/v1768546068/FLAGANIMATION2_k5xkt0.webm"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}