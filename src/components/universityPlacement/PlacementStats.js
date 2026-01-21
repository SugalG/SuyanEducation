// components/PlacementStats.tsx
"use client";

import { University, Trophy, DollarSign, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";




export default function PlacementStats({ stats }) {
  const icons = [University, Trophy, DollarSign, Clock];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = icons[index];
        return (
          <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
            <div className="group">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="p-2 md:p-3 rounded-xl bg-gradient-to-r from-blue-100 to-red-100 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent group-hover:animate-pulse">
                      {stat.value}
                    </div>
                    <div className="text-gray-800 font-medium mt-1 text-sm md:text-base">{stat.label}</div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.description}</div>
                  </div>
                </div>
                {/* Animated Underline */}
                <div className="h-0.5 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}