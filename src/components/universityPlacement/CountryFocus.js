// components/CountryFocus.tsx
"use client";

import { CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function CountryFocus() {
  const countries = [
    {
      name: "Australia",
      focus: ["TAFE pathways", "Post-study work rights", "Regional benefits"],
      timeline: "4-6 Weeks",
      cost: "AUD$20K-$35K/year",
      advantage: "Direct TAFE & University pathways"
    },
    {
      name: "USA",
      focus: ["STEM OPT extensions", "CPT opportunities", "Dual degree options"],
      timeline: "6-8 Weeks",
      cost: "$25K-$45K/year",
      advantage: "Optional Practical Training eligible"
    },
    {
      name: "UK",
      focus: ["Post-study work visa", "Short duration Masters", "London campuses"],
      timeline: "3-5 Weeks",
      cost: "£15K-£25K/year",
      advantage: "2-year Graduate Route visa"
    },
    {
      name: "New Zealand",
      focus: ["Work while study", "Post-study work visa", "PR pathways"],
      timeline: "4-6 Weeks",
      cost: "NZ$20K-$30K/year",
      advantage: "Open work permit for partners"
    }
  ];

  return (
    <AnimatedSection animation="fade-up" delay={0.1}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {countries.map((country, index) => (
          <AnimatedSection key={country.name} animation="zoom-in" delay={index * 0.15}>
            <div className="group">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {country.name}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-2">Key Focus Areas</div>
                    <div className="flex flex-wrap gap-2">
                      {country.focus.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-gradient-to-r from-blue-50 to-red-50 text-blue-700 rounded text-xs hover:scale-105 transition-transform duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="group/item">
                      <div className="flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 text-blue-500 group-hover/item:animate-spin" />
                        <div className="text-xs text-gray-500">Processing</div>
                      </div>
                      <div className="font-semibold text-blue-600 text-sm md:text-base">{country.timeline}</div>
                    </div>
                    <div className="group/item">
                      <div className="flex items-center gap-2 mb-1">
                        <DollarSign className="w-3 h-3 md:w-4 md:h-4 text-green-500 group-hover/item:scale-110 transition-transform duration-300" />
                        <div className="text-xs text-gray-500">Annual Cost</div>
                      </div>
                      <div className="font-semibold text-green-600 text-sm md:text-base">{country.cost}</div>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-100 group/item">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-3 h-3 md:w-4 md:h-4 text-purple-500 group-hover/item:scale-110 transition-transform duration-300" />
                      <div className="text-xs text-gray-500">Special Advantage</div>
                    </div>
                    <div className="font-medium text-red-600 text-sm md:text-base">{country.advantage}</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}