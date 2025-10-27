"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function TakeoverPage() {
  const { takeover, socials, contact } = data;

  return (
    <div className="bg-hunter text-white">
      <section className="relative overflow-hidden px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald/12 via-hunter to-graphite" />
        <motion.div
          className="absolute inset-0 -z-20 blur-[140px] opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0,255,157,0.2) 0%, transparent 55%)",
              "radial-gradient(circle at 80% 40%, rgba(213,155,246,0.2) 0%, transparent 55%)",
              "radial-gradient(circle at 50% 80%, rgba(0,255,157,0.2) 0%, transparent 55%)",
              "radial-gradient(circle at 20% 50%, rgba(0,255,157,0.2) 0%, transparent 55%)"
            ]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <span className="tracking-[0.35em] text-xs uppercase text-emerald">
            {takeover.name}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif neon-text">
            {takeover.tagline}
          </h1>
          <p className="text-gray-300 leading-relaxed">
            {takeover.summary}
          </p>
          <p className="text-sm text-gray-400">
            Locations remain secret until 48 hours before doors. We hype the drop, pack the room, and leave your guests asking when the next one is.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/contact" className="neon-btn">
              Book A Walkthrough
            </Link>
            <a href={`mailto:${contact.email}`} className="neon-btn">
              Request Takeover Deck
            </a>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-roseGold">How A Takeover Works</h2>
            <p className="text-gray-300 leading-relaxed">
              We treat your venue like a canvas. Our team handles theme, programming, run-of-show, and crowd curation so you can focus on hospitality.
            </p>
            <div className="space-y-6">
              {takeover.process.map((step) => (
                <div key={step.title} className="rounded-3xl border border-emerald/35 bg-graphite/80 p-6 shadow-neon">
                  <p className="text-xs uppercase tracking-[0.3em] text-emerald">{step.timing}</p>
                  <h3 className="mt-2 text-xl font-serif text-roseGold">{step.title}</h3>
                  <p className="mt-3 text-sm text-gray-300 leading-relaxed">{step.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-roseGold/35 bg-graphite/90 p-6 shadow-neon space-y-4">
              <h3 className="text-xl font-serif text-roseGold uppercase tracking-[0.3em]">
                Why Venues Love It
              </h3>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                {takeover.whyBarsLoveIt.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-emerald/35 bg-graphite/80 p-6 shadow-neon space-y-4">
              <h3 className="text-xl font-serif text-emerald uppercase tracking-[0.3em]">
                Packages
              </h3>
              <div className="space-y-5 text-sm text-gray-300 leading-relaxed">
                {takeover.packages.map((pkg) => (
                  <div key={pkg.title} className="space-y-2">
                    <p className="text-sm uppercase tracking-[0.3em] text-roseGold">
                      {pkg.title}
                    </p>
                    <p>{pkg.description}</p>
                    <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                      Ideal for: {pkg.idealFor}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 bg-graphite/60 border-y border-emerald/20">
        <div className="mx-auto max-w-6xl space-y-12">
          <motion.header
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">
              Drop Concepts
            </p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              Themes you can plug into your bar or lounge
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose from our signature nightlife series or collaborate on a custom takeover built around your brand.
            </p>
          </motion.header>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {data.events.slice(0, 6).map((event) => (
              <div key={event.name} className="rounded-3xl border border-emerald/35 bg-graphite/85 p-6 shadow-neon space-y-3">
                <span className="text-xs uppercase tracking-[0.3em] text-emerald">{event.theme}</span>
                <h3 className="text-xl font-serif text-roseGold">{event.name}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{event.description}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">{event.tagline}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-roseGold/40 bg-graphite/80 p-10 text-center shadow-neon sm:p-12">
          <p className="tracking-[0.3em] uppercase text-sm text-emerald">
            Ready To Transform Your Night?
          </p>
          <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
            Let&apos;s plan a Teasers Takeover
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Tell us about your space and ideal date. We&apos;ll send the deck, concept ideas, and book a walkthrough to script the night together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Lock A Date
            </Link>
            <a href={`mailto:${contact.email}`} className="neon-btn">
              Request Deck
            </a>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="neon-btn">
              See Past Takeovers
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
