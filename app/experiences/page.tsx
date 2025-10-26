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
        className="text-center px-4 pt-24 pb-12 sm:px-6 sm:pt-28 sm:pb-16 bg-gradient-to-b from-emerald/12 via-hunter to-graphite"
      >
        <span className="tracking-[0.35em] uppercase text-sm text-emerald">Exclusive Calendar</span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-4 mb-6">
          Experiences
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          RSVP-only nightlife drops that channel Trinidad energy through Cleveland venues. Expect roaming cocktails,
          passed bites, and DJs pushing the pace while we preview the future Teasers lounge.
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-400 leading-relaxed">
          Exact addresses stay secret until 48 hours before doors—confirmed guests receive the drop via email and SMS.
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

      <section className="relative px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-roseGold/12 via-hunter to-emerald/12 opacity-60" />
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <motion.article
              key={event.name}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative flex flex-col gap-6 rounded-3xl border border-emerald/45 bg-graphite/85 p-6 shadow-neon hover:shadow-[0_0_32px_rgba(213,155,246,0.45)] transition-all sm:p-8"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.35em] text-emerald">
                  {event.theme}
                </span>
                <h2 className="text-2xl font-serif text-roseGold mt-3">{event.name}</h2>
                <p className="italic text-sm text-gray-300 mt-2">{event.tagline}</p>
              </div>
              <p className="text-sm leading-relaxed text-gray-300 flex-1">
                {event.description}
              </p>
              <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                {event.date} • {event.location}
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                {event.passed && event.passed.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald mb-2">Passed Bites</p>
                    <ul className="space-y-1 text-gray-400">
                      {event.passed.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.roaming && event.roaming.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald mb-2">Roaming Service</p>
                    <ul className="space-y-1 text-gray-400">
                      {event.roaming.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.bar && event.bar.length > 0 && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald mb-2">Featured Cocktails</p>
                    <ul className="space-y-1 text-gray-400">
                      {event.bar.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.vibe && (
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald mb-2">Vibe</p>
                    <p className="text-gray-400 leading-relaxed">{event.vibe}</p>
                  </div>
                )}
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
        <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
          Coordinates and arrival instructions released to ticket holders 48 hours prior to each experience.
        </p>
      </section>

      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-hunter via-graphite to-hunter"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </div>
  );
}
