// components/DocumentationTimeline.tsx
"use client";

import { CheckCircle, Clock, FileCheck, Send } from "lucide-react";
import AnimatedSection from "../universityPlacement/AnimatedSection"

export default function DocumentationTimeline() {
  const timelineSteps = [
    {
      time: "Week 1-2",
      title: "Document Collection",
      description: "Gathering all required documents and initial verification",
      icon: "FileCheck",
      status: "completed"
    },
    {
      time: "Week 3-4",
      title: "Document Preparation",
      description: "Drafting, formatting, and professional preparation",
      icon: "FileCheck",
      status: "active"
    },
    {
      time: "Week 5",
      title: "Verification & Notarization",
      description: "Legal verification and notarization as required",
      icon: "CheckCircle",
      status: "pending"
    },
    {
      time: "Week 6",
      title: "Final Review & Submission",
      description: "Final quality check and submission to authorities",
      icon: "Send",
      status: "pending"
    }
  ];

  const icons = {
    FileCheck,
    CheckCircle,
    Send
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 -translate-y-1/2"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-0">
          {timelineSteps.map((step, index) => {
            const Icon = icons[step.icon];
            return (
              <AnimatedSection key={index} animation="fade-up" delay={index * 0.1}>
                <div className="relative">
                  {/* Timeline Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center">
                    {/* Time Badge */}
                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-red-50 text-blue-700 font-medium mb-4">
                      {step.time}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                    
                    {/* Status Indicator */}
                    <div className="mt-4">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                        step.status === 'completed' 
                          ? 'bg-green-100 text-green-700' 
                          : step.status === 'active'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {step.status === 'completed' && '✓ Completed'}
                        {step.status === 'active' && '● In Progress'}
                        {step.status === 'pending' && '○ Pending'}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-white border-4 border-blue-500 z-10 -translate-y-1/2"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}