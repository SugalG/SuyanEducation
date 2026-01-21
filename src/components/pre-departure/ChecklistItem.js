

import { CheckCircle } from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function ChecklistItem({ category, items, index }) {
  return (
    <AnimatedSection animation="zoom-in" delay={index * 0.1}>
      <div className="group h-full">
        <div className="relative h-full bg-white rounded-2xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-xl transition-all duration-500">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 border border-blue-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900">{category}</h3>
          </div>

          {/* Checklist Items */}
          <ul className="space-y-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 group/item">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mt-0.5 group-hover/item:bg-blue-100 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform duration-300"></div>
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
              <span className="text-sm text-gray-500">{items.length} items</span>
              <span className="text-sm font-medium text-green-600">Essential</span>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}