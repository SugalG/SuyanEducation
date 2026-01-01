"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ settings }) {
  const currentYear = new Date().getFullYear();

  const footerServices = [
    "Student Visa Counseling",
    "Japanese Language Classes",
    "University Placement",
    "Documentation Support",
    "Interview Preparation",
    "Pre-Departure Guidance"
  ];

  const footerLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Universities", href: "/universities" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Mount Fuji Background - Simple and effective */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fuji-cutout.jpg"
          alt="Mount Fuji background"
          fill
          className="object-cover object-bottom"
          sizes="100vw"
          priority
          quality={90}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gray-700/80 backdrop-blur-sm"></div>
        {/* Gradient from top to control fading */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/70 to-gray-900"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="relative h-14 w-14">
                  <Image
                    src="/logo.png"
                    alt={settings.siteName || "Company Logo"}
                    fill
                    className="object-contain"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">
                    {settings.siteName || "StudyAbroad"}
                  </h2>
                  <p className="text-sm text-gray-300">日本留学専門</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {settings.tagline || 
                  "Your trusted partner for studying in Japan. We guide students through every step of their educational journey."}
              </p>
            </div>

            {/* Quick Links Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
              <ul className="space-y-2">
                {footerServices.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3">
                {settings.address && (
                  <li className="flex items-start space-x-3">
                    <FaMapMarkerAlt className="h-4 w-4 text-red-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{settings.address}</span>
                  </li>
                )}
                
                {settings.primaryPhone && (
                  <li className="flex items-center space-x-3">
                    <FaPhone className="h-4 w-4 text-red-400 flex-shrink-0" />
                    <a 
                      href={`tel:${settings.primaryPhone}`}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {settings.primaryPhone}
                    </a>
                  </li>
                )}
                
                {settings.primaryEmail && (
                  <li className="flex items-center space-x-3">
                    <FaEnvelope className="h-4 w-4 text-red-400 flex-shrink-0" />
                    <a 
                      href={`mailto:${settings.primaryEmail}`}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {settings.primaryEmail}
                    </a>
                  </li>
                )}
              </ul>
              
              {/* Social Links */}
              <div className="flex space-x-3 mt-4">
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center text-white transition-colors">
                  <FaFacebookF className="h-3 w-3" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center text-white transition-colors">
                  <FaInstagram className="h-3 w-3" />
                </a>
                <a href="#" className="h-8 w-8 rounded-full bg-gray-800 hover:bg-red-600 flex items-center justify-center text-white transition-colors">
                  <FaLinkedinIn className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-8 border-t border-gray-700"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {settings.siteName || "StudyAbroad Japan"}. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}