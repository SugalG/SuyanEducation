"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function Navbar({ settings, onApplyNow, isHomepage = false }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [destinations, setDestinations] = useState([]);

  // Refs for desktop dropdowns
  const testMenuRef = useRef(null);
  const destMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  // Debounced scroll handler
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrolled = () => {
      const currentScrollY = window.scrollY;
      const newScrolled = currentScrollY > 50;
      
      if (newScrolled !== scrolled) {
        setScrolled(newScrolled);
      }
      ticking = false;
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrolled();
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  useEffect(() => {
    async function loadDestinations() {
      try {
        const res = await fetch("/api/destinations");
        const json = await res.json();

        if (!res.ok || !json.success) {
          throw new Error(json.message || "Failed to load destinations");
        }

        setDestinations(json.items);
      } catch (err) {
        console.error("Failed to load destinations", err);
        setDestinations([]);
      }
    }

    loadDestinations();
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  // Handle menu hover with delay
  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 100);
  };

  // Clean text shadow classes - NO BACKGROUND, just text effects
  const getNavLinkClass = () => {
    return `relative transition-all duration-200 group/nav px-1 whitespace-nowrap ${
      isHomepage && !scrolled 
        ? `
          text-white font-semibold
          [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.7)]
          hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_4px_8px_rgba(0,0,0,0.8)]
        ` 
        : 'text-gray-700 hover:text-red-600'
    }`;
  };

  const getDropdownButtonClass = () => {
    return `relative transition-all duration-200 flex items-center gap-1 group/nav px-1 whitespace-nowrap ${
      isHomepage && !scrolled 
        ? `
          text-white font-semibold
          [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.7)]
          hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_4px_8px_rgba(0,0,0,0.8)]
        ` 
        : 'text-gray-700 hover:text-red-600'
    }`;
  };

  const getChevronClass = (menu) => {
    return `transition-transform duration-200 ${
      openMenu === menu ? "rotate-180" : ""
    } ${
      isHomepage && !scrolled 
        ? "text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]" 
        : "text-gray-700 group-hover/nav:text-red-600"
    }`;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar with Contact Info */}
      <div className={`bg-blue-800 text-white ${isHomepage && !scrolled ? 'bg-opacity-90' : ''}`}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <div className="flex flex-col md:flex-row items-center justify-between text-xs">
            <div className="flex items-center gap-3 sm:gap-4 mb-1 md:mb-0">
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone size={12} />
                <span>+977 1 5445099</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 sm:gap-2">
                <Mail size={12} />
                <span>info@suyan.edu.np</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin size={12} />
                <span className="hidden md:inline">Kumaripati, Lalitpur, Nepal</span>
                <span className="md:hidden text-xs">Lalitpur, Nepal</span>
              </div>
              <div className="hidden lg:block text-xs opacity-80">
                Sun-Fri: 7AM-3PM
              </div>
              
              <button
                onClick={onApplyNow}
                className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white text-blue-800 text-xs font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm ml-2"
              >
                <MessageSquare size={12} />
                <span>Message Us</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`
        transition-all duration-300 ease-in-out
        ${!isHomepage 
          ? 'bg-white/95 backdrop-blur-md shadow-sm' 
          : scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }
      `}>
        <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between">
          {/* Logo */}
          <div className={`flex-shrink-0 transition-all duration-300 ${
            isHomepage && !scrolled ? 'opacity-0 invisible w-0' : 'opacity-100 visible w-auto'
          }`}>
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/NAVBAR LOGO Final.png"
                  alt="Suyan Education"
                  width={420}
                  height={105}
                  priority
                  className="h-28 sm:h-32 md:h-34 w-auto transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>
          </div>

          {/* Fixed Position Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 font-semibold text-[16px] lg:text-[17px] absolute left-1/2 transform -translate-x-1/2">
            {/* Home */}
            <Link
              href="/"
              className={getNavLinkClass()}
            >
              Home
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                isHomepage && !scrolled
                  ? 'bg-white group-hover/nav:w-full'
                  : 'bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full'
              }`}></span>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className={getNavLinkClass()}
            >
              About
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                isHomepage && !scrolled
                  ? 'bg-white group-hover/nav:w-full'
                  : 'bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full'
              }`}></span>
            </Link>

            {/* Test Preparation */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("test")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={getDropdownButtonClass()}
                onClick={() => setOpenMenu(openMenu === "test" ? null : "test")}
              >
                Test Preparation
                <ChevronDown size={16} className={getChevronClass("test")} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                  isHomepage && !scrolled
                    ? 'bg-white group-hover/nav:w-full'
                    : 'bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full'
                }`}></span>
              </button>

              {/* Dropdown gap for hover */}
              <div className="absolute left-0 top-full h-2"></div>

              <div
                ref={testMenuRef}
                className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100
                transition-all duration-200 origin-top
                ${openMenu === "test"
                    ? "opacity-100 visible scale-y-100 translate-y-0"
                    : "opacity-0 invisible scale-y-95 -translate-y-2"}`}
                onMouseEnter={() => handleMouseEnter("test")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-2">
                  <div className="px-3 py-2 mb-2">
                    <div className="text-xs font-semibold text-blue-950 uppercase tracking-wider">Language Tests</div>
                    <div className="text-xs text-gray-500">International proficiency exams</div>
                  </div>

                  {/* Menu items */}
                  <Link href="/services/jlpt" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-red-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/japan-test-prep.png"
                        alt="JLPT"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">JLPT</div>
                      <div className="text-xs text-gray-500">Japanese Language</div>
                    </div>
                  </Link>

                  <Link href="/services/ielts" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-blue-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/ielts.png"
                        alt="IELTS"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">IELTS</div>
                      <div className="text-xs text-gray-500">English Proficiency</div>
                    </div>
                  </Link>

                  <Link href="/services/toefl" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-green-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/tofel-test-prep.png"
                        alt="TOEFL"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">TOEFL</div>
                      <div className="text-xs text-gray-500">Academic English</div>
                    </div>
                  </Link>

                  <Link href="/services/ssw" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-purple-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/ssw-test-prep.png"
                        alt="SSW"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">SSW</div>
                      <div className="text-xs text-gray-500">Specialized Skills</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Destinations */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("dest")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={getDropdownButtonClass()}
                onClick={() => setOpenMenu(openMenu === "dest" ? null : "dest")}
              >
                Destinations
                <ChevronDown size={16} className={getChevronClass("dest")} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                  isHomepage && !scrolled
                    ? 'bg-white group-hover/nav:w-full'
                    : 'bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full'
                }`}></span>
              </button>

              <div className="absolute left-0 top-full h-2"></div>

              <div
                ref={destMenuRef}
                className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100
                transition-all duration-200 origin-top
                ${openMenu === "dest"
                    ? "opacity-100 visible scale-y-100 translate-y-0"
                    : "opacity-0 invisible scale-y-95 -translate-y-2"}`}
                onMouseEnter={() => handleMouseEnter("dest")}
                onMouseLeave={handleMouseLeave}
              >
                <div className="p-2">
                  <div className="px-3 py-2 mb-2">
                    <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">Popular Destinations</div>
                    <div className="text-xs text-gray-500">Choose your study country</div>
                  </div>

                  {destinations.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/destinations/${d.slug}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-100 to-blue-100 flex items-center justify-center">
                        <span className="text-gray-700 font-bold text-sm">
                          {d.country.charAt(0)}
                        </span>
                      </div>
                      <div className="font-medium">{d.country}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Universities */}
            <Link
              href="/universities"
              className={getNavLinkClass()}
            >
              Universities
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                isHomepage && !scrolled
                  ? 'bg-white group-hover/nav:w-full'
                  : 'bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full'
              }`}></span>
            </Link>

            {/* Gallery */}
            <Link
              href="/gallery"
              className={getNavLinkClass()}
            >
              Gallery
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                isHomepage && !scrolled
                  ? 'bg-white group-hover/nav:w-full'
                  : 'bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full'
              }`}></span>
            </Link>

            {/* Blog */}
            <Link
              href="/blog"
              className={getNavLinkClass()}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                isHomepage && !scrolled
                  ? 'bg-white group-hover/nav:w-full'
                  : 'bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full'
              }`}></span>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className={getNavLinkClass()}
            >
              Contact
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                isHomepage && !scrolled
                  ? 'bg-white group-hover/nav:w-full'
                  : 'bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full'
              }`}></span>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`md:hidden p-2 transition-colors duration-200 ml-auto ${
              isHomepage && !scrolled 
                ? 'text-white hover:text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]' 
                : 'text-gray-700 hover:text-red-600'
            }`}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* Mobile Menu - Optimized for responsiveness */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop with smooth transition */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Panel with smooth slide-in */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300">
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 h-20 border-b border-gray-100 bg-gradient-to-r from-red-50 to-blue-50">
              <div className="flex items-center gap-3">
                <Image
                  src="/NAVBAR LOGO Final.png"
                  alt="Suyan Education"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-white rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-gray-700" />
              </button>
            </div>

            {/* Menu Content with scroll */}
            <div className="px-4 py-6 overflow-y-auto h-[calc(100vh-80px)]">
              <div className="space-y-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200">
                    <span className="text-red-700 font-bold text-sm">H</span>
                  </div>
                  <span className="font-semibold">Home</span>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200">
                    <span className="text-blue-700 font-bold text-sm">A</span>
                  </div>
                  <span className="font-semibold">About Us</span>
                </Link>

                {/* Mobile Test Prep */}
                <div className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setMobileSub(mobileSub === "test" ? null : "test")}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-100 to-blue-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200">
                        <span className="font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent text-sm">T</span>
                      </div>
                      <span className="font-semibold">Test Preparation</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${mobileSub === "test" ? "rotate-180 text-red-600" : "text-gray-500"}`}
                    />
                  </button>

                  {mobileSub === "test" && (
                    <div className="pl-11 pr-4 space-y-2 mt-2 mb-3">
                      <Link
                        href="/services/jlpt"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-700 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/japan-test-prep.png"
                            alt="JLPT"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">JLPT</span>
                      </Link>

                      <Link
                        href="/services/ielts"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/ielts.png"
                            alt="IELTS"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">IELTS</span>
                      </Link>

                      <Link
                        href="/services/toefl"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/tofel-test-prep.png"
                            alt="TOEFL"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">TOEFL</span>
                      </Link>

                      <Link
                        href="/services/ssw"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors duration-150"
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/ssw-test-prep.png"
                            alt="SSW"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">SSW</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Destinations */}
                <div className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setMobileSub(mobileSub === "dest" ? null : "dest")}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-red-200">
                        <span className="font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent text-sm">D</span>
                      </div>
                      <span className="font-semibold">Destinations</span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${mobileSub === "dest" ? "rotate-180 text-red-600" : "text-gray-500"}`}
                    />
                  </button>

                  {mobileSub === "dest" && (
                    <div className="pl-11 pr-4 space-y-2 mt-2 mb-3">
                      {destinations.slice(0, 5).map((d) => (
                        <Link
                          key={d.slug}
                          href={`/destinations/${d.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors duration-150 group"
                        >
                          <span className="font-medium">{d.country}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Other mobile links */}
                {[
                  { href: "/universities", label: "Universities", color: "purple" },
                  { href: "/gallery", label: "Gallery", color: "yellow" },
                  { href: "/blog", label: "Blog", color: "green" },
                  { href: "/contact", label: "Contact Us", color: "cyan" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                  >
                    <div className={`w-8 h-8 rounded-lg bg-${item.color}-100 flex items-center justify-center group-hover:bg-${item.color}-200`}>
                      <span className={`text-${item.color}-700 font-bold text-sm`}>
                        {item.label.charAt(0)}
                      </span>
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile CTA Button */}
              <div className="mt-8 px-4">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onApplyNow?.();
                  }}
                  className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold shadow-lg hover:shadow-red-200 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} />
                  <span>Message Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}