import Link from "next/link";

const SERVICES = [
  {
    title: "Student Visa Counseling",
    desc: "Clear guidance on eligibility, process, and timelines for student visas.",
    slug: "student-visa-counseling",
  },
  {
    title: "Japanese Language Preparation",
    desc: "Structured language classes to meet university and visa requirements.",
    slug: "japanese-language-preparation",
  },
  {
    title: "University Placement",
    desc: "Support in selecting and applying to the right universities abroad.",
    slug: "university-placement",
  },
  {
    title: "Documentation Support",
    desc: "Step-by-step assistance to prepare accurate and complete documents.",
    slug: "documentation-support",
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews and guidance to improve visa approval chances.",
    slug: "interview-preparation",
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Orientation and support before students travel abroad.",
    slug: "pre-departure-guidance",
  },
];

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 mt-24">
      {/* Section header */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-red-500">
          Our Services
        </h2>
        <p className="mt-4 text-gray-600">
          We provide end-to-end guidance for students planning to study abroad,
          with a strong focus on Japan.
        </p>
      </div>

      {/* Services grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <div
            key={service.slug}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {service.title}
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              {service.desc}
            </p>

            <Link
              href={`/services/${service.slug}`}
              className="inline-block mt-4 text-red-700 font-medium hover:underline"
            >
              Learn more →
            </Link>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/services"
          className="inline-block bg-red-700 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-800 transition"
        >
          View All Services
        </Link>
      </div>
    </section>
  );
}
