// components/FeatureBubble.tsx


import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";


export default function FeatureBubble({ title, description, icon, color, index }) {
  const Icon = Icons[icon];
  
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    red: "from-red-500 to-red-600",
    purple: "from-purple-500 to-purple-600",
    green: "from-green-500 to-green-600",
    orange: "from-orange-500 to-orange-600",
    cyan: "from-cyan-500 to-cyan-600"
  };

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group relative">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 overflow-hidden">
          {/* Floating Bubble */}
          <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-red-100 opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

          {/* Icon */}
          <div className="relative z-10 mb-6">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} bg-opacity-10 flex items-center justify-center`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                {Icon && <Icon className={`w-7 h-7 text-${color.split('-')[0]}-100`} />}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-600">
              {description}
            </p>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}