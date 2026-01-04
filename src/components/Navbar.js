"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar({ settings }) {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 🔥 Load destinations from DB
  useEffect(() => {
    async function loadDestinations() {
      try {
        const res = await fetch("/api/destinations");
        if (res.ok) {
          setDestinations(await res.json());
        }
      } catch (err) {
        console.error("Failed to load destinations", err);
      }
    }

    loadDestinations();
  }, []);

  const textColor = "text-gray-800";

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-700 ease-in-out
        ${scrolled ? "bg-white/5 backdrop-blur-md shadow-md" : "bg-transparent"}
      `}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt={settings.siteName}
            className={`
              transition-all duration-700 ease-in-out
              ${scrolled ? "h-10" : "h-14"} w-auto
            `}
          />
        </Link>

        {/* Menu */}
        <div
          className={`hidden md:flex items-center gap-8 font-medium transition-colors duration-300 ${textColor}`}
        >
          <Link href="/" className="hover:text-red-500">Home</Link>
          <Link href="/about" className="hover:text-red-500">About</Link>

          {/* Test Prep */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("test")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-red-500">Test Preparation</button>

            <div
              className={`absolute left-0 top-full mt-3 w-56 bg-white text-gray-800 shadow-xl rounded-md transition-all duration-200
                ${openMenu === "test" ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              <Link href="/services/jlpt" className="block px-4 py-3 hover:bg-gray-100">JLPT</Link>
              <Link href="/services/ielts" className="block px-4 py-3 hover:bg-gray-100">IELTS</Link>
              <Link href="/services/toefl" className="block px-4 py-3 hover:bg-gray-100">TOEFL</Link>
            </div>
          </div>

          {/* 🔥 Destinations (Dynamic) */}
          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("dest")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="hover:text-red-500">Destinations</button>

            <div
              className={`absolute left-0 top-full mt-3 w-64 bg-white text-gray-800 shadow-xl rounded-md transition-all duration-200
                ${openMenu === "dest" ? "opacity-100 visible" : "opacity-0 invisible"}`}
            >
              {destinations.length === 0 ? (
                <span className="block px-4 py-3 text-sm text-gray-400">
                  No destinations yet
                </span>
              ) : (
                destinations.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/destinations/${d.slug}`}
                    className="block px-4 py-3 hover:bg-gray-100"
                  >
                    {d.country}
                  </Link>
                ))
              )}
            </div>
          </div>

          <Link href="/gallery" className="hover:text-red-500">Gallery</Link>
          <Link href="/blog" className="hover:text-red-500">Blog</Link>
          <Link href="/contact" className="hover:text-red-500">Contact</Link>
        </div>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${settings.whatsappNumber?.replace(/\D/g, "")}`}
          className="hidden md:inline-block px-5 py-2 rounded-md font-semibold bg-red-500 text-white hover:bg-red-800 transition"
        >
          WhatsApp
        </a>
      </nav>
    </header>
  );
}
