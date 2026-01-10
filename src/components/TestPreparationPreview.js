"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
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
} from "lucide-react";

const SERVICES = [
  {
    title: "Student Visa Counseling",
    desc: "Clear guidance on eligibility, process, and timelines for student visas.",
    slug: "student-visa-counseling",
    icon: GraduationCap,
    features: ["Visa eligibility assessment", "Document checklist", "Timeline planning", "Country-specific rules"],
    color: "from-blue-600 to-red-600",
    stat: "98% Success Rate",
    iconStat: CheckCircle,
  },
  {
    title: "Japanese Language Preparation",
    desc: "Structured language classes to meet university and visa requirements.",
    slug: "japanese-language-preparation",
    icon: Languages,
    features: ["JLPT preparation", "Conversation practice", "Cultural training", "Exam strategies"],
    color: "from-red-600 to-blue-800",
    stat: "500+ Students Trained",
    iconStat: Users,
  },
  {
    title: "University Placement",
    desc: "Support in selecting and applying to the right universities abroad.",
    slug: "university-placement",
    icon: University,
    features: ["University shortlisting", "Application strategy", "LOR & SOP guidance", "Scholarship assistance"],
    color: "from-blue-800 to-red-700",
    stat: "100+ Partner Universities",
    iconStat: Globe,
  },
  {
    title: "Documentation Support",
    desc: "Step-by-step assistance to prepare accurate and complete documents.",
    slug: "documentation-support",
    icon: FileText,
    features: ["Document verification", "Translation services", "Notarization help", "Application filing"],
    color: "from-red-700 to-blue-900",
    stat: "Zero Error Guarantee",
    iconStat: Shield,
  },
  {
    title: "Interview Preparation",
    desc: "Mock interviews and guidance to improve visa approval chances.",
    slug: "interview-preparation",
    icon: Mic,
    features: ["Mock interviews", "Common questions", "Body language tips", "Confidence building"],
    color: "from-blue-900 to-red-800",
    stat: "95% Success Rate",
    iconStat: Target,
  },
  {
    title: "Pre-Departure Guidance",
    desc: "Orientation and support before students travel abroad.",
    slug: "pre-departure-guidance",
    icon: PlaneTakeoff,
    features: ["Accommodation help", "Travel arrangements", "Cultural orientation", "Emergency support"],
    color: "from-red-800 to-blue-950",
    stat: "24/7 Support",
    iconStat: Clock,
  },
];

/* Animation variants */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const cardHover = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.05, 
    rotate: 0,
    boxShadow: "0px 20px 40px rgba(220, 38, 38, 0.15)",
    transition: { duration: 0.3 }
  }
};

const featureList = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const featureItem = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
};

export default function ServicesPreview() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-900/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div 
        className="text-center max-w-4xl mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        {/* Badge */}
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-50 to-blue-50 border border-red-100"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-gray-700">Comprehensive Solutions</span>
        </motion.div>
        
        {/* Main Heading */}
        <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        
        {/* Animated Underline */}
        <div className="flex justify-center mt-4">
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-800 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>
        
        {/* Subtitle */}
        <motion.p 
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
          variants={fadeInUp}
        >
          End-to-end guidance for students with{" "}
          <span className="font-semibold text-red-600">strong focus on Japan</span> and global destinations
        </motion.p>
      </motion.div>

      {/* Interactive Cards Grid */}
      <div className="relative mt-16 sm:mt-20">
        {/* Featured Service Highlight */}
        {selectedService && (
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-blue-50/50 rounded-3xl -z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Services */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const StatIcon = service.iconStat;

              return (
                <motion.div
                  key={service.slug}
                  initial="rest"
                  whileHover="hover"
                  animate={hoveredCard === index ? "hover" : "rest"}
                  variants={cardHover}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  onClick={() => setSelectedService(selectedService === index ? null : index)}
                  className={`relative group cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedService === index 
                      ? 'border-red-500 shadow-2xl' 
                      : 'border-gray-100 hover:border-red-300'
                  }`}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Icon with gradient border */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-blue-800 rounded-full blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                          <Icon className="w-7 h-7 text-red-600" />
                        </div>
                      </div>
                      
                      {/* Stat Badge */}
                      <motion.div 
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200"
                        whileHover={{ scale: 1.05 }}
                      >
                        <StatIcon className="w-4 h-4 text-blue-700" />
                        <span className="text-sm font-semibold text-gray-800">{service.stat}</span>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Features List - Appears on hover/click */}
                    <motion.div 
                      className="overflow-hidden"
                      initial={false}
                      animate={{ 
                        height: selectedService === index ? 'auto' : 0,
                        opacity: selectedService === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-700"
                            variants={featureItem}
                            initial="hidden"
                            animate={selectedService === index ? "show" : "hidden"}
                            transition={{ delay: i * 0.1 }}
                          >
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Learn More Button */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-red-700 font-semibold group/link"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                      
                      <motion.div
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-red-50 to-blue-50 text-gray-700"
                        animate={{ 
                          scale: selectedService === index ? 1.1 : 1,
                          backgroundColor: selectedService === index ? '#FEF2F2' : '#F9FAFB'
                        }}
                      >
                        {selectedService === index ? 'Expanded' : 'Click to expand'}
                      </motion.div>
                    </div>
                  </div>

                  {/* Hover/Active Indicator */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transition-all duration-300 ${
                    selectedService === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Interactive Info Panel */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1  }}
          >
            <div className="sticky top-24 bg-gradient-to-b from-white to-gray-50 rounded-2xl border border-gray-200 p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-red-600 to-blue-800 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Why Choose Us?</h3>
                <p className="text-gray-600 mt-2">Your success journey starts here</p>
              </div>

              {/* Interactive Stats */}
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                      <span className="text-red-600 font-bold">15+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Years Experience</p>
                      <p className="text-sm text-gray-500">In education consulting</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <span className="text-blue-700 font-bold">10K+</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Students Helped</p>
                      <p className="text-sm text-gray-500">Successful placements</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-red-300 transition-colors group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-50 to-blue-50 flex items-center justify-center group-hover:from-red-100 group-hover:to-blue-100 transition-colors">
                      <Globe className="w-5 h-5 text-gray-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Global Network</p>
                      <p className="text-sm text-gray-500">100+ partner institutions</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div 
                className="mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/services"
                  className="block w-full text-center bg-gradient-to-r from-red-600 to-blue-800 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore All Services
                    <ChevronRight className="w-5 h-5" />
                  </span>
                </Link>
              </motion.div>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">
                  Trusted by students from 25+ countries
                </p>
                <div className="flex justify-center mt-3 space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-red-400 to-blue-600 opacity-80"></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <div className="inline-flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-2xl p-8 border border-gray-200">
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900">Ready to Start Your Journey?</h3>
            <p className="text-gray-600 mt-2">Book a free consultation with our experts</p>
          </div>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-red-200 transition-shadow"
            >
              Book Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-blue-800 rounded-lg font-semibold border-2 border-blue-800 hover:bg-blue-50 transition-colors"
            >
              Download Brochure
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}