"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  Star, 
  Globe, 
  Award, 
  Target, 
  BookOpen,
  Users,
  TrendingUp,
  Sparkles,
  Bookmark,
  Clock,
  CheckCircle,
  Zap,
  GraduationCap,
  Briefcase
} from "lucide-react";
import AnimatedSection from "@/components/universityPlacement/AnimatedSection";
import Link from "next/link";

const faqs = [
  {
    question: "What is IELTS?",
    answer: "IELTS (International English Language Testing System) is a globally recognized English test for study, work, and migration.",
    icon: <Globe className="w-5 h-5" />
  },
  {
    question: "How long is IELTS valid?",
    answer: "IELTS scores are valid for 2 years from the test date.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    question: "Which modules are included?",
    answer: "Listening, Reading, Writing, and Speaking modules.",
    icon: <BookOpen className="w-5 h-5" />
  },
  {
    question: "How is IELTS scored?",
    answer: "Each module is scored from 0-9. The overall band score is the average of all four modules.",
    icon: <TrendingUp className="w-5 h-5" />
  },
];

const userLevels = [
  { 
    level: "Non-user", 
    range: "0-1", 
    desc: "Has no ability to use English.",
    color: "from-gray-400 to-gray-300",
    icon: "✗"
  },
  { 
    level: "Beginner", 
    range: "2-3", 
    desc: "Can understand very basic English.",
    color: "from-blue-400 to-blue-300",
    icon: "🌱"
  },
  { 
    level: "Intermediate", 
    range: "4-5", 
    desc: "Can communicate in familiar situations.",
    color: "from-green-400 to-green-300",
    icon: "📚"
  },
  { 
    level: "Competent", 
    range: "6", 
    desc: "Has effective command of English.",
    color: "from-yellow-400 to-yellow-300",
    icon: "🎯"
  },
  { 
    level: "Good User", 
    range: "7", 
    desc: "Can use English well in most situations.",
    color: "from-orange-400 to-orange-300",
    icon: "⭐"
  },
  { 
    level: "Very Good User", 
    range: "8", 
    desc: "Has high proficiency with occasional errors.",
    color: "from-red-400 to-red-300",
    icon: "🔥"
  },
  { 
    level: "Expert User", 
    range: "9", 
    desc: "Has full operational command of English.",
    color: "from-purple-400 to-purple-300",
    icon: "👑"
  },
];

const stats = [
  { label: "Countries Accepting IELTS", value: 140, icon: <Globe />, suffix: "+" },
  { label: "Test Centers Worldwide", value: 1600, icon: <Award />, suffix: "+" },
  { label: "Tests Taken Yearly", value: 3.5, icon: <Users />, suffix: "M+" },
  { label: "Success Rate", value: 92, icon: <TrendingUp />, suffix: "%" },
];

