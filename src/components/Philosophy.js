"use client";
import AnimatedSection from "./universityPlacement/AnimatedSection";
import { HeartHandshake, Sparkles, Target, Users, Brain, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function Philosophy() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gradient-to-r from-transparent via-red-50/10 to-transparent" />
      </div>

      <AnimatedSection animation="fade-up" delay={0.2} once={true}>
        <div className="relative">
          {/* Decorative corner accents */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-red-200 rounded-tl-2xl" />
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-blue-200 rounded-tr-2xl" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-red-200 rounded-bl-2xl" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-blue-200 rounded-br-2xl" />

          <div className="relative bg-gradient-to-br from-white via-white to-gray-50/30 border border-gray-100 rounded-3xl p-8 sm:p-12 md:p-16 shadow-xl shadow-gray-200/50 backdrop-blur-sm overflow-hidden">
            {/* Floating decorative elements */}
            <div className="absolute top-10 right-10 opacity-10">
              <Sparkles className="w-24 h-24 text-red-300" />
            </div>
            <div className="absolute bottom-10 left-10 opacity-10">
              <Target className="w-20 h-20 text-blue-300" />
            </div>

            {/* Header with enhanced styling */}
            <div className="text-center mb-12 sm:mb-16 relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-6 shadow-lg shadow-red-200 relative group">
                <HeartHandshake className="w-10 h-10 text-white transform group-hover:scale-110 transition-transform duration-300" />
                {isVisible && (
                  <div className="absolute inset-0 rounded-full border-4 border-red-200/50 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                )}
              </div>

              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-gray-300" />
                <span className="text-sm font-semibold tracking-wider text-red-500 uppercase">
                  Our Core Beliefs
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-gray-300" />
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                 <span className="relative">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent"> Our Philosophy</span>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 rounded-full" />
                </span>
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Guiding principles that shape every aspect of our educational approach
              </p>
            </div>

            {/* Content with enhanced styling */}
            <div className="max-w-3xl mx-auto space-y-6">
              {philosophyPoints.map((point, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-right" 
                  delay={index * 0.05}
                  once={true}
                >
                  <div className="group relative p-6 rounded-2xl border border-gray-100 bg-gradient-to-r from-white to-gray-50/50 hover:from-white hover:to-gray-50 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-blue-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                        style={{
                          animation: `pulse-glow 2s ease-in-out ${index * 0.2}s infinite`
                        }}
                      >
                        {point.icon}
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                      
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Star className="w-5 h-5 text-amber-400 fill-current animate-[spin_3s_linear_infinite]" />
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Footer statement */}
            <AnimatedSection animation="fade-up" delay={0.3} once={true}>
              <div className="mt-12 pt-8 border-t border-gray-100 text-center">
                <p className="text-gray-700 italic text-lg font-medium">
                  "Education with purpose, delivered with passion"
                </p>
                <div 
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-gray-100"
                  style={{
                    animation: "color-shift 4s ease-in-out infinite"
                  }}
                >
                  <span className="text-sm font-semibold text-gray-900">Suyan Education</span>
                  <div 
                    className="w-2 h-2 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #ef4444, #3b82f6)",
                      animation: "pulse 1.5s ease-in-out infinite"
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Inline styles for animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(239, 68, 68, 0);
          }
        }
        
        @keyframes color-shift {
          0%, 100% {
            background: linear-gradient(to right, #fef2f2, #eff6ff);
          }
          50% {
            background: linear-gradient(to right, #fef2f2, #f0f9ff);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}

const philosophyPoints = [
  {
    icon: <Users className="w-6 h-6 text-red-600" />,
    text: (
      <>
        <span className="font-bold text-gray-900">Students are our first priority</span> in every decision we make, ensuring their success guides our every action.
      </>
    ),
  },
  {
    icon: <Brain className="w-6 h-6 text-red-600" />,
    text: (
      <>
        We believe education should create{" "}
        <span className="font-bold text-red-600">confidence, smiles, and humanity</span>, fostering well-rounded individuals.
      </>
    ),
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-red-600" />,
    text: (
      <>
        We work with{" "}
        <span className="font-bold text-gray-900">love, sincerity, and ethical values</span>{" "}
        — never greed, always integrity.
      </>
    ),
  },
  {
    icon: <Target className="w-6 h-6 text-red-600" />,
    text: (
      <>
        We continuously research and improve to understand{" "}
        <span className="font-bold text-gray-900">each student's unique potential</span> and learning journey.
      </>
    ),
  },
  {
    icon: <Sparkles className="w-6 h-6 text-red-600" />,
    text: (
      <>
        We strive to guide students toward{" "}
        <span className="font-bold text-blue-700">continuous growth</span> while strengthening the{" "}
        <span className="font-bold text-gray-900">trust and value of Suyan Education</span>.
      </>
    ),
  },
];