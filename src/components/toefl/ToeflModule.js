// components/ToeflModule.tsx


import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function ToeflModule({ name, description, duration, questions, score, icon, color, index }) {
  const Icon = Icons[icon];
  
  const colorClasses = {
    red: {
      bg: "from-red-50 to-red-100",
      text: "text-red-600",
      border: "border-red-200"
    },
    blue: {
      bg: "from-blue-50 to-blue-100",
      text: "text-blue-600",
      border: "border-blue-200"
    },
    green: {
      bg: "from-green-50 to-green-100",
      text: "text-green-600",
      border: "border-green-200"
    },
    purple: {
      bg: "from-purple-50 to-purple-100",
      text: "text-purple-600",
      border: "border-purple-200"
    }
  };

  const config = colorClasses[color] || colorClasses.red;

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className={`relative h-full bg-gradient-to-br ${config.bg} rounded-2xl border ${config.border} p-6 hover:shadow-2xl transition-all duration-500`}>
          {/* Module Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-14 h-14 rounded-xl bg-white border ${config.border} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
              {Icon && <Icon className={`w-7 h-7 ${config.text}`} />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">{name}</h3>
              <div className="text-sm text-gray-500">Section</div>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mb-6">
            {description}
          </p>

          {/* Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Duration</span>
              <span className="text-sm font-semibold text-gray-900">{duration}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Questions/Tasks</span>
              <span className="text-sm font-semibold text-gray-900">{questions}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Score</span>
              <span className="text-sm font-semibold text-gray-900">{score}</span>
            </div>
          </div>

          {/* Percentage Indicator */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600 mb-2">Weightage</div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r from-red-500 to-blue-500`} style={{ width: '25%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}