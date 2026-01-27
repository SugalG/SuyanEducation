import AboutTeamSection from "@/components/AboutTeamSection";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import {
  Target,
  Eye,
  Users,
  Award,
  Globe,
  CheckCircle,
  GraduationCap,
  Shield,
  BookOpen,
  MapPin,
  Clock,
  Star,
  Plane,
  Building,
  Languages,
  FileText,
  Mic,
  Compass,
} from "lucide-react";

// Country flag emojis mapping
const countryFlags = {
  Japan: "🇯🇵",
  Australia: "🇦🇺",
  USA: "🇺🇸",
  "United States": "🇺🇸",
  UK: "🇬🇧",
  "United Kingdom": "🇬🇧",
  Canada: "🇨🇦",
  Germany: "🇩🇪",
  France: "🇫🇷",
  Italy: "🇮🇹",
  Spain: "🇪🇸",
  Netherlands: "🇳🇱",
  Sweden: "🇸🇪",
  Switzerland: "🇨🇭",
  Singapore: "🇸🇬",
  Malaysia: "🇲🇾",
  "South Korea": "🇰🇷",
  "New Zealand": "🇳🇿",
  Ireland: "🇮🇪",
  Finland: "🇫🇮",
  Norway: "🇳🇴",
  Denmark: "🇩🇰",
};

// Default color mapping for countries
const countryColors = {
  Japan: "bg-red-100 text-red-700",
  Australia: "bg-blue-100 text-blue-700",
  USA: "bg-purple-100 text-purple-700",
  "United States": "bg-purple-100 text-purple-700",
  UK: "bg-green-100 text-green-700",
  "United Kingdom": "bg-green-100 text-green-700",
  Canada: "bg-yellow-100 text-yellow-700",
  Germany: "bg-gray-100 text-gray-700",
  France: "bg-blue-50 text-blue-600",
  Italy: "bg-green-50 text-green-600",
  Spain: "bg-red-50 text-red-600",
  Netherlands: "bg-orange-100 text-orange-700",
  Sweden: "bg-blue-50 text-blue-600",
  Switzerland: "bg-red-100 text-red-700",
  Singapore: "bg-red-50 text-red-600",
  Malaysia: "bg-blue-50 text-blue-600",
  "South Korea": "bg-blue-50 text-blue-600",
  "New Zealand": "bg-blue-100 text-blue-700",
  Ireland: "bg-green-50 text-green-600",
  Finland: "bg-blue-50 text-blue-600",
  Norway: "bg-red-50 text-red-600",
  Denmark: "bg-red-50 text-red-600",
};

// Default specialties for countries
const defaultSpecialties = {
  Japan: "Technology & Language",
  Australia: "Research & Work",
  USA: "STEM & Business",
  "United Kingdom": "Foundation Programs",
  Canada: "Co-op & Immigration",
  Germany: "Free Education",
  France: "Art & Culture",
  Italy: "Design & Architecture",
  Spain: "Language & Hospitality",
  Netherlands: "Engineering & Tech",
  Sweden: "Sustainability & Innovation",
  Switzerland: "Hospitality & Business",
  Singapore: "Business & Technology",
  Malaysia: "Affordable Education",
  "South Korea": "Technology & Innovation",
  "New Zealand": "Adventure & Research",
  Ireland: "Technology & Pharmaceuticals",
  Finland: "Education & Technology",
  Norway: "Renewable Energy",
  Denmark: "Design & Sustainability",
};

const services = [
  {
    icon: Globe,
    title: "Global Destinations",
    description: "10+ countries with diverse educational opportunities",
    color: "from-red-500 to-red-600",
    stat: "10+ Countries",
  },
  {
    icon: GraduationCap,
    title: "University Placement",
    description: "Top institutions worldwide with strong partnerships",
    color: "from-blue-500 to-blue-600",
    stat: "50+ Partners",
  },
  {
    icon: Languages,
    title: "Language Training",
    description: "Comprehensive preparation for language proficiency tests",
    color: "from-green-500 to-green-600",
    stat: "100+ Trained",
  },
  {
    icon: FileText,
    title: "Visa Guidance",
    description: "High success rate with expert documentation support",
    color: "from-purple-500 to-purple-600",
    stat: "95% Success",
  },
  {
    icon: Mic,
    title: "Interview Prep",
    description: "Mock interviews and confidence building sessions",
    color: "from-yellow-500 to-yellow-600",
    stat: "Expert Coaching",
  },
  {
    icon: Compass,
    title: "Cultural Orientation",
    description: "Preparing students for international living",
    color: "from-indigo-500 to-indigo-600",
    stat: "Cultural Training",
  },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Honest guidance with complete transparency",
    color: "from-red-100 to-red-50",
  },
  {
    icon: Users,
    title: "Student Success",
    description: "Your goals are our primary focus",
    color: "from-blue-100 to-blue-50",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Commitment to quality in every service",
    color: "from-green-100 to-green-50",
  },
  {
    icon: Globe,
    title: "Global Vision",
    description: "Connecting Nepal to worldwide opportunities",
    color: "from-purple-100 to-purple-50",
  },
];

