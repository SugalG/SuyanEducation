"use client";

import AboutTeamSection from "@/components/AboutTeamSection";
import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Globe, CheckCircle, GraduationCap, Shield, BookOpen, MapPin, Clock, Star, Plane, Building, Languages, FileText, Mic, Compass } from "lucide-react";
import { useEffect, useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Country flag emojis mapping
const countryFlags = {
  "Japan": "🇯🇵",
  "Australia": "🇦🇺",
  "USA": "🇺🇸",
  "United States": "🇺🇸",
  "UK": "🇬🇧",
  "United Kingdom": "🇬🇧",
  "Canada": "🇨🇦",
  "Germany": "🇩🇪",
  "France": "🇫🇷",
  "Italy": "🇮🇹",
  "Spain": "🇪🇸",
  "Netherlands": "🇳🇱",
  "Sweden": "🇸🇪",
  "Switzerland": "🇨🇭",
  "Singapore": "🇸🇬",
  "Malaysia": "🇲🇾",
  "South Korea": "🇰🇷",
  "New Zealand": "🇳🇿",
  "Ireland": "🇮🇪",
  "Finland": "🇫🇮",
  "Norway": "🇳🇴",
  "Denmark": "🇩🇰"
};

// Default color mapping for countries
const countryColors = {
  "Japan": "bg-red-100 text-red-700",
  "Australia": "bg-blue-100 text-blue-700",
  "USA": "bg-purple-100 text-purple-700",
  "United States": "bg-purple-100 text-purple-700",
  "UK": "bg-green-100 text-green-700",
  "United Kingdom": "bg-green-100 text-green-700",
  "Canada": "bg-yellow-100 text-yellow-700",
  "Germany": "bg-gray-100 text-gray-700",
  "France": "bg-blue-50 text-blue-600",
  "Italy": "bg-green-50 text-green-600",
  "Spain": "bg-red-50 text-red-600",
  "Netherlands": "bg-orange-100 text-orange-700",
  "Sweden": "bg-blue-50 text-blue-600",
  "Switzerland": "bg-red-100 text-red-700",
  "Singapore": "bg-red-50 text-red-600",
  "Malaysia": "bg-blue-50 text-blue-600",
  "South Korea": "bg-blue-50 text-blue-600",
  "New Zealand": "bg-blue-100 text-blue-700",
  "Ireland": "bg-green-50 text-green-600",
  "Finland": "bg-blue-50 text-blue-600",
  "Norway": "bg-red-50 text-red-600",
  "Denmark": "bg-red-50 text-red-600"
};

// Default specialties for countries
const defaultSpecialties = {
  "Japan": "Technology & Language",
  "Australia": "Research & Work",
  "USA": "STEM & Business",
  "United States": "STEM & Business",
  "UK": "Foundation Programs",
  "United Kingdom": "Foundation Programs",
  "Canada": "Co-op & Immigration",
  "Germany": "Free Education",
  "France": "Art & Culture",
  "Italy": "Design & Architecture",
  "Spain": "Language & Hospitality",
  "Netherlands": "Engineering & Tech",
  "Sweden": "Sustainability & Innovation",
  "Switzerland": "Hospitality & Business",
  "Singapore": "Business & Technology",
  "Malaysia": "Affordable Education",
  "South Korea": "Technology & Innovation",
  "New Zealand": "Adventure & Research",
  "Ireland": "Technology & Pharmaceuticals",
  "Finland": "Education & Technology",
  "Norway": "Renewable Energy",
  "Denmark": "Design & Sustainability"
};

export default function AboutPage() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadDestinations() {
      try {
        const res = await fetch("/api/destinations");
        const data = await res.json();
        if (data.success) {
          // Take up to 6 destinations for display
          setDestinations(data.items.slice(0, 6));
        }
      } catch (err) {
        console.error("Failed to load destinations", err);
        // Use fallback data if API fails
        setDestinations([]);
      } finally {
        setLoading(false);
      }
    }

    loadDestinations();
  }, []);

  const services = [
    {
      icon: Globe,
      title: "Global Destinations",
      description: "10+ countries with diverse educational opportunities",
      color: "from-red-500 to-red-600",
      stat: "10+ Countries"
    },
    {
      icon: GraduationCap,
      title: "University Placement",
      description: "Top institutions worldwide with strong partnerships",
      color: "from-blue-500 to-blue-600",
      stat: "50+ Partners"
    },
    {
      icon: Languages,
      title: "Language Training",
      description: "Comprehensive preparation for language proficiency tests",
      color: "from-green-500 to-green-600",
      stat: "100+ Trained"
    },
    {
      icon: FileText,
      title: "Visa Guidance",
      description: "High success rate with expert documentation support",
      color: "from-purple-500 to-purple-600",
      stat: "95% Success"
    },
    {
      icon: Mic,
      title: "Interview Prep",
      description: "Mock interviews and confidence building sessions",
      color: "from-yellow-500 to-yellow-600",
      stat: "Expert Coaching"
    },
    {
      icon: Compass,
      title: "Cultural Orientation",
      description: "Preparing students for international living",
      color: "from-indigo-500 to-indigo-600",
      stat: "Cultural Training"
    }
  ];

  // Generate global destinations from API data
  const globalDestinations = destinations.map(dest => {
    const countryName = dest.country || "";
    const flag = countryFlags[countryName] || "🌍";
    const color = countryColors[countryName] || "bg-gray-100 text-gray-700";
    const specialty = dest.keyFeatures?.[0] || defaultSpecialties[countryName] || "Study Opportunities";
    
    return {
      country: countryName,
      icon: flag,
      color,
      specialty
    };
  });

  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "Honest guidance with complete transparency",
      color: "from-red-100 to-red-50"
    },
    {
      icon: Users,
      title: "Student Success",
      description: "Your goals are our primary focus",
      color: "from-blue-100 to-blue-50"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to quality in every service",
      color: "from-green-100 to-green-50"
    },
    {
      icon: Globe,
      title: "Global Vision",
      description: "Connecting Nepal to worldwide opportunities",
      color: "from-purple-100 to-purple-50"
    }
  ];

  return (
    <main className="relative mt-24 overflow-x-hidden">
      {/* Wrapper to contain all content */}
      <div className="w-full">
        {/* Background Elements - REMOVED the pinkish gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-950/5 rounded-full blur-3xl"></div>
        </div>

        {/* HERO SECTION */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            className="text-center max-w-5xl mx-auto w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 mb-8"
              variants={fadeInUp}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Global Education Experts</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 px-4"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                About Suyan Education
              </span>
            </motion.h1>

            {/* Animated Underline */}
            <div className="flex justify-center mb-8">
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-950 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
            </div>

            {/* Subtitle */}
            <motion.p
              className="text-lg lg:text-xl xl:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 px-4"
              variants={fadeInUp}
            >
              Your trusted partner for global education opportunities with{" "}
              <span className="font-semibold text-red-600">specialized expertise in Japan</span>{" "}
              and comprehensive support for destinations worldwide.
            </motion.p>

            {/* Global Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto px-4"
              variants={fadeInUp}
            >
              {[
                { icon: Globe, value: "10+", label: "Countries", color: "text-red-600" },
                { icon: Users, value: "100+", label: "Students Guided", color: "text-blue-950" },
                { icon: Award, value: "95%", label: "Visa Success", color: "text-green-600" },
                { icon: Clock, value: "2018", label: "Since Year", color: "text-purple-600" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-red-300 transition-colors group w-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-all">
                      <stat.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* WHO WE ARE */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold px-4 lg:px-0"
                variants={fadeInUp}
              >
                <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  Your Global Education Partner
                </span>
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed px-4 lg:px-0"
                variants={fadeInUp}
              >
                Suyan Education is a premier education consultancy based in Nepal, dedicated to
                opening doors to worldwide academic opportunities. While we bring{" "}
                <span className="font-semibold text-red-600">specialized expertise in Japanese education</span>,
                our services span across continents, guiding students to their ideal study destinations.
              </motion.p>

              <motion.p
                className="text-base sm:text-lg text-gray-600 leading-relaxed px-4 lg:px-0"
                variants={fadeInUp}
              >
                We believe in holistic preparation — combining academic placement with cultural readiness,
                language proficiency, and career planning to ensure our students thrive internationally.
              </motion.p>

              {/* Core Values */}
              <div className="space-y-4 px-4 lg:px-0">
                <h4 className="text-xl font-bold text-gray-900">Our Core Values:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {values.map((value, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                        <value.icon className="w-4 h-4 text-gray-700" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{value.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Content - Global Destinations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-10 border border-gray-200 shadow-xl mx-4 lg:mx-0"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Global Reach</h3>
              <div className="space-y-4">
                {loading ? (
                  // Loading skeleton
                  Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-gray-100 animate-pulse">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="space-y-2">
                          <div className="w-24 h-4 bg-gray-200 rounded"></div>
                          <div className="w-32 h-3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                  ))
                ) : globalDestinations.length > 0 ? (
                  // Actual destinations from API
                  globalDestinations.map((dest, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <div className="flex items-center gap-4">
                        <div className="text-2xl">{dest.icon}</div>
                        <div>
                          <div className="font-semibold text-gray-900">{dest.country}</div>
                          <div className="text-sm text-gray-600">{dest.specialty}</div>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${dest.color}`}>
                        Available
                      </span>
                    </div>
                  ))
                ) : (
                  // Fallback when no destinations are loaded
                  <>
                    {[
                      { country: "Japan", icon: "🇯🇵", color: "bg-red-100 text-red-700", specialty: "Technology & Language" },
                      { country: "Australia", icon: "🇦🇺", color: "bg-blue-100 text-blue-700", specialty: "Research & Work" },
                      { country: "USA", icon: "🇺🇸", color: "bg-purple-100 text-purple-700", specialty: "STEM & Business" },
                      { country: "UK", icon: "🇬🇧", color: "bg-green-100 text-green-700", specialty: "Foundation Programs" },
                      { country: "Canada", icon: "🇨🇦", color: "bg-yellow-100 text-yellow-700", specialty: "Co-op & Immigration" },
                      { country: "Germany", icon: "🇩🇪", color: "bg-gray-100 text-gray-700", specialty: "Free Education" },
                    ].map((dest, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center gap-4">
                          <div className="text-2xl">{dest.icon}</div>
                          <div>
                            <div className="font-semibold text-gray-900">{dest.country}</div>
                            <div className="text-sm text-gray-600">{dest.specialty}</div>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${dest.color}`}>
                          Available
                        </span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        <AboutTeamSection/>

        {/* COMPREHENSIVE SERVICES */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div
            className="text-center max-w-4xl mx-auto mb-12 lg:mb-16 px-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8"
              variants={fadeInUp}
            >
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Our Comprehensive Services
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              End-to-end support for your international education journey, from dream to destination
            </motion.p>
          </motion.div>

          {/* Modern Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-100 hover:border-transparent transition-all duration-300 h-full relative overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  {/* Icon with Gradient Border */}
                  <div className="relative mb-6">
                    <div className={`absolute -inset-3 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`} />
                    <div className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-red-50 to-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-red-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-4 text-sm lg:text-base">
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                      <span className="text-sm font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                        {service.stat}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-red-100 group-hover:to-blue-100 transition-all">
                        <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl p-6 lg:p-10 xl:p-12 border border-gray-200 shadow-xl overflow-hidden mx-4 lg:mx-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 border-2 border-red-300 rounded-full transform translate-x-24 lg:translate-x-48 -translate-y-24 lg:-translate-y-48"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 lg:w-96 lg:h-96 border-2 border-blue-300 rounded-full transform -translate-x-24 lg:-translate-x-48 translate-y-24 lg:translate-y-48"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 relative z-10">
              {/* Mission */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center shadow-lg">
                    <Target className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>

                <motion.p
                  className="text-base lg:text-lg text-gray-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  To empower Nepali students with comprehensive, ethical, and personalized guidance
                  that transforms their global education aspirations into successful realities.
                </motion.p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                    <span className="text-gray-700 text-sm lg:text-base">Personalized roadmaps for each student</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                    <span className="text-gray-700 text-sm lg:text-base">Transparent processes and clear communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500" />
                    <span className="text-gray-700 text-sm lg:text-base">Continuous support from application to arrival</span>
                  </div>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-blue-950 to-blue-900 flex items-center justify-center shadow-lg">
                    <Eye className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>

                <motion.p
                  className="text-base lg:text-lg text-gray-600 leading-relaxed"
                  variants={fadeInUp}
                >
                  To be Nepal's most trusted global education consultancy, recognized for excellence
                  in creating successful international pathways while maintaining our specialized
                  expertise in Japanese education.
                </motion.p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-700 text-sm lg:text-base">Expand to 100+ global destinations by 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-700 text-sm lg:text-base">Guide 1000+ students to global education success</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-gradient-to-r from-red-500 to-blue-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-gray-700 text-sm lg:text-base">Establish 200+ institutional partnerships worldwide</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-950 rounded-2xl lg:rounded-3xl p-6 lg:p-10 xl:p-12 text-center overflow-hidden mx-4 lg:mx-0">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 border-4 border-white rounded-full transform translate-x-16 lg:translate-x-32 -translate-y-16 lg:-translate-y-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 lg:w-64 lg:h-64 border-4 border-white rounded-full transform -translate-x-16 lg:-translate-x-32 translate-y-16 lg:translate-y-32"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 border-4 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/20 backdrop-blur-sm mb-4 lg:mb-6">
                  <Plane className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                  <span className="text-xs lg:text-sm font-medium text-white">Ready for Your Journey</span>
                </div>

                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6 px-2">
                  Begin Your Global Education Adventure
                </h2>

                <p className="text-base lg:text-lg text-white/90 mb-6 lg:mb-8 max-w-2xl mx-auto px-2">
                  Whether it's Japan, Australia, the US, or beyond — we'll guide you every step of the way
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center px-2">
                  <a
                    href="/contact"
                    className="inline-block bg-white text-red-700 px-6 py-3 lg:px-8 lg:py-3.5 rounded-xl font-bold text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Book Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}