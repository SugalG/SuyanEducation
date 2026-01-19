

import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";


export default function ServiceCard({ title, description, icon, features, color, index }) {
  const Icon = Icons[icon];
  
  const colorConfigs = {
    blue: {
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-600",
      bgLight: "from-blue-50 to-blue-100"
    },
    green: {
      gradient: "from-green-500 to-green-600",
      iconColor: "text-green-600",
      bgLight: "from-green-50 to-green-100"
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-600",
      bgLight: "from-purple-50 to-purple-100"
    },
    red: {
      gradient: "from-red-500 to-red-600",
      iconColor: "text-red-600",
      bgLight: "from-red-50 to-red-100"
    }
  };

  const config = colorConfigs[color] || colorConfigs.blue;

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
          {/* Top Accent */}
          <div className={`absolute top-0 left-0 right-0 h-2 rounded-t-2xl bg-gradient-to-r ${config.gradient}`}></div>
          
          {/* Icon */}
          <div className="mb-6 pt-2">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${config.bgLight} border border-gray-100 flex items-center justify-center`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${config.bgLight} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                {Icon && <Icon className={`w-7 h-7 ${config.iconColor}`} />}
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {title}
            </h3>
            
            <p className="text-gray-600 mb-6">
              {description}
            </p>

            {/* Features */}
            <div className="space-y-2">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2 group/feature">
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${config.gradient} group-hover/feature:scale-150 transition-transform duration-300`}></div>
                  <span className="text-sm text-gray-700 group-hover/feature:text-gray-900">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-300 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}