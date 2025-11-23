"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icon library
import { Beth_Ellen } from "next/font/google";

  const bethEllen = Beth_Ellen({
  subsets: ["latin"],
  weight: "400",
  });

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto h-16 px-6">

        {/* LOGO + TITLE */}
        <div className="flex items-center">
          <img
            src="logo.png"  // 👈 your logo file
            alt="CamPung Logo"
            width={120}
            height={120}
            className="object-contain"
          />
          <span className={`${bethEllen.className} mb-[6px] ml-[-36px] text-xl font-bold`}
          style={{ color: "#30501e" }}
          >
            CamPung
          </span>
        </div>


        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">

        <Link href="/" className="relative group">
          Home
          <span className="absolute left-0 -bottom-1 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>

        <Link href="/mission" className="relative group">
          Our Mission
        <span className="absolute left-0 -bottom-1 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>

        <Link href="/features" className="relative group">
          Features
        <span className="absolute left-0 -bottom-1 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>

        <Link href="/team" className="relative group">
          Our Team
        <span className="absolute left-0 -bottom-1 h-[2px] bg-[#30501e] w-0 group-hover:w-full transition-all duration-300"></span>
        </Link>

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-2 animate-slideDown">

          <Link
            href="/"
            className="block text-gray-700 font-medium py-3 px-2 rounded-md 
                 hover:bg-[#30501e] hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
          Home
          </Link>

          <Link
            href="/mission"
            className="block text-gray-700 font-medium py-3 px-2 rounded-md 
                 hover:bg-[#30501e] hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
            Our Mission
          </Link>

          <Link
            href="/features"
            className="block text-gray-700 font-medium py-3 px-2 rounded-md 
                 hover:bg-[#30501e] hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
          Features
          </Link>

          <Link
            href="/team"
            className="block text-gray-700 font-medium py-3 px-2 rounded-md 
                 hover:bg-[#30501e] hover:text-white transition-all"
            onClick={() => setMobileOpen(false)}
          >
          Our Team
          </Link>

        </div>
      )}

    </nav>
  );
}
