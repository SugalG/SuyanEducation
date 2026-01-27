

import { Users, Globe, Award, Clock } from "lucide-react";
import AnimatedSection from "./universityPlacement/AnimatedSection";

export default function StatsSection({ stats }) {
  const icons = [Users, Globe, Award, Clock];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => {
        const Icon = icons[index];
        return (
          <AnimatedSection
            key={index}
            animation="zoom-in"
            delay={index * 0.1}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-2 duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-red-100 to-blue-100 mb-4 hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-600 mt-2 font-medium">{stat.label}</div>
            </div>
          </AnimatedSection>
        );
      })}
    </div>
  );
}