export default function MagicalIELTSPage() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [activeLevel, setActiveLevel] = useState(3);

  return (
    <main className="w-full overflow-hidden mt-10 relative">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden mt-24">
        {/* Beautiful Background with Gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-100/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-100/20 to-transparent" />

          {/* Animated Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-red-200/30 to-pink-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/30 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating English Letters */}
          <div className="absolute top-1/4 left-1/4 opacity-5 text-9xl font-bold text-blue-300 animate-float">E</div>
          <div className="absolute bottom-1/3 right-1/4 opacity-5 text-9xl font-bold text-red-300 animate-float delay-500">L</div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animateImmediately>
              <div>
                {/* Elegant IELTS Badge */}
                <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white shadow-lg border border-gray-100 mb-8">
                  <div className="w-3 h-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-lg font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Global Language Certification
                  </span>
                </div>

                {/* Main Heading with Elegant Design */}
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                    IELTS
                  </span>
                  <span className="block text-gray-800 mt-4 text-4xl sm:text-5xl">
                    Mastery Program
                  </span>
                </h1>

                {/* IELTS Score Indicator */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-semibold text-gray-700">4 Module Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-sm font-semibold text-gray-700">98% Success Rate</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xl text-gray-700 leading-relaxed mb-10">
                  Achieve your dream IELTS score with our comprehensive preparation program. 
                  Expert coaching, personalized strategies, and proven methodologies to help you 
                  excel in Listening, Reading, Writing, and Speaking modules.
                </p>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-100 to-red-50 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Expert Trainers</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Score Guarantee</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-100 to-green-50 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Study Material</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-red-200 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">Mock Tests</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-red-600 to-red-500 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-lg">
                    <span>Join Us Now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Hero Image with Modern Frame */}
            <AnimatedSection animateImmediately delay={0.5} animation="fade-left">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image Container with Gradient Border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
                  <div className="relative rounded-3xl overflow-hidden border-8 border-white">
                    <img
                      src="/icons/ielts.png"
                      alt={`Study Ielts`}
                      className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="zoom-in" 
                  delay={index * 0.1}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-gray-100 text-center group hover:shadow-2xl transition-all"
                  >
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-50 to-rose-50 text-red-500 mb-4 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent mb-2">
                      {stat.value}{stat.suffix}
                    </div>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* User Levels with Interactive Score Meter */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-r from-red-100 to-rose-100">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-red-600 font-semibold">IELTS Proficiency Scale</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent">
                Discover Your Level
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Interactive IELTS band score meter. Drag to see your proficiency level
              </p>
            </div>
          </AnimatedSection>

          {/* Interactive Score Meter - Simplified */}
          <div className="mb-16">
            <div className="relative h-4 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 rounded-full mb-12">
              <motion.div
                className="absolute -top-4 w-32 h-12 bg-gradient-to-r from-red-600/20 to-rose-500/20 rounded-full backdrop-blur-sm border border-red-300/50 flex items-center justify-center"
                style={{
                  left: `${(activeLevel * 2.5) * 10}%`,
                }}
              >
                <span className="text-red-600 font-bold">
                  Band {activeLevel * 1.5}
                </span>
              </motion.div>
            </div>
            
            <div className="flex justify-between relative -top-8">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                <motion.button
                  key={level}
                  onClick={() => setActiveLevel(Math.floor(level / 1.5))}
                  className="relative flex flex-col items-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className={`w-8 h-8 rounded-full cursor-pointer ${
                      activeLevel === Math.floor(level / 1.5)
                        ? 'bg-gradient-to-r from-red-600 to-rose-500'
                        : 'bg-gray-300'
                    }`}
                    animate={{
                      scale: activeLevel === Math.floor(level / 1.5) ? [1, 1.2, 1] : 1,
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="mt-2 text-sm font-semibold text-gray-700">
                    {level}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Level Cards */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {userLevels.map((level, i) => (
              <AnimatedSection 
                key={i} 
                animation="fade-up" 
                delay={i * 0.1}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                  }}
                  onClick={() => setActiveLevel(i)}
                  className={`relative bg-white p-6 rounded-3xl shadow-lg border-2 cursor-pointer transition-all ${
                    activeLevel === i 
                      ? 'border-red-500 shadow-2xl scale-105' 
                      : 'border-gray-100 hover:border-red-300'
                  }`}
                >
                  {activeLevel === i && (
                    <motion.div
                      layoutId="activeLevel"
                      className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent rounded-3xl -z-10"
                    />
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{level.icon}</span>
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${level.color} flex items-center justify-center text-white font-bold`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {level.range}
                    </motion.div>
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-2 ${
                    activeLevel === i 
                      ? 'bg-gradient-to-r from-red-600 to-rose-500 bg-clip-text text-transparent'
                      : 'text-gray-800'
                  }`}>
                    {level.level}
                  </h3>
                  <p className="text-gray-600">{level.desc}</p>
                  
                  {activeLevel === i && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 pt-4 border-t border-red-100"
                    >
                      <div className="flex items-center gap-2 text-red-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-sm font-semibold">Your current level</span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Info Card */}
      <AnimatedSection animation="zoom-in" delay={0.3}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image Container with Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-blue-500 rounded-3xl blur opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden border-8 border-white bg-gradient-to-br from-blue-50 to-red-50">
                <div className="p-12 h-full flex flex-col items-center justify-center">
                  {/* IELTS Badge */}
                  <div className="mb-8">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-r from-red-600 to-blue-600 flex items-center justify-center animate-pulse">
                        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                          <span className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                            IELTS
                          </span>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center">
                        <span className="text-white font-bold">9</span>
                      </div>
                    </div>
                  </div>

                  {/* IELTS Modules */}
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="bg-white rounded-xl p-4 text-center border border-red-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-lg font-bold text-red-600 mb-2">Listening</div>
                      <div className="text-sm text-gray-600">40 Questions</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-lg font-bold text-blue-600 mb-2">Reading</div>
                      <div className="text-sm text-gray-600">40 Questions</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border border-green-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-lg font-bold text-green-600 mb-2">Writing</div>
                      <div className="text-sm text-gray-600">2 Tasks</div>
                    </div>
                    <div className="bg-white rounded-xl p-4 text-center border border-purple-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-lg font-bold text-purple-600 mb-2">Speaking</div>
                      <div className="text-sm text-gray-600">3 Parts</div>
                    </div>
                  </div>

                  {/* Band Score Chart */}
                  <div className="mt-8 w-full max-w-md">
                    <div className="text-center mb-4">
                      <div className="text-lg font-semibold text-gray-800">Band Score Distribution</div>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" style={{ width: '85%' }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                      <span>5.0</span>
                      <span>6.5</span>
                      <span>7.5+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-r from-red-200 to-pink-200 blur-xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 blur-xl opacity-50"></div>
          </div>
        </div>
      </AnimatedSection>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-rose-50/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100">
                  <Star className="w-6 h-6 text-rose-600" />
                </div>
                <span className="text-rose-600 font-semibold">Why Choose IELTS?</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Unlock Global Opportunities
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Recognition",
                text: "Accepted by 11,000+ organizations across 140+ countries",
                img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800",
                stats: "11,000+",
                color: "from-blue-500 to-cyan-400"
              },
              {
                title: "Career Advancement",
                text: "Boost your career with internationally recognized certification",
                img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800",
                stats: "95%",
                color: "from-green-500 to-emerald-400"
              },
              {
                title: "Migration Pathway",
                text: "Essential for visa applications to English-speaking countries",
                img: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=800",
                stats: "140+",
                color: "from-purple-500 to-pink-400"
              },
            ].map((adv, i) => (
              <AnimatedSection 
                key={i} 
                animation="fade-up" 
                delay={i * 0.2}
              >
                <motion.div
                  whileHover={{ y: -20 }}
                  className="relative group cursor-pointer"
                >
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={adv.img}
                        alt={adv.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${adv.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                          {adv.stats}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{adv.title}</h3>
                      <p className="text-gray-600 mb-6">{adv.text}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100">
                  <Sparkles className="w-6 h-6 text-amber-600" />
                </div>
                <span className="text-amber-600 font-semibold">Got Questions?</span>
              </div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            <AnimatePresence>
              {faqs.map((faq, i) => {
                const isOpen = openFAQ === i;
                return (
                  <AnimatedSection 
                    key={i} 
                    animation="fade-up" 
                    delay={i * 0.1}
                  >
                    <motion.div
                      className={`bg-white rounded-3xl shadow-lg overflow-hidden border ${
                        isOpen ? 'border-red-200 shadow-xl' : 'border-gray-100'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.button
                        onClick={() => setOpenFAQ(isOpen ? null : i)}
                        className="w-full flex justify-between items-center px-8 py-6 text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-gradient-to-br from-red-50 to-rose-50 text-red-600">
                            {faq.icon}
                          </div>
                          <span className="text-xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">
                            {faq.question}
                          </span>
                        </div>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="p-2 rounded-full bg-gray-50 group-hover:bg-red-50 transition-colors"
                        >
                          <ChevronDown className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
                        </motion.div>
                      </motion.button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-8 pb-8">
                              <div className="pl-16">
                                <p className="text-gray-600 text-lg leading-relaxed">{faq.answer}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </AnimatedSection>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-rose-600 to-pink-600" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="zoom-in">
            <motion.div
              className="inline-flex items-center gap-3 mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-white" />
              <span className="text-white/90 font-semibold text-lg">Ready to Begin?</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Start Your IELTS Journey
              <br />
              <span className="text-yellow-300">Today</span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join millions who have transformed their lives with IELTS certification
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-6 bg-white text-red-600 rounded-3xl font-bold text-lg shadow-2xl group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <Bookmark className="w-6 h-6" />
                  Book Your Test Now
                </span>
              </motion.a>

              <motion.a
                href="/contact"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 25px 50px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-6 bg-transparent border-2 border-white text-white rounded-3xl font-bold text-lg group overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center justify-center gap-3">
                  <BookOpen className="w-6 h-6" />
                  Start Learning Free
                </span>
              </motion.a>
            </div>

            {/* Animated stats */}
            <AnimatedSection animation="fade-up" delay={0.5}>
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "24/7", label: "Support" },
                  { value: "99%", label: "Satisfaction" },
                  { value: "100+", label: "Experts" },
                  { value: "Free", label: "Resources" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{item.value}</div>
                    <div className="text-white/80">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}