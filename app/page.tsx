"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function HomePage() {
  const { brand, events, voice, takeover } = data;

  const upcomingEvents = events.slice(0, 3);

  const differentiators = [
    "Premium but accessible — elevated nights without bottle-service pricing.",
    "Mystery & anticipation — limited drops with surprise locations revealed late.",
    "Immersive design — cinematic lighting, curated music, and sensory staging.",
    "Insider community — every guest feels like part of the Teasers inner circle."
  ];

  const revenueStreams = [
    {
      title: "Ticketed Pop-Ups",
      description: "Limited-capacity nightlife experiences that preview the future Teasers lounge."
    },
    {
      title: "Brand Sponsorships",
      description: "Strategic partnerships with spirits, lifestyle, and culture brands featured at each event."
    },
    {
      title: "Merch & Collabs",
      description: "Limited apparel drops that double as marketing and community badges."
    },
    {
      title: "Private Events (Future)",
      description: "Corporate nights, milestone celebrations, and VIP gatherings tailored to clients."
    }
  ];

  const whyCleveland = [
    "Neighborhoods like Ohio City, Tremont, and Downtown are ready for elevated nightlife concepts.",
    "Operating costs stay lean, letting us reinvest into production and the eventual lounge buildout.",
    "Cleveland backs its own — a loyal audience is eager to champion homegrown brands."
  ];

  const roadmap = [
    {
      phase: "Phase One",
      timeline: "Now – Next 18 Months",
      focus: "Run Teasers as a nightlife promotions company.",
      bulletPoints: [
        "Host one to two immersive pop-up events every month.",
        "Grow our community through social, SMS, and email.",
        "Reinvest profits into production value and the lounge fund.",
        "Prove demand with consistent sell-outs and partner interest."
      ]
    },
    {
      phase: "Phase Two",
      timeline: "Future",
      focus: "Open the Teasers Lounge & Restaurant.",
      bulletPoints: [
        "Modern lounge with elevated small plates and signature cocktails.",
        "Live entertainment and private event programming.",
        "Design aesthetic that matches the pop-up experiences guests love.",
        "A permanent home base for the Teasers community."
      ]
    }
  ];

  return (
    <div className="bg-hunter text-white">
      <section className="relative overflow-hidden px-4 pt-24 pb-20 text-center sm:px-6 sm:pt-28 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-hunter via-graphite to-hunter" />
        <motion.div
          className="absolute inset-0 -z-20 blur-[140px] opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(0,255,157,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(213,155,246,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(0,255,157,0.25) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(0,255,157,0.25) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 -z-30 h-full w-full object-cover opacity-15 mix-blend-screen"
          style={{ filter: "hue-rotate(140deg) saturate(1.2)" }}
        >
          <source src="/brand/hero.mp4" type="video/mp4" />
        </video>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl space-y-6"
        >
          <span className="tracking-[0.35em] text-xs uppercase text-emerald">
            Cleveland Nightlife Promotions Company
          </span>
          <h1 className="text-5xl md:text-6xl font-serif neon-text">
            {brand.name}
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
            Pop-up experiences that build anticipation for Cleveland&apos;s future immersive lounge.
          </p>
          <p className="text-sm text-gray-400 uppercase tracking-[0.3em]">
            Phase One · Pop-Up Series · {brand.city}
          </p>
          <p className="text-sm text-gray-400">
            Each event is a teaser — a preview of the permanent lounge we&apos;re manifesting together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href="/experiences" className="neon-btn">
              Upcoming Pop-Ups
            </Link>
            <Link href="/contact" className="neon-btn">
              Sponsor Or Partner
            </Link>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-14 sm:gap-4">
          {voice.map((descriptor) => (
            <span
              key={descriptor}
              className="rounded-full border border-emerald/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-gray-300"
            >
              {descriptor}
            </span>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="space-y-6">
            <span className="tracking-[0.3em] text-xs uppercase text-emerald">
              What We Do Right Now
            </span>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              Pop-up nights that tease the future lounge
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {brand.mission}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {brand.positioning}
            </p>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-roseGold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 rounded-3xl border border-emerald/30 bg-graphite/80 p-6 shadow-neon sm:p-8">
            <h3 className="text-xl font-serif text-emerald uppercase tracking-[0.3em]">
              How We Monetize Phase One
            </h3>
            <div className="space-y-5">
              {revenueStreams.map((stream) => (
                <div key={stream.title}>
                  <p className="text-sm uppercase tracking-[0.2em] text-roseGold">
                    {stream.title}
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {stream.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-20">
        <motion.div
          className="absolute inset-0 -z-10 opacity-30"
          animate={{
            background: [
              "linear-gradient(135deg, rgba(0,255,157,0.12) 0%, rgba(2,31,26,1) 50%, rgba(213,155,246,0.12) 100%)",
              "linear-gradient(135deg, rgba(213,155,246,0.12) 0%, rgba(2,31,26,1) 50%, rgba(0,255,157,0.12) 100%)",
              "linear-gradient(135deg, rgba(0,255,157,0.12) 0%, rgba(2,31,26,1) 50%, rgba(213,155,246,0.12) 100%)"
            ]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">Upcoming Pop-Ups</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              Limited-capacity nights that sell the vision
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Each immersive event is a proof point — demonstrating the demand, the design language, and the community for Teasers CLE.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.name}
                className="rounded-3xl border border-emerald/30 bg-graphite/75 p-8 shadow-neon"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-emerald">
                  {event.theme}
                </p>
                <h3 className="mt-3 text-2xl font-serif text-roseGold">
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

          <div className="text-center">
            <Link href="/experiences" className="neon-btn inline-block">
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 border-y border-emerald/20 bg-graphite/50 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-8 sm:space-y-10">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">
              Why Cleveland
            </p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              The city that makes this vision possible
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyCleveland.map((reason) => (
              <div
                key={reason}
                className="rounded-3xl border border-emerald/30 bg-graphite/80 p-6 text-sm text-gray-300 leading-relaxed shadow-neon"
              >
                {reason}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-10 sm:space-y-12">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">
              Roadmap
            </p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              From pop-up series to permanent lounge
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {roadmap.map((stage) => (
              <div
                key={stage.phase}
                className="space-y-5 rounded-3xl border border-emerald/30 bg-graphite/80 p-6 shadow-neon sm:p-8"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-[0.3em] text-emerald">
                    {stage.timeline}
                  </span>
                  <h3 className="text-2xl font-serif text-roseGold">
                    {stage.phase}
                  </h3>
                  <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
                    {stage.focus}
                  </p>
                </div>
                <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                  {stage.bulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-graphite/60 border-y border-emerald/20 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="tracking-[0.3em] uppercase text-sm text-emerald">
                Teasers Takeover
              </p>
              <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
                {takeover.tagline}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {takeover.summary}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                We stage the lighting, talent, cocktails, and guestlist energy. You unlock the doors and watch the revenue lift.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              {takeover.whyBarsLoveIt.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link href="/takeover" className="neon-btn">
                Explore Takeover Options
              </Link>
              <Link href="/contact" className="neon-btn">
                Book A Walkthrough
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            {takeover.packages.map((pkg) => (
              <div key={pkg.title} className="space-y-2 rounded-3xl border border-emerald/35 bg-graphite/85 p-6 shadow-neon">
                <p className="text-xs uppercase tracking-[0.3em] text-roseGold">
                  {pkg.title}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">{pkg.description}</p>
                <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
                  Ideal for: {pkg.idealFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">
              Join The Movement
            </p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              Build the Emerald Noir creative collective with us
            </h2>
            <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Performers, DJs, chefs, mixologists, model staff, stylists, cinematographers—we&apos;re recruiting the crew that will power every pop-up, takeover, and eventually the lounge.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {data.collective.categories.slice(0, 4).map((category) => (
              <div key={category.title} className="rounded-3xl border border-emerald/35 bg-graphite/80 p-6 shadow-neon space-y-3">
                <h3 className="text-xl font-serif text-roseGold">{category.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/collective" className="neon-btn">
              Join The Collective
            </Link>
            <Link href="/collective#talent-form" className="neon-btn">
              Submit Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 rounded-3xl border border-roseGold/30 bg-graphite/75 p-8 text-center shadow-neon sm:space-y-7 sm:p-12">
          <p className="tracking-[0.3em] uppercase text-sm text-emerald">
            Stay Ahead Of The Reveal
          </p>
          <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
            Help us build the lounge Cleveland can&apos;t stop talking about
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Sign up for insider drops, sponsor an upcoming night, or bring your crew to the next pop-up.
            Every ticket, share, and partnership moves Teasers CLE closer to its permanent home.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Join The Guestlist
            </Link>
            <Link href="/contact" className="neon-btn">
              Sponsor An Event
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
