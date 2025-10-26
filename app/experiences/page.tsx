"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import data from "@/context/teasersCLE.json";

export default function ExperiencesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Immersive Experiences"
        subtitle="Beyond the Ordinary"
        description="Each event is meticulously crafted to engage all senses, challenge expectations, and create memories that linger long after the final course."
        height="medium"
      />

      {/* Events Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              Curated Moments
            </p>
            <h2 className="heading-md text-white mb-6">
              All Experiences
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              From intimate gatherings to theatrical spectacles, each experience
              at Teasers CLE is designed to transport you beyond the ordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.events.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-plum-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-white mb-6">
              How to Reserve
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-12">
              Securing your spot for an unforgettable evening is simple.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Choose Your Experience",
                description:
                  "Browse our curated events and select the one that speaks to you.",
              },
              {
                step: "02",
                title: "Reserve Your Seat",
                description:
                  "Submit your reservation through our contact form or Eventbrite.",
              },
              {
                step: "03",
                title: "Anticipate the Moment",
                description:
                  "Receive confirmation and details. Then, let the anticipation build.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-6xl font-bold text-gold/20 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href="/contact" className="btn-primary">
              Reserve Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="section-padding bg-gradient-to-br from-black via-plum-dark to-plum">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-8">
              Host a Private Event
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Looking to create a bespoke experience for your group? We specialize
              in custom events tailored to your vision—from corporate gatherings to
              milestone celebrations.
            </p>
            <a href="/contact" className="btn-secondary">
              Inquire About Private Events
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
