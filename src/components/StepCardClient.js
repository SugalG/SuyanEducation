

import * as Icons from "lucide-react";
import AnimatedSection from "./universityPlacement/AnimatedSection";

export default function StepCardClient({
  stepNumber,
  icon,
  title,
  description,
  features,
  delay = 0,
  isLeft = false
}) {
  const Icon = Icons[icon];

  return (
    <AnimatedSection 
      animation={isLeft ? "fade-right" : "fade-left"}
      delay={delay}
      className="group relative"
      once={true}
    >
      {/* Card Background with Gradient Border */}
      <div className="absolute -inset-1 rounded-3xl opacity-20 group-hover:opacity-30"></div>
      
      {/* Main Card */}
      <div className="relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2">
        {/* Step Number Badge */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-blue-800 flex items-center justify-center shadow-lg">
          <span className="text-white font-bold">{stepNumber}</span>
        </div>

        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-blue-100 text-red-600 group-hover:scale-110 transition-transform duration-300">
            {Icon && <Icon size={28} strokeWidth={2} />}
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent pt-1">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-lg">
          {description}
        </p>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0"></div>
              <span className="text-gray-700">{feature}</span>

            </li>
  
          ))}
        </div>

        {/* Hover Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-blue-700 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
      </div>
    </AnimatedSection>
  );
}