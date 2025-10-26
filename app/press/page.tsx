"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import data from "@/context/teasersCLE.json";

export default function PressPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Press & Media"
        subtitle="What They're Saying"
        description="Discover how critics, journalists, and influencers are experiencing Teasers CLE."
        height="medium"
      />

      {/* Press Quotes */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="space-y-12">
            {data.press.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-plum border-l-4 border-gold p-8 md:p-12"
              >
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 text-gold/20 text-6xl font-serif">
                  "
                </div>

                {/* Quote Text */}
                <blockquote className="relative z-10 mb-6">
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-serif italic">
                    {item.quote}
                  </p>
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center gap-4 border-t border-gold/20 pt-6">
                  <div>
                    <p className="text-gold font-semibold">{item.author}</p>
                    <p className="text-white/60 text-sm">{item.source}</p>
                  </div>
                  <span className="ml-auto text-white/40 text-sm">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="section-padding bg-plum-dark">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-md text-white mb-8">Media Inquiries</h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              For press kits, high-resolution images, interview requests, or media
              partnerships, please reach out to our communications team.
            </p>
            <a href={`mailto:${data.contact.email}`} className="btn-primary">
              Contact Press Team
            </a>
          </motion.div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-md text-white mb-6">
              Awards & Recognition
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              While awards are not our destination, they mark milestones on our
              journey to redefine Cleveland's culinary landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Best New Concept",
                organization: "Cleveland Dining Awards",
                year: "2024",
              },
              {
                title: "Experiential Excellence",
                organization: "Ohio Hospitality",
                year: "2024",
              },
              {
                title: "Rising Star",
                organization: "Midwest Food & Wine",
                year: "2024",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 border border-gold/20 hover:border-gold transition-colors duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2">
                  {award.title}
                </h3>
                <p className="text-white/70 text-sm mb-1">
                  {award.organization}
                </p>
                <p className="text-white/50 text-xs">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-gradient-to-br from-plum via-plum-dark to-black">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-md text-white mb-8">
              Follow the Conversation
            </h2>
            <p className="text-lg text-white/80 mb-12">
              Join thousands who are experiencing, sharing, and celebrating Teasers
              CLE across social media.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={data.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </a>
              <a
                href={data.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
                TikTok
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
