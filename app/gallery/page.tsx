"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/context/teasersCLE.json";

const accentGradients = [
  "from-roseGold/60 via-transparent to-hunter",
  "from-emerald/60 via-transparent to-hunter",
  "from-purple-500/40 via-transparent to-hunter",
  "from-fuchsia-500/40 via-transparent to-hunter",
  "from-sky-500/40 via-transparent to-hunter",
  "from-rose-500/40 via-transparent to-hunter",
];

const fallbackImage = "/brand/logo.png";

export default function GalleryPage() {
  const { events } = data;
  const galleryItems = events.map((event, index) => ({
    event,
    imageSrc: fallbackImage,
    gradient: accentGradients[index % accentGradients.length],
  }));

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem = typeof selectedIndex === "number" ? galleryItems[selectedIndex] : null;

  return (
    <section className="min-h-screen bg-hunter text-white px-6 py-24">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4"
        >
          <span className="tracking-[0.35em] uppercase text-sm text-emerald">
            Visual Atmosphere
          </span>
          <h1 className="text-4xl font-serif neon-text">
            Gallery
          </h1>
          <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Vignettes from the nights that linger — candlelit projections, whispered performances,
            and the glow of anticipation across the room.
          </p>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {galleryItems.map((item, index) => (
            <motion.button
              key={item.event.name}
              type="button"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-square overflow-hidden rounded-3xl border border-emerald/30 bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-roseGold"
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={item.imageSrc}
                alt={item.event.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-contain opacity-70 transition-all group-hover:opacity-90"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70`} />
              <div className="absolute inset-0 bg-graphite/80 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm uppercase tracking-[0.35em] text-emerald">
                  {item.event.theme}
                </p>
                <h2 className="mt-2 text-lg font-serif text-white">{item.event.name}</h2>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            key={selectedItem.event.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-graphite/75 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl w-full bg-black border border-emerald/40 rounded-3xl p-8 shadow-neon text-left"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-64 rounded-2xl overflow-hidden border border-emerald/30">
                <Image
                  src={selectedItem.imageSrc}
                  alt={selectedItem.event.name}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedItem.gradient} opacity-60`} />
              </div>
              <div className="mt-6 space-y-3">
                <span className="text-xs uppercase tracking-[0.35em] text-emerald">
                  {selectedItem.event.theme}
                </span>
                <h3 className="text-2xl font-serif text-roseGold">
                  {selectedItem.event.name}
                </h3>
                <p className="italic text-sm text-gray-300">{selectedItem.event.tagline}</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {selectedItem.event.description}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  {selectedItem.event.date} • {selectedItem.event.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-black text-white text-2xl leading-[2.5rem] text-center hover:text-roseGold border border-emerald/50"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
