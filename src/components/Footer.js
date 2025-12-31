// components/Footer.jsx
import Link from "next/link";

export default function Footer({ settings }) {
  return (
    <footer
      className="relative bg-gray-900 text-gray-200 overflow-hidden"
      style={{
        backgroundImage: "url(/fuji-cutout.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "100% auto",
      }}
    >
      {/* Dark overlay to control contrast */}
      <div className="absolute inset-0 bg-gray-900/1" />

      {/* Footer content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-10 text-c">
          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt={settings.siteName}
              className="h-14 w-auto mb-4"
            />
            <p className="text-sm text-blue-400">
              {settings.tagline ||
                "Trusted education consultancy focused on study opportunities in Japan."}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm text-black">
              <li><Link href="/about" className="hover:text-gray-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gray-400 transition-colors">Services</Link></li>
              <li><Link href="/universities" className="hover:text-gray-400 transition-colors">Universities</Link></li>
              <li><Link href="/blog" className="hover:text-gray-400 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-black">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-blue-400">
              <li className="hover:text-gray-400 transition-colors">
                Student Visa Counseling
              </li>
              <li className="hover:text-gray-400 transition-colors">
                Japanese Language Classes
              </li>
              <li className="hover:text-gray-400 transition-colors">
                University Placement
              </li>
              <li className="hover:text-gray-400 transition-colors">
                Documentation Support
              </li>
              <li className="hover:text-gray-400 transition-colors">
                Interview Preparation
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-blue-500">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-blue-400">
              {settings.address && (
                <li className="hover:text-gray-400 transition-colors">
                  {settings.address}
                </li>
              )}
              {settings.primaryPhone && (
                <li className="hover:text-gray-400 transition-colors">
                  {settings.primaryPhone}
                </li>
              )}
              {settings.primaryEmail && (
                <li className="hover:text-gray-400 transition-colors">
                  {settings.primaryEmail}
                </li>
              )}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-700 text-center text-sm text-blue-400 py-6">
          © {new Date().getFullYear()} {settings.siteName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
