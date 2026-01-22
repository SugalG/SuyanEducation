"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";
import ReactFocusLock from "react-focus-lock";

export default function ApplyNowModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return;

    const scrollY = window.scrollY; // remember scroll position
    const html = document.documentElement;

    // Freeze background scroll
    html.style.position = "fixed";
    html.style.top = `-${scrollY}px`;
    html.style.left = "0";
    html.style.right = "0";
    html.style.overflow = "hidden";
    html.style.width = "100%";

    return () => {
      // Restore scroll when modal closes
      html.style.position = "";
      html.style.top = "";
      html.style.left = "";
      html.style.right = "";
      html.style.overflow = "";
      html.style.width = "";
      window.scrollTo(0, scrollY); // go back to original scroll position
    };
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <ReactFocusLock>
        <div className="bg-gradient-to-br from-white via-gray-50 to-white w-full max-w-xl rounded-2xl p-8 relative shadow-2xl border border-gray-200 max-h-[90vh] overflow-auto">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-sm opacity-60"></div>
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full blur-sm opacity-60"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10"
            aria-label="Close"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-4 shadow-md ring-4 ring-blue-50">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 016.16 1.399"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Suyon Education
            </h2>
            <p className="text-gray-600 mt-1 text-sm font-medium">
              Your Gateway to Global Education
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-10 h-0.5 bg-gradient-to-r from-transparent to-blue-300 rounded-full"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="w-10 h-0.5 bg-gradient-to-l from-transparent to-blue-300 rounded-full"></div>
            </div>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full border border-gray-300 rounded-xl px-4 pl-12 py-3.5 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white shadow-sm hover:border-blue-300"
                  required
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 pl-12 py-3.5 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white shadow-sm hover:border-blue-300"
                  required
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-xl px-4 pl-12 py-3.5 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white shadow-sm hover:border-blue-300"
                  required
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Interested Service <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full border border-gray-300 rounded-xl px-4 pl-12 py-3.5 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 focus:outline-none transition-all duration-200 bg-white shadow-sm hover:border-blue-300 appearance-none">
                  <option value="">Select a service</option>
                  <option className="py-2">🎓 IELTS Preparation</option>
                  <option className="py-2">📝 PTE Preparation</option>
                  <option className="py-2">🇯🇵 Study in Japan</option>
                  <option className="py-2">🇦🇺 Study in Australia</option>
                  <option className="py-2">🇪🇺 Study in Europe</option>
                  <option className="py-2">✈️ Visa Assistance</option>
                </select>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 text-white py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.99] group mt-2"
            >
              <span className="flex items-center justify-center gap-2">
                Submit Application
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
            </button>

            <div className="flex items-center justify-center gap-3 my-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
              <span className="text-xs text-gray-500 font-medium">OR</span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/80 transition-all duration-200 border-2 border-gray-300/50 hover:border-gray-400"
            >
              Close Application
            </button>

            <div className="pt-4 mt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Your information is secure & confidential
              </div>
            </div>
          </form>
        </div>
      </ReactFocusLock>
    </div>,
    document.body
  );
}
