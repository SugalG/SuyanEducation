// components/CoachCard.tsx


import { Check } from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function CoachCard({ 
  name, 
  role, 
  experience, 
  specialization, 
  stats, 
  avatarColor, 
  index 
}) {
  const colorClasses = {
    blue: "bg-gradient-to-br from-blue-500 to-blue-600",
    purple: "bg-gradient-to-br from-purple-500 to-purple-600",
    red: "bg-gradient-to-br from-red-500 to-red-600",
    green: "bg-gradient-to-br from-green-500 to-green-600"
  };

  return (
    <AnimatedSection animation="fade-left" delay={index * 0.1}>
      <div className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-500">
        <div className="flex items-start gap-6">
          {/* Avatar */}
          <div className="relative">
            <div className="relative w-20 h-20 rounded-2xl border-2 border-gray-200 group-hover:border-blue-300 transition-colors duration-300 overflow-hidden">
              {/* Avatar Background with Initials */}
              <div className={`w-full h-full ${colorClasses[avatarColor]} flex items-center justify-center`}>
                <span className="text-2xl font-bold text-white">
                  {name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-white flex items-center justify-center shadow-sm">
                <Check className="w-3 h-3 text-white" />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -top-2 -left-2">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-red-600 text-white text-xs font-bold rounded-lg shadow-md">
                {experience}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {name}
              </h3>
              <p className="text-blue-600 font-semibold">{role}</p>
            </div>

            {/* Specialization */}
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-2">Specialization:</p>
              <div className="flex flex-wrap gap-2">
                {specialization.map((spec, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-xs font-medium border border-gray-200 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors duration-300"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-gray-600 font-medium">Success Rate:</span>
                <span className="text-2xl font-bold text-gray-900 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                  {stats}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Effect Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </AnimatedSection>
  );
}