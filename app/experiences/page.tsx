"use client";

import { motion } from "framer-motion";
import data from "@/context/teasersCLE.json";

export default function ExperiencesPage() {
  const { events } = data;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen bg-dark text-white p-8 relative">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-serif neon-text mb-12 text-center"
      >
        Experiences
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event, index) => (
          <motion.div
            key={event.name}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative bg-dark/90 rounded-2xl border border-neonBlue/40 shadow-neon hover:shadow-[0_0_30px_rgba(255,46,190,0.5)] hover:scale-[1.02] transition-all p-6 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-serif text-neonPink mb-2">
                {event.name}
              </h2>
              <p className="italic text-neonBlue mb-4">{event.tagline}</p>
              <p className="text-sm mb-4 leading-relaxed text-gray-300">{event.description}</p>
            </div>

            <div className="mt-auto">
              <p className="text-xs text-gray-500 mb-2">
                {event.date} • {event.location}
              </p>
              <button className="w-full neon-btn">
                Reserve
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-neonPink/10 via-dark to-neonBlue/10 opacity-40" />
    </section>
  );
}
