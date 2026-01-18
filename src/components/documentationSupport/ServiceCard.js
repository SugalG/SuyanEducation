// components/ServiceCard.tsx
"use client";

import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";


export default function ServiceCard({ title, description, icon, features, index }) {
  const Icon = Icons[icon];

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
          {/* Icon */}
          <div className="mb-5 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              {Icon && <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />}
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 group/feature">
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-xs sm:text-sm group-hover/feature:text-blue-600 transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}