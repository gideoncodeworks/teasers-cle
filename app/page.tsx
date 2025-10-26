"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function HomePage() {
  const { brand } = data;

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex flex-col justify-center items-center">
      {/* Background hero video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="/brand/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/90" />

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
          className="text-5xl md:text-7xl font-serif text-[#d4af37] mb-4"
        >
          {brand.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="italic text-[#e8b6a9] text-lg md:text-2xl mb-10"
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
          <Link
            href="/experiences"
            className="border border-[#d4af37] text-[#d4af37] px-8 py-3 rounded-full hover:bg-[#d4af37] hover:text-black transition text-sm uppercase tracking-wider"
          >
            Upcoming Experiences
          </Link>

          <Link
            href="/menu"
            className="border border-[#e8b6a9] text-[#e8b6a9] px-8 py-3 rounded-full hover:bg-[#e8b6a9] hover:text-black transition text-sm uppercase tracking-wider"
          >
            View Menu
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating "scroll" indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 z-10 text-[#d4af37] text-sm tracking-wider"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}
