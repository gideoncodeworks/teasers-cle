"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function AboutPage() {
  const { brand, story, voice, events } = data;
  const signatureEvents = events.slice(0, 3);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-hidden">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative flex flex-col items-center justify-center h-[55vh] bg-gradient-to-b from-neonBlue/20 via-dark to-black text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tracking-[0.35em] uppercase text-sm text-neonBlue"
        >
          Behind The Curtain
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-6xl font-serif neon-text mt-4"
        >
          {brand.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="italic neon-blue-text mt-4 text-lg md:text-2xl max-w-3xl"
        >
          {brand.tagline}
        </motion.p>
      </motion.section>

      {/* Story & Vision */}
      <section className="relative px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neonPink/10 via-dark to-neonBlue/10 opacity-60" />
        <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-2">
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="bg-black/75 border border-neonBlue/30 rounded-3xl p-10 shadow-neon space-y-4"
          >
            <h2 className="text-3xl font-serif text-neonPink">The Origin</h2>
            <p className="text-gray-300 leading-relaxed">{story.origin}</p>
          </motion.article>
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-black/60 border border-neonBlue/20 rounded-3xl p-10 space-y-4"
          >
            <h2 className="text-3xl font-serif text-neonPink">The Vision</h2>
            <p className="text-gray-300 leading-relaxed">{story.vision}</p>
          </motion.article>
        </div>
      </section>

      {/* Mission & Voice */}
      <section className="px-6 py-20 bg-black/85 border-y border-neonBlue/20">
        <div className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-serif text-neonPink">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">{brand.mission}</p>
            <p className="text-sm uppercase tracking-[0.35em] text-neonBlue">{brand.city}</p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="bg-dark/80 border border-neonBlue/30 rounded-3xl p-8 shadow-neon space-y-4"
          >
            <h3 className="text-2xl font-serif text-neonBlue uppercase tracking-[0.2em]">
              Voice & Tone
            </h3>
            <div className="flex flex-wrap gap-3">
              {voice.map((descriptor) => (
                <span
                  key={descriptor}
                  className="rounded-full border border-neonPink/40 px-4 py-2 text-xs uppercase tracking-[0.25em] text-gray-200"
                >
                  {descriptor}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          <motion.header
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9 }}
            className="text-center space-y-4"
          >
            <p className="tracking-[0.3em] uppercase text-sm text-neonBlue">Signature Series</p>
            <h2 className="text-4xl font-serif text-neonPink">Chapters Of The Tease</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Each experience we design is a story told in taste, sound, and movement.
              Here are a few that define our palette.
            </p>
          </motion.header>

          <div className="grid gap-10 md:grid-cols-3">
            {signatureEvents.map((event, index) => (
              <motion.article
                key={event.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-neonBlue/30 bg-black/70 p-10 shadow-neon"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-neonBlue">
                  {event.theme}
                </span>
                <h3 className="text-2xl font-serif text-neonPink mt-4">{event.name}</h3>
                <p className="italic text-sm text-gray-300 mt-2">{event.tagline}</p>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">{event.description}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-gray-500">
                  {event.location}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-black/85">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-center space-y-8 border border-neonPink/40 rounded-3xl p-12 shadow-neon"
        >
          <h2 className="text-4xl font-serif text-neonPink">Be Part Of The Story</h2>
          <p className="text-gray-300">
            We collaborate with artists, culinary innovators, and partners who obsess over the details.
            If that&apos;s you, we would love to design with you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Start The Conversation
            </Link>
            <Link href="/experiences" className="neon-btn">
              Preview Upcoming Nights
            </Link>
          </div>
        </motion.div>
      </section>

      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-neonPink/5 via-dark to-neonBlue/5"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
    </div>
  );
}
