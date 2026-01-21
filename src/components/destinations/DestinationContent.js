"use client";

import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Award,
  Target,
  ChevronRight,
} from "lucide-react";
import RevealTest from "../RevealTest";

export default function DestinationContent({ destination }) {
  const sectionsRef = useRef({});
  const [activeSection, setActiveSection] = useState("introduction");

  const whyPoints = destination.whyPoints?.split("\n") || [];
  const fields = destination.popularFields?.split("\n") || [];
  const visaUpdates = destination.visaUpdates?.split("\n") || [];

  // Handle scroll to section
  const handleScrollTo = (id) => {
    const section = sectionsRef.current[id];
    if (section) {
      const navbarHeight = 140;
      const elementPosition =
        section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - 20;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update active section
      setActiveSection(id);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust these values to control when sections become active
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <aside className="lg:w-1/3 ">
          
            <div className="lg:sticky lg:top-40">
              <div className="bg-gradient-to-br from-white via-red-50/50 to-blue-50/50 rounded-2xl border border-gray-200 shadow-lg p-6">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    On this page
                  </h4>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                </div>

                <nav className="space-y-2">
                  <RevealTest delay={0.5}>
                    <button
                      onClick={() => handleScrollTo("introduction")}
                      className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                        activeSection === "introduction"
                          ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                          : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activeSection === "introduction"
                            ? "bg-red-500"
                            : "bg-gray-300"
                        }`}
                      ></div>
                      <span>Introduction</span>
                      {activeSection === "introduction" && (
                        <ChevronRight className="w-4 h-4 ml-auto text-red-500" />
                      )}
                    </button>
                  </RevealTest>
                  {whyPoints.length > 0 && (
                    <RevealTest delay={0.5}>
                      <button
                        onClick={() => handleScrollTo("why-study")}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                          activeSection === "why-study"
                            ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === "why-study"
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span>Why Choose {destination.country}</span>
                        {activeSection === "why-study" && (
                          <ChevronRight className="w-4 h-4 ml-auto text-red-500" />
                        )}
                      </button>
                    </RevealTest>
                  )}

                  {destination.education && (
                    <RevealTest delay={0.5}>
                      <button
                        onClick={() => handleScrollTo("education")}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                          activeSection === "education"
                            ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === "education"
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span>Education System & Requirements</span>
                        {activeSection === "education" && (
                          <ChevronRight className="w-4 h-4 ml-auto text-red-500" />
                        )}
                      </button>
                    </RevealTest>
                  )}

                  {fields.length > 0 && (
                    <RevealTest delay={0.5}>
                      <button
                        onClick={() => handleScrollTo("fields")}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                          activeSection === "fields"
                            ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === "fields"
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span>Top Fields of Study</span>
                        {activeSection === "fields" && (
                          <ChevronRight className="w-4 h-4 ml-auto text-red-500" />
                        )}
                      </button>
                    </RevealTest>
                  )}

                  {visaUpdates.length > 0 && (
                    <RevealTest delay={0.5}>
                      <button
                        onClick={() => handleScrollTo("visa")}
                        className={`w-full text-left flex items-center gap-3 p-3 rounded-xl transition-all duration-200 ${
                          activeSection === "visa"
                            ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === "visa"
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                        ></div>
                        <span>Visa & Immigration Updates</span>
                        {activeSection === "visa" && (
                          <ChevronRight className="w-4 h-4 ml-auto text-red-500" />
                        )}
                      </button>
                    </RevealTest>
                  )}
                </nav>

                {/* CTA Button */}
                <RevealTest delay={0.5}>
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="/contact"
                      className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-200 transition-all hover:scale-[1.02] active:scale-95"
                    >
                      Get Free Consultation
                    </a>
                  </div>
                </RevealTest>
              </div>
            </div>
         
        </aside>

        {/* Main Content - Takes remaining space */}
        <div className="lg:w-2/3 space-y-16">
          {/* Introduction */}
          <section
            id="introduction"
            ref={(el) => (sectionsRef.current["introduction"] = el)}
          >
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-gray-100">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6">
                  <BookOpen className="w-5 h-5 text-red-500" />
                  <span className="text-lg font-semibold text-gray-700">
                    About Education in {destination.country}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {destination.description}
                </p>
              </Reveal>
            </div>
          </section>

          {/* Why Choose */}
          {whyPoints.length > 0 && (
            <section
              id="why-study"
              ref={(el) => (sectionsRef.current["why-study"] = el)}
            >
              <Reveal>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Why Choose {destination.country}?
                  </span>
                </h2>
              </Reveal>

              <div className="grid md:grid-cols-2 gap-6">
                {whyPoints.map((point, i) => (
                  <RevealTest key={i} delay={i * 0.2}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-red-100 transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-50 to-blue-50 group-hover:from-red-100 group-hover:to-blue-100 transition-colors">
                          <span className="text-red-600 font-bold text-lg">
                            {i + 1}
                          </span>
                        </div>
                        <p className="text-gray-700 pt-1">{point}</p>
                      </div>
                    </div>
                  </RevealTest>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {destination.education && (
            <section
              id="education"
              ref={(el) => (sectionsRef.current["education"] = el)}
              className="scroll-mt-24"
            >
              <RevealTest delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Education System & Requirements
                  </span>
                </h2>
              </RevealTest>

              <RevealTest delay={0.5}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-lg">
                  <div className="space-y-6">
                    {destination.education.split("\n").map((p, i) => (
                      <p
                        key={i}
                        className="text-gray-700 text-lg leading-relaxed"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </RevealTest>
            </section>
          )}

          {/* Fields */}
          {fields.length > 0 && (
            <section
              id="fields"
              ref={(el) => (sectionsRef.current["fields"] = el)}
              className="scroll-mt-24"
            >
              <RevealTest delay={0.1}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Top Fields of Study
                  </span>
                </h2>
              </RevealTest>

              <div className="grid sm:grid-cols-2 gap-6">
                {fields.map((field, i) => (
                  <RevealTest key={i} delay={i * 0.2}>
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-50 to-red-50 group-hover:from-blue-100 group-hover:to-red-100 transition-colors">
                          <GraduationCap className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {field}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            High-demand programs with excellent career outcomes
                            for graduates.
                          </p>
                        </div>
                      </div>
                    </div>
                  </RevealTest>
                ))}
              </div>
            </section>
          )}

          {/* Visa Updates */}
          {visaUpdates.length > 0 && (
            <section
              id="visa"
              ref={(el) => (sectionsRef.current["visa"] = el)}
              className="scroll-mt-24"
            >
              <RevealTest delay={0.2}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Visa & Immigration Updates
                  </span>
                </h2>
              </RevealTest>

             
                <div className="space-y-4">
                  {visaUpdates.map((v, i) => (
                    <RevealTest key={i} delay={i*0.2}>
                    <div
                      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-red-50 to-orange-50 group-hover:from-red-100 group-hover:to-orange-100 transition-colors">
                          <Target className="w-4 h-4 text-red-600" />
                        </div>
                        <p className="text-gray-700 pt-0.5">{v}</p>
                      </div>
                    </div>
                    </RevealTest>
                  ))}
                </div>
              
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
