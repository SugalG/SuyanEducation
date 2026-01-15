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
  Zap
} from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="w-full overflow-hidden mt-10 relative">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-rose-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-red-200/10 to-pink-200/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-rose-200/10 to-orange-200/10 rounded-full blur-3xl animate-pulse" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="text-center px-4 max-w-6xl z-30 relative"
        >
          {/* Animated Title */}
          <div className="relative inline-block mb-8">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 rounded-lg blur-xl opacity-75"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <h1 className="relative text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-red-600 via-rose-500 to-pink-500 bg-clip-text text-transparent leading-tight">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="block"
              >
                Master IELTS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="block mt-2"
              >
                Like Magic ✨
              </motion.span>
            </h1>
          </div>

          {/* Animated Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl sm:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto font-medium"
          >
            Transform your English skills with our magical approach to IELTS success
          </motion.p>

          {/* Animated Buttons with Icons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-5 bg-gradient-to-r from-red-600 to-rose-500 text-white rounded-2xl font-bold shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                <Bookmark className="w-5 h-5" />
                Book IELTS With Us
                <Sparkles className="w-5 h-5" />
              </span>
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-10 py-5 bg-white/80 backdrop-blur-sm text-red-600 rounded-2xl font-bold border-2 border-red-600 shadow-2xl group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white to-red-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center justify-center gap-3">
                <BookOpen className="w-5 h-5" />
                Learn IELTS With Us
                <Zap className="w-5 h-5" />
              </span>
            </motion.a>
          </div>

          {/* Animated Hero Image with Parallax Effect */}
          <motion.div
            className="relative mt-12 rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            <motion.img
              src="https://www.applyboard.com/wp-content/uploads/2020/03/IELTS-Practice-Tests-Blog-Banner-Jul23-1024x512.png"
              alt="Students studying for IELTS"
              className="w-full h-[400px] object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="flex items-center gap-2"
              >
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">Join 3M+ Successful Test Takers</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-red-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-red-400 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
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
            ))}
          </motion.div>
        </div>
      </section>

      {/* User Levels with Interactive Score Meter */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
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
          </motion.div>

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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-white to-rose-50/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-rose-100 to-pink-100">
                <Star className="w-6 h-6 text-rose-600" />
              </div>
              <span className="text-rose-600 font-semibold">Why Choose IELTS?</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Unlock Global Opportunities
            </h2>
          </motion.div>

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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: "spring", stiffness: 100 }}
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
                    
                    {/* <motion.div
                      className="inline-flex items-center gap-2 text-red-600 font-semibold"
                      whileHover={{ x: 10 }}
                    >
                      <span>Learn more</span>
                      <ChevronDown className="w-4 h-4 rotate-270" />
                    </motion.div> */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100">
                <Sparkles className="w-6 h-6 text-amber-600" />
              </div>
              <span className="text-amber-600 font-semibold">Got Questions?</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            <AnimatePresence>
              {faqs.map((faq, i) => {
                const isOpen = openFAQ === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
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
                  </motion.div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
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
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}