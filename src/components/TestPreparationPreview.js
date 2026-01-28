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
  Heart,
  Zap,
  MessageSquare,
} from "lucide-react";

const SERVICES = [
  {
    title: "Student Visa Counseling",
    desc: "Comprehensive visa guidance with personalized eligibility assessment and document preparation.",
    slug: "student-visa-counseling",
    icon: GraduationCap,
    iconColor: "text-blue-600",
    stat: "98% Success Rate",
    iconStat: CheckCircle,
    highlight: "Most Popular",
  },
  {
    title: "Japanese Language Preparation",
    desc: "Structured JLPT-focused training with cultural immersion and conversation practice.",
    slug: "japanese-language-preparation",
    icon: Languages,
    iconColor: "text-red-600",
    stat: "500+ Students Trained",
    iconStat: Users,
    highlight: "Specialized",
  },
  {
    title: "University Placement",
    desc: "Strategic university selection with scholarship assistance and application optimization.",
    slug: "university-placement",
    icon: University,
    iconColor: "text-blue-800",
    stat: "100+ Partner Universities",
    iconStat: Globe,
    highlight: "Global Network",
  },
  {
    title: "Documentation Support",
    desc: "End-to-end document verification, translation, and application filing assistance.",
    slug: "documentation-support",
    icon: FileText,
    iconColor: "text-red-700",
    stat: "Zero Error Guarantee",
    iconStat: Shield,
    highlight: "Quality Assured",
  },
  {
    title: "Interview Preparation",
    desc: "Comprehensive mock interviews with personalized feedback and confidence building.",
    slug: "interview-preparation",
    icon: Mic,
    iconColor: "text-blue-900",
    stat: "95% Success Rate",
    iconStat: Target,
    highlight: "High Success",
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Complete pre-travel orientation with accommodation and emergency support.",
    slug: "pre-departure-guidance",
    icon: PlaneTakeoff,
    iconColor: "text-red-800",
    stat: "24/7 Support",
    iconStat: Clock,
    highlight: "All-round Support",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8 w-full overflow-hidden">
      {/* Header */}
      <AnimatedSection animation="fade-up" delay={0.1} once={true}>
        <div className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20 w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gray-50 border border-gray-200 mb-4 sm:mb-6">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-800 tracking-wide">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-blue-900">
              Our Premium Services
            </span>
          </h2>

          <div className="flex justify-center mt-4">
              <div className="w-48 h-1.5 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"></div>
            </div>

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
      <AnimatedSection animation="fade-up" delay={0.2} once={true}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
          {/* Left Column - Main Services */}
          <div className="lg:col-span-2 w-full pb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
              {SERVICES.map((service,index) => {
                const Icon = service.icon;
                const StatIcon = service.iconStat;

                return (
                  <AnimatedSection animation="fade-up" delay={0.05 * index} key={index}>
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="relative group w-full cursor-pointer select-none touch-manipulation"
                  >
                    {/* Highlight badge */}
                    {service.highlight && (
                      <div className="absolute -top-2 left-3 sm:left-4 z-10">
                        <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-red-600 text-white text-xs font-semibold rounded-full shadow whitespace-nowrap">
                          {service.highlight}
                        </div>
                      </div>
                    )}

                    {/* Card */}
                    <div className="relative h-full rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 w-full flex flex-col transform transition-transform duration-200 ease-out hover:scale-105 hover:shadow-md bg-white">
                      <div className="relative p-3 sm:p-4 md:p-6 h-full flex flex-col w-full flex-grow">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                            <Icon
                              className={`w-5 h-5 sm:w-6 sm:h-6 ${service.iconColor}`}
                            />
                          </div>

                          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-gray-200 shadow-sm ml-2">
                            <StatIcon className="w-3 h-3 text-blue-700" />
                            <span className="text-xs font-semibold text-gray-900">
                              {service.stat}
                            </span>
                          </div>
                        </div>

                        <div className="mb-3 sm:mb-4 flex-shrink-0">
                          <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 line-clamp-2">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 w-full">
            <AnimatedSection animation="fade-left" delay={0.4} once={true}>
              <div className="relative bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm w-full">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="relative inline-block mb-3 sm:mb-4">
                    <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 flex items-center justify-center">
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

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {[
                    {
                      value: "7+",
                      label: "Years Experience",
                      icon: <Zap className="w-4 h-4 text-white" />,
                      color: "bg-red-500",
                    },
                    {
                      value: "200+",
                      label: "Students Helped",
                      icon: <Users className="w-4 h-4 text-white" />,
                      color: "bg-blue-600",
                    },
                    {
                      value: "100+",
                      label: "Global Network",
                      icon: <Globe className="w-4 h-4 text-white" />,
                      color: "bg-purple-600",
                    },
                  ].map((stat, i) => (
                    <div key={i} className="p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${stat.color} flex items-center justify-center`}>
                          {stat.icon}
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-xs sm:text-sm font-medium text-gray-700">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 sm:pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs sm:text-sm text-gray-600 mb-3">
                    Trusted by students from 15+ countries
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-red-600 text-white font-medium text-sm shadow-sm hover:shadow transition-shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Start Your Journey Today
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}