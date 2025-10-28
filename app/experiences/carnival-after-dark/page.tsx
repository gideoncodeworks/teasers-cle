"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import data from "@/context/teasersCLE.json";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const ticketTiers = [
  {
    title: "Early Bird",
    price: "$50",
    availability: "Limited to 50 tickets",
    perks: [
      "Welcome champagne on arrival",
      "Free cocktails 9-11pm (The Mas, Port of Spain Sunset, rum punch)",
      "Caribbean food 9-11pm (Doubles, jerk chicken, plantain chips, coconut shrimp)",
      "Live Soca DJ until 2AM",
      "Body paint station (neon pigments & glitter)",
      "LED glow accessories at the door",
      "Secret location revealed 48 hours before",
    ],
    cta: "Buy Early Bird",
    highlight: false,
  },
  {
    title: "General Admission",
    price: "$65",
    availability: "Standard entry at 9pm",
    perks: [
      "Everything in Early Bird",
      "Standard entry at 9pm",
      "Prime dance floor access",
      "Unlimited body paint designs",
      "Photo booth access",
    ],
    cta: "Buy GA",
    highlight: true,
  },
  {
    title: "VIP Upgrade",
    price: "$130",
    availability: "Limited to 30 tickets",
    perks: [
      "Early entry at 8:30pm",
      "Double champagne on arrival",
      "Reserved VIP lounge seating",
      "Table service all night",
      "Late-night snacks (11pm-1am): Mini beef patties, plantain sliders, spicy wings",
      "Exclusive Teasers CLE merch",
      "Skip-the-line access",
    ],
    cta: "Buy VIP",
    highlight: false,
  },
];

const programming = [
  {
    title: "Soca + Dancehall DJ Sets",
    description: "Cleveland's top selectors plus special guests spinning 100% Caribbean riddims with percussion drops.",
  },
  {
    title: "Glow & Mas Glam Stations",
    description: "Professional body painters, glitter artists, and feather stylists on deck to level up your look.",
  },
  {
    title: "Carnival Energy Squad",
    description: "Costumed hype crew roaming with glow accessories, rum shots, and percussion to keep the room lifted.",
  },
  {
    title: "Secret Performance Reveals",
    description: "Expect steelpan cameos, carnival costumed cast members, and midnight hype squads.",
  },
];

const schedule = [
  { time: "9:00 PM", detail: "Doors open • Welcome champagne • Glow bar & body paint stations live" },
  { time: "9:30 PM", detail: "DJ warm-up set • Caribbean bites service begins" },
  { time: "10:30 PM", detail: "Soca energy peaks • Roaming cocktails continue" },
  { time: "11:00 PM", detail: "Food & cocktails service ends • DJ intensifies" },
  { time: "12:00 AM", detail: "Midnight vibes • Secret performances & surprises" },
  { time: "1:00 AM", detail: "VIP late-night snacks (patties, sliders, wings)" },
  { time: "2:00 AM", detail: "Doors close • Last call" },
];

const cocktailImages = [
  { src: "/brand/carnival/the-mas.jpg", label: "The Mas", alt: "Spiced rum, passionfruit, lime" },
  { src: "/brand/carnival/port-of-spain-sunset.jpg", label: "Port of Spain Sunset", alt: "Coconut rum, mango, grenadine" },
  { src: "/brand/carnival/rum-punch-shots.jpg", label: "Caribbean Rum Punch", alt: "Traditional rum punch" },
  { src: "/brand/carnival/sorrel-mimosa.jpg", label: "Sorrel Mimosa", alt: "Champagne toast with Caribbean sorrel twist" },
];

const foodImages = [
  { src: "/brand/carnival/doubles-shooters.jpg", label: "Doubles Shooters", alt: "Doubles shooters with tamarind chutney" },
  { src: "/brand/carnival/jerk-chicken-lollipops.jpg", label: "Jerk Chicken Lollipops", alt: "Jerk chicken lollipops with glaze" },
  { src: "/brand/carnival/plantain-chips-pepper-caviar.jpg", label: "Plantain Chips", alt: "Plantain chips with pepper sauce pearls" },
  { src: "/brand/carnival/coconut-rum-shrimp.jpg", label: "Coconut Rum Shrimp", alt: "Coconut rum shrimp on sugarcane skewers" },
];

const vipSnackImages = [
  { src: "/brand/carnival/mini-beef-patties.jpg", label: "Mini Beef Patties", alt: "Mini beef patties with scotch bonnet" },
  { src: "/brand/carnival/plantain-sliders.jpg", label: "Plantain Sliders", alt: "Plantain sliders with jerk pulled meat" },
  { src: "/brand/carnival/spicy-wings.jpg", label: "Spicy Wings", alt: "Caribbean spicy wings with lime wedges" },
];

