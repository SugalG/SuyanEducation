// components/QuestionTabs.tsx
"use client";

import { useState } from "react";
import AnimatedSection from "../universityPlacement/AnimatedSection";



export default function QuestionTabs({ questions }) {
  const [activeTab, setActiveTab] = useState(0);

  const difficultyColors = {
    "Low": "bg-green-100 text-green-700 border-green-200",
    "Medium": "bg-yellow-100 text-yellow-700 border-yellow-200",
    "High": "bg-red-100 text-red-700 border-red-200"
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200">
        {questions.map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-300 ${
              activeTab === index 
                ? "text-blue-600 border-b-2 border-blue-500 bg-blue-50" 
                : "text-gray-600 hover:text-blue-500 hover:bg-gray-50"
            }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <AnimatedSection animation="fade-up" key={activeTab} delay={0.1}>
          <div className="space-y-4">
            {questions[activeTab].questions.map((q, qIndex) => (
              <div 
                key={qIndex} 
                className="flex items-start gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700">{qIndex + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 group-hover:text-gray-900 font-medium">
                    {q.question}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${difficultyColors[q.difficulty]}`}>
                    {q.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab Stats */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {questions[activeTab].questions.length} questions in this category
            </span>
            <span className="text-sm font-medium text-blue-600">
              Preparation time: ~{questions[activeTab].questions.length * 15} mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}