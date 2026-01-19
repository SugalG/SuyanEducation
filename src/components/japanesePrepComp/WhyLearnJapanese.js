// components/WhyLearnJapanese.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Home } from "lucide-react";
import RevealTest from "../RevealTest";

export default function WhyLearnJapanese() {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Study in Top Universities",
      description:
        "JLPT certification opens doors to prestigious Japanese universities with scholarships",
    },
    {
      icon: Briefcase,
      title: "Career Opportunities",
      description:
        "300,000+ Japanese companies globally prefer Japanese-speaking professionals",
    },
    {
      icon: Globe,
      title: "Global Advantage",
      description:
        "Japan is the 3rd largest economy with immense technological innovation",
    },
    {
      icon: Home,
      title: "Settle in Japan",
      description:
        "Language proficiency significantly improves visa approval chances",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <RevealTest delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Why Learn Japanese?
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Beyond language - a gateway to education, career, and life
              opportunities in Japan
            </p>
          </div>
        </RevealTest>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-2xl p-8 h-full hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
