"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  GraduationCap,
  Languages,
  University,
  FileText,
  Mic,
  PlaneTakeoff,
} from "lucide-react";

/* ✅ MOVED OUTSIDE RENDER */
const TikTokIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

export default function Footer({ settings }) {
  const currentYear = new Date().getFullYear();

  // ✅ UPDATED: services + icons duplicated ONLY for footer
  const footerServices = [
    {
      title: "Student Visa Counseling",
      slug: "student-visa-counseling",
      icon: GraduationCap,
    },
    {
      title: "Japanese Language Preparation",
      slug: "japanese-language-preparation",
      icon: Languages,
    },
    {
      title: "University Placement",
      slug: "university-placement",
      icon: University,
    },
    {
      title: "Documentation Support",
      slug: "documentation-support",
      icon: FileText,
    },
    {
      title: "Interview Preparation",
      slug: "interview-preparation",
      icon: Mic,
    },
    {
      title: "Pre-Departure Guidance",
      slug: "pre-departure-guidance",
      icon: PlaneTakeoff,
    },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Destinations", href: "/destinations" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-blue-950 to-blue-950 text-white overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="space-y-6">
              <div className="items-center justify-items-center gap-4">
                <div className="relative h-40 w-40">
                  <Image
                    src="/logo.png"
                    alt={settings?.siteName || "Suyan Education"}
                    fill
                    className="object-contain"
                  />
                </div>
                <h2 className="text-center text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-400 bg-clip-text text-transparent">
                  {settings?.siteName || "Suyan Education Pvt. Ltd."}
                </h2>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs text-gray-400">Success Rate</div>
                </div>
                <div className="h-8 w-px bg-gray-700" />
                <div className="text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-xs text-gray-400">Students</div>
                </div>
                <div className="h-8 w-px bg-gray-700" />
                <div className="text-center">
                  <div className="text-2xl font-bold">11+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-red-400 text-sm transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-3">
                {footerServices.map((service) => {
                  const Icon = service.icon;
                  return (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex items-center gap-2 text-gray-300 text-sm hover:text-red-400 transition"
                      >
                        <Icon className="w-4 h-4 text-gray-500" />
                        {service.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

              <div className="space-y-5 text-sm text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-1">Head Office</p>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-red-500 mt-1" />
                    <span>
                      Lalitpur Metropolitan City Ward No. 20, Kumaripati
                      (Purnachandi Road), Lalitpur, Nepal – 44700
                    </span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>+977-1-5445099 / 9864-261-506</span>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-white mb-1">
                    Branch Office – Chabahil
                  </p>
                  <div className="flex gap-2">
                    <MapPin className="w-4 h-4 text-red-500 mt-1" />
                    <span>
                      Kathmandu Metropolitan City Ward No. 7, Chabahil,
                      Kathmandu, Nepal – 44600
                    </span>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <Phone className="w-4 h-4 text-red-500" />
                    <span>+977-1-5911820 / 9864-261-505</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://www.facebook.com/suyancons07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/suyancons07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-pink-600 transition"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.tiktok.com/@suyaneducation1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-black transition"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {settings?.siteName || "Suyan Education Pvt. Ltd."}. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">FAQ</Link>
            </div>
          </div> */}
          <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left Side */}
            <div className="text-center md:text-left space-y-2">
              <p className="text-gray-400 text-sm">
                © {currentYear}{" "}
                {settings?.siteName || "Suyan Education Pvt. Ltd."}. All rights
                reserved.
              </p>

              {/* Developer Credit */}
              <p className="text-xs text-gray-500">
                Developed by{" "}
                <a
                  href="https://niceitsolution.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  Nice IT Solution Pvt. Ltd.
                </a>{" "}
                • Powered by Stack Hook
              </p>
            </div>

            {/* Right Side */}
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
