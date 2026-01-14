"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is IELTS?",
    answer:
      "IELTS (International English Language Testing System) is a globally recognized English test for study, work, and migration.",
  },
  {
    question: "How long is IELTS valid?",
    answer: "IELTS scores are valid for 2 years from the test date.",
  },
  {
    question: "Which modules are included?",
    answer: "Listening, Reading, Writing, and Speaking modules.",
  },
  {
    question: "How is IELTS scored?",
    answer:
      "Each module is scored from 0-9. The overall band score is the average of all four modules.",
  },
];

const userLevels = [
  { level: "Non-user", range: "0-1", desc: "Has no ability to use English." },
  { level: "Beginner", range: "2-3", desc: "Can understand very basic English." },
  { level: "Intermediate", range: "4-5", desc: "Can communicate in familiar situations." },
  { level: "Competent", range: "6", desc: "Has effective command of English." },
  { level: "Good User", range: "7", desc: "Can use English well in most situations." },
  { level: "Very Good User", range: "8", desc: "Has high proficiency with occasional errors." },
  { level: "Expert User", range: "9", desc: "Has full operational command of English." },
];

export default function MagicalIELTSPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <main className="w-full overflow-hidden mt-10">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">
        {/* Floating Magic Circles */}
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-red-200/20 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-red-300/20 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 5, delay: 0.5 }}
        />

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-4 max-w-5xl z-10"
        >
          <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent mb-6">
            Master IELTS Like Magic
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-10">
            Prepare for IELTS with top guidance, understand your scores, and achieve your dream results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/book-ielts"
              whileHover={{ scale: 1.1 }}
              className="px-10 py-5 bg-red-600 text-white rounded-2xl font-semibold shadow-lg"
            >
              Book IELTS With Us
            </motion.a>
            <motion.a
              href="/learn-ielts"
              whileHover={{ scale: 1.1 }}
              className="px-10 py-5 bg-white text-red-600 rounded-2xl font-semibold border-2 border-red-600 shadow-lg"
            >
              Learn IELTS With Us
            </motion.a>
          </div>

          {/* Hero Image */}
          <motion.div
            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="https://www.applyboard.com/wp-content/uploads/2020/03/IELTS-Practice-Tests-Blog-Banner-Jul23-1024x512.png"
              alt="Students studying abroad"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* User Levels */}
      <section className="py-24 bg-gray-50">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Your IELTS Level
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Check where your English proficiency stands based on IELTS band score.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {userLevels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 120 }}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 transition-all cursor-pointer"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-2">{level.level}</h3>
              <p className="font-semibold mb-1">Band Score: {level.range}</p>
              <p className="text-gray-700">{level.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-red-50 relative overflow-hidden">
        {/* Decorative floating shapes */}
        <motion.div
          className="absolute top-10 left-1/4 w-40 h-40 bg-red-200/30 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-56 h-56 bg-red-300/30 rounded-full blur-3xl animate-pulse"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />

        <motion.div
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Why IELTS?
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-10">
            IELTS opens doors to global education, career, and migration opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            {
              text: "Globally recognized by universities and employers.",
              img: "https://inspirecdc.com/wp-content/uploads/2021/08/ielts.jpg",
            },
            {
              text: "Required for immigration to English-speaking countries.",
              img: "https://www.smarttalk.in/wp-content/uploads/2019/10/Which-countries-accept-IELTS-for-immigration.png",
            },
            {
              text: "Boosts your English proficiency systematically.",
              img: "https://langmainternational.com/normal_images/1592124446.jpg",
            },
          ].map((adv, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, type: "spring", stiffness: 100 }}
            >
              <img src={adv.img} alt={adv.text} className="w-full h-48 object-cover" />
              <div className="p-6 text-gray-700 font-semibold">{adv.text}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFAQ === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFAQ(isOpen ? null : i)}
                    className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-red-600 hover:bg-red-50 transition"
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`px-6 pb-6 transition-all duration-500 ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-red-100">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Start Your IELTS Journey Today
          </h2>
          <p className="text-gray-700 mb-10">
            Book your IELTS exam or start learning with our expert instructors today and achieve your dream score!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="/book-ielts"
              whileHover={{ scale: 1.1 }}
              className="px-12 py-5 bg-red-600 text-white font-bold rounded-2xl shadow-lg"
            >
              Book IELTS
            </motion.a>
            <motion.a
              href="/learn-ielts"
              whileHover={{ scale: 1.1 }}
              className="px-12 py-5 bg-white text-red-600 font-bold rounded-2xl border-2 border-red-600 shadow-lg"
            >
              Learn IELTS
            </motion.a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
