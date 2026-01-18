// components/ProcessCard.tsx
"use client";

import * as Icons from "lucide-react";
import AnimatedSection from "./AnimatedSection";


export default function ProcessCard({ step, title, description, activities, icon, index }) {
  const Icon = Icons[icon];

  return (
    <AnimatedSection animation="slide-up" delay={index * 0.15}>
      <div className="group">
        <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
          {/* Step Number - Animated */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-r from-blue-600 to-red-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                {step}
              </div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-r from-blue-400 to-red-400 opacity-70 animate-pulse"></div>
              {/* Connecting Line for Mobile */}
              <div className="lg:hidden absolute top-full left-1/2 w-0.5 h-8 -translate-x-1/2 bg-gradient-to-b from-blue-600 to-red-600"></div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden">
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex items-start gap-4 mb-6 relative z-10">
              <div className="p-3 rounded-lg bg-gradient-to-r from-blue-100 to-red-100 group-hover:rotate-12 transition-transform duration-500">
                {Icon && <Icon className="w-6 h-6 text-blue-600" />}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{title}</h3>
            </div>

            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed relative z-10">{description}</p>

            {/* Activities with Staggered Animation */}
            <div className="relative z-10">
              <div className="text-sm text-gray-500 font-medium mb-3">Key Activities:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {activities.map((activity, i) => (
                  <AnimatedSection 
                    key={i} 
                    animation="fade-right" 
                    delay={index * 0.15 + i * 0.1}
                    once={false}
                  >
                    <div className="flex items-center gap-3 group/item">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-700 group-hover/item:text-blue-600 transition-colors duration-300">{activity}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}