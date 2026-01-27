import Link from "next/link";
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
    color: "from-blue-600 to-red-600",
    iconColor: "text-blue-600",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-red-50",
    stat: "98% Success Rate",
    iconStat: CheckCircle,
    highlight: "Most Popular",
  },
  {
    title: "Japanese Language Preparation",
    desc: "Structured JLPT-focused training with cultural immersion and conversation practice.",
    slug: "japanese-language-preparation",
    icon: Languages,
    color: "from-red-600 to-blue-800",
    iconColor: "text-red-600",
    gradient: "bg-gradient-to-br from-red-50 via-white to-blue-50",
    stat: "500+ Students Trained",
    iconStat: Users,
    highlight: "Specialized",
  },
  {
    title: "University Placement",
    desc: "Strategic university selection with scholarship assistance and application optimization.",
    slug: "university-placement",
    icon: University,
    color: "from-blue-800 to-red-700",
    iconColor: "text-blue-800",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
    stat: "100+ Partner Universities",
    iconStat: Globe,
    highlight: "Global Network",
  },
  {
    title: "Documentation Support",
    desc: "End-to-end document verification, translation, and application filing assistance.",
    slug: "documentation-support",
    icon: FileText,
    color: "from-red-700 to-blue-900",
    iconColor: "text-red-700",
    gradient: "bg-gradient-to-br from-red-50 via-white to-indigo-50",
    stat: "Zero Error Guarantee",
    iconStat: Shield,
    highlight: "Quality Assured",
  },
  {
    title: "Interview Preparation",
    desc: "Comprehensive mock interviews with personalized feedback and confidence building.",
    slug: "interview-preparation",
    icon: Mic,
    color: "from-blue-900 to-red-800",
    iconColor: "text-blue-900",
    gradient: "bg-gradient-to-br from-blue-50 via-white to-pink-50",
    stat: "95% Success Rate",
    iconStat: Target,
    highlight: "High Success",
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Complete pre-travel orientation with accommodation and emergency support.",
    slug: "pre-departure-guidance",
    icon: PlaneTakeoff,
    color: "from-red-800 to-blue-950",
    iconColor: "text-red-800",
    gradient: "bg-gradient-to-br from-red-50 via-white to-blue-50",
    stat: "24/7 Support",
    iconStat: Clock,
    highlight: "All-round Support",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 w-full">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-100 to-blue-100 rounded-full blur-2xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-red-100 rounded-full blur-2xl opacity-10"></div>
      </div>

      {/* Header Section */}
      <AnimatedSection animation="fade-up" delay={0.05} once={true}>
        <div className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-wide">
              Comprehensive Solutions
            </span>
          </div>

          {/* Main Heading */}

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-900 bg-clip-text text-transparent">
              Our Premium Services
            </span>
          </h2>

          {/* Simple Underline */}

          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="h-1 w-32 sm:w-40 md:w-48 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-blue-800"></div>
          </div>

          {/* Subtitle */}

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            End-to-end guidance with{" "}
            <span className="font-semibold text-red-600">
              specialized focus on Japan
            </span>{" "}
            and global education destinations
          </p>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
        {/* Left Column - Services Cards */}
        <div className="lg:col-span-2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const StatIcon = service.iconStat;
              const animationDelay = 0.05 + index * 0.05;

              return (
                <AnimatedSection
                  key={service.slug}
                  animation="zoom-in"
                  delay={animationDelay}
                  once={true}
                  threshold={0.05}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="relative w-full block group"
                  >
                    {/* Highlight badge */}
                    {service.highlight && (
                      <div className="absolute -top-2 left-3 sm:left-4 z-10">
                        <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gradient-to-r from-red-600 to-blue-700 text-white text-xs font-semibold rounded-full shadow-sm">
                          {service.highlight}
                        </div>
                      </div>
                    )}

                    {/* Main Card */}
                    <div
                      className={`relative h-full rounded-xl sm:rounded-2xl overflow-hidden border border-gray-200 ${service.gradient} w-full flex flex-col transition-all duration-200 group-hover:shadow-md group-hover:border-red-300 group-hover:-translate-y-1`}
                    >
                      <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col w-full">
                        {/* Header with icon and stat */}
                        <div className="flex items-start justify-between mb-4">
                          {/* Icon */}
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-xs group-hover:shadow-sm group-hover:border-red-200 transition-all">
                            <Icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor} transition-transform group-hover:scale-110`}
                            />
                          </div>

                          {/* Stat badge */}
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-gray-200 shadow-xs">
                            <StatIcon className="w-3 h-3 text-blue-700" />
                            <span className="text-xs font-semibold text-gray-900">
                              {service.stat}
                            </span>
                          </div>
                        </div>

                        {/* Title and description */}
                        <div className="mb-4 flex-shrink-0">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {service.desc}
                          </p>
                        </div>

                        {/* Learn More Link */}
                        <div className="mt-auto pt-4 border-t border-gray-200/50 w-full">
                          <div className="flex items-center gap-2 text-sm font-medium text-red-600 group-hover:text-red-700">
                            <MessageSquare className="w-4 h-4" />
                            <span>Learn More</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        {/* Right Column - Trust Section */}
        <div className="lg:col-span-1 w-full">
          <AnimatedSection animation="fade-left" delay={0.4} once={true}>
            <div className="sticky top-28 bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 shadow-sm w-full">
              {/* Header */}
              <div className="text-center mb-6 sm:mb-8">
                <div className="relative inline-block mb-4">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-red-600 to-blue-800 flex items-center justify-center">
                    <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Why Students <span className="text-red-600">Trust</span> Us
                </h3>
                <p className="text-sm text-gray-600">
                  Your success is our commitment
                </p>
              </div>

              {/* Stats */}
              <div className="space-y-4 mb-8">
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
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center flex-shrink-0`}
                      >
                        {stat.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-center text-sm text-gray-600 mb-4">
                  Trusted by students from 15+ countries
                </p>
                <div className="flex justify-center gap-2 mb-5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded-full bg-gradient-to-r from-red-400/80 to-blue-600/80"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-red-600 to-blue-800 text-white font-medium text-sm shadow-sm hover:shadow-md transition-shadow w-full sm:w-auto"
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
