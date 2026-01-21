// components/RequirementItem.tsx


import { CheckCircle } from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function RequirementItem({ category, items, index }) {
  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-xl transition-all duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{category}</h3>
          </div>

          {/* Requirements List */}
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mt-0.5 group-hover/item:bg-red-100 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-red-500 group-hover/item:scale-150 transition-transform duration-300"></div>
                </div>
                <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Bottom Status */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">{items.length} requirements</span>
              <span className="text-xs font-medium px-2 py-1 bg-red-50 text-red-700 rounded">
                Mandatory
              </span>
            </div>
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-200 transition-all duration-300 pointer-events-none"></div>
        </div>
      </div>
    </AnimatedSection>
  );
}