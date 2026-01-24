"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Detect mobile early
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 w-full overflow-hidden">
      {/* Background decorative elements - SIMPLIFIED */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-100 to-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-red-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Header - FASTER animations */}
      <div className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20 w-full">
        {/* Badge */}
        <AnimatedSection animation="fade-up" delay={0.1} once={true}>
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-wide">
              Comprehensive Solutions
            </span>
          </div>
        </AnimatedSection>

        {/* Main Heading */}
        <AnimatedSection animation="fade-up" delay={0.2} once={true}>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-900 bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </h2>
        </AnimatedSection>

        {/* Simple Underline */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <div className="h-1 w-32 sm:w-40 md:w-48 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-blue-800"></div>
        </div>

        {/* Subtitle */}
        <AnimatedSection animation="fade-up" delay={0.3} once={true}>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            End-to-end guidance with{" "}
            <span className="font-semibold text-red-600">
              specialized focus on Japan
            </span>{" "}
            and global education destinations
          </p>
        </AnimatedSection>
      </div>

      {/* Interactive Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Left Column - Main Services */}
        <div className="lg:col-span-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const StatIcon = service.iconStat;

              return (
                <AnimatedSection
                  key={service.slug}
                  animation={isMobile ? "fade-up" : "zoom-in"}
                  delay={isMobile ? index * 0.1 : service.animationDelay}
                  once={true}
                >
                  <div
                    className="relative group w-full cursor-pointer select-none touch-manipulation"
                    onClick={(e) => handleCardClick(service.slug, e)}
                  >
                    {/* Highlight badge - SIMPLER */}
                    {service.highlight && (
                      <div className="absolute -top-2 left-3 sm:left-4 z-10">
                        <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-red-600 to-blue-700 text-white text-xs font-semibold rounded-full shadow">
                          {service.highlight}
                        </div>
                      </div>
                    )}

                    {/* Main Card - SIMPLER hover effect */}
                    <div
                      className={`relative h-full rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 ${service.gradient} w-full flex flex-col transition-all duration-200 hover:border-red-400 hover:shadow-md`}
                    >
                      {/* Card content */}
                      <div className="relative p-3 sm:p-4 md:p-6 h-full flex flex-col w-full flex-grow">
                        {/* Header with icon and stat */}
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          {/* Icon */}
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                            <Icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`}
                            />
                          </div>

                          {/* Stat badge */}
                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-gray-200 shadow-sm ml-2">
                            <StatIcon className="w-3 h-3 text-blue-700" />
                            <span className="text-xs font-semibold text-gray-900">
                              {service.stat}
                            </span>
                          </div>
                        </div>

                        {/* Title and description */}
                        <div className="mb-3 sm:mb-4 flex-shrink-0">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {service.desc}
                          </p>
                        </div>

                        {/* Features list - Expandable - CSS only */}
                        <div
                          className="features-list w-full overflow-hidden transition-all duration-200 ease-out"
                          style={{
                            maxHeight: expandedCard === index ? "200px" : "0px",
                            opacity: expandedCard === index ? 1 : 0,
                          }}
                        >
                          <div className="pt-3 border-t border-gray-200/50 w-full">
                            <p className="text-xs font-medium text-gray-700 mb-2 flex items-center gap-1.5">
                              <BookOpen className="w-3 h-3" />
                              <span>What's included:</span>
                            </p>
                            <ul className="grid grid-cols-2 gap-1.5 w-full">
                              {service.features.map((feature, i) => (
                                <li
                                  key={i}
                                  className="flex items-center gap-1.5 text-xs text-gray-600 p-1.5 rounded bg-white/70"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-blue-600"></div>
                                  <span className="break-words">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Footer with expand button */}
                        <div className="mt-auto pt-3 border-t border-gray-200/50 w-full">
                          <div className="flex items-center justify-between">
                            <button
                              data-expand
                              onClick={(e) => handleExpandClick(index, e)}
                              className="expand-indicator flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-gray-200 text-gray-700 font-medium text-xs transition-colors hover:border-gray-300"
                            >
                              <MessageSquare className="w-3 h-3" />
                              <span>
                                {expandedCard === index
                                  ? "Show Less"
                                  : "See Features"}
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Right Column - Simplified */}
        <div className="lg:col-span-1 w-full">
          <AnimatedSection animation="fade-left" delay={0.4} once={true}>
            <div className="sticky top-24 bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm w-full">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative inline-block mb-3 sm:mb-4">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-red-600 to-blue-800 flex items-center justify-center">
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                  Why Students <span className="text-red-600">Trust</span> Us
                </h3>
                <p className="text-sm text-gray-600">
                  Your success is our commitment
                </p>
              </div>

              {/* Stats - Simplified */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {[
                  {
                    value: "7+",
                    label: "Years Experience",
                    color: "from-red-500 to-red-600",
                    icon: <Zap className="w-4 h-4 text-white" />,
                  },
                  {
                    value: "2000+",
                    label: "Students Helped",
                    color: "from-blue-600 to-blue-700",
                    icon: <Users className="w-4 h-4 text-white" />,
                  },
                  {
                    value: "100+",
                    label: "Global Network",
                    color: "from-purple-600 to-purple-700",
                    icon: <Globe className="w-4 h-4 text-white" />,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                      >
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-700">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge - Simplified */}
              <div className="pt-4 sm:pt-6 border-t border-gray-100">
                <p className="text-center text-xs sm:text-sm text-gray-600 mb-3">
                  Trusted by students from 15+ countries
                </p>
                <div className="flex justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-r from-red-400/80 to-blue-600/80"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-blue-800 text-white font-medium text-sm shadow-sm hover:shadow transition-shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
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