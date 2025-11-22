"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beth_Ellen } from "next/font/google";

  const bethEllen = Beth_Ellen({
  subsets: ["latin"],
  weight: "400",
  });

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
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

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-emerald-600">About</a>
          <a href="#features" className="hover:text-emerald-600">Problems</a>
          <a href="#discover" className="hover:text-emerald-600">Discover</a>
          <a href="#how" className="hover:text-emerald-600">How It Works</a>
        </div>

        {/* Desktop Button */}
        <div className="flex items-center gap-3">
          <a
          href="#cta"
          className="hidden md:block bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition"
          >
        Join Beta
        </a>
      </div>


        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4"
          >
            <a href="#about" onClick={() => setOpen(false)} className="block text-lg">About</a>
            <a href="#features" onClick={() => setOpen(false)} className="block text-lg">Features</a>
            <a href="#discover" onClick={() => setOpen(false)} className="block text-lg">Discover</a>
            <a href="#how" onClick={() => setOpen(false)} className="block text-lg">How It Works</a>

            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block bg-emerald-600 text-white px-4 py-2 rounded-lg text-center"
            >
              Join Beta
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
