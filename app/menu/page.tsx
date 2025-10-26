"use client";

import { useState } from "react";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

type Event = (typeof data.events)[number];

const EventMenu = ({ event }: { event: Event }) => {
  const hasFood = event.passed && event.passed.length > 0;
  const hasRoaming = event.roaming && event.roaming.length > 0;
  const hasBar = event.bar && event.bar.length > 0;

  return (
    <div className="bg-graphite/80 border border-emerald/30 rounded-3xl p-8 shadow-neon space-y-6">
      <header className="border-b border-emerald/20 pb-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-roseGold">{event.name}</h2>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald mt-1">{event.theme}</p>
          </div>
          <span className="text-sm text-gray-400">
            {event.date} • {event.time}
          </span>
        </div>
        <p className="text-sm text-gray-300 mt-3 italic">{event.tagline}</p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {hasFood && (
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.3em] text-emerald font-semibold">Passed Bites</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {event.passed!.map((item) => (
                <li key={item} className="leading-relaxed">• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {hasRoaming && (
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.3em] text-emerald font-semibold">Roaming Service</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {event.roaming!.map((item) => (
                <li key={item} className="leading-relaxed">• {item}</li>
              ))}
            </ul>
          </div>
        )}

        {hasBar && (
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.3em] text-emerald font-semibold">Featured Cocktails</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {event.bar!.map((item) => (
                <li key={item} className="leading-relaxed">• {item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default function MenuPage() {
  const { events, brand } = data;
  const [selectedTheme, setSelectedTheme] = useState<string>("all");

  const themes = ["all", "Caribbean Soul", "African American Culture", "Cleveland Pride", "Global Nightlife"];

  const filteredEvents = selectedTheme === "all"
    ? events
    : events.filter(event => event.theme === selectedTheme);

  return (
    <div className="min-h-screen bg-hunter text-white">
      <section className="px-4 pt-24 pb-14 text-center sm:px-6 sm:pt-28 sm:pb-16 bg-gradient-to-b from-roseGold/15 via-hunter to-graphite">
        <span className="tracking-[0.35em] uppercase text-sm text-emerald">
          Savor Every Tease
        </span>
        <h1 className="text-4xl md:text-5xl font-serif neon-text mt-6">
          Event Menus
        </h1>
        <p className="max-w-3xl mx-auto text-gray-300 mt-6 leading-relaxed">
          Each Teasers CLE event features a curated menu tailored to the night's theme—from Trinidad carnival energy
          to Cleveland soul food to global nightlife flavors. Every dish and drink is a preview of what's coming to the lounge.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.25em] transition-all ${
                selectedTheme === theme
                  ? "bg-emerald text-hunter border-2 border-emerald"
                  : "bg-black/50 text-emerald border-2 border-emerald/40 hover:border-roseGold/60 hover:text-roseGold"
              }`}
            >
              {theme === "all" ? "All Events" : theme}
            </button>
          ))}
        </div>
      </section>

      <div className="relative px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald/12 via-hunter to-roseGold/12 opacity-60" />
        <div className="max-w-6xl mx-auto space-y-8">
          {filteredEvents.map((event) => (
            <EventMenu key={event.name} event={event} />
          ))}
        </div>
      </div>

      <section className="px-4 pb-24 sm:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8 bg-graphite/75 border border-roseGold/40 rounded-3xl p-10 shadow-neon sm:p-12">
          <h2 className="text-3xl font-serif text-roseGold">
            Reserve A Tasting Flight
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our team tailors roaming menus for each pop-up, mirroring how we&apos;ll program the eventual lounge.
            Tell us your flavor lane and we&apos;ll customize a tasting flight or sponsor menu for your crew.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="neon-btn">
              Curate A Private Tasting
            </Link>
            <Link href="/experiences" className="neon-btn">
              Explore Event Pairings
            </Link>
          </div>
        </div>
        <p className="mt-8 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
          Menu concept by {brand.name} · {brand.city}
        </p>
      </section>
    </div>
  );
}
