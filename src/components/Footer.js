"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Globe, BookOpen, GraduationCap, Users } from "lucide-react";

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
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-blue-950"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16">
                  <Image
                    src="/logo.png"
                    alt={settings.siteName || "Suyan Education"}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent">
                    {settings.siteName || "Suyan Education"}
                  </h2>
                  <p className="text-sm text-gray-300 mt-1">日本留学専門 | </p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {settings.tagline || 
                  "Your trusted partner for global education. We guide students through every step of their educational journey to Japan and beyond."}
              </p>
              
              {/* Stats */}
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="h-8 w-px bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="h-8 w-px bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">11+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              </div>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-red-400 transition-all duration-200 text-sm group"
                    >
                      <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-red-500 transition-colors"></div>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Our Services</h3>
              </div>
              <ul className="space-y-3">
                {footerServices.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm group"
                    >
                      <GraduationCap className="w-3 h-3 text-gray-500 group-hover:text-blue-400 transition-colors" />
                      <span>{service}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Contact Info</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                {settings.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{settings.address}</span>
                  </li>
                )}
                
                {settings.primaryPhone && (
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <a 
                      href={`tel:${settings.primaryPhone}`}
                      className="text-gray-300 hover:text-red-400 transition-colors duration-200 text-sm"
                    >
                      {settings.primaryPhone}
                    </a>
                  </li>
                )}
                
                {settings.primaryEmail && (
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
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
              <div className="space-y-3">
                <div className="text-sm text-gray-400">Follow Us</div>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/suyancons07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a 
                    href="https://www.instagram.com/suyancons07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-500 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-xl bg-gray-800 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider with Gradient */}
          <div className="my-8 lg:my-12">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {settings.siteName || "Suyan Education"}. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
              >
                Terms of Service
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
              >
                FAQ
              </Link>
              <Link 
                href="/sitemap" 
                className="text-gray-400 hover:text-white transition-colors duration-200 hover:scale-105"
              >
                Sitemap
              </Link>
            </div>
            
            
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 text-sm font-medium hover:text-white hover:shadow-lg transition-all duration-300 border border-gray-700"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="rotate-180"
              >
                <path d="m6 9 6-6 6 6"/>
              </svg>
              Back to Top
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-950 via-red-500 to-red-600"></div>
    </footer>
  );
}