"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";
import {
  GraduationCap,
  Languages,
  University,
  FileText,
  Mic,
  PlaneTakeoff,
  ChevronRight,
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
  Star,
} from "lucide-react";

const SERVICES = [
  {
    title: "Student Visa Counseling",
    desc: "Comprehensive visa guidance with personalized eligibility assessment and document preparation.",
    slug: "student-visa-counseling",
    icon: GraduationCap,
    features: ["Visa eligibility assessment", "Document checklist", "Timeline planning", "Country-specific rules", "Application tracking", "Interview preparation"],
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
    features: ["JLPT N5-N1 preparation", "Daily conversation practice", "Cultural training", "Exam strategies", "Pronunciation coaching", "Study materials"],
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
    features: ["University shortlisting", "Application strategy", "LOR & SOP guidance", "Scholarship assistance", "Portfolio review", "Admission follow-up"],
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
    features: ["Document verification", "Professional translation", "Notarization help", "Application filing", "Certificate attestation", "Digital submission"],
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
    features: ["Mock interviews", "Common questions", "Body language tips", "Confidence building", "Stress management", "Video recording"],
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
    features: ["Accommodation help", "Travel arrangements", "Cultural orientation", "Emergency support", "Banking setup", "Insurance guidance"],
    color: "from-red-800 to-blue-950",
    iconColor: "text-red-800",
    gradient: "bg-gradient-to-br from-red-50 via-white to-blue-50",
    stat: "24/7 Support",
    iconStat: Clock,
    highlight: "All-round Support",
  },
];

