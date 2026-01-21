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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <ReactFocusLock>
        <div className="bg-white w-full max-w-md rounded-3xl p-6 relative shadow-2xl transform transition-all duration-300 scale-100 max-h-[90vh] overflow-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Suyon Education Consultancy
            </h2>
            <p className="text-lg font-medium mt-2 text-gray-700">Apply Now</p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              required
            />
            <select className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition">
              <option value="">Select Service</option>
              <option>IELTS Preparation</option>
              <option>PTE Preparation</option>
              <option>Study in Japan</option>
              <option>Study in Australia</option>
              <option>Study in Europe</option>
            </select>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition-transform duration-200 hover:scale-105"
            >
              Submit
            </button>
          </form>

          <button
            onClick={onClose}
            className="w-full mt-4 border border-gray-300 py-2 rounded-xl text-gray-600 hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>
      </ReactFocusLock>
    </div>,
    document.body
  );
}