const conceptArtImages = [
  { src: "/brand/carnival/concept-venue.jpg", label: "Venue Atmosphere Render", alt: "Render of Carnival After Dark venue staging" },
  { src: "/brand/carnival/costume-lookbook.jpg", label: "Costume Lookbook", alt: "Carnival costume inspiration board" },
  { src: "/brand/carnival/cocktail-concepts.jpg", label: "Cocktail Concepts", alt: "Concept illustrations for signature cocktails" },
];

const experienceHighlights = [
  { icon: "🍾", title: "Welcome Champagne", detail: "Glass poured the moment you arrive." },
  { icon: "🍹", title: "Signature Cocktails (9–11PM)", detail: "Sip The Mas, Port of Spain Sunset, and rum punch on us." },
  { icon: "🍖", title: "Caribbean Bites (9–11PM)", detail: "Doubles, jerk chicken, plantain chips, coconut shrimp." },
  { icon: "🎵", title: "Live Soca DJ", detail: "Sound system stays lit until 2AM." },
  { icon: "🎨", title: "Body Paint Station", detail: "Neon pigments, glitter, and glam artists live-brushing looks." },
  { icon: "✨", title: "Glow Accessories", detail: "LED bracelets and glow kits at the door." },
  { icon: "🔒", title: "Secret Location", detail: "Address drops 48 hours before doors with concierge support." },
];

const faq = [
  {
    q: "What should I wear?",
    a: "Think carnival chic: sequins, feathers, iridescent fabrics, bold colors. Heels are welcome but dress to move—this is a party first. No athletic shorts, plain tees, or sneakers.",
  },
  {
    q: "Are tickets all-inclusive?",
    a: "All tickets include welcome champagne, free signature cocktails (9-11pm), Caribbean bites (9-11pm), body paint station, LED glow accessories, and live Soca DJ until 2AM. VIP tickets add early entry, VIP lounge seating, table service, late-night snacks, and exclusive merch.",
  },
  {
    q: "When do I get the location?",
    a: "The secret venue address will be revealed 48 hours before the event via email and SMS. It's within Cleveland city limits.",
  },
  {
    q: "Can I come with a group?",
    a: "Absolutely. Buy your tickets individually, then email hello@teaserscle.com with your order numbers and we'll coordinate group seating.",
  },
];

const MediaCard = ({
  image,
  onClick
}: {
  image: { src: string; alt: string; label: string };
  onClick?: () => void;
}) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    whileHover={{ scale: 1.02 }}
    onClick={onClick}
    className="overflow-hidden rounded-3xl border border-emerald/30 bg-graphite/80 shadow-neon cursor-pointer transition-all hover:border-roseGold/50"
  >
    <div className="relative h-56 w-full sm:h-64 bg-black/40">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover"
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 45vw, 90vw"
      />
    </div>
    <div className="border-t border-emerald/20 px-5 py-4 text-xs uppercase tracking-[0.3em] text-gray-400 flex items-center justify-between">
      <span>{image.label}</span>
      <span className="text-emerald text-xs">Click to view</span>
    </div>
  </motion.div>
);

