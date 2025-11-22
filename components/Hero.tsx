"use client";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center justify-center text-center bg-cover bg-center px-6"
      style={{
        backgroundImage: "url('/natural1.png')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-white drop-shadow-lg max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white text-outline">
          Explore Hidden Gems, Enrich Your Mind
        </h1>
        <p className="text-xl mt-4 text-white text-outline">
          Your camera, your guide — uncover the stories behind Malaysia’s villages.
        </p>

        <a
          href="#about"
          className="inline-block mt-8 bg-emerald-600 hover:bg-emerald-700 px-8 py-3 rounded-full text-lg transition"
        >
          Start Exploring
        </a>
      </motion.div>
    </section>
  );
}
