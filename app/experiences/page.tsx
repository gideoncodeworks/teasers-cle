"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import data from "@/context/teasersCLE.json";

export default function ExperiencesPage() {
  const { events, socials } = data;

  const onSaleEvents = events.filter((event) => event.status === "onSale");
  const otherEvents = events.filter((event) => event.status !== "onSale");
  const primaryEvents = [...onSaleEvents, ...otherEvents].slice(0, 3);
  const comingSoonEvents = events.filter(
    (event) => !primaryEvents.includes(event)
  );
  const featuredComingSoon = comingSoonEvents.slice(0, 2);
  const hasMoreComingSoon = comingSoonEvents.length > featuredComingSoon.length;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative overflow-hidden bg-hunter text-white">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-b from-emerald/12 via-hunter to-graphite px-4 pt-24 pb-12 text-center sm:px-6 sm:pt-28 sm:pb-16"
      >
        <span className="tracking-[0.35em] uppercase text-sm text-emerald">Exclusive Calendar</span>
        <h1 className="mt-4 mb-6 text-4xl font-serif neon-text md:text-5xl">
          Experiences
        </h1>
        <p className="mx-auto max-w-3xl leading-relaxed text-gray-300">
          RSVP-only nightlife drops that channel Trinidad energy through Cleveland venues. Expect roaming cocktails,
          passed bites, and DJs pushing the pace while we preview the future Teasers lounge.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
          Exact addresses stay secret until 48 hours before doors—confirmed guests receive the drop via email and SMS.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact" className="neon-btn">
            Request Private Invite
          </Link>
          <a
            href={socials.eventbrite}
            target="_blank"
            rel="noopener noreferrer"
            className="neon-btn"
          >
            View On Eventbrite
          </a>
        </div>
      </motion.section>

      <section className="relative px-4 py-16 sm:px-6 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-roseGold/12 via-hunter to-emerald/12 opacity-60" />
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {primaryEvents.map((event, index) => {
            const dateLabel =
              event.date && event.date.toUpperCase() !== "TBD" ? event.date : "Date TBD";
            const timeLabel =
              event.time && event.time.toUpperCase() !== "TBD" ? event.time : "Time TBD";
            const detailSegments = [dateLabel, timeLabel, event.location].filter(Boolean);
            const details = detailSegments.join(" • ");
            const isOnSale = Boolean(event.ticketUrl && event.status === "onSale");
            const statusLabel = isOnSale ? "On Sale Now" : "Join Waitlist";
            const notifyLink = `/contact?interest=${encodeURIComponent("VIP Invite List")}&event=${encodeURIComponent(event.name)}`;
            const hasDetailContent =
              (event.passed?.length ?? 0) > 0 ||
              (event.roaming?.length ?? 0) > 0 ||
              (event.bar?.length ?? 0) > 0 ||
              Boolean(event.vibe);

            // Check if event has a dedicated page
            const hasEventPage = event.name === "Carnival After Dark";
            const eventPageUrl = hasEventPage ? "/experiences/carnival-after-dark" : null;

            return (
              <motion.article
                key={event.name}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative flex flex-col gap-6 rounded-3xl border border-emerald/45 bg-graphite/85 p-6 shadow-neon transition-all hover:shadow-[0_0_32px_rgba(213,155,246,0.45)] sm:p-8"
              >
                <div>
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs uppercase tracking-[0.35em] text-emerald">
                      {event.theme}
                    </span>
                    <span
                      className={`rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.25em] ${isOnSale ? "border-emerald/70 text-emerald" : "border-roseGold/70 text-roseGold"}`}
                    >
                      {statusLabel}
                    </span>
                  </div>
                  <h2 className="mt-3 text-2xl font-serif text-roseGold">{event.name}</h2>
                  <p className="mt-2 text-sm italic text-gray-300">{event.tagline}</p>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-gray-300">
                  {event.description}
                </p>

                <div className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {details}
                </div>

                {hasDetailContent && (
                  <details className="group rounded-2xl border border-emerald/20 bg-hunter/60 px-4 py-3 text-left text-sm text-gray-300 transition-colors hover:border-emerald/40">
                    <summary className="flex cursor-pointer items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-emerald outline-none transition-colors group-open:text-roseGold [&::-webkit-details-marker]:hidden">
                      <span>Inside The Night</span>
                      <span className="text-[11px] text-gray-400 transition-transform group-open:rotate-180">
                        {"\u25BC"}
                      </span>
                    </summary>
                    <div className="mt-4 space-y-4 text-sm text-gray-300">
                      {event.passed?.length ? (
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-emerald">Passed Bites</p>
                          <ul className="space-y-1 text-gray-400">
                            {event.passed.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {event.roaming?.length ? (
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-emerald">Roaming Service</p>
                          <ul className="space-y-1 text-gray-400">
                            {event.roaming.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {event.bar?.length ? (
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-emerald">Featured Cocktails</p>
                          <ul className="space-y-1 text-gray-400">
                            {event.bar.map((item) => (
                              <li key={item}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {event.vibe ? (
                        <div>
                          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-emerald">Vibe</p>
                          <p className="leading-relaxed text-gray-400">{event.vibe}</p>
                        </div>
                      ) : null}
                    </div>
                  </details>
                )}

                <div className="flex flex-col gap-3">
                  {hasEventPage && eventPageUrl && (
                    <Link href={eventPageUrl} className="neon-btn text-center text-sm">
                      View Full Experience
                    </Link>
                  )}
                  {isOnSale ? (
                    <a
                      href={event.ticketUrl as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neon-btn text-center text-sm"
                    >
                      Purchase Tickets
                    </a>
                  ) : (
                    <Link href={notifyLink} className="neon-btn text-center text-sm">
                      Get Notified
                    </Link>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
        <p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
          Coordinates and arrival instructions released to ticket holders 48 hours prior to each experience.
        </p>
      </section>

      {comingSoonEvents.length > 0 && (
        <section className="bg-graphite/80 px-4 py-16 text-white sm:px-6">
          <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-emerald">
                Future Drops
              </p>
              <h2 className="mt-3 text-3xl font-serif text-roseGold">
                Concepts In Development
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-300">
                These experiences are on deck, but final menus and venues are still being locked.
                Join the invite list and you&apos;ll be first in line when dates go live.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {featuredComingSoon.map((event) => (
                <div
                  key={event.name}
                  className="flex flex-col gap-3 rounded-2xl border border-emerald/30 bg-hunter/70 p-5 text-left"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] uppercase tracking-[0.35em] text-gray-400">
                      {event.theme}
                    </span>
                    <span className="rounded-full border border-roseGold/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-roseGold">
                      Details Coming Soon
                    </span>
                  </div>
                  <h3 className="text-xl font-serif text-roseGold">{event.name}</h3>
                  <p className="text-sm text-gray-300">{event.tagline}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                    {event.location || "Location TBD"}
                  </p>
                  <Link
                    href={`/contact?interest=${encodeURIComponent("VIP Invite List")}&event=${encodeURIComponent(event.name)}`}
                    className="neon-btn text-center text-xs"
                  >
                    Join The List
                  </Link>
                </div>
              ))}
            </div>
            {hasMoreComingSoon && (
              <Link
                href={`/contact?interest=${encodeURIComponent("Future Concepts")}`}
                className="mx-auto inline-flex items-center justify-center rounded-full border border-emerald/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-emerald transition-colors hover:border-roseGold/50 hover:text-roseGold"
              >
                View All Concepts
              </Link>
            )}
          </div>
        </section>
      )}

      <motion.div
        className="absolute inset-0 -z-20 bg-gradient-to-b from-hunter via-graphite to-hunter"
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </div>
  );
}
