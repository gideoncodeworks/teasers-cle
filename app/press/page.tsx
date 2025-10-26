"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function PressPage() {
  const { press, brand } = data;

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 pt-24 pb-16 bg-gradient-to-b from-neonBlue/15 via-dark to-black"
      >
        <span className="tracking-[0.35em] uppercase text-sm text-neonBlue">Press &amp; Buzz</span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-4">
          Teasers CLE In The Spotlight
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
          A dining theatre born in {brand.city}, capturing imaginations across the region.
          Here&apos;s what tastemakers and editors are saying about our immersive world.
        </p>
      </motion.section>

      <section className="relative px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neonPink/10 via-dark to-neonBlue/10 opacity-50" />
        <div className="max-w-4xl mx-auto space-y-8">
          {press.map((item) => (
            <motion.blockquote
              key={item.source}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative border border-neonBlue/30 bg-black/75 rounded-3xl p-10 shadow-neon"
            >
              <span className="absolute -top-6 left-8 text-6xl text-neonBlue/30">“</span>
              <p className="text-lg font-light italic text-gray-200 leading-relaxed">
                {item.quote}
              </p>
              <footer className="mt-6 text-sm uppercase tracking-[0.3em] text-neonBlue">
                {item.source}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-black/80 border border-neonPink/40 rounded-3xl p-12 shadow-neon">
          <h2 className="text-3xl font-serif text-neonPink">Request Our Press Kit</h2>
          <p className="text-gray-300 leading-relaxed">
            Looking for assets, interview access, or behind-the-scenes content?
            We collaborate with editors, podcasters, and creators who want to share the Teasers CLE story.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Connect With Us
            </Link>
            <Link href="/gallery" className="neon-btn">
              View Visuals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
