// components/ServicesComparison.tsx
"use client";

import * as Icons from "lucide-react";
import AnimatedSection from "./AnimatedSection";



export default function ServicesComparison({ services }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((category, index) => {
        const Icon = Icons[category.icon];
        return (
          <AnimatedSection key={index} animation="zoom-in" delay={index * 0.15}>
            <div className="group h-full">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
                {/* Floating Icon Background */}
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  {Icon && <Icon size={120} />}
                </div>

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-100 to-red-100 group-hover:rotate-12 transition-transform duration-500">
                    {Icon && <Icon className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">{category.category}</h3>
                </div>

                {/* Services List */}
                <div className="space-y-6 relative z-10">
                  {category.services.map((service, i) => (
                    <div 
                      key={i} 
                      className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0 group/item"
                    >
                      <div className="font-medium text-gray-800 mb-2 group-hover/item:text-blue-600 transition-colors duration-300 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                        {service.name}
                      </div>
                      <div className="text-sm text-gray-600 pl-5 group-hover/item:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Gradient Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-red-500/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}