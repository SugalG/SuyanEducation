import RevealTest from "@/components/RevealTest";

export default function HeroSection({ country, heroImage, title, description }) {
  return (
    <section className="relative h-[50vh] md:h-[60vh] w-full">
      {/* Background Image */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 absolute inset-0">
        <div className="hidden md:block md:col-span-1 bg-amber-50"></div>
        <div
          className="bg-cover bg-center md:col-span-2 lg:col-span-3"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-black/10" />

      {/* Bottom Floating Box - Responsive positioning */}

      <div
        className="absolute bottom-0 left-1/3 -translate-x-1/2
                md:left-1/4 md:-translate-x-[20%] max-w-3xl w-full opacity-60"
      >
        <div className="bg-white/90 backdrop-blur-md shadow-xl p-6 md:px-10 md:py-15">
          <RevealTest animateImmediately delay={0.3}>
            <h1 className="text-xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 text-center md:text-left">
              <span className="text-red-700 text-4xl sm:text-5xl md:text-7xl font-thin">
                |{" "}
              </span>
              {title} <span className="font-bold text-red-700">{country}</span>
            </h1>
            <p className="hidden md:inline-block mt-3 text-sm md:text-base text-black">
              {description}
            </p>
          </RevealTest>
        </div>
      </div>
    </section>
  );
}
