"use client";

export default function ApplyNowModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            WI Education Consultancy Lalitpur
          </h2>
          <p className="text-lg font-semibold mt-2">
            Apply Now
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            type="tel"
            placeholder="Contact Number"
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <select className="w-full border rounded-lg px-4 py-3">
            <option value="">Select Service</option>
            <option>IELTS Preparation</option>
            <option>PTE Preparation</option>
            <option>Study in Japan</option>
            <option>Study in Australia</option>
            <option>Study in Europe</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-full font-semibold transition"
          >
            Submit
          </button>
        </form>

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="w-full mt-4 border py-2 rounded-lg text-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
