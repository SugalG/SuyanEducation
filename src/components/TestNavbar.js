"use client";

import Link from "next/link";

export default function TestNavbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b">
      <nav className="max-w-7xl mx-auto px-4 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/">LOGO</Link>
        </div>

        {/* Right action */}
        <button className="px-4 py-2 text-sm rounded bg-black text-white">
          Menu
        </button>
      </nav>
    </header>
  );
}
