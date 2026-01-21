// components/InterviewTypeCard.tsx


import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";


export default function InterviewTypeCard({ type, icon, description, duration, intensity, color, index }) {
  const Icon = Icons[icon];
  
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    purple: "from-purple-500 to-purple-600",
    red: "from-red-500 to-red-600",
    green: "from-green-500 to-green-600"
  };

  const intensityColors = {
    "Moderate": "bg-green-100 text-green-700",
    "High": "bg-blue-100 text-blue-700",
    "Very High": "bg-orange-100 text-orange-700",
    "Expert": "bg-red-100 text-red-700"
  };

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-2xl transition-all duration-500">
          {/* Top Accent */}
          <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r ${colorClasses[color]}`}></div>
          
          {/* Icon */}
          <div className="mb-6 pt-2">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[color]} bg-opacity-10 flex items-center justify-center`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[color]} bg-opacity-20 flex items-center justify-center`}>
                {Icon && <Icon className={`w-7 h-7 text-${color}-100`} />}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {type}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {description}
            </p>

            {/* Stats */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Duration</span>
                <span className="font-semibold text-gray-900">{duration}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-500">Intensity</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${intensityColors[intensity]}`}>
                  {intensity}
                </span>
              </div>
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}