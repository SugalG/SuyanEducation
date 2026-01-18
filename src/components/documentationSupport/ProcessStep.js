// components/ProcessStep.tsx
"use client";

import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function ProcessStep({ step, title, description, icon, index }) {
  const Icon = Icons[icon];

  return (
    <AnimatedSection animation="slide-up" delay={index * 0.15}>
      <div className="group h-full">
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
          {/* Step Number */}
          <div className="flex items-center gap-4 mb-5 sm:mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-500">
              {step}
            </div>
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
              {Icon && <Icon className="w-6 h-6 text-blue-600" />}
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}