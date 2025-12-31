"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/destinations");
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">

      {/* Dark overlay ONLY for admin */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Login card */}
      <form
        onSubmit={submit}
        className="relative z-10 bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-900">
          Admin Login
        </h1>

        {error && (
          <p className="mb-4 text-red-600 text-sm text-center">
            {error}
          </p>
        )}

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Admin email"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-red-600"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="mt-6 bg-red-700 hover:bg-red-800 text-white w-full py-3 rounded font-semibold transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