// Fallback global destinations (used when API fails)
const fallbackDestinations = [
  {
    country: "Japan",
    icon: "🇯🇵",
    color: "bg-red-100 text-red-700",
    specialty: "Technology & Language",
  },
  {
    country: "Australia",
    icon: "🇦🇺",
    color: "bg-blue-100 text-blue-700",
    specialty: "Research & Work",
  },
  {
    country: "USA",
    icon: "🇺🇸",
    color: "bg-purple-100 text-purple-700",
    specialty: "STEM & Business",
  },
  {
    country: "UK",
    icon: "🇬🇧",
    color: "bg-green-100 text-green-700",
    specialty: "Foundation Programs",
  },
  {
    country: "Canada",
    icon: "🇨🇦",
    color: "bg-yellow-100 text-yellow-700",
    specialty: "Co-op & Immigration",
  },
  {
    country: "Germany",
    icon: "🇩🇪",
    color: "bg-gray-100 text-gray-700",
    specialty: "Free Education",
  },
];

async function getDestinations() {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/api/destinations`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch destinations");
    }

    const data = await res.json();
    if (data.success && data.items) {
      // Take up to 6 destinations for display
      return data.items.slice(0, 6).map((dest) => {
        const countryName = dest.country || "";
        const flag = countryFlags[countryName] || "🌍";
        const color = countryColors[countryName] || "bg-gray-100 text-gray-700";
        const specialty =
          dest.keyFeatures?.[0] ||
          defaultSpecialties[countryName] ||
          "Study Opportunities";

        return {
          country: countryName,
          icon: flag,
          color,
          specialty,
        };
      });
    }
    return fallbackDestinations;
  } catch (err) {
    console.error("Failed to load destinations", err);
    return fallbackDestinations;
  }
}

export default async function AboutPage() {
  const globalDestinations = await getDestinations();

  return (
    <main className="relative mt-24 overflow-hidden">
      {/* FIX: Added overflow-hidden to main container */}
      <div className="w-full">
        {/* Background Elements - FIXED: Added overflow-hidden container */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-950/5 rounded-full blur-3xl"></div>
        </div>

        {/* HERO SECTION - FIXED: Added w-full and removed excessive padding */}
        <AnimatedSection animation="fade-up" delay={0.1} once={true}>
          <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 lg:py-32">
            <div className="text-center w-full max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Global Education Experts
                </span>
              </div>

              {/* Main Heading - FIXED: Added text-balance and removed hard padding */}

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 px-2 text-balance">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  About Suyan Education
                </span>
              </h1>

              {/* Animated Underline */}
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full"></div>
              </div>

              {/* Subtitle - FIXED: Added text-balance */}

              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4 text-balance">
                Your trusted partner for global education opportunities with{" "}
                <span className="font-semibold text-red-600">
                  specialized expertise in Japan
                </span>{" "}
                and comprehensive support for destinations worldwide.
              </p>

              {/* Global Stats - FIXED: Added w-full and responsive grid */}

              <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto w-full px-2">
                {[
                  {
                    icon: Globe,
                    value: "10+",
                    label: "Countries",
                    color: "text-red-600",
                  },
                  {
                    icon: Users,
                    value: "100+",
                    label: "Students Guided",
                    color: "text-blue-950",
                  },
                  {
                    icon: Award,
                    value: "95%",
                    label: "Visa Success",
                    color: "text-green-600",
                  },
                  {
                    icon: Clock,
                    value: "2018",
                    label: "Since Year",
                    color: "text-purple-600",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-red-300 transition-colors group w-full"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-all flex-shrink-0">
                        <stat.icon
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.color}`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-lg sm:text-xl font-bold text-gray-900 truncate">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 truncate">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* WHO WE ARE - FIXED: Added w-full */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 w-full">
              <AnimatedSection animation="fade-up" delay={0.1} once={true}>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold px-2 lg:px-0">
                  <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Your Global Education Partner
                  </span>
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.2} once={true}>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2 lg:px-0">
                  Suyan Education is a premier education consultancy based in
                  Nepal, dedicated to opening doors to worldwide academic
                  opportunities. While we bring{" "}
                  <span className="font-semibold text-red-600">
                    specialized expertise in Japanese education
                  </span>
                  , our services span across continents, guiding students to
                  their ideal study destinations.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-up" delay={0.3} once={true}>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2 lg:px-0">
                  We believe in holistic preparation — combining academic
                  placement with cultural readiness, language proficiency, and
                  career planning to ensure our students thrive internationally.
                </p>
              </AnimatedSection>

              {/* Core Values - FIXED: Added flex-wrap for mobile */}
              <AnimatedSection animation="fade-up" delay={0.4} once={true}>
                <div className="space-y-4 px-2 lg:px-0">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">
                    Our Core Values:
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {values.map((value, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg"
                      >
                        <div
                          className={`w-6 h-6 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <value.icon className="w-3 h-3 text-gray-700" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
                          {value.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Content - Global Destinations - FIXED: Removed mx-4 on desktop */}
            <AnimatedSection animation="fade-left" delay={0.4} once={true}>
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-lg sm:shadow-xl mx-0 sm:mx-2 lg:mx-0">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Our Global Reach
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {globalDestinations.map((dest, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                        <div className="text-xl sm:text-2xl flex-shrink-0">
                          {dest.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-gray-900 truncate text-sm sm:text-base">
                            {dest.country}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 truncate">
                            {dest.specialty}
                          </div>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${dest.color} whitespace-nowrap flex-shrink-0 ml-2`}
                      >
                        Available
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <AboutTeamSection />

        {/* COMPREHENSIVE SERVICES - FIXED: Added w-full */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 lg:mb-16 px-2">
            <AnimatedSection animation="fade-up" delay={0.1} once={true}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 lg:mb-8">
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Our Comprehensive Services
                </span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2} once={true}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed px-2">
                End-to-end support for your international education journey,
                from dream to destination
              </p>
            </AnimatedSection>
          </div>

          {/* Modern Services Grid - FIXED: Added w-full and responsive columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full px-2 sm:px-0">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="zoom-in"
                delay={0.1 + index * 0.1}
                once={true}
              >
                <div className="group cursor-pointer w-full">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 h-full relative overflow-hidden w-full">
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Icon with Gradient Border */}
                    <div className="relative mb-4 sm:mb-6">
                      <div
                        className={`absolute -inset-2 sm:-inset-3 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
                      />
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-red-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-red-700 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base">
                        {service.description}
                      </p>

                      <div className="flex items-center justify-between mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-100">
                        <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                          {service.stat}
                        </span>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-100 group-hover:to-blue-100 transition-all">
                          <svg
                            className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* MISSION & VISION - FIXED: Added w-full */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-gray-200 shadow-lg sm:shadow-xl overflow-hidden mx-0 sm:mx-2 lg:mx-0">
            {/* Background Pattern - FIXED: Added overflow-hidden */}
            <div className="absolute inset-0 opacity-5 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 border-2 border-red-300 rounded-full transform translate-x-12 sm:translate-x-24 -translate-y-12 sm:-translate-y-24"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 border-2 border-blue-300 rounded-full transform -translate-x-12 sm:-translate-x-24 translate-y-12 sm:translate-y-24"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 relative z-10">
              {/* Mission */}
              <div className="space-y-4 sm:space-y-6">
                <AnimatedSection animation="fade-up" delay={0.1} once={true}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-md sm:shadow-lg">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={0.2} once={true}>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    To empower Nepali students with comprehensive, ethical, and
                    personalized guidance that transforms their global education
                    aspirations into successful realities.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={0.3} once={true}>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        Personalized roadmaps for each student
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        Transparent processes and clear communication
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        Continuous support from application to arrival
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Vision */}
              <div className="space-y-4 sm:space-y-6">
                <AnimatedSection animation="fade-up" delay={0.1} once={true}>
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center shadow-md sm:shadow-lg">
                      <Eye className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                      Our Vision
                    </h3>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={0.2} once={true}>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    To be Nepal's most trusted global education consultancy,
                    recognized for excellence in creating successful
                    international pathways while maintaining our specialized
                    expertise in Japanese education.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={0.3} once={true}>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        Expand to 100+ global destinations by 2025
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        Guide 1000+ students to global education success
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm lg:text-base">
                        Establish 200+ institutional partnerships worldwide
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - FIXED: Added w-full */}
        <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <AnimatedSection animation="zoom-in" delay={0.1} once={true}>
            <div className="relative w-full">
              <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-950 rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-10 text-center overflow-hidden mx-0 sm:mx-2 lg:mx-0">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 border-4 border-white rounded-full transform translate-x-8 sm:translate-x-16 -translate-y-8 sm:-translate-y-16"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 border-4 border-white rounded-full transform -translate-x-8 sm:-translate-x-16 translate-y-8 sm:translate-y-16"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 border-4 border-white rounded-full"></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm mb-3 sm:mb-4 lg:mb-6">
                    <Plane className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    <span className="text-xs sm:text-sm font-medium text-white">
                      Ready for Your Journey
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 px-2">
                    Begin Your Global Education Adventure
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4 sm:mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
                    Whether it's Japan, Australia, the US, or beyond — we'll
                    guide you every step of the way
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
                    <a
                      href="/contact"
                      className="inline-block bg-white text-red-700 px-4 sm:px-6 py-2.5 sm:py-3 lg:px-8 lg:py-3.5 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center"
                    >
                      Book Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </main>
  );
}
