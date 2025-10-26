"use client";

import { motion } from "framer-motion";
import data from "@/context/teasersCLE.json";

export default function AboutPage() {
  const { brand, story } = data;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Cinematic header section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative flex flex-col items-center justify-center h-[60vh] bg-gradient-to-b from-[#2b0f18] to-black"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif text-[#d4af37] text-center"
        >
          {brand.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="italic text-[#e8b6a9] mt-4 text-lg text-center"
        >
          {brand.tagline}
        </motion.p>
      </motion.div>

      {/* Brand story section */}
      <div className="max-w-5xl mx-auto py-16 px-6 space-y-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-serif text-[#d4af37] mb-6">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-300">{story.origin}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-3xl font-serif text-[#d4af37] mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed text-gray-300">{story.vision}</p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <h2 className="text-3xl font-serif text-[#d4af37] mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed text-gray-300">{brand.mission}</p>
        </motion.div>
      </div>

      {/* Ambient visual element */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2b0f18]/30 via-black to-[#2b0f18]/10"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />

      {/* Subtle scrolling background accent */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#d4af37]/5 to-transparent"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
    </section>
  );
}
