import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function AboutTeamSection() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* ===============================
          COORDINATOR MESSAGE
      =============================== */}
      <div>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          {/* Coordinator Image */}
          <Reveal className="flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768379825/yangchensherpa1_akjlem.jpg"
                alt="Mrs. Yangchen Sherpa - Coordinator, Suyan Education"
                fill
                className="object-cover"
                sizes="256px"
                priority
              />
            </div>
          </Reveal>

          {/* Coordinator Message */}
          <Reveal>
            <div className="space-y-6">
              <span className="inline-flex px-4 py-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-700">
                Message from the Coordinator
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Guiding Students with Care & Clarity
                </span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed">
                At Suyan Education, our role goes beyond processing
                applications. We focus on understanding each student’s goals,
                background, and aspirations to guide them toward the most
                suitable global education pathway.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                With a dedicated counseling team and transparent guidance, we
                ensure every student receives honest advice, proper preparation,
                and continuous support throughout their study abroad journey.
              </p>

              <div className="pt-4">
                <div className="font-bold text-gray-900 text-lg">
                  Mrs. Yangchen Sherpa
                </div>
                <div className="text-sm text-gray-600">
                  Coordinator, Suyan Education
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ===============================
          SUBTLE SEPARATOR
      =============================== */}
      <div className="my-20 flex justify-center">
        <div className="w-28 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      </div>

      {/* ===============================
          TEAM SECTION
      =============================== */}
      <div>
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Our Counseling Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the professionals who guide students toward successful global
              education opportunities.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Top row – single centered card */}
          <div className="lg:col-span-12 flex justify-center">
            <Reveal>
              <TeamCard
                name="Jasmina Nakarmi"
                role="Counselor – Australia, USA"
                image="/team-members/jasmina_nakarmi.jpeg"
              />
            </Reveal>
          </div>

          {/* Bottom row – three cards */}
          <div className="lg:col-span-4">
            <Reveal>
              <TeamCard
                name="Sharmila Shrestha"
                role="Counselor – Europe"
                image="/team-members/Sharmila.png"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal>
              <TeamCard
                name="Armita Chandrabansi"
                role="Counselor – Japan"
                image="https://res.cloudinary.com/dvx9dcap6/image/upload/v1768379827/amritachandrabansi_geetz2.jpg"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-4">
            <Reveal>
              <TeamCard
                name="Sadika Maharjan"
                role="Reception Officer"
                image="/team-members/sadika_maharjan.jpeg"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   TEAM CARD (NO GLOW)
=============================== */

function TeamCard({ name, role, image }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200/70 p-8 text-center shadow-sm hover:shadow-lg transition-all">
      <div className="flex justify-center mb-6">
        <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="144px"
          />
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600 mt-1">{role}</p>
    </div>
  );
}
