"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Globe,
  GraduationCap,
  Building,
  Filter,
  ChevronRight,
  Star,
  MapPin,
  ExternalLink,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function UniversitiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("all");

  /* =========================
     FETCH DESTINATIONS
  ========================= */
  const {
    data: destinations = [],
    isLoading: destinationsLoading,
    isError: destinationsError,
  } = useQuery({
    queryKey: ["public-destinations"],
    queryFn: async () => {
      const res = await fetch("/api/destinations");
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error("Failed to load destinations");
      }
      return json.items;
    },
  });

  /* =========================
     FETCH UNIVERSITIES
  ========================= */
  const {
    data: universities = [],
    isLoading: universitiesLoading,
    isError: universitiesError,
  } = useQuery({
    queryKey: ["public-universities"],
    queryFn: async () => {
      const res = await fetch("/api/universities");
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error("Failed to load universities");
      }
      return json.items;
    },
  });

  const isLoading = destinationsLoading || universitiesLoading;
  const isError = destinationsError || universitiesError;

  /* =========================
     GROUP UNIVERSITIES BY DESTINATION
  ========================= */
  const universitiesByDestination = useMemo(() => {
    const map = {};
    universities.forEach((u) => {
      const destinationId = u.country?.id;
      if (!destinationId) return;
      if (!map[destinationId]) map[destinationId] = [];
      map[destinationId].push(u);
    });
    return map;
  }, [universities]);

  /* =========================
     SEARCH (BY UNIVERSITY NAME)
  ========================= */
  const filteredUniversitiesByDestination = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    // If search is empty, return everything
    if (!normalizedSearch) return universitiesByDestination;

    const result = {};

    Object.entries(universitiesByDestination).forEach(
      ([destinationId, unis]) => {
        const matches = unis.filter((u) =>
          u.name.toLowerCase().includes(normalizedSearch)
        );

        if (matches.length > 0) {
          result[destinationId] = matches;
        }
      }
    );

    return result;
  }, [universitiesByDestination, searchTerm]);

  /* =========================
     LOADING STATE
  ========================= */
  if (isLoading) {
    return (
      <main className="relative mt-24 overflow-x-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-950/5 rounded-full blur-3xl"></div>
        </div>

        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-blue-950 rounded-full opacity-20 blur animate-pulse"></div>
            <div className="relative h-12 w-12 border-4 border-gray-200 border-t-red-600 rounded-full animate-spin" />
          </div>
          <p className="mt-6 text-gray-600 font-medium animate-pulse">
            Loading partner universities...
          </p>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main className="relative mt-24 overflow-x-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center py-32">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 text-red-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Unable to load universities
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Please try refreshing the page or contact us if the problem
            persists.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-medium hover:from-red-700 hover:to-red-800 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  if (!destinations.length) {
    return (
      <main className="relative overflow-x-hidden">
        <div className="text-center py-32">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center">
            <Globe className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            No destinations available
          </h3>
          <p className="text-gray-600">
            Check back later for our partner university destinations.
          </p>
        </div>
      </main>
    );
  }

  /* =========================
     UI
  ========================= */
  return (
    <main className="relative mt-24 overflow-x-hidde">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />

      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      {/* Background Elements - FIXED: Contained with proper overflow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-blue-950/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-red-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
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
            <span className="text-sm font-medium text-gray-700">
              Global University Partners
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 px-4"
            variants={fadeInUp}
          >
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Our Partner Universities
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
            className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 px-4"
            variants={fadeInUp}
          >
            Explore our network of prestigious partner institutions across 10+
            countries worldwide. We maintain strong relationships with
            universities to ensure smooth admissions for our students.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto px-4"
            variants={fadeInUp}
          >
            {[
              {
                icon: Globe,
                value: `${destinations.length}+`,
                label: "Countries",
                color: "text-red-600",
              },
              {
                icon: GraduationCap,
                value: `${universities.length}+`,
                label: "Universities",
                color: "text-blue-950",
              },
              {
                icon: Building,
                value: "Top 500",
                label: "Ranked Globally",
                color: "text-green-600",
              },
              {
                icon: Star,
                value: "95%",
                label: "Admission Rate",
                color: "text-purple-600",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-300 transition-colors group w-full"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-all mb-2">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 w-full">
        {/* Search & Filter Section */}
        <motion.div
          className="bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 p-6 lg:p-8 mb-12 shadow-lg w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {/* Search */}
            <div className="relative group w-full">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Search university by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="
  w-full pl-12 pr-4 py-3.5 rounded-xl
  bg-white
  border border-gray-300
  focus:outline-none
  focus:border-gray-400
  transition-colors duration-200
"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 to-blue-950/0 group-hover:from-red-600/5 group-hover:to-blue-950/5 rounded-xl pointer-events-none transition-all duration-300"></div>
            </div>

            {/* Destination Filter */}
            <div className="relative group w-full">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Filter className="w-5 h-5" />
              </div>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="
  w-full pl-12 pr-4 py-3.5 rounded-xl
  bg-white
  border border-gray-300
  focus:outline-none
  focus:border-gray-400
  transition-colors duration-200 cursor-pointer
"

              >
                <option value="all" className="text-gray-600">
                  All Destinations
                </option>
                {destinations.map((d) => (
                  <option key={d.id} value={d.id} className="text-gray-700">
                    {d.country}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/0 to-red-600/0 group-hover:from-blue-950/5 group-hover:to-red-600/5 rounded-xl pointer-events-none transition-all duration-300"></div>
            </div>
          </div>
        </motion.div>

        {/* DESTINATION SECTIONS */}
        {destinations.map((destination, destIndex) => {
          if (
            selectedDestination !== "all" &&
            selectedDestination !== destination.id
          ) {
            return null;
          }

          const universitiesForDestination =
            filteredUniversitiesByDestination[destination.id] || [];

          if (!universitiesForDestination.length) {
            if (
              selectedDestination === destination.id ||
              selectedDestination === "all"
            ) {
              return (
                <motion.div
                  key={destination.id}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="mb-16 w-full"
                >
                  <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center w-full">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      No universities found for {destination.country}
                    </h3>
                    <p className="text-gray-600">
                      Try adjusting your search or check back later for updates.
                    </p>
                  </div>
                </motion.div>
              );
            }
            return null;
          }

          return (
            <motion.div
              key={destination.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="mb-20 w-full"
            >
              {/* Destination Header */}
              <motion.div
                className="flex items-center gap-4 mb-8 w-full"
                variants={fadeInUp}
              >
                <div className="w-16 h-8 overflow-hidden flex items-center justify-center">
                  <img
                    src={`https://flagcdn.com/w40/${destination.code.toLowerCase()}.png`}
                    alt={destination.country}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {destination.country}
                  </h2>
                  <p className="text-gray-600">
                    {universitiesForDestination.length} partner universities
                  </p>
                </div>
              </motion.div>

              {/* University Grid - FIXED: Removed overflow from grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6 w-full">
                {universitiesForDestination.map((uni, uniIndex) => (
                  <motion.a
                    key={uni.id}
                    href={uni.websiteUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ delay: destIndex * 0.05 + uniIndex * 0.02 }}
                    className="group relative block w-full"
                  >
                    <div
                      className="bg-white rounded-2xl border-2 border-gray-200 p-5 lg:p-6
                      hover:border-transparent transition-all duration-300 
                      hover:shadow-xl h-full relative overflow-hidden w-full"
                    >
                      {/* Gradient Background on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 to-blue-950/0 group-hover:from-red-600/5 group-hover:to-blue-950/5 transition-opacity duration-300" />

                      {/* Content Container */}
                      <div className="relative z-10 w-full">
                        {/* University Logo */}
                        <div className="w-full h-24 flex items-center justify-center mb-4">
                          <div className="relative w-full h-full flex items-center justify-center p-2">
                            <img
                              src={uni.imageUrl}
                              alt={uni.name}
                              loading="lazy"
                              className="max-w-full max-h-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
                            />
                          </div>
                        </div>

                        {/* University Name */}
                        <h3
                          className="text-center text-sm font-semibold text-gray-900 mb-3 
                          group-hover:text-red-700 transition-colors line-clamp-2 min-h-[2.5rem] w-full"
                        >
                          {uni.name}
                        </h3>

                        {/* Visit Button */}
                        <div className="flex items-center justify-center mt-4 pt-4 border-t border-gray-100 w-full">
                          <span className="text-xs font-medium bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                            Visit Website
                          </span>
                          <div className="ml-2 w-6 h-6 rounded-full bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-all">
                            <ExternalLink className="w-3 h-3 text-gray-700" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-red-200 transition-all duration-300" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* CTA SECTION */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 lg:pb-28 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full"
        >
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-blue-950 rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-center overflow-hidden w-full">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 border-4 border-white rounded-full transform translate-x-32 -translate-y-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 border-4 border-white rounded-full transform -translate-x-32 translate-y-32"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <GraduationCap className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Ready to Apply
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 px-4">
                Need Help Choosing the Right University?
              </h2>

              <p className="text-white/90 mb-8 max-w-2xl mx-auto px-4">
                Our expert counselors can guide you to find the perfect
                university match based on your academic profile and career
                goals.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <a
                  href="/contact"
                  className="inline-block bg-white text-red-700 px-6 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
