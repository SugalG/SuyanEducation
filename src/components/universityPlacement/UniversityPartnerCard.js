// components/UniversityPartnerCard.tsx
"use client";

import { useState } from "react";
import { MapPin, Award, BookOpen, ChevronDown, Globe } from "lucide-react";
import AnimatedSection from "./AnimatedSection";


export default function UniversityPartnerCard({ 
  country, 
  universities, 
  programs, 
  ranking,
  color,
  index 
}) {
  const [expanded, setExpanded] = useState(false);
  const displayUniversities = expanded ? universities : universities.slice(0, 3);

  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group relative h-full">
        {/* Floating Globe Background */}
        <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <Globe size={80} />
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full relative overflow-hidden">
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-transparent to-red-500 opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          
          {/* Animated Top Border */}
          <div className={`h-1 rounded-t-2xl bg-gradient-to-r ${color} mb-6 relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
          </div>
          
          {/* Country Title */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-100 to-red-100 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{country}</h3>
              <div className="text-sm text-gray-500">{universities.length} Partner Institutions</div>
            </div>
          </div>

          {/* Universities List */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 font-medium mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              Partner Universities
            </div>
            <div className="space-y-2">
              {displayUniversities.map((uni, i) => (
                <div key={i} className="flex items-center gap-3 group/uni">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover/uni:scale-150 transition-transform duration-300"></div>
                  <span className="font-medium text-gray-700 group-hover/uni:text-blue-600 transition-colors duration-300">{uni}</span>
                </div>
              ))}
              {universities.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 group/btn"
                >
                  <ChevronDown className={`w-4 h-4 transition-all duration-300 ${expanded ? 'rotate-180' : ''} group-hover/btn:scale-125`} />
                  {expanded ? 'Show Less' : `Show ${universities.length - 3} More`}
                </button>
              )}
            </div>
          </div>

          {/* Programs */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 font-medium mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Popular Programs
            </div>
            <div className="flex flex-wrap gap-2">
              {programs.slice(0, 3).map((program, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-gradient-to-r from-blue-50 to-red-50 text-blue-700 rounded-full text-sm hover:scale-105 transition-transform duration-300"
                >
                  {program}
                </span>
              ))}
              {programs.length > 3 && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  +{programs.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Ranking */}
          <div className="pt-4 border-t border-gray-100">
            <div className="text-sm text-gray-500">University Ranking</div>
            <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent animate-gradient">
              {ranking}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}