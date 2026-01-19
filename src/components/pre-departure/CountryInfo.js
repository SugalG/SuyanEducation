// components/CountryInfo.tsx


import { MapPin, Shield, Users } from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function CountryInfo({ country, focus, emergency, cultural, index }) {
  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-500">
          {/* Country Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{country}</h3>
              <div className="text-sm text-blue-600">Study Destination</div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="mb-6">
            <div className="text-sm text-gray-500 mb-2">Key Focus Areas</div>
            <div className="space-y-2">
              {focus.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency & Cultural */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Emergency Contact</div>
                <div className="text-sm font-medium text-gray-900">{emergency}</div>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-purple-500 mt-0.5" />
              <div>
                <div className="text-sm text-gray-500">Cultural Focus</div>
                <div className="text-sm font-medium text-gray-900">{cultural}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}