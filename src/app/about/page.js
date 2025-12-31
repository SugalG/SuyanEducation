export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-24">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-900">
          About Suyan Education
        </h1>
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          A Japan-focused education consultancy committed to guiding students
          from Nepal towards globally recognized academic opportunities.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="grid md:grid-cols-2 gap-14 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Suyan Education Pvt. Ltd. is an education consultancy based in Nepal,
            specializing in international study pathways with a strong focus on Japan.
            Since our establishment, we have supported students in navigating academic
            admissions, language preparation, and visa processes with clarity and confidence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our team believes that studying abroad is not just about securing admission,
            but about preparing students for academic success and cultural adaptation.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl p-8 shadow">
          <ul className="space-y-4 text-gray-700">
            <li>✔ Experienced academic counselors</li>
            <li>✔ Transparent and ethical guidance</li>
            <li>✔ Strong visa success record</li>
            <li>✔ End-to-end student support</li>
          </ul>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white/90 backdrop-blur rounded-3xl p-12 shadow mb-24">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To provide honest, personalized, and result-oriented guidance that empowers
              students to achieve their international education goals with confidence.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              To become a trusted education consultancy recognized for excellence in
              Japan-focused academic counseling and global student success.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why Choose Suyan Education
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            "Japan-focused expertise",
            "Clear visa guidance",
            "Language & test preparation",
            "Trusted university partnerships",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 backdrop-blur p-6 rounded-xl shadow text-center"
            >
              <p className="font-semibold text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* JAPAN FOCUS */}
      <section className="grid md:grid-cols-2 gap-14 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Focus on Japan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Japan offers world-class education, advanced technology, and a rich cultural
            environment. At Suyan Education, we specialize in guiding students towards
            Japanese language schools, vocational colleges, and universities.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            From JLPT preparation to visa documentation and cultural orientation,
            we ensure students are fully prepared for their academic journey in Japan.
          </p>
        </div>

        <div className="bg-red-50 p-8 rounded-2xl shadow">
          <p className="text-red-700 font-semibold text-lg">
            🇯🇵 Japan is not just a destination — it’s an opportunity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-red-700 text-white rounded-3xl p-12">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Study Abroad Journey With Us
        </h2>
        <p className="mb-6 text-lg">
          Talk to our counselors and take the first step toward your international education.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-red-700 px-8 py-3 rounded-full font-semibold"
        >
          Contact Us
        </a>
      </section>

    </main>
  );
}
