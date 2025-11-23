"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) controls.start("visible");
      });
    });

    if (ref.current) observer.observe(ref.current);
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
