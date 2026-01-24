"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Home,
  Info,
  Globe,
  Building,
  Image as ImageIcon,
  FileText,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

export default function NavigationBar({
  settings,
  onApplyNow,
  isHomepage = false,
}) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [destinations, setDestinations] = useState([]);

  // Refs for desktop dropdowns
  const testMenuRef = useRef(null);
  const destMenuRef = useRef(null);
  const timeoutRef = useRef(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load destinations
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

  // FIXED: Removed body overflow manipulation
  // This was breaking sticky positioning
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

  // Clean text shadow classes
  const getNavLinkClass = () => {
    return `relative transition-all duration-200 group/nav px-1 whitespace-nowrap ${
      isHomepage && !scrolled
        ? `
          text-white font-semibold
          [text-shadow:0_1px_2px_rgba(0,0,0,0.9),0_2px_4px_rgba(0,0,0,0.7)]
          hover:[text-shadow:0_2px_4px_rgba(0,0,0,0.95),0_4px_8px_rgba(0,0,0,0.8)]
        `
        : "text-gray-800 hover:text-red-600"
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
        : "text-gray-800 hover:text-red-600"
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

  // Mobile menu items with icons
  const mobileMenuItems = [
    { href: "/", label: "Home", icon: <Home size={20} /> },
    { href: "/about", label: "About Us", icon: <Info size={20} /> },
    {
      href: "#",
      label: "Test Preparation",
      icon: <FileText size={20} />,
      submenu: "test",
      items: [
        {
          href: "/services/japanese-language-preparation",
          label: "JLPT",
          description: "Japanese Language",
          icon: "/icons/japan-test-prep.png",
        },
        {
          href: "/services/ielts",
          label: "IELTS",
          description: "English Proficiency",
          icon: "/icons/ielts.png",
        },
        {
          href: "/services/toefl",
          label: "TOEFL",
          description: "Academic English",
          icon: "/icons/tofel-test-prep.png",
        },
        {
          href: "/services/ssw",
          label: "SSW",
          description: "Specialized Skills",
          icon: "/icons/ssw-test-prep.png",
        },
      ],
    },
    {
      href: "#",
      label: "Destinations",
      icon: <Globe size={20} />,
      submenu: "dest",
      items: destinations.map((d) => ({
        href: `/destinations/${d.slug}`,
        label: d.country,
        flag: d.code,
      })),
    },
    {
      href: "/universities",
      label: "Universities",
      icon: <Building size={20} />,
    },
    { href: "/gallery", label: "Gallery", icon: <ImageIcon size={20} /> },
    { href: "/blog", label: "Blog", icon: <FileText size={20} /> },
    { href: "/contact", label: "Contact", icon: <MessageCircle size={20} /> },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar with Contact Info */}
      <div
        className={`bg-blue-950 text-white ${
          isHomepage && !scrolled ? "bg-opacity-90" : ""
        }`}
      >
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-1">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-0">
              <div className="flex items-center gap-1 sm:gap-2">
                <Phone size={12} className="flex-shrink-0" />
                <span className="truncate">+977 1 5445099</span>
              </div>
              <div className="hidden sm:flex items-center gap-1 sm:gap-2">
                <Mail size={12} className="flex-shrink-0" />
                <span className="truncate">info@suyan.edu.np</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <MapPin size={12} className="flex-shrink-0" />
                <span className="hidden md:inline truncate">
                  Kumaripati, Lalitpur, Nepal
                </span>
                <span className="md:hidden text-xs truncate">
                  Lalitpur, Nepal
                </span>
              </div>
              <div className="hidden lg:block text-xs opacity-80">
                Sun-Fri: 7AM-3PM
              </div>

              <button
                onClick={onApplyNow}
                className="flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full bg-white text-blue-800 text-xs font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm ml-1 sm:ml-2 whitespace-nowrap"
              >
                <MessageSquare size={12} className="flex-shrink-0" />
                <span className="hidden xs:inline">Message Us</span>
                <span className="xs:hidden">Message</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`
        transition-all duration-300 ease-in-out
        ${
          !isHomepage
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }
      `}
      >
        <nav className="px-4 sm:px-10 lg:px-6 xl:px-8 h-20 lg:h-24 flex items-center justify-between">
          {/* Logo - Responsive: Hide on md screens (768px-1023px) */}
          <div
            className={`flex-shrink-0 transition-all duration-300 ${
              isHomepage && !scrolled
                ? "opacity-0 invisible w-auto"
                : "opacity-100 visible w-auto"
            } md:hidden lg:block`}
          >
            <Link href="/" className="flex items-center group">
              {/* No gap, items aligned to center */}
              <div className="relative flex items-center -space-x-8 lg:-space-x-12">
                {/* Main Logo with high quality */}
                <div className="relative">
                  <Image
                    src="/suyan_logo.png"
                    alt="Suyan Education"
                    width={240} // High resolution source
                    height={240}
                    priority
                    quality={100} // Maximum quality
                    className="h-20 sm:h-20 lg:h-24 w-auto transition-transform duration-300 group-hover:scale-105 object-contain"
                    sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                  />
                </div>

                {/* Sub-logo directly adjacent */}
                <div className="relative w-48 sm:w-56 lg:w-64">
                  <Image
                    src="/suyan_desc.png"
                    alt="Suyan Education - Global Education Consultants"
                    width={240} // High resolution
                    height={64}
                    priority
                    quality={100} // Maximum quality
                    className="w-full h-8 sm:h-10 lg:h-12 object-contain transition-opacity duration-300 group-hover:opacity-90"
                    sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
                  />
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 font-semibold text-sm lg:text-base">
              {/* Home */}
              <Link href="/" className={getNavLinkClass()}>
                Home
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isHomepage && !scrolled
                      ? "bg-white group-hover/nav:w-full"
                      : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                  }`}
                ></span>
              </Link>

              {/* About */}
              <Link href="/about" className={getNavLinkClass()}>
                About
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isHomepage && !scrolled
                      ? "bg-white group-hover/nav:w-full"
                      : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                  }`}
                ></span>
              </Link>

              {/* Test Preparation */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("test")}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={getDropdownButtonClass()}
                  onClick={() =>
                    setOpenMenu(openMenu === "test" ? null : "test")
                  }
                >
                  <span className="lg:inline hidden">Test Preparation</span>
                  <span className="lg:hidden inline">Tests</span>
                  <ChevronDown size={16} className={getChevronClass("test")} />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                      isHomepage && !scrolled
                        ? "bg-white group-hover/nav:w-full"
                        : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                    }`}
                  ></span>
                </button>

                <div className="absolute left-0 top-full h-2"></div>

                <div
                  ref={testMenuRef}
                  className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100
                  transition-all duration-200 origin-top
                  ${
                    openMenu === "test"
                      ? "opacity-100 visible scale-y-100 translate-y-0"
                      : "opacity-0 invisible scale-y-95 -translate-y-2"
                  }`}
                  onMouseEnter={() => handleMouseEnter("test")}
                  onMouseLeave={handleMouseLeave}
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

                    {[
                      {
                        href: "/services/japanese-language-preparation",
                        label: "JLPT",
                        description: "Japanese Language",
                        icon: "/icons/japan-test-prep.png",
                        color: "red",
                      },
                      {
                        href: "/services/ielts",
                        label: "IELTS",
                        description: "English Proficiency",
                        icon: "/icons/ielts.png",
                        color: "blue",
                      },
                      {
                        href: "/services/toefl",
                        label: "TOEFL",
                        description: "Academic English",
                        icon: "/icons/tofel-test-prep.png",
                        color: "green",
                      },
                      {
                        href: "/services/ssw",
                        label: "SSW",
                        description: "Specialized Skills",
                        icon: "/icons/ssw-test-prep.png",
                        color: "purple",
                      },
                    ].map((test) => (
                      <Link
                        key={test.href}
                        href={test.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center group-hover/item:bg-${test.color}-50 transition-colors overflow-hidden p-1`}
                        >
                          <img
                            src={test.icon}
                            alt={test.label}
                            className="w-full h-full object-contain rounded-full"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{test.label}</div>
                          <div className="text-xs text-gray-500">
                            {test.description}
                          </div>
                        </div>
                      </Link>
                    ))}
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
                  onClick={() =>
                    setOpenMenu(openMenu === "dest" ? null : "dest")
                  }
                >
                  <span className="lg:inline hidden">Destinations</span>
                  <span className="lg:hidden inline">Destinations</span>
                  <ChevronDown size={16} className={getChevronClass("dest")} />
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                      isHomepage && !scrolled
                        ? "bg-white group-hover/nav:w-full"
                        : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                    }`}
                  ></span>
                </button>

                <div className="absolute left-0 top-full h-2"></div>

                <div
                  ref={destMenuRef}
                  className={`absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-100
                  transition-all duration-200 origin-top
                  ${
                    openMenu === "dest"
                      ? "opacity-100 visible scale-y-100 translate-y-0"
                      : "opacity-0 invisible scale-y-95 -translate-y-2"
                  }`}
                  onMouseEnter={() => handleMouseEnter("dest")}
                  onMouseLeave={handleMouseLeave}
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
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 hover:text-red-700 transition-all duration-200 group/item"
                        onClick={() => setOpenMenu(null)}
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

              {/* Universities with responsive text */}
              <Link href="/universities" className={getNavLinkClass()}>
                <span className="lg:inline hidden">Universities</span>
                <span className="lg:hidden inline">Uni</span>
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isHomepage && !scrolled
                      ? "bg-white group-hover/nav:w-full"
                      : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                  }`}
                ></span>
              </Link>

              {/* Gallery */}
              <Link href="/gallery" className={getNavLinkClass()}>
                Gallery
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isHomepage && !scrolled
                      ? "bg-white group-hover/nav:w-full"
                      : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                  }`}
                ></span>
              </Link>

              {/* Blog */}
              <Link href="/blog" className={getNavLinkClass()}>
                Blog
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isHomepage && !scrolled
                      ? "bg-white group-hover/nav:w-full"
                      : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                  }`}
                ></span>
              </Link>

              {/* Contact */}
              <Link href="/contact" className={getNavLinkClass()}>
                Contact
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 ${
                    isHomepage && !scrolled
                      ? "bg-white group-hover/nav:w-full"
                      : "bg-gradient-to-r from-red-600 to-blue-950 group-hover/nav:w-full"
                  }`}
                ></span>
              </Link>
            </div>
          </div>

          {/* Mobile & Tablet Navigation Button - Only below md */}
          <div className="md:hidden flex items-center ml-auto">
            <button
              onClick={() => setMobileOpen(true)}
              className={`p-2 transition-colors duration-200 ${
                isHomepage && !scrolled
                  ? "text-white hover:text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]"
                  : "text-gray-700 hover:text-red-600"
              }`}
              aria-label="Open menu"
            >
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile & Tablet Menu - FIXED: No overflow-x on body */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50" data-mobile-menu>
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setMobileOpen(false)}
          />

          {/* Menu Panel - FIXED: Removed overflow-x-hidden */}
          <div className="absolute left-0 top-0 bottom-0 w-[85vw] max-w-xs sm:max-w-sm bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-4 sm:px-6 h-20 border-b border-gray-100 bg-gradient-to-r from-red-50 to-blue-50">
              <div className="flex items-center gap-3">
                <Image
                  src="/suyan_logo.png"
                  alt="Suyan Education"
                  width={240}
                  height={240}
                  className="h-16 w-auto"
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

            {/* Menu Content */}
            <div className="px-4 py-6">
              <div className="space-y-1">
                {mobileMenuItems.map((item) =>
                  item.submenu ? (
                    <div
                      key={item.label}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <button
                        onClick={() =>
                          setMobileSub(
                            mobileSub === item.submenu ? null : item.submenu
                          )
                        }
                        className="w-full flex items-center justify-between py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-100 to-blue-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200">
                            {item.icon}
                          </div>
                          <span className="font-semibold">{item.label}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            mobileSub === item.submenu
                              ? "rotate-180 text-red-600"
                              : "text-gray-500"
                          }`}
                        />
                      </button>

                      {mobileSub === item.submenu && (
                        <div className="pl-14 pr-4 space-y-2 mt-2 mb-3">
                          {item.submenu === "test"
                            ? item.items.map((subItem) => (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileSub(null);
                                  }}
                                  className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-red-50 text-gray-700 hover:text-red-700 transition-colors duration-150"
                                >
                                  <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden p-1">
                                    <img
                                      src={subItem.icon}
                                      alt={subItem.label}
                                      className="w-full h-full object-contain rounded-full"
                                    />
                                  </div>
                                  <div>
                                    <div className="font-medium">
                                      {subItem.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))
                            : item.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => {
                                    setMobileOpen(false);
                                    setMobileSub(null);
                                  }}
                                  className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors duration-150 group"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 overflow-hidden flex items-center justify-center">
                                      <img
                                        src={`https://flagcdn.com/w20/${subItem.flag.toLowerCase()}.png`}
                                        alt={subItem.label}
                                        className="w-full h-full object-contain"
                                      />
                                    </div>
                                    <span className="font-medium">
                                      {subItem.label}
                                    </span>
                                  </div>
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
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-red-50 hover:to-blue-50 text-gray-800 hover:text-red-700 transition-all duration-200 group border-b border-gray-100 last:border-0"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-red-100 to-blue-100 flex items-center justify-center group-hover:from-red-200 group-hover:to-blue-200">
                        {item.icon}
                      </div>
                      <span className="font-semibold">{item.label}</span>
                    </Link>
                  )
                )}
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

              {/* Contact Info in Mobile Menu */}
              <div className="mt-6 px-4 py-4 bg-gray-50 rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone size={16} className="text-red-600 flex-shrink-0" />
                    <span>+977 1 5445099</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={16} className="text-blue-600 flex-shrink-0" />
                    <span>info@suyan.edu.np</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin
                      size={16}
                      className="text-green-600 flex-shrink-0"
                    />
                    <span>Kumaripati, Lalitpur, Nepal</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Sun-Fri: 7AM-3PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FIXED: Removed the global overflow-x styles that break sticky */}
      {/* No <style jsx global> section needed */}
    </header>
  );
}
