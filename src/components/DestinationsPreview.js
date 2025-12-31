import Link from "next/link";
import Image from "next/image";

const COUNTRIES = [
  { name: "Japan", desc: "Language schools, colleges, and universities across Japan.", slug: "japan" },
  { name: "Australia", desc: "Universities and institutions with strong student pathways.", slug: "australia" },
  { name: "USA", desc: "Wide range of programs and globally recognized degrees.", slug: "usa" },
  { name: "Europe", desc: "Affordable education options across European countries.", slug: "europe" },
  { name: "Malta", desc: "Universities across Malta.", slug: "malta" },
];

export default function UniversitiesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500">
          Universities & Destinations
        </h2>
        <p className="mt-4 text-gray-600">
          We work with reputed institutions across multiple countries, with a
          primary focus on Japan.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-12 overflow-hidden">
        <div className="flex w-max animate-scroll-x gap-8">
          {[...COUNTRIES, ...COUNTRIES].map((country, i) => (
            <div
              key={`${country.slug}-${i}`}
              className="group w-[280px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex-shrink-0"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={`/destinations/${country.slug}.webp`}
                  alt={country.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {country.name}
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  {country.desc}
                </p>

                <Link
                  href={`/universities/${country.slug}`}
                  className="inline-flex items-center gap-1 mt-4 text-blue-600 font-medium hover:gap-2 transition-all"
                >
                  View Universities →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/universities"
          className="inline-block bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition"
        >
          Explore All Universities
        </Link>
      </div>
    </section>
  );
}
