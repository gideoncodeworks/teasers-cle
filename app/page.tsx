"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import EventCard from "@/components/EventCard";
import data from "@/context/teasersCLE.json";

export default function Home() {
  // Get first 3 featured events
  const featuredEvents = data.events.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Video Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder - Replace with actual video */}
        <div className="absolute inset-0 bg-gradient-to-b from-plum-dark via-black to-black">
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-blush/10"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.p
              className="text-gold uppercase tracking-[0.4em] text-sm md:text-base mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Cleveland's Premier Experiential Destination
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {data.brand.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-blush/90 font-serif italic mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              {data.brand.tagline}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <Link href="/experiences" className="btn-primary">
                Explore Experiences
              </Link>
              <Link href="/contact" className="btn-secondary">
                Join the List
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-gold rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-lg text-gradient mb-8">
              Beyond Dining. Beyond Nightlife.
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-6">
              {data.brand.mission}
            </p>
            <p className="text-lg text-white/60 leading-relaxed italic">
              {data.story.philosophy}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="section-padding bg-plum-dark">
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
              Featured Experiences
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Each event is meticulously crafted to engage all senses and create
              memories that transcend the ordinary.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/experiences" className="btn-primary">
              View All Experiences
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-plum via-plum-dark to-black relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4af37 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="heading-lg text-white mb-8">
              Join the Experience
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Be the first to know about upcoming events, exclusive offers, and
              behind-the-scenes moments. Anticipation begins here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get on the List
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
