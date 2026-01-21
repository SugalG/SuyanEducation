// components/SupportFeature.tsx


import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function SupportFeature({ title, description, icon, benefit, index }) {
  const Icon = Icons[icon];

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-xl transition-all duration-500">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              {Icon && <Icon className="w-7 h-7 text-blue-600" />}
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-600 text-sm mb-4">
              {description}
            </p>

            {/* Benefit */}
            <div className="pt-3 border-t border-gray-100">
              <div className="text-xs text-gray-500">Key Benefit</div>
              <div className="text-sm font-medium text-green-600">{benefit}</div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}