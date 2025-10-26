"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function HomePage() {
  const { brand } = data;

  return (
    <section className="relative min-h-screen overflow-hidden bg-dark text-white flex flex-col justify-center items-center">
      {/* Background hero video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/brand/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/70 to-dark/90" />

      {/* Cinematic intro text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-5xl md:text-7xl font-serif neon-text mb-4"
        >
          {brand.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="italic neon-blue-text text-lg md:text-2xl mb-10"
        >
          {brand.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Link href="/experiences" className="neon-btn">
            Upcoming Experiences
          </Link>

          <Link href="/menu" className="neon-btn">
            View Menu
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating "scroll" indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 z-10 text-neonBlue text-sm tracking-wider"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
