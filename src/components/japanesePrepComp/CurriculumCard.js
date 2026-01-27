

import * as Icons from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";

export default function CurriculumCard({ title, description, skills, icon, color, delay = 0 }) {
  const Icon = Icons[icon];
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    red: 'from-red-500 to-red-600',
    green: 'from-green-500 to-green-600'
  };

  const dotColors = {
    blue: 'bg-blue-500',
    red: 'bg-red-500',
    green: 'bg-green-500'
  };

  return (
    <AnimatedSection
      animation="fade-up"
      delay={delay}
      className="group"
      once={true}
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:-translate-y-2">
        {/* Icon Header */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${colorClasses[color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          {Icon && <Icon className="w-8 h-8 text-white" />}
        </div>

        <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        {/* Skills List */}
        <div className="space-y-3">
          <div className="text-sm text-gray-500 font-medium">Key Skills Covered:</div>
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${dotColors[color]}`}></div>
              <span className="text-gray-700">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}