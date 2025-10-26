"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function HomePage() {
  const { brand, events, menu, press, voice } = data;
  const upcomingEvents = events.slice(0, 3);
  const menuHighlights = menu.slice(0, 3);
  const pressPulls = press.slice(0, 2);

  return (
    <div className="bg-dark text-white">
      <section className="relative overflow-hidden px-6 pt-28 pb-20 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#140019] to-black" />
        <div className="absolute inset-0 -z-20 blur-[120px] opacity-40" style={{ background: "radial-gradient(circle at center, rgba(0,184,255,0.35) 0%, transparent 60%)" }} />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-25"
        >
          <source src="/brand/hero.mp4" type="video/mp4" />
        </video>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <span className="tracking-[0.4em] text-xs uppercase text-neonBlue">
            Immersive Dining &amp; Nightlife
          </span>
          <h1 className="text-5xl md:text-6xl font-serif neon-text">
            {brand.name}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
            {brand.tagline}
          </p>
          <p className="text-sm text-gray-400 uppercase tracking-[0.35em]">
            {brand.city}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href="/experiences" className="neon-btn">
              Upcoming Experiences
            </Link>
            <Link href="/contact" className="neon-btn">
              Request Private Table
            </Link>
          </div>
        </motion.div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {voice.map((descriptor) => (
            <span
              key={descriptor}
              className="rounded-full border border-neonBlue/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-300"
            >
              {descriptor}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-serif text-neonPink md:text-4xl">
              Nights curated to tease every sense
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {brand.positioning}
            </p>
            <div className="rounded-3xl border border-neonBlue/30 bg-black/70 p-8 shadow-neon space-y-4">
              <h3 className="text-xl font-serif text-neonBlue uppercase tracking-[0.3em]">
                Mission
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {brand.mission}
              </p>
              <div className="flex gap-4">
                {Object.entries(brand.palette).map(([key, value]) => (
                  <div key={key} className="flex flex-col items-center gap-2">
                    <span
                      className="h-10 w-10 rounded-full border border-white/10"
                      style={{ backgroundColor: value }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
                      {key}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="text-sm uppercase tracking-[0.3em] text-neonBlue">
              The Upcoming Series
            </div>
            <div className="space-y-6">
              {upcomingEvents.map((event) => (
                <article
                  key={event.name}
                  className="rounded-3xl border border-neonBlue/30 bg-black/80 p-8 shadow-neon"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-neonBlue">
                    {event.theme}
                  </p>
                  <h3 className="mt-3 text-2xl font-serif text-neonPink">
                    {event.name}
                  </h3>
                  <p className="mt-2 italic text-sm text-gray-300">
                    {event.tagline}
                  </p>
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                    {event.description}
                  </p>
                  <p className="mt-4 text-xs uppercase tracking-[0.3em] text-gray-500">
                    {event.date} • {event.location}
                  </p>
                </article>
              ))}
            </div>
            <Link href="/experiences" className="neon-btn inline-block">
              Explore Full Calendar
            </Link>
          </div>
        </div>
      </section>

      <section className="relative px-6 py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neonBlue/10 via-dark to-neonPink/10 opacity-50" />
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-neonBlue">Signature Menu</p>
            <h2 className="text-3xl font-serif text-neonPink md:text-4xl">Highlights from the tasting room</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The menu shifts with each performance. These are the moments guests ask for again.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {menuHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-neonBlue/30 bg-black/75 p-8 shadow-neon"
              >
                <h3 className="text-xl font-serif text-neonBlue">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="text-center">
            <Link href="/menu" className="neon-btn inline-block">
              View Full Menu Journey
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-black/85 border-y border-neonBlue/20">
        <div className="mx-auto max-w-5xl space-y-10 text-center">
          <div className="space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-neonBlue">
              In The Spotlight
            </p>
            <h2 className="text-3xl font-serif text-neonPink md:text-4xl">
              What tastemakers are saying
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {pressPulls.map((item) => (
              <blockquote
                key={item.source}
                className="rounded-3xl border border-neonBlue/30 bg-black/75 p-8 text-left shadow-neon"
              >
                <span className="text-5xl text-neonBlue/30 leading-none">“</span>
                <p className="mt-4 text-lg font-light text-gray-200 leading-relaxed">
                  {item.quote}
                </p>
                <footer className="mt-6 text-xs uppercase tracking-[0.3em] text-neonBlue">
                  {item.source}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-neonPink/30 bg-black/80 p-12 text-center shadow-neon space-y-6">
          <p className="tracking-[0.3em] uppercase text-sm text-neonBlue">
            Reserve Your Night
          </p>
          <h2 className="text-3xl font-serif text-neonPink md:text-4xl">
            Join the Teasers CLE guestlist
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Private invitations, launch announcements, and secret supper clubs go out to our inner circle first.
            Step inside and we&apos;ll make sure you never miss the next reveal.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Join The Guestlist
            </Link>
            <Link href="/about" className="neon-btn">
              Learn Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
