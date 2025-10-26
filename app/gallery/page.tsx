"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import data from "@/context/teasersCLE.json";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Create gallery items from events (placeholder images)
  const galleryItems = data.events.flatMap((event, eventIndex) =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `${event.id}-${i}`,
      title: event.name,
      category: event.theme.toLowerCase().split(" ")[0],
      image: `/images/gallery/${event.id}-${i + 1}.jpg`,
      description: event.tagline,
      alt: `${event.name} - Image ${i + 1}`,
    }))
  );

  const categories = [
    { id: "all", label: "All" },
    ...Array.from(new Set(galleryItems.map((item) => item.category))).map(
      (cat) => ({
        id: cat,
        label: cat.charAt(0).toUpperCase() + cat.slice(1),
      })
    ),
  ];

  const filteredGallery =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Visual Stories"
        subtitle="The Gallery"
        description="A glimpse into the moments that define Teasers CLE—where artistry, cuisine, and atmosphere converge."
        height="medium"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 uppercase tracking-wider text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gold text-black font-semibold"
                    : "border border-gold/40 text-gold hover:bg-gold/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGallery.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden bg-plum-dark cursor-pointer"
              >
                {/* Placeholder Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-plum to-plum-dark flex items-center justify-center">
                  <span className="text-8xl font-bold opacity-10">
                    {item.title.charAt(0)}
                  </span>
                </div>

                {/* Overlay Content */}
                <motion.div
                  className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6"
                  initial={false}
                >
                  <h3 className="text-xl font-bold text-gold mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm italic text-center">
                    {item.description}
                  </p>
                  <span className="mt-4 text-xs text-gold/70 uppercase tracking-wider">
                    {item.category}
                  </span>
                </motion.div>

                {/* Zoom Effect Border */}
                <motion.div
                  className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16 max-w-2xl mx-auto"
          >
            <p className="text-white/60 italic leading-relaxed">
              These images capture mere glimpses of our experiences. The true
              essence of Teasers CLE—the textures, aromas, and emotions—can only
              be felt in person. We invite you to create your own visual story with
              us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="section-padding bg-plum-dark">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md text-white mb-8">
              Share Your Experience
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Tag us in your moments at Teasers CLE. We love seeing how our guests
              experience the magic through their own lens.
            </p>
            <a
              href={data.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Follow @TeasersCLE
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-black via-plum-dark to-plum">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-white mb-8">
              Become Part of the Story
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Reserve your seat and step into a world where every moment is
              curated, every detail intentional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/experiences" className="btn-primary">
                View Experiences
              </a>
              <a href="/contact" className="btn-secondary">
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