export default function ServicesPreview() {
  const [expandedCard, setExpandedCard] = useState(null);
  const cardsContainerRef = useRef(null);
  const router = useRouter(); // Add useRouter hook
  
  // Use useInView to detect when cards are visible
  const isCardsInView = useInView(cardsContainerRef, {
    amount: 0.1,
    once: true, // Only trigger once
    margin: "0px 0px -100px 0px",
  });

  // Handle expand/collapse with event prevention
  const handleExpandClick = (index, e) => {
    e.stopPropagation(); // Prevent event bubbling to parent Link
    e.preventDefault(); // Prevent navigation
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Handle card click for navigation (only if not clicking expand area)
  const handleCardClick = (slug, e) => {
    // Only navigate if clicking outside expand area
    const target = e.target;
    const isExpandButton = target.closest('[data-expand]') || 
                          target.closest('.expand-indicator') ||
                          target.closest('.features-list');
    
    if (!isExpandButton) {
      // Use router.push instead of window.location.href
      router.push(`/services/${slug}`);
    }
  };

  // Animation variants for sequential card animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.92,
      rotateX: 10,
    },
    show: (i) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: i * 0.1, // Sequential delay based on index
      }
    })
  };

  // Content animations - will be controlled by parent card animation state
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }
    })
  };

  const iconContainerVariants = {
    hidden: { scale: 0, rotate: -180 },
    show: (delay) => ({
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "backOut",
        delay: delay,
      }
    })
  };

  const cardHoverVariants = {
    rest: { 
      scale: 1,
      y: 0,
      rotateX: 0,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    },
    hover: {
      scale: 1.03,
      y: -12,
      rotateX: -5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-red-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-100 to-red-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header - This can animate on viewport independently */}
      <motion.div
        className="text-center max-w-4xl mx-auto px-4 mb-12 sm:mb-16 md:mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100 shadow-sm mb-6"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <motion.div
              className="w-2 h-2 bg-red-600 rounded-full absolute"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          </div>
          <span className="text-sm font-semibold text-gray-800 tracking-wide">Comprehensive Solutions</span>
          <Sparkles className="w-4 h-4 text-blue-600" />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-900 bg-clip-text text-transparent">
            Our Premium Services
          </span>
        </motion.h2>

        {/* Animated Underline */}
        <div className="flex justify-center mt-8">
          <motion.div
            className="h-1.5 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "240px" }}
            transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full bg-gradient-to-r from-red-600 via-red-500 to-blue-800 rounded-full"></div>
            <div className="w-full h-full bg-gradient-to-r from-red-600/20 to-blue-800/20 blur-sm -mt-1.5"></div>
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
        >
          End-to-end guidance with{" "}
          <span className="font-bold bg-gradient-to-r from-red-600 to-blue-800 bg-clip-text text-transparent">
            specialized focus on Japan
          </span>{" "}
          and global education destinations
        </motion.p>
      </motion.div>

      {/* Interactive Cards Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Main Services (2 columns on desktop) */}
          <div 
            ref={cardsContainerRef}
            className="lg:col-span-2"
          >
            {/* Cards container - animations controlled by isCardsInView */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isCardsInView ? "show" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
            >
              {SERVICES.map((service, index) => {
                const Icon = service.icon;
                const StatIcon = service.iconStat;
                const contentDelay = index * 0.1 + 0.2; // Content animates after card appears

                return (
                  <motion.div
                    key={service.slug}
                    variants={cardVariants}
                    custom={index} // Pass index for sequential delay
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                    className="relative group perspective-1000"
                    onClick={(e) => handleCardClick(service.slug, e)}
                  >
                    {/* Highlight badge */}
                    {service.highlight && (
                      <motion.div
                        className="absolute -top-3 left-6 z-10"
                        variants={contentVariants}
                        custom={contentDelay}
                        initial="hidden"
                        animate={isCardsInView ? "show" : "hidden"}
                      >
                        <div className="px-4 py-1.5 bg-gradient-to-r from-red-600 to-blue-700 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          {service.highlight}
                        </div>
                      </motion.div>
                    )}

                    {/* Main Card */}
                    <motion.div 
                      variants={cardHoverVariants}
                      initial="rest"
                      whileHover="hover"
                      className={`relative h-full rounded-2xl overflow-hidden border border-gray-200/80 backdrop-blur-sm transform-gpu ${service.gradient}`}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>
                      <div className="absolute inset-0 border border-white/50 pointer-events-none"></div>

                      {/* Card content */}
                      <div className="relative p-6 sm:p-8 h-full flex flex-col">
                        {/* Header with icon and stat */}
                        <div className="flex items-start justify-between mb-6">
                          {/* Icon */}
                          <motion.div
                            variants={iconContainerVariants}
                            custom={contentDelay}
                            initial="hidden"
                            animate={isCardsInView ? "show" : "hidden"}
                          >
                            <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-200/50 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent rounded-2xl"></div>
                              <Icon className={`w-8 h-8 ${service.iconColor}`} />
                            </div>
                          </motion.div>

                          {/* Stat badge */}
                          <motion.div
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-sm"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            variants={contentVariants}
                            custom={contentDelay + 0.1}
                            initial="hidden"
                            animate={isCardsInView ? "show" : "hidden"}
                          >
                            <StatIcon className="w-4 h-4 text-blue-700" />
                            <span className="text-sm font-bold text-gray-900">{service.stat}</span>
                          </motion.div>
                        </div>

                        {/* Title and description */}
                        <div className="mb-6 flex-grow">
                          <motion.h3
                            variants={contentVariants}
                            custom={contentDelay + 0.2}
                            initial="hidden"
                            animate={isCardsInView ? "show" : "hidden"}
                            className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors duration-300"
                          >
                            {service.title}
                          </motion.h3>
                          <motion.p
                            variants={contentVariants}
                            custom={contentDelay + 0.3}
                            initial="hidden"
                            animate={isCardsInView ? "show" : "hidden"}
                            className="text-gray-600 leading-relaxed"
                          >
                            {service.desc}
                          </motion.p>
                        </div>

                        {/* Features list - Expandable */}
                        <motion.div
                          className="overflow-hidden features-list"
                          initial={false}
                          animate={{
                            height: expandedCard === index ? 'auto' : 0,
                            marginBottom: expandedCard === index ? '1.5rem' : '0',
                            opacity: expandedCard === index ? 1 : 0
                          }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                        >
                          <div className="pt-4 border-t border-gray-200/50">
                            <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                              <BookOpen className="w-4 h-4" />
                              What's included:
                            </p>
                            <ul className="grid grid-cols-2 gap-2">
                              {service.features.map((feature, i) => (
                                <motion.li
                                  key={i}
                                  custom={i}
                                  variants={featureItemVariants}
                                  initial="hidden"
                                  animate={expandedCard === index ? "show" : "hidden"}
                                  className="flex items-center gap-2 text-sm text-gray-600 p-2 rounded-lg bg-white/50 hover:bg-white transition-colors"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-red-500 to-blue-600"></div>
                                  <span>{feature}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>

                        {/* Footer with CTA and expand button */}
                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200/50">
                          {/* Learn More Link */}
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 text-gray-900 font-semibold group/link hover:text-red-700 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <motion.span
                              variants={contentVariants}
                              custom={contentDelay + 0.4}
                              initial="hidden"
                              animate={isCardsInView ? "show" : "hidden"}
                            >
                              Explore Service
                            </motion.span>
                            <motion.span
                              variants={contentVariants}
                              custom={contentDelay + 0.5}
                              initial="hidden"
                              animate={isCardsInView ? "show" : "hidden"}
                            >
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </motion.span>
                          </Link>

                          {/* Expand/Collapse Button */}
                          <motion.button
                            data-expand
                            onClick={(e) => handleExpandClick(index, e)}
                            className="expand-indicator flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-gray-200 hover:border-gray-300 text-gray-700 font-medium text-sm transition-all hover:shadow-md"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={contentVariants}
                            custom={contentDelay + 0.6}
                            initial="hidden"
                            animate={isCardsInView ? "show" : "hidden"}
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>{expandedCard === index ? 'Show Less' : 'See Features'}</span>
                          </motion.button>
                        </div>
                      </div>

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      
                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Interactive Info Panel */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              delay: 0.8, // Start after cards animation
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="sticky top-24 bg-gradient-to-b from-white to-gray-50/50 rounded-3xl border border-gray-200/80 p-8 shadow-2xl backdrop-blur-sm transform-gpu">
              {/* Header */}
              <div className="text-center mb-10">
                <motion.div
                  className="relative inline-block mb-6"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.9, duration: 0.6, ease: "backOut" }}
                  viewport={{ once: true }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-800 rounded-full blur-xl opacity-30"></div>
                  <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-red-600 to-blue-800 flex items-center justify-center shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
                >
                  Why Students <span className="text-red-600">Trust</span> Us
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  viewport={{ once: true }}
                  className="text-gray-600 text-lg"
                >
                  Your success is our commitment
                </motion.p>
              </div>

              {/* Interactive Stats */}
              <div className="space-y-6 mb-10">
                {[
                  { 
                    value: "7+", 
                    label: "Years Experience", 
                    sublabel: "In education consulting", 
                    color: "from-red-500 to-red-600",
                    icon: <Zap className="w-5 h-5 text-white" />,
                    delay: 1.2
                  },
                  { 
                    value: "2000+", 
                    label: "Students Helped", 
                    sublabel: "Successful global placements", 
                    color: "from-blue-600 to-blue-700",
                    icon: <Users className="w-5 h-5 text-white" />,
                    delay: 1.3
                  },
                  { 
                    value: "100+", 
                    label: "Global Network", 
                    sublabel: "Partner institutions worldwide", 
                    color: "from-purple-600 to-purple-700",
                    icon: <Globe className="w-5 h-5 text-white" />,
                    delay: 1.4
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="group relative p-6 bg-white/80 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                    initial={{ opacity: 0, x: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: stat.delay, duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {stat.icon}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                        <div className="font-semibold text-gray-900">{stat.label}</div>
                        <div className="text-sm text-gray-500">{stat.sublabel}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="pt-8 border-t border-gray-200/80">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  viewport={{ once: true }}
                  className="text-center text-gray-600 mb-4"
                >
                  Trusted by students from 15+ countries
                </motion.p>
                <motion.div
                  className="flex justify-center gap-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 1.6,
                      }
                    }
                  }}
                >
                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-r from-red-400/80 to-blue-600/80 shadow-lg"
                      variants={{
                        hidden: { scale: 0, rotate: -180 },
                        visible: { 
                          scale: 1, 
                          rotate: 0,
                          transition: { type: "spring", stiffness: 200 }
                        }
                      }}
                    />
                  ))}
                </motion.div>
                <motion.div
                  className="mt-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-blue-800 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Start Your Journey Today
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}