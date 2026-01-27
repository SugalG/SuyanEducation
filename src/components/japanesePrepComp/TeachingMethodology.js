// components/TeachingMethodology.tsx
"use client";

import { Users, Monitor, Globe, Target } from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";

export default function TeachingMethodology({ methods }) {
  const icons = [Users, Monitor, Globe, Target];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection
          animation="fade-up"
          delay={0.2}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Our Teaching Methodology
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A proven approach that combines traditional teaching with modern technology
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {methods.map((method, index) => {
            const Icon = icons[index];
            const isLeft = index % 2 === 0;
            
            return (
              <AnimatedSection
                key={index}
                animation={isLeft ? "fade-right" : "fade-left"}
                delay={index * 0.1}
                className="group"
                once={true}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-gradient-to-r from-red-100 to-blue-100 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{method.title}</h3>
                      <p className="text-gray-600 mb-4">{method.description}</p>
                      
                      <div className="space-y-2">
                        {method.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}