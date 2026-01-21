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
  const JOB_SECTION_IMAGES = {
    partTimeRules:
      "https://img.freepik.com/premium-vector/cartoon-woman-explaining-rules_112255-3552.jpg?semt=ais_hybrid&w=740&q=80",
    partTimeSectors:
      "https://media.istockphoto.com/id/829281632/vector/people-of-various-professions-in-overalls-and-with-tools-in-hand-vector-colored-sketch-of-a.jpg?s=612x612&w=0&k=20&c=YUmNyfNPAKX1g9qF0lNigtf-bUxz8q0JCDwiBcHMD7Y=",
    avgWage:
      "https://cdn-icons-png.flaticon.com/512/10695/10695051.png",
    internshipInfo:
      "https://media.istockphoto.com/id/1478060507/photo/internship-programs-concept-chart-with-keywords-and-icons-on-white-background.jpg?s=612x612&w=0&k=20&c=l0dK2VDQ0GMe-vBkPRcKGIx1digRhCZm69BBrfh3xHc=",
    postStudyWork:
      "https://cdn.alboompro.com/67a5b18fc04e4900013932f3_68020008296bb60001e2ec38/original_size/post-study-work-visas.png?v=1",
    prPathways:
      "https://cdn-adcof.nitrocdn.com/yyMKDqkMalJVeGfTMCuRkQuJKuApyAxA/assets/images/optimized/rev-d755d8e/www.3ecpa.co.id/wp-content/uploads/2024/07/photo-permanent-resident-pr-400x300-1.jpg",
    demandJobs:
      "https://media.licdn.com/dms/image/v2/D5612AQEka2BBRL7ORQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690984447232?e=2147483647&v=beta&t=vzUiQGuWRJ1gEGEin8M4aogFUPb7FaEM70s-pHfNO4M",
  };
  

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
            image={JOB_SECTION_IMAGES.partTimeRules}
          />
          <InfoSection
            id="partTimeSectors"
            title="Popular Part-Time Sectors"
            icon={Factory}
            points={partTimeSectors}
            sectionsRef={sectionsRef}
            image={JOB_SECTION_IMAGES.partTimeSectors}
          />
          <InfoSection
            id="avgWage"
            title="Average Wages"
            icon={DollarSign}
            points={avgWage}
            sectionsRef={sectionsRef}
            image={JOB_SECTION_IMAGES.avgWage}
          />
          <InfoSection
            id="internshipInfo"
            title="Internships"
            icon={GraduationCap}
            points={internshipInfo}
            sectionsRef={sectionsRef}
            image={JOB_SECTION_IMAGES.internshipInfo}
          />
          <InfoSection
            id="postStudyWork"
            title="Post Study Work Options"
            icon={Briefcase}
            points={postStudyWork}
            sectionsRef={sectionsRef}
            image={JOB_SECTION_IMAGES.postStudyWork}
          />
          <InfoSection
            id="prPathways"
            title="PR Pathways"
            icon={MapPin}
            points={prPathways}
            sectionsRef={sectionsRef}
            image={JOB_SECTION_IMAGES.prPathways}
          />
          <InfoSection
            id="demandJobs"
            title="High Demand Jobs"
            icon={TrendingUp}
            points={demandJobs}
            sectionsRef={sectionsRef}
            image={JOB_SECTION_IMAGES.demandJobs}
          />
        </div>
      </div>
    </div>
  );
}

/* =========================
   REUSABLE INFO SECTION
========================= */
function InfoSection({ id, title, icon: Icon, points, sectionsRef, image }) {
    const [expanded, setExpanded] = useState(false);
    if (!points.length) return null;
  
    const visiblePoints = expanded ? points : points.slice(0, 3);
  
    return (
      <section
        id={id}
        ref={(el) => (sectionsRef.current[id] = el)}
        className="scroll-mt-24 py-8 sm:py-10 md:py-12"
      >
        {/* Section Heading */}
        <RevealTest delay={0.2}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
        </RevealTest>
  
        {/* Card */}
        <RevealTest delay={0.4}>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
            {/* Image on top */}
            {image && (
              <div className="w-full h-56 sm:h-72 md:h-80 lg:h-96 relative">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            )}
  
            {/* Content */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-red-50 to-blue-50">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                </div>
  
                {/* Paragraphs */}
                <div className="flex-1 space-y-4">
                  {visiblePoints.map((p, i) => (
                    <RevealTest key={i} delay={i * 0.05}>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        {p}
                      </p>
                    </RevealTest>
                  ))}
  
                  {/* Read More */}
                  {points.length > 3 && (
                    <button
                      onClick={() => setExpanded(!expanded)}
                      className="mt-4 inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition"
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
          </div>
        </RevealTest>
      </section>
    );
  }
  
  
