"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";

export default function Navbar({ settings, onApplyNow }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  // Refs for desktop dropdowns to prevent premature closing
  const testMenuRef = useRef(null);
  const destMenuRef = useRef(null);

  // mobile state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    async function loadDestinations() {
      try {
        const res = await fetch("/api/destinations");
        const json = await res.json();

        if (!res.ok || !json.success) {
          throw new Error(json.message || "Failed to load destinations");
        }

        setDestinations(json.items); // ✅ array
      } catch (err) {
        console.error("Failed to load destinations", err);
        setDestinations([]); // safety
      }
    }

    loadDestinations();
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      style={{ "--navbar-height": "120px" }}
    >
      {/* Top Bar with Contact Info */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-800 to-red-700 text-white">
        <div className="max-w-8xl mx-auto px-8 py-2">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="flex items-center gap-4 mb-2 md:mb-0">
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>+977 1 5445099</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Mail size={14} />
                <span>info@suyan.edu.np</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>Kumaripati, Lalitpur, Nepal</span>
              </div>
              <div className="hidden lg:block text-xs opacity-80">
                Sun-Fri: 9AM-6PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`
        transition-all duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white"
        }
      `}
      >
        <nav className="max-w-8xl mx-auto px-8 h-24 flex items-center justify-between">
          {/* Logo - Left aligned with more space */}
          <Link
            href="/"
            className="flex items-center group flex-shrink-0 mr-12"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-600 to-blue-950 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              <img
                src="/logo.png"
                alt={settings?.siteName || "Suyan Education"}
                className="h-18 w-auto relative transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            {settings?.siteName && (
              <div className="ml-5 hidden lg:block">
                <div className="text-xl font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                  {settings.siteName}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">
                  Study Abroad Consultants
                </div>
              </div>
            )}
          </Link>

          {/* DESKTOP MENU - Centered with more spacing */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 font-medium mx-auto">
            <Link
              href="/"
              className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 group/nav px-1"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/about"
              className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 group/nav px-1"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full transition-all duration-300"></span>
            </Link>

            {/* Test Preparation with Full Images */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("test")}
              onMouseLeave={(e) => {
                const relatedTarget = e.relatedTarget;
                if (
                  testMenuRef.current &&
                  !testMenuRef.current.contains(relatedTarget)
                ) {
                  setOpenMenu(null);
                }
              }}
            >
              <button
                className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 flex items-center gap-1 group/nav px-1"
                onClick={() => setOpenMenu(openMenu === "test" ? null : "test")}
              >
                Test Preparation
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMenu === "test"
                      ? "rotate-180 text-red-600"
                      : "group-hover/nav:text-red-600"
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full transition-all duration-300"></span>
              </button>

              {/* Gap for smooth hover */}
              <div className="absolute left-0 top-full h-2"></div>

              <div
                ref={testMenuRef}
                className={`absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100
                transition-all duration-200 origin-top
                ${
                  openMenu === "test"
                    ? "opacity-100 visible scale-y-100 translate-y-0"
                    : "opacity-0 invisible scale-y-95 -translate-y-2"
                }`}
                onMouseEnter={() => setOpenMenu("test")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="p-2">
                  <div className="px-3 py-2 mb-2">
                    <div className="text-xs font-semibold text-blue-950 uppercase tracking-wider">
                      Language Tests
                    </div>
                    <div className="text-xs text-gray-500">
                      International proficiency exams
                    </div>
                  </div>

                  {/* JLPT with Rounded Image */}
                  <Link
                    href="/services/jlpt"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-red-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/japan-test-prep.png"
                        alt="JLPT"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">JLPT</div>
                      <div className="text-xs text-gray-500">
                        Japanese Language
                      </div>
                    </div>
                  </Link>

                  {/* IELTS with Rounded Image */}
                  <Link
                    href="/services/ielts"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-blue-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/ielts.png"
                        alt="IELTS"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">IELTS</div>
                      <div className="text-xs text-gray-500">
                        English Proficiency
                      </div>
                    </div>
                  </Link>

                  {/* TOEFL with Rounded Image */}
                  <Link
                    href="/services/toefl"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-green-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/tofel-test-prep.png"
                        alt="TOEFL"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">TOEFL</div>
                      <div className="text-xs text-gray-500">
                        Academic English
                      </div>
                    </div>
                  </Link>

                  {/* SSW with Rounded Image */}
                  <Link
                    href="/services/ssw"
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-purple-50 transition-colors overflow-hidden p-1">
                      <img
                        src="/icons/ssw-test-prep.png"
                        alt="SSW"
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>
                    <div>
                      <div className="font-medium">SSW</div>
                      <div className="text-xs text-gray-500">
                        Specialized Skills
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Destinations */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("dest")}
              onMouseLeave={(e) => {
                const relatedTarget = e.relatedTarget;
                if (
                  destMenuRef.current &&
                  !destMenuRef.current.contains(relatedTarget)
                ) {
                  setOpenMenu(null);
                }
              }}
            >
              <button
                className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 flex items-center gap-1 group/nav px-1"
                onClick={() => setOpenMenu(openMenu === "dest" ? null : "dest")}
              >
                Destinations
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    openMenu === "dest"
                      ? "rotate-180 text-red-600"
                      : "group-hover/nav:text-red-600"
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full transition-all duration-300"></span>
              </button>

              <div className="absolute left-0 top-full h-2"></div>

              <div
                ref={destMenuRef}
                className={`absolute left-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100
                transition-all duration-200 origin-top
                ${
                  openMenu === "dest"
                    ? "opacity-100 visible scale-y-100 translate-y-0"
                    : "opacity-0 invisible scale-y-95 -translate-y-2"
                }`}
                onMouseEnter={() => setOpenMenu("dest")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="p-2">
                  <div className="px-3 py-2 mb-2">
                    <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                      Popular Destinations
                    </div>
                    <div className="text-xs text-gray-500">
                      Choose your study country
                    </div>
                  </div>

                  {destinations.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/destinations/${d.slug}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg
      hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50
      hover:text-red-700 transition-all duration-200 group/item"
                    >
                      <div className="w-6 h-6 overflow-hidden flex items-center justify-center">
                        <img
                          src={`https://flagcdn.com/w40/${d.code.toLowerCase()}.png`}
                          alt={d.country}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="font-medium ml-2">{d.country}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/universities"
              className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 group/nav px-1"
            >
              Universities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/gallery"
              className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 group/nav px-1"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/blog"
              className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 group/nav px-1"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full transition-all duration-300"></span>
            </Link>

            <Link
              href="/contact"
              className="relative text-gray-700 hover:text-red-600 transition-colors duration-200 group/nav px-1"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-blue-600 group-hover/nav:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* APPLY NOW (DESKTOP) - Right aligned with more space */}
          <div className="hidden md:flex items-center ml-12">
            <button
              onClick={onApplyNow}
              className="relative px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-red-200 group flex-shrink-0 min-w-[140px]"
            >
              Apply Now
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-800 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 -z-10"></div>
            </button>
          </div>

          {/* MOBILE HAMBURGER - Right aligned */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-gray-700 p-2 hover:text-red-600 transition-colors duration-200 ml-auto"
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-24 border-b border-gray-100 bg-gradient-to-r from-red-50 to-blue-50">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="Logo" className="h-12" />
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    Suyan Education
                  </div>
                  <div className="text-xs text-gray-600">
                    Study Abroad Experts
                  </div>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 hover:bg-white rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X size={28} className="text-gray-700" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="px-4 py-8 overflow-y-auto h-[calc(100vh-96px)]">
              <div className="space-y-2">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center group-hover:bg-red-200">
                    <span className="text-red-700 font-bold">H</span>
                  </div>
                  <span className="font-semibold text-lg">Home</span>
                </Link>

                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center group-hover:bg-blue-200">
                    <span className="text-blue-700 font-bold">A</span>
                  </div>
                  <span className="font-semibold text-lg">About Us</span>
                </Link>

                {/* Mobile Test Prep with Rounded Images */}
                <div className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() =>
                      setMobileSub(mobileSub === "test" ? null : "test")
                    }
                    className="w-full flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-100 to-blue-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200">
                        <span className="font-bold bg-gradient-to-r from-red-600 to-blue-950 bg-clip-text text-transparent">
                          T
                        </span>
                      </div>
                      <span className="font-semibold text-lg">
                        Test Preparation
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        mobileSub === "test"
                          ? "rotate-180 text-red-600"
                          : "text-gray-500"
                      }`}
                    />
                  </button>

                  {mobileSub === "test" && (
                    <div className="pl-14 pr-4 space-y-3 mt-2 mb-4">
                      {/* JLPT Mobile with Rounded Image */}
                      <Link
                        href="/services/jlpt"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-700 transition-colors duration-150"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/japan-test-prep.png"
                            alt="JLPT"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">JLPT</span>
                      </Link>

                      {/* IELTS Mobile with Rounded Image */}
                      <Link
                        href="/services/ielts"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors duration-150"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/ielts.png"
                            alt="IELTS"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">IELTS</span>
                      </Link>

                      {/* TOEFL Mobile with Rounded Image */}
                      <Link
                        href="/services/toefl"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors duration-150"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden p-1">
                          <img
                            src="/icons/tofel-test-prep.png"
                            alt="TOEFL"
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <span className="font-medium">TOEFL</span>
                      </Link>

                      {/* SSW Mobile with Rounded Image */}
                      <Link
                        href="/services/ssw"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-purple-50 text-gray-700 hover:text-purple-700 transition-colors duration-150"
                      >
                        <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden p-1">
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
                    onClick={() =>
                      setMobileSub(mobileSub === "dest" ? null : "dest")
                    }
                    className="w-full flex items-center justify-between py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-100 to-red-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-red-200">
                        <span className="font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                          D
                        </span>
                      </div>
                      <span className="font-semibold text-lg">
                        Destinations
                      </span>
                    </div>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-200 ${
                        mobileSub === "dest"
                          ? "rotate-180 text-red-600"
                          : "text-gray-500"
                      }`}
                    />
                  </button>

                  {mobileSub === "dest" && (
                    <div className="pl-14 pr-4 space-y-3 mt-2 mb-4">
                      {destinations.map((d) => (
                        <Link
                          key={d.slug}
                          href={`/destinations/${d.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors duration-150 group"
                        >
                          <span className="font-medium">{d.country}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
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

                <Link
                  href="/universities"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center group-hover:bg-purple-200">
                    <span className="text-purple-700 font-bold">U</span>
                  </div>
                  <span className="font-semibold text-lg">Universities</span>
                </Link>

                <Link
                  href="/gallery"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center group-hover:bg-yellow-200">
                    <span className="text-yellow-700 font-bold">G</span>
                  </div>
                  <span className="font-semibold text-lg">Gallery</span>
                </Link>

                <Link
                  href="/blog"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center group-hover:bg-green-200">
                    <span className="text-green-700 font-bold">B</span>
                  </div>
                  <span className="font-semibold text-lg">Blog</span>
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 py-4 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-200">
                    <span className="text-cyan-700 font-bold">C</span>
                  </div>
                  <span className="font-semibold text-lg">Contact Us</span>
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-12 px-4 space-y-6">
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    onApplyNow?.();
                  }}
                  className="w-full px-6 py-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-lg hover:shadow-red-200 transition-all duration-300 active:scale-95"
                >
                  Apply Now
                </button>

                <div className="pt-6 border-t border-gray-200">
                  <div className="text-sm text-gray-600 mb-4">
                    Contact Info:
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone size={18} className="text-red-600" />
                      <span className="text-lg">+977 1 5445099</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail size={18} className="text-blue-600" />
                      <span className="text-lg">info@suyan.edu.np</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <MapPin size={18} className="text-green-600" />
                      <span className="text-lg">
                        Kumaripati, Lalitpur, Nepal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
