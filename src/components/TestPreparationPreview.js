"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AnimatedSection from "./universityPlacement/AnimatedSection";
import {
  GraduationCap,
  Languages,
  University,
  FileText,
  Mic,
  PlaneTakeoff,
  CheckCircle,
  Users,
  Globe,
  Target,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Heart,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    title: "Student Visa Counseling",
    desc: "Comprehensive visa guidance with personalized eligibility assessment and document preparation.",
    slug: "student-visa-counseling",
    icon: GraduationCap,
    features: [
      "Visa eligibility assessment",
      "Document checklist",
      "Timeline planning",
      "Country-specific rules",
      "Application tracking",
      "Interview preparation",
    ],
    color: "from-blue-600 to-red-600",
    iconColor: "text-blue-600",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-red-50",
    stat: "98% Success Rate",
    iconStat: CheckCircle,
    highlight: "Most Popular",
    animationDelay: 0.1,
  },
  {
    title: "Japanese Language Preparation",
    desc: "Structured JLPT-focused training with cultural immersion and conversation practice.",
    slug: "japanese-language-preparation",
    icon: Languages,
    features: [
      "JLPT N5-N1 preparation",
      "Daily conversation practice",
      "Cultural training",
      "Exam strategies",
      "Pronunciation coaching",
      "Study materials",
    ],
    color: "from-red-600 to-blue-800",
    iconColor: "text-red-600",
    gradient: "bg-gradient-to-br from-red-50 via-white to-blue-50",
    stat: "500+ Students Trained",
    iconStat: Users,
    highlight: "Specialized",
    animationDelay: 0.2,
  },
  {
    title: "University Placement",
    desc: "Strategic university selection with scholarship assistance and application optimization.",
    slug: "university-placement",
    icon: University,
    features: [
      "University shortlisting",
      "Application strategy",
      "LOR & SOP guidance",
      "Scholarship assistance",
      "Portfolio review",
      "Admission follow-up",
    ],
    color: "from-blue-800 to-red-700",
    iconColor: "text-blue-800",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
    stat: "100+ Partner Universities",
    iconStat: Globe,
    highlight: "Global Network",
    animationDelay: 0.3,
  },
  {
    title: "Documentation Support",
    desc: "End-to-end document verification, translation, and application filing assistance.",
    slug: "documentation-support",
    icon: FileText,
    features: [
      "Document verification",
      "Professional translation",
      "Notarization help",
      "Application filing",
      "Certificate attestation",
      "Digital submission",
    ],
    color: "from-red-700 to-blue-900",
    iconColor: "text-red-700",
    gradient: "bg-gradient-to-br from-red-50 via-white to-indigo-50",
    stat: "Zero Error Guarantee",
    iconStat: Shield,
    highlight: "Quality Assured",
    animationDelay: 0.4,
  },
  {
    title: "Interview Preparation",
    desc: "Comprehensive mock interviews with personalized feedback and confidence building.",
    slug: "interview-preparation",
    icon: Mic,
    features: [
      "Mock interviews",
      "Common questions",
      "Body language tips",
      "Confidence building",
      "Stress management",
      "Video recording",
    ],
    color: "from-blue-900 to-red-800",
    iconColor: "text-blue-900",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-pink-50",
    stat: "95% Success Rate",
    iconStat: Target,
    highlight: "High Success",
    animationDelay: 0.5,
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Complete pre-travel orientation with accommodation and emergency support.",
    slug: "pre-departure-guidance",
    icon: PlaneTakeoff,
    features: [
      "Accommodation help",
      "Travel arrangements",
      "Cultural orientation",
      "Emergency support",
      "Banking setup",
      "Insurance guidance",
    ],
    color: "from-red-800 to-blue-950",
    iconColor: "text-red-800",
    gradient: "bg-gradient-to-br from-red-50 via-white to-blue-50",
    stat: "24/7 Support",
    iconStat: Clock,
    highlight: "All-round Support",
    animationDelay: 0.6,
  },
];

