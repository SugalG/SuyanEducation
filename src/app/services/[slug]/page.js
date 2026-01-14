import { notFound } from "next/navigation";
import { headers } from "next/headers";
import Reveal from "@/components/Reveal";
import {
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Clock,
  Award,
  Star,
  BookOpen,
  GraduationCap,
} from "lucide-react";

export default async function ServiceDetail({ params }) {
  // ✅ params is NOT async
  const { slug } = await params;

  // ✅ headers() MUST be awaited in Next 16+
  const headersList = await headers();
  const host = headersList.get("host");

  const protocol =
    process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(
    `${protocol}://${host}/api/services/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) return notFound();

  const service = await res.json();

  return (
    <main className="w-full overflow-hidden mt-24">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white shadow-lg mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Premium Service
                  </span>
                </div>

                <h1 className="text-5xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    {service.title}
                  </span>
                </h1>

                {service.summary && (
                  <p className="text-xl text-gray-700 mb-10">
                    {service.summary}
                  </p>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mb-12">
                  <Feature icon={Target} text="Targeted Approach" />
                  <Feature icon={Users} text="Expert Guidance" />
                  <Feature icon={Award} text="Proven Results" />
                </div>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-red-600 text-white rounded-2xl font-semibold"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-white border-8 border-white">
                {service.heroImage ? (
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-[500px] object-cover"
                  />
                ) : (
                  <div className="h-[500px] flex items-center justify-center">
                    <GraduationCap className="w-24 h-24 text-gray-300" />
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Service Details</h2>
            <p className="text-xl text-gray-600">
              Comprehensive information about our{" "}
              {service.title.toLowerCase()} service
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="bg-white rounded-3xl p-10 shadow-xl whitespace-pre-line text-gray-700 text-lg">
            {service.content}
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Reveal>
          <div className="bg-gradient-to-r from-red-600 to-blue-950 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Begin Your Journey?
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-white text-gray-900 font-bold rounded-2xl"
            >
              Get Free Consultation <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-sm">
      <Icon className="w-8 h-8 text-red-600 mb-2" />
      <span className="text-sm font-semibold text-gray-800 text-center">
        {text}
      </span>
    </div>
  );
}
