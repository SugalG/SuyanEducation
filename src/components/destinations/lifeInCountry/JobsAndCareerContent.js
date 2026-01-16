"use client";

import { useRef, useState, useEffect } from "react";
import Reveal from "@/components/Reveal";
import RevealTest from "@/components/RevealTest";
import {
  Clock,
  Factory,
  DollarSign,
  GraduationCap,
  Briefcase,
  MapPin,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

/* =========================
   MAIN CONTENT COMPONENT
========================= */
export default function JobsAndCareerContent({ jobsInfo }) {
  const sectionsRef = useRef({});
  const [activeSection, setActiveSection] = useState("partTimeRules");

  const jobSections = [
    { id: "partTimeRules", label: "Part-Time Rules", icon: Clock },
    { id: "partTimeSectors", label: "Part-Time Sectors", icon: Factory },
    { id: "avgWage", label: "Average Wages", icon: DollarSign },
    { id: "internshipInfo", label: "Internships", icon: GraduationCap },
    { id: "postStudyWork", label: "Post Study Work", icon: Briefcase },
    { id: "prPathways", label: "PR Pathways", icon: MapPin },
    { id: "demandJobs", label: "High Demand Jobs", icon: TrendingUp },
  ];

  const partTimeRules =
    jobsInfo.jobsAndCareer?.partTimeRules.split("\n") || [];
  const partTimeSectors =
    jobsInfo.jobsAndCareer?.partTimeSectors.split("\n") || [];
  const avgWage = jobsInfo.jobsAndCareer?.avgWage.split("\n") || [];
  const internshipInfo =
    jobsInfo.jobsAndCareer?.internshipInfo.split("\n") || [];
  const postStudyWork =
    jobsInfo.jobsAndCareer?.postStudyWork.split("\n") || [];
  const prPathways = jobsInfo.jobsAndCareer?.prPathways.split("\n") || [];
  const demandJobs = jobsInfo.jobsAndCareer?.demandJobs.split("\n") || [];

  /* Scroll to section */
  const handleScrollTo = (id) => {
    const section = sectionsRef.current[id];
    if (!section) return;

    const navbarHeight = 140;
    const offset =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight -
      20;

    window.scrollTo({ top: offset, behavior: "smooth" });
    setActiveSection(id);
  };

  /* Active section observer */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(
          (entry) =>
            entry.isIntersecting && setActiveSection(entry.target.id)
        );
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    Object.values(sectionsRef.current).forEach(
      (section) => section && observer.observe(section)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* SIDEBAR */}
        <aside className="lg:w-1/3">
          <div className="lg:sticky lg:top-40">
            <div className="bg-gradient-to-br from-white via-red-50/50 to-blue-50/50 rounded-2xl border border-gray-200 shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                Jobs & Career Guide
              </h4>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full mb-6" />

              <nav className="space-y-2">
                {jobSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Reveal key={section.id} delay={0.1}>
                      <button
                        onClick={() => handleScrollTo(section.id)}
                        className={`w-full flex items-center gap-3 p-3 rounded-xl transition ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 font-semibold"
                            : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activeSection === section.id
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                        />
                        <Icon className="w-4 h-4 text-red-500" />
                        <span>{section.label}</span>
                        {activeSection === section.id && (
                          <ChevronRight className="ml-auto w-4 h-4 text-red-500" />
                        )}
                      </button>
                    </Reveal>
                  );
                })}
              </nav>

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <a
                  href="/contact"
                  className="block w-full text-center px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-xl hover:shadow-lg transition"
                >
                  Get Career Guidance
                </a>
              </div>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <div className="lg:w-2/3">
          <InfoSection
            id="partTimeRules"
            title="Part-Time Work Rules"
            icon={Clock}
            points={partTimeRules}
            sectionsRef={sectionsRef}
          />
          <InfoSection
            id="partTimeSectors"
            title="Popular Part-Time Sectors"
            icon={Factory}
            points={partTimeSectors}
            sectionsRef={sectionsRef}
          />
          <InfoSection
            id="avgWage"
            title="Average Wages"
            icon={DollarSign}
            points={avgWage}
            sectionsRef={sectionsRef}
          />
          <InfoSection
            id="internshipInfo"
            title="Internships"
            icon={GraduationCap}
            points={internshipInfo}
            sectionsRef={sectionsRef}
          />
          <InfoSection
            id="postStudyWork"
            title="Post Study Work Options"
            icon={Briefcase}
            points={postStudyWork}
            sectionsRef={sectionsRef}
          />
          <InfoSection
            id="prPathways"
            title="PR Pathways"
            icon={MapPin}
            points={prPathways}
            sectionsRef={sectionsRef}
          />
          <InfoSection
            id="demandJobs"
            title="High Demand Jobs"
            icon={TrendingUp}
            points={demandJobs}
            sectionsRef={sectionsRef}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================
   REUSABLE INFO SECTION
========================= */
function InfoSection({ id, title, icon: Icon, points, sectionsRef }) {
  const [expanded, setExpanded] = useState(false);
  if (!points.length) return null;

  const visiblePoints = expanded ? points : points.slice(0, 3);

  return (
    <section
      id={id}
      ref={(el) => (sectionsRef.current[id] = el)}
      className="scroll-mt-24 py-8 sm:py-10 md:py-12"
    >
      <RevealTest delay={0.2}>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            {title}
          </span>
        </h2>
      </RevealTest>

      <RevealTest delay={0.4}>
        <div className="bg-white rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg border border-gray-100">
          <div className="flex gap-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-50 to-blue-50">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
            </div>

            <div className="flex-1 space-y-4">
              {visiblePoints.map((p, i) => (
                <RevealTest key={i} delay={i * 0.05}>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {p}
                  </p>
                </RevealTest>
              ))}

              {points.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="text-red-600 font-semibold mt-4 inline-flex items-center gap-2 hover:text-red-700"
                >
                  {expanded ? "Show less" : "Read more"}
                  <span
                    className={`transition-transform ${
                      expanded ? "rotate-180" : ""
                    }`}
                  >
                    ↓
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </RevealTest>
    </section>
  );
}
