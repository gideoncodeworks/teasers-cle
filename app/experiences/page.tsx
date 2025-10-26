"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function ExperiencesPage() {
  const { events, socials, brand } = data;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative min-h-screen bg-hunter text-white overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 pt-24 pb-16 bg-gradient-to-b from-emerald/10 via-hunter to-graphite"
      >
        <span className="tracking-[0.35em] uppercase text-sm text-emerald">Exclusive Calendar</span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-4 mb-6">
          Experiences
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          RSVP-only performances that pair culinary theater with the sensual energy of {brand.city}.
          Each evening is handcrafted by Teasers CLE to heighten the anticipation before the first course arrives.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="neon-btn">
            Request Private Invite
          </Link>
          <a
            href={socials.eventbrite}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn"
          >
            View On Eventbrite
          </a>
        </div>
      </motion.section>

      <section className="relative px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-roseGold/10 via-hunter to-emerald/10 opacity-50" />
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.article
              key={event.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative flex flex-col gap-6 rounded-3xl border border-emerald/40 bg-graphite/80 p-8 shadow-neon hover:shadow-[0_0_32px_rgba(213,155,246,0.45)] transition-all"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-emerald">
                  {event.theme}
                </span>
                <h2 className="text-2xl font-serif text-roseGold mt-3">{event.name}</h2>
                <p className="italic text-sm text-gray-300 mt-2">{event.tagline}</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-400 flex-1">
                {event.description}
              </p>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                {event.date} • {event.location}
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="neon-btn text-center">
                  Join Guestlist
                </Link>
                <a
                  href={socials.eventbrite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn text-center"
                >
                  Public Tickets
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-hunter via-graphite to-hunter"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </div>
  );
}