export default function CarnivalAfterDarkPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; label: string } | null>(null);
  const event = data.events.find((item) => item.name === "Carnival After Dark");

  if (!event) {
    return (
      <div className="min-h-screen bg-hunter text-white flex items-center justify-center px-6">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-serif text-roseGold">Carnival After Dark loading…</h1>
          <p className="text-gray-300">
            We’re updating the event details right now. Check back shortly or{" "}
            <Link href="/experiences" className="text-emerald underline">
              return to the calendar
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  const eventbriteUrl = event.ticketUrl || "https://TeasersCarnivalAfterDark.eventbrite.com";

  return (
    <div className="bg-hunter text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-28 pb-24 sm:px-6 lg:px-10">
        <motion.div
          className="absolute inset-0 -z-10 opacity-40"
          animate={{
            background: [
              "radial-gradient(circle at 20% 40%, rgba(0,255,157,0.2) 0%, transparent 55%)",
              "radial-gradient(circle at 80% 50%, rgba(213,155,246,0.25) 0%, transparent 55%)",
              "radial-gradient(circle at 50% 80%, rgba(0,255,157,0.2) 0%, transparent 55%)",
            ],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        />
        <div className="mx-auto max-w-6xl space-y-10 text-center">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] text-emerald"
          >
            Teasers CLE Presents
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-serif neon-text sm:text-6xl md:text-7xl"
          >
            Carnival After Dark
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl"
          >
            {event.fullDescription || event.description}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 text-sm uppercase tracking-[0.3em] text-gray-400"
          >
            <span>{event.date}</span>
            <span>•</span>
            <span>{event.time}</span>
            <span>•</span>
            <span>Secret Cleveland location (drop in 48 hours)</span>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn px-8 py-4 text-base sm:text-lg"
            >
              Buy Tickets
            </a>
            <Link href="/experiences" className="neon-btn px-8 py-4 text-base sm:text-lg">
              View Full Calendar
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <header className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Experience Highlights</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">Here’s what’s included</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experienceHighlights.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-emerald/30 bg-graphite/80 p-6 shadow-neon space-y-3"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-lg font-serif text-roseGold">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">Carnival energy, Cleveland backdrop</h2>
            <p className="text-gray-300 leading-relaxed">
              Teasers CLE is turning Friday the 13th into a full carnival immersion—soca riddims, glow-up glam squads,
              mas costuming moments, and roaming menus inspired by Port of Spain street food. Every ticket funds the
              Teasers lounge build-out, so you’re partying for a purpose.
            </p>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>• Secret industrial venue reimagined with Emerald Noir staging</li>
              <li>• Professional photo + video capture (content delivered within 72 hours)</li>
              <li>• Carnival energy squads, percussion breaks, and surprise performances</li>
              <li>• Complimentary hydration + recovery station on exit</li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6 rounded-3xl border border-emerald/30 bg-graphite/80 p-8 shadow-neon"
          >
            <h3 className="text-xl font-serif text-emerald uppercase tracking-[0.3em]">Ticket Includes</h3>
            <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
              <li>• Two specialty cocktails + champagne toast (GA)</li>
              <li>• Roaming Caribbean tasting menu (bites refreshed hourly)</li>
              <li>• Glow bar: body paint, feathers, glitter, mas accessories</li>
              <li>• Live performances + DJ sets all night</li>
              <li>• Secret location drop + concierge support</li>
            </ul>
            <a
              href={eventbriteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn inline-block text-center"
            >
              Reserve Your Spot
            </a>
          </motion.div>
        </div>
      </section>

      {/* Ticketing */}
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-10">
          <header className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Choose Your Experience</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">Three ways to enter the mas</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {ticketTiers.map((tier) => (
              <motion.div
                key={tier.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl border bg-graphite/85 p-6 shadow-neon ${
                  tier.highlight ? "border-roseGold/60" : "border-emerald/30"
                }`}
              >
                {tier.highlight && (
                  <div className="mb-4 inline-block rounded-full border border-roseGold/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-roseGold">
                    Most Popular
                  </div>
                )}
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xl font-serif text-roseGold">{tier.title}</h3>
                    <p className="text-sm uppercase tracking-[0.25em] text-gray-400">{tier.availability}</p>
                    <p className="mt-2 text-4xl font-bold text-emerald">{tier.price}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                    {tier.perks.map((perk) => (
                      <li key={perk}>• {perk}</li>
                    ))}
                  </ul>
                  <a
                    href={eventbriteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-btn block text-center"
                  >
                    {tier.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu & Cocktails */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 bg-graphite/60 border-y border-emerald/20">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Taste The Tease</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">Menu & Cocktail Journey</h2>
            <p className="mx-auto max-w-3xl text-gray-300 leading-relaxed">
              Every roaming bite + cocktail was designed alongside the Teasers CLE culinary and bar teams. Expect the
              flavors that will anchor the eventual lounge—spiked sorrel, doubles shooters, rum-soaked desserts, and
              bright coastal accents.
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 italic">
              *Images shown are concept art. Menu options subject to change. Real event photography will be added to the gallery after the experience.
            </p>
          </header>
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-serif text-roseGold uppercase tracking-[0.3em]">Roaming Bites</h3>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                {event.passed?.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-serif text-roseGold uppercase tracking-[0.3em]">Signature Cocktails</h3>
              <ul className="space-y-3 text-sm text-gray-300 leading-relaxed">
                {event.bar?.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
                <li>• VIP open-bar features house spirits, bubbles, and late-night espresso rum tonics</li>
              </ul>
            </motion.div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {cocktailImages.map((image) => (
              <MediaCard key={image.label} image={image} onClick={() => setSelectedImage(image)} />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {foodImages.map((image) => (
              <MediaCard key={image.label} image={image} onClick={() => setSelectedImage(image)} />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {vipSnackImages.map((image) => (
              <MediaCard key={image.label} image={image} onClick={() => setSelectedImage(image)} />
            ))}
          </div>
          <div className="rounded-3xl border border-emerald/30 bg-graphite/80 p-6 shadow-neon space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-emerald">
              Upload final cocktail & food photography to <code className="text-roseGold">public/brand/carnival/</code> using the filenames above and the galleries will refresh instantly.
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Want to sponsor a cocktail station or collaborate on the menu (e.g., dessert cart, infused rum tasting)? Email{" "}
              <a href="mailto:hello@teaserscle.com" className="text-emerald underline">
                hello@teaserscle.com
              </a>{" "}
              for partnership packets and availability.
            </p>
          </div>
        </div>
      </section>

      {/* Programming */}
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Programming</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">What’s happening all night</h2>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
              Performances TBA • Updates incoming as collaborators confirm
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            {programming.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 rounded-3xl border border-emerald/30 bg-graphite/80 p-6 shadow-neon"
              >
                <h3 className="text-lg font-serif text-roseGold">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborate / Apply */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 bg-gradient-to-b from-hunter via-graphite/60 to-hunter">
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-roseGold/40 bg-graphite/90 p-10 text-center shadow-neon sm:p-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Open Call</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
              Want to be part of the experience?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-300 leading-relaxed">
              We're finalizing the lineup for performers, DJs, mixologists, body paint artists, food vendors, and creative
              collaborators. If you bring carnival energy, Cleveland roots, or immersive talent—we want to hear from you.
            </p>
            <div className="space-y-3 text-sm text-gray-400">
              <p>✨ Performers, dancers, and live musicians</p>
              <p>🎧 DJs specializing in Soca, Dancehall, Afrobeats, or Caribbean riddims</p>
              <p>🍹 Mixologists with signature cocktail concepts</p>
              <p>🎨 Body paint artists, glam squads, and wardrobe stylists</p>
              <p>🍴 Caribbean food vendors and pop-up chefs</p>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-500 italic">
              Applications reviewed on a rolling basis. Spots are limited and curated for vibe.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <a
                href="mailto:hello@teaserscle.com?subject=Carnival After Dark - Collaboration Inquiry"
                className="neon-btn px-8 py-4 text-base"
              >
                Submit Your Pitch
              </a>
              <Link href="/collective" className="neon-btn px-8 py-4 text-base">
                Join Talent Roster
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 bg-graphite/60 border-y border-emerald/20">
        <div className="mx-auto max-w-6xl space-y-12">
          <header className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Night Flow</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">From arrival to aftercare</h2>
          </header>
          <div className="space-y-4">
            {schedule.map((item) => (
              <motion.div
                key={item.time}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-2 rounded-3xl border border-emerald/30 bg-graphite/80 p-5 shadow-neon sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="text-sm uppercase tracking-[0.3em] text-emerald">{item.time}</span>
                <p className="text-sm text-gray-300 leading-relaxed sm:text-right">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Concept Art */}
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl space-y-8">
          <header className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">Visuals Coming Soon</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">Concept art, cocktails, & wardrobe</h2>
            <p className="mx-auto max-w-3xl text-sm text-gray-300">
              The lookbook is underway—venue renders, costume inspiration, and cocktail photography drop next. Upload
              final artwork into <code className="text-emerald">public/brand/carnival/</code> using the filenames below and they’ll display automatically.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {conceptArtImages.map((image) => (
              <MediaCard key={image.label} image={image} onClick={() => setSelectedImage(image)} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:px-6 lg:px-10 bg-graphite/60 border-y border-emerald/20">
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald">FAQ</p>
            <h2 className="text-3xl font-serif text-roseGold md:text-4xl">Know before you glow</h2>
          </header>
          <div className="space-y-6">
            {faq.map((item) => (
              <motion.div
                key={item.q}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-emerald/30 bg-graphite/80 p-6 shadow-neon"
              >
                <h3 className="text-lg font-serif text-roseGold">{item.q}</h3>
                <p className="mt-3 text-sm text-gray-300 leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-8 rounded-3xl border border-roseGold/40 bg-graphite/80 p-10 text-center shadow-neon sm:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald">Ready to celebrate?</p>
          <h2 className="text-3xl font-serif text-roseGold md:text-4xl">
            Secure your spot before the secret drop
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Tickets move fast once the location drops. Grab your crew, lock a VIP lounge, and we’ll send the coordinates
            48 hours before doors.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={eventbriteUrl} target="_blank" rel="noopener noreferrer" className="neon-btn px-8 py-4 text-base">
              Buy Tickets
            </a>
            <Link href="/experiences" className="neon-btn px-8 py-4 text-base">
              View Calendar
            </Link>
            <Link href="/collective" className="neon-btn px-8 py-4 text-base">
              Perform With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-7xl max-h-[90vh] w-full cursor-default"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-roseGold transition-colors text-sm uppercase tracking-[0.3em]"
            >
              Close ✕
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="object-contain max-h-[85vh] w-auto rounded-2xl"
              />
            </div>
            <p className="mt-4 text-center text-sm uppercase tracking-[0.3em] text-emerald">
              {selectedImage.label}
            </p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
