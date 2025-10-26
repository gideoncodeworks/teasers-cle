"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import data from "@/context/teasersCLE.json";

const interestOptions = [
  "Teasers Takeover (Venue Inquiry)",
  "Performer / Talent Roster",
  "Culinary / Beverage Team",
  "Creative Crew (Photo, Styling, Design)",
  "Investor Packet",
  "Crowdfunding Info",
  "VIP Invite List",
  "Collaboration or Partnership"
];

function ContactForm() {
  const { contact, socials, brand } = data;
  const searchParams = useSearchParams();
  const preselectedInterest = searchParams.get("interest") ?? "";
  const eventParam = searchParams.get("event");

  return (
    <div className="min-h-screen bg-hunter text-white px-6 py-24">
      <section className="max-w-5xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-8">
          <div>
            <span className="tracking-[0.35em] uppercase text-sm text-emerald">
              Join The Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-serif neon-text mt-4">
              Reserve Your Place
            </h1>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Tell us how you want to be part of Teasers CLE — from private tables and investment
              opportunities to brand collaborations. Every message lands directly with our founding team.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              Venues curious about a Teasers Takeover: include your location details and ideal dates so we can schedule a walkthrough.
            </p>
          </div>

          <form
            className="space-y-4 bg-graphite/80 border border-emerald/30 rounded-3xl p-8 shadow-neon"
            name="guestlist-form"
            data-netlify="true"
            method="post"
          >
            <input type="hidden" name="form-name" value="guestlist-form" />
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
              Interest
              <select
                name="interest"
                required
                defaultValue={preselectedInterest}
                className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
              >
                <option value="">Select one</option>
                {interestOptions.map(option => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-2 text-sm uppercase tracking-[0.25em] text-gray-400">
              Message
              <textarea
                name="message"
                rows={5}
                placeholder="Tell us what you envision — private dinner, immersive activation, collaboration..."
                defaultValue={
                  eventParam
                    ? `Interested in updates for ${eventParam} — please add me to the VIP invite list.`
                    : undefined
                }
                className="rounded-lg border-2 border-emerald/40 bg-black px-4 py-3 text-white focus:border-roseGold focus:outline-none transition-colors"
              />
            </label>

            <button type="submit" className="w-full neon-btn">
              Submit Request
            </button>
            <p className="text-xs text-gray-500 text-center">
              We respond within 48 hours. For urgent inquiries call {contact.phone}.
            </p>
          </form>
        </div>

        <aside className="space-y-8 bg-graphite/80 border border-emerald/30 rounded-3xl p-8 shadow-neon">
          <div className="space-y-2">
            <h2 className="text-2xl font-serif text-roseGold">Direct Line</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              {contact.address}
            </p>
            <p className="text-sm text-gray-300">Email: <a href={`mailto:${contact.email}`} className="text-emerald hover:text-roseGold transition-colors">{contact.email}</a></p>
            <p className="text-sm text-gray-300">Phone: <a href={`tel:${contact.phone}`} className="text-emerald hover:text-roseGold transition-colors">{contact.phone}</a></p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-serif text-emerald uppercase tracking-[0.3em]">
              Connect
            </h3>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:text-roseGold transition-colors"
              >
                Instagram
              </a>
              <a
                href={socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:text-roseGold transition-colors"
              >
                TikTok
              </a>
              <a
                href={socials.eventbrite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald hover:text-roseGold transition-colors"
              >
                Eventbrite
              </a>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-300">
            <h3 className="text-lg font-serif text-roseGold uppercase tracking-[0.3em]">
              Teasers Takeover
            </h3>
            <p className="leading-relaxed">
              Want us to flip your night? Share your venue details, capacity, and desired theme. We&apos;ll send the takeover deck and schedule a walkthrough.
            </p>
            <Link href="/takeover" className="inline-block text-emerald hover:text-roseGold transition-colors uppercase tracking-[0.25em]">
              View Takeover Details →
            </Link>
          </div>

          <div className="space-y-3 text-sm text-gray-400">
            <p className="uppercase tracking-[0.3em] text-emerald">Why join?</p>
            <ul className="space-y-2">
              <li>• First access to immersive pop-ups</li>
              <li>• Invitations to investor salons and tastings</li>
              <li>• Collaborator & takeover briefings before public announcements</li>
            </ul>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            {brand.name} · {brand.city}
          </p>
        </aside>
      </section>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-hunter text-white px-6 py-24 flex items-center justify-center">
        <div className="text-emerald text-lg">Loading...</div>
      </div>
    }>
      <ContactForm />
    </Suspense>
  );
}