export default function ServicesPreview() {
  const [expandedCard, setExpandedCard] = useState(null);
  const router = useRouter();

  // Handle expand/collapse
  const handleExpandClick = (index, e) => {
    e.stopPropagation();
    e.preventDefault();
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Handle card click
  const handleCardClick = (slug, e) => {
    const target = e.target;
    const isExpandButton =
      target.closest("[data-expand]") ||
      target.closest(".expand-indicator") ||
      target.closest(".features-list");

    if (!isExpandButton) {
      router.push(`/services/${slug}`);
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 overflow-hidden w-full">
      {/* Background decorative elements - FIXED: Contained with overflow-hidden */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-red-100 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Header */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20 w-full">
        {/* Badge */}
        <AnimatedSection animation="fade-up" delay={0.1}>
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 shadow-sm mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-red-600 rounded-full"></div>
            </div>
            <span className="text-sm font-semibold text-gray-800 tracking-wide">
              Comprehensive Solutions
            </span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection animation="fade-up" delay={0.2}>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight px-2">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-900 bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </h2>
        </AnimatedSection>

        {/* Underline */}
        <AnimatedSection animation="zoom-in" delay={0.3}>
          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="h-1.5 w-40 sm:w-48 md:w-64 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-blue-800"></div>
          </div>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto px-2">
            End-to-end guidance with{" "}
            <span className="font-bold bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text text-transparent">
              specialized focus on Japan
            </span>{" "}
            and global education destinations
          </p>
        </AnimatedSection>
      </div>

      {/* Interactive Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {/* Left Column - Main Services */}
        <div className="lg:col-span-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const StatIcon = service.iconStat;

              return (
                <AnimatedSection
                  key={service.slug}
                  animation="fade-up"
                  delay={service.animationDelay}
                  
                >
                  <div
                    className="relative group w-full cursor-pointer"
                    onClick={(e) => handleCardClick(service.slug, e)}
                  >
                    {/* Highlight badge */}
                    {service.highlight && (
                      <div className="absolute -top-3 left-4 sm:left-6 z-10">
                        <div className="px-3 sm:px-4 py-1 bg-gradient-to-r from-red-600 to-blue-700 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5 whitespace-nowrap">
                          <Sparkles className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{service.highlight}</span>
                        </div>
                      </div>
                    )}

                    {/* Main Card - FIXED: Equal height for all cards */}
                    <div
                      className={`relative h-full rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200/80 backdrop-blur-sm transform-gpu transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl ${service.gradient} w-full flex flex-col`}
                      style={{ minHeight: "300px" }} // Equal minimum height
                    >
                      {/* Card content */}
                      <div className="relative p-4 sm:p-6 md:p-8 h-full flex flex-col w-full flex-grow">
                        {/* Header with icon and stat */}
                        <div className="flex items-start justify-between mb-4 sm:mb-6">
                          {/* Icon */}
                          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg flex items-center justify-center flex-shrink-0">
                            <Icon
                              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${service.iconColor}`}
                            />
                          </div>

                          {/* Stat badge */}
                          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm ml-2">
                            <StatIcon className="w-3 h-3 sm:w-4 sm:h-4 text-blue-700 flex-shrink-0" />
                            <span className="text-xs sm:text-sm font-bold text-gray-900 truncate">
                              {service.stat}
                            </span>
                          </div>
                        </div>

                        {/* Title and description - FIXED: Consistent height */}
                        <div className="mb-4 sm:mb-6 flex-shrink-0 min-h-[120px]">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                            {service.desc}
                          </p>
                        </div>

                        {/* Features list - Expandable - FIXED: Better grid for readability */}
                        <div
                          className="features-list transition-all duration-300 ease-in-out w-full overflow-hidden flex-grow"
                          style={{
                            maxHeight: expandedCard === index ? "300px" : "0px",
                            opacity: expandedCard === index ? 1 : 0,
                            marginBottom:
                              expandedCard === index ? "1rem" : "0px",
                          }}
                        >
                          <div className="pt-3 sm:pt-4 border-t border-gray-200/50 w-full">
                            <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 flex items-center gap-2">
                              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span>What's included:</span>
                            </p>
                            {/* 
                  FIXED: Smart grid layout
                  - On mobile (single column): grid-cols-2 (features side by side)
                  - On sm+ (cards side by side): grid-cols-1 (features stacked)
                */}
                            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full">
                              {service.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 p-2 rounded-lg bg-white/50 transition-all duration-300 w-full"
                                  style={{
                                    opacity: expandedCard === index ? 1 : 0,
                                    transform:
                                      expandedCard === index
                                        ? "translateX(0)"
                                        : "translateX(-10px)",
                                    transitionDelay:
                                      expandedCard === index
                                        ? `${i * 50}ms`
                                        : "0ms",
                                  }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-blue-600 flex-shrink-0"></div>
                                  <span className="break-words">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Footer with CTA and expand button - FIXED: Always at bottom */}
                        <div className="mt-auto pt-4 sm:pt-6 border-t border-gray-200/50 w-full">
                          <div className="flex items-center justify-end">
                            {/* Expand/Collapse Button */}
                            <button
                              data-expand
                              onClick={(e) => handleExpandClick(index, e)}
                              className="expand-indicator flex-shrink-0 flex items-center gap-1 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium text-xs sm:text-sm transition-all hover:shadow-md whitespace-nowrap"
                            >
                              <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                              <span>
                                {expandedCard === index
                                  ? "Show Less"
                                  : "See Features"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Right Column - Interactive Info Panel */}
        <div className="lg:col-span-1 w-full">
          <AnimatedSection animation="fade-left" delay={0.8}>
            <div className="sticky top-24 bg-gradient-to-b from-white to-gray-50/50 rounded-2xl sm:rounded-3xl border border-gray-200/80 p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl backdrop-blur-sm w-full">
              {/* Header */}
              <AnimatedSection animation="fade-down" delay={0.3} >
                <div className="text-center mb-6 sm:mb-10">
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-red-600 to-blue-800 flex items-center justify-center shadow-lg">
                      <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Why Students <span className="text-red-600">Trust</span> Us
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                    Your success is our commitment
                  </p>
                </div>
              </AnimatedSection>
              {/* Interactive Stats */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
                {[
                  {
                    value: "7+",
                    label: "Years Experience",
                    sublabel: "In education consulting",
                    color: "from-red-500 to-red-600",
                    icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
                  },
                  {
                    value: "2000+",
                    label: "Students Helped",
                    sublabel: "Successful global placements",
                    color: "from-blue-600 to-blue-700",
                    icon: (
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ),
                  },
                  {
                    value: "100+",
                    label: "Global Network",
                    sublabel: "Partner institutions worldwide",
                    color: "from-purple-600 to-purple-700",
                    icon: (
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    ),
                  },
                ].map((stat, index) => (
                  <AnimatedSection
                    key={index}
                    animation="fade-right"
                    delay={index * 0.2}
                    
                  >
                    <div
                      key={index}
                      className="group relative p-4 sm:p-6 bg-white/80 rounded-xl sm:rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer w-full"
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105`}
                        >
                          {stat.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                            {stat.value}
                          </div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">
                            {stat.label}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {stat.sublabel}
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="pt-6 sm:pt-8 border-t border-gray-200/80">
                <p className="text-center text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  Trusted by students from 15+ countries
                </p>
                <div className="flex justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <AnimatedSection
                      animation="zoom-in"
                      key={i}
                      delay={i * 0.05}
                       // Optional: keep visible after animation
                    >
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-r from-red-400/80 to-blue-600/80 shadow-lg" />
                    </AnimatedSection>
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
                  >
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                    Start Your Journey Today
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
