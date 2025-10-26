"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function CollectivePage() {
  const { collective, socials, contact } = data;

  return (
    <div className="min-h-screen bg-hunter text-white">
      <section className="relative overflow-hidden px-4 pt-24 pb-16 text-center sm:px-6 sm:pt-28 sm:pb-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-roseGold/15 via-hunter to-graphite" />
        <motion.div
          className="absolute inset-0 -z-20 blur-[140px] opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 30% 40%, rgba(213,155,246,0.25) 0%, transparent 60%)",
              "radial-gradient(circle at 70% 60%, rgba(0,255,157,0.25) 0%, transparent 60%)",
              "radial-gradient(circle at 30% 70%, rgba(213,155,246,0.25) 0%, transparent 60%)"
            ]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-6"
        >
          <span className="tracking-[0.35em] text-xs uppercase text-emerald">
            {collective.name}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif neon-text">
            {collective.tagline}
          </h1>
          <p className="text-gray-300 leading-relaxed">
            {collective.intro}
          </p>
          <p className="text-sm text-gray-400 leading-relaxed">
            {collective.ctaCopy}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="#talent-form" className="neon-btn">
              {collective.ctaButtons[0]}
            </Link>
            <Link href="/contact?interest=Performer%20%2F%20Talent%20Roster" className="neon-btn">
              {collective.ctaButtons[1]}
            </Link>
            <Link href="/experiences" className="neon-btn">
              See Upcoming Nights
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">
              Who We&apos;re Recruiting
            </p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              We&apos;re casting for every corner of the night
            </h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {collective.categories.map((category) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-emerald/35 bg-graphite/85 p-6 shadow-neon space-y-3"
              >
                <h3 className="text-xl font-serif text-roseGold">{category.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 bg-graphite/60 border-y border-emerald/20 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <header className="text-center space-y-4">
            <p className="tracking-[0.3em] uppercase text-sm text-emerald">
              Why Join
            </p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              Build with a crew that pays and promotes
            </h2>
          </header>
          <ul className="grid gap-6 md:grid-cols-2 text-sm text-gray-300 leading-relaxed">
            {collective.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 rounded-3xl border border-emerald/35 bg-graphite/85 p-6 shadow-neon">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
          <div className="text-center text-xs uppercase tracking-[0.3em] text-gray-500">
            Want in? Drop your info below. We host open rehearsals, menu labs, and takeover trainings regularly.
          </div>
        </div>
      </section>

      <section id="talent-form" className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-8 bg-graphite/85 border border-emerald/30 rounded-3xl p-8 shadow-neon">
            <h3 className="text-2xl font-serif text-roseGold">
              Submit To The Roster
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Tell us who you are, the magic you bring, and when you&apos;re available. Include links to reels, mixes, menus, or portfolios so we can feel your energy.
            </p>
            <form
              name="talent-form"
              method="post"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/contact?submitted=true"
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="talent-form" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                  Name
                  <input
                    required
                    type="text"
                    name="name"
                    className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                  />
                </label>
              </div>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                Phone / IG Handle
                <input
                  type="text"
                  name="phone_or_social"
                  placeholder="@username or (216) 555-TEAS"
                  className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                Discipline
                <select
                  name="discipline"
                  required
                  className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                >
                  <option value="">Choose your lane</option>
                  <option value="Performer / Dancer">Performer / Dancer</option>
                  <option value="DJ / Musician">DJ / Musician</option>
                  <option value="Chef / Culinary">Chef / Culinary</option>
                  <option value="Mixologist / Bar Lead">Mixologist / Bar Lead</option>
                  <option value="Host / Model Staff">Host / Model Staff</option>
                  <option value="Stylist / Glam / Wardrobe">Stylist / Glam / Wardrobe</option>
                  <option value="Set / Lighting / Tech">Set / Lighting / Tech</option>
                  <option value="Photo / Video">Photo / Video</option>
                  <option value="Other">Other (tell us below)</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                Availability & Cities
                <input
                  type="text"
                  name="availability"
                  placeholder="Weekends, weekdays, travel radius, etc."
                  className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                Links (Reels, Mixes, Menus, Portfolios)
                <textarea
                  name="links"
                  rows={3}
                  placeholder="Paste your best links so we can experience your work."
                  className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
                Tell Us About Your Vibe
                <textarea
                  name="story"
                  rows={4}
                  placeholder="What do you bring to the room? Past gigs? Dream collabs?"
                  className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
                />
              </label>

              <button type="submit" className="w-full neon-btn">
                {collective.ctaButtons[0]}
              </button>
            </form>
          </div>

          <aside className="space-y-6 rounded-3xl border border-emerald/35 bg-graphite/85 p-8 shadow-neon">
            <h3 className="text-xl font-serif text-roseGold uppercase tracking-[0.3em]">
              FAQs
            </h3>
            <div className="space-y-5 text-sm text-gray-300 leading-relaxed">
              {collective.faq.map((item) => (
                <div key={item.question}>
                  <p className="uppercase tracking-[0.25em] text-emerald text-xs">
                    {item.question}
                  </p>
                  <p className="mt-2">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="uppercase tracking-[0.3em] text-emerald">Stay in the loop</p>
              <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-roseGold transition-colors">
                Follow our behind-the-scenes on Instagram →
              </a>
              <a href={socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-emerald hover:text-roseGold transition-colors">
                Watch rehearsals on TikTok →
              </a>
            </div>
            <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
              Need to send press kits or larger files? Email {contact.email}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
