// components/ToeflSection.tsx


import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";


export default function ToeflSection({ title, content, icon, stats, index }) {
  const Icon = Icons[icon];

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 hover:border-red-300 hover:shadow-2xl transition-all duration-500">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              {Icon && <Icon className="w-8 h-8 text-red-600" />}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Content */}
          <p className="text-gray-600 mb-8">
            {content}
          </p>

          {/* Stats */}
          <div className="space-y-3">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500"></div>
                <span className="text-sm text-gray-700 font-medium">{stat}</span>
              </div>
            ))}
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}