"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function PressPage() {
  const { brand, contact, socials } = data;

  return (
    <div className="min-h-screen bg-dark text-white overflow-hidden">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 pt-24 pb-16 bg-gradient-to-b from-neonBlue/15 via-dark to-black"
      >
        <span className="tracking-[0.35em] uppercase text-sm text-neonBlue">Press &amp; Media</span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-4">
          Teasers CLE Media Center
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
          Teasers CLE is a Cleveland-based nightlife promotions company launching a series of immersive pop-up events.
          We&apos;re building momentum toward a full-scale lounge and restaurant — and we&apos;re just getting started.
        </p>
        <p className="max-w-3xl mx-auto text-sm text-gray-400 mt-4 leading-relaxed">
          We don&apos;t have press quotes yet. Until the coverage rolls in, here&apos;s everything you need to know about the brand and how to stay in touch.
        </p>
      </motion.section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 bg-black/75 border border-neonBlue/30 rounded-3xl p-8 shadow-neon">
            <h2 className="text-3xl font-serif text-neonPink">
              Phase One: Pop-Up Nightlife
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-neonBlue">
              Cleveland · {brand.city}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {brand.mission}
            </p>
            <p className="text-gray-400 leading-relaxed">
              Each pop-up is a teaser for the permanent Teasers lounge — cinematic lighting, curated music, and culinary details that hint at what&apos;s coming.
            </p>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>• Hosting one to two events every month</li>
              <li>• Partnering with spirits and lifestyle brands for sponsorship</li>
              <li>• Building a community through social, SMS, and email</li>
              <li>• Saving capital to launch the brick-and-mortar lounge</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-neonBlue/30 bg-black/70 p-8 shadow-neon space-y-4">
              <h3 className="text-xl font-serif text-neonBlue uppercase tracking-[0.3em]">
                Assets Available Now
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Until we release our full press kit, here&apos;s the information we can provide on request:
              </p>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <li>• Founders&apos; story and vision deck</li>
                <li>• Renderings and mood boards for the lounge concept</li>
                <li>• Event photography and b-roll as the pop-ups launch</li>
                <li>• Interviews about Cleveland&apos;s evolving nightlife scene</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-neonPink/30 bg-black/70 p-8 shadow-neon space-y-4">
              <h3 className="text-xl font-serif text-neonPink uppercase tracking-[0.3em]">
                Timeline &amp; Coverage Opportunities
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Teasers CLE is scheduling its first immersive pop-up events now. We welcome media to attend, document, and follow the build-up to the lounge announcement.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                To secure access, please reach out to coordinate event credentials, interviews, or behind-the-scenes visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-8 bg-black/80 border border-neonPink/40 rounded-3xl p-12 shadow-neon">
          <h2 className="text-3xl font-serif text-neonPink">Connect With The Team</h2>
          <p className="text-gray-300 leading-relaxed">
            Email <a href={`mailto:${contact.email}`} className="text-neonBlue hover:text-neonPink transition-colors">{contact.email}</a> for press inquiries, media access, or collaboration ideas.
            We respond within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Request Interview
            </Link>
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="neon-btn">
              Follow The Journey
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Press kit and coverage updates will be posted here as they go live.
          </p>
        </div>
      </section>
    </div>
  );
}
