"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Globe,
  Users,
  Target,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactClient() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeSocial, setActiveSocial] = useState(null);

  return (
    <main className="w-full overflow-hidden">
      {/* Modern Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-red-50 to-blue-50" />

        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-red-100/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent" />

        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-red-200/20 to-pink-200/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-blue-200/20 to-cyan-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                {/* Contact Badge */}
                <div className="inline-flex items-center gap-3 px-4 lg:px-6 py-2 lg:py-3 rounded-2xl bg-white shadow-lg border border-gray-100 mb-6 lg:mb-8">
                  <div className="w-2 lg:w-3 h-2 lg:h-3 bg-gradient-to-r from-red-500 to-blue-600 rounded-full animate-pulse"></div>
                  <span className="text-sm lg:text-lg font-semibold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-red-600 via-red-500 to-blue-950 bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </h1>

                {/* Decorative Lines */}
                <div className="flex items-center gap-3 lg:gap-4 mb-6 lg:mb-8">
                  <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                  <div className="w-6 lg:w-8 h-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"></div>
                  <div className="w-3 lg:w-4 h-1 bg-gradient-to-r from-red-300 to-red-200 rounded-full"></div>
                </div>

                {/* Description */}
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 lg:mb-10">
                  We're here to guide you every step of your study abroad
                  journey. Get personalized counseling and expert advice from
                  our dedicated team.
                </p>

                {/* Feature Icons Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
                  {[
                    { icon: Target, label: "Personalized Guidance" },
                    { icon: Users, label: "Expert Team" },
                    { icon: MessageSquare, label: "Quick Response" },
                    { icon: Globe, label: "Global Network" },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-3 lg:p-4 bg-white/80 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-gray-100 active:scale-95 active:border-red-200 active:shadow-lg transition-all duration-200 touch-manipulation"
                      onTouchStart={() => {}}
                    >
                      <feature.icon className="w-6 lg:w-8 h-6 lg:h-8 text-red-600 mb-1 lg:mb-2" />
                      <span className="text-xs lg:text-sm font-semibold text-gray-800 text-center leading-tight">
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl border-2 border-gray-100 p-6 lg:p-8 xl:p-10 shadow-xl lg:shadow-2xl">
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    Start Your Journey Today
                  </h3>
                  <p className="text-sm lg:text-base text-gray-600">
                    Book your free consultation session
                  </p>
                </div>

                <div className="space-y-4 lg:space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center active:scale-95 transition-transform duration-200">
                    <Phone className="w-8 lg:w-12 h-8 lg:h-12 text-red-600 mx-auto mb-3 lg:mb-4" />
                    <div className="text-lg lg:text-2xl font-bold text-gray-900 mb-1 lg:mb-2">
                      +977 1 5445099
                    </div>
                    <p className="text-sm lg:text-base text-gray-600">
                      Sun–Fri, 10AM–6PM
                    </p>
                  </div>

                  <a
                    href="mailto:info@suyan.com.np"
                    className="block bg-gradient-to-r from-red-600 to-red-500 text-white rounded-xl lg:rounded-2xl p-4 lg:p-6 text-center font-semibold active:scale-95 active:shadow-lg transition-all duration-200"
                  >
                    <Mail className="w-6 lg:w-8 h-6 lg:h-8 mx-auto mb-2 lg:mb-3" />
                    Send Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Connect With Us
            </span>
          </h2>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Multiple ways to reach our expert counselors for personalized
            guidance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: Phone,
              title: "Call Us",
              value: "+977 1 5445099",
              hint: "Sun–Fri, 10AM–6PM",
              color: "from-red-500 to-red-400",
              action: "tel:+97715445099",
            },
            {
              icon: Mail,
              title: "Email Us",
              value: "info@suyan.com.np",
              hint: "We reply within 24 hours",
              color: "from-blue-500 to-blue-400",
              action: "mailto:info@suyan.com.np",
            },
            {
              icon: MapPin,
              title: "Visit Office",
              value: "Kumaripati, Lalitpur",
              hint: "Nepal",
              color: "from-purple-500 to-purple-400",
              action: "#location",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            const isActive = activeCard === i;

            return (
              <motion.a
                key={i}
                href={item.action}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onTouchStart={() => setActiveCard(i)}
                onTouchEnd={() => setActiveCard(null)}
                onMouseEnter={() => setActiveCard(i)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative block ${isActive ? "scale-98" : ""}`}
              >
                <div
                  className={`bg-white rounded-2xl lg:rounded-3xl border-2 ${
                    isActive ? "border-red-300 shadow-xl" : "border-gray-100"
                  } p-6 lg:p-8 transition-all duration-300 active:scale-95`}
                >
                  {/* Icon Background */}
                  <div
                    className={`absolute -top-5 lg:-top-6 left-1/2 -translate-x-1/2 w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-br ${
                      item.color
                    } rounded-xl lg:rounded-2xl flex items-center justify-center shadow-lg ${
                      isActive ? "scale-110" : ""
                    } transition-transform duration-300`}
                  >
                    <Icon className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                  </div>

                  <div className="pt-8 lg:pt-10 text-center">
                    <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3 lg:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-base lg:text-lg font-semibold text-gray-700 mb-1 lg:mb-2">
                      {item.value}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-500">
                      {item.hint}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative bg-gradient-to-b from-gray-50/50 to-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10 lg:mb-16"
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                Follow Us
              </span>
            </h3>
            <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Stay updated with the latest news, success stories, and study
              abroad opportunities
            </p>
          </motion.div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-8">
            {[
              {
                icon: Facebook,
                href: "https://www.facebook.com/suyancons07",
                label: "Facebook",
                color: "from-blue-600 to-blue-500",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/suyancons07",
                label: "Instagram",
                color: "from-pink-600 to-pink-500",
              },
            ].map((social, i) => {
              const Icon = social.icon;
              const isActive = activeSocial === i;

              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onTouchStart={() => setActiveSocial(i)}
                  onTouchEnd={() => setActiveSocial(null)}
                  onMouseEnter={() => setActiveSocial(i)}
                  onMouseLeave={() => setActiveSocial(null)}
                  className="group w-full sm:w-auto"
                >
                  <div
                    className={`bg-gradient-to-br ${
                      social.color
                    } rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl ${
                      isActive ? "scale-95 shadow-2xl" : ""
                    } transition-all duration-300`}
                  >
                    <Icon
                      className={`w-12 lg:w-16 h-12 lg:h-16 text-white mb-3 lg:mb-4 mx-auto ${
                        isActive
                          ? "scale-110 rotate-12"
                          : "group-hover:scale-110 group-hover:rotate-5"
                      } transition-transform duration-300`}
                    />
                    <div className="text-white font-semibold text-base lg:text-lg text-center">
                      {social.label}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section
        id="location"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 lg:mb-16"
        >
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            <span className="bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
              Visit Our Office
            </span>
          </h3>
          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Meet our expert counselors in person for personalized guidance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl lg:rounded-3xl border-2 border-gray-100 shadow-xl lg:shadow-2xl overflow-hidden"
        >
          {/* Map Header */}
          <div className="bg-gradient-to-r from-red-600 to-blue-950 text-white p-4 lg:p-6 text-center">
            <h4 className="text-xl lg:text-2xl font-bold">
              Suyan Education Pvt. Ltd.
            </h4>
            <p className="text-red-100 text-sm lg:text-base">
              Kumaripati, Lalitpur, Nepal
            </p>
          </div>

          {/* Map */}
          <iframe
            title="Suyan Education Pvt. Ltd."
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.019390480651!2d85.3192551!3d27.6716318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f116f1ae53%3A0x4a445bf972ec2196!2sSuyan%20Education%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1736400000000"
            className="w-full h-[300px] sm:h-[400px] lg:h-[500px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      {/* QR Code Section */}
      <section className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-600 to-blue-950 rounded-2xl lg:rounded-3xl p-6 lg:p-8 xl:p-12 shadow-xl lg:shadow-2xl">
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-4 lg:mb-6">
              Quick Contact
            </h3>
            <p className="text-base lg:text-xl text-red-100 mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Scan the QR code to quickly reach us or save our contact
              information
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20">
                <Image
                  src="/Pin point Location.png"
                  alt="Contact QR Code"
                  width={200}
                  height={200}
                  className="rounded-xl lg:rounded-2xl w-48 h-48 lg:w-64 lg:h-64"
                />
              </div>

              <div className="text-left text-white">
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">
                      Direct Contact
                    </h4>
                    <p className="text-red-100 text-base lg:text-lg">
                      +977 1 5445099
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">
                      Email Address
                    </h4>
                    <p className="text-red-100 text-base lg:text-lg">
                      info@suyan.com.np
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2">
                      Office Hours
                    </h4>
                    <p className="text-red-100 text-sm lg:text-base">
                      Sunday - Friday
                    </p>
                    <p className="text-red-100 text-sm lg:text-base">
                      10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
