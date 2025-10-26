"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import data from "@/context/teasersCLE.json";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "appetizer", label: "Appetizers" },
    { id: "main", label: "Mains" },
    { id: "dessert", label: "Desserts" },
    { id: "cocktail", label: "Cocktails" },
  ];

  const filteredMenu =
    activeCategory === "all"
      ? data.menu
      : data.menu.filter((item) => item.type === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Curated Tastings"
        subtitle="The Menu"
        description="Every dish is a story. Every sip, a revelation."
        height="medium"
      />

      {/* Menu Section */}
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
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 uppercase tracking-wider text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gold text-black font-semibold"
                    : "border border-gold/40 text-gold hover:bg-gold/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-plum border border-gold/20 p-6 hover:border-gold transition-all duration-500"
              >
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs uppercase tracking-wider text-gold/70 bg-gold/10 px-3 py-1">
                    {item.type}
                  </span>
                </div>

                {/* Item Content */}
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Pairings */}
                  {item.pairings && item.pairings.length > 0 && (
                    <div className="pt-4 border-t border-gold/20">
                      <p className="text-xs text-gold/70 uppercase tracking-wider mb-2">
                        Pairs Well With
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.pairings.map((pairing) => (
                          <span
                            key={pairing}
                            className="text-xs text-white/60 bg-white/5 px-2 py-1"
                          >
                            {pairing}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
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
              Our menu evolves with the seasons and the stories we wish to tell.
              Each experience features a unique tasting menu crafted for that
              evening alone. What you see here is a preview—the real magic unfolds
              at your table.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="section-padding bg-plum-dark">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-md text-white mb-8">
              Dietary Accommodations
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We happily accommodate dietary restrictions and preferences. Please
              inform us of any allergies, intolerances, or dietary needs when you
              reserve your seat, and our culinary team will craft a personalized
              experience for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {[
                "Vegetarian",
                "Vegan",
                "Gluten-Free",
                "Dairy-Free",
                "Nut Allergies",
                "Custom Requests",
              ].map((option, index) => (
                <motion.span
                  key={option}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 border border-gold/40 text-gold uppercase tracking-wider"
                >
                  {option}
                </motion.span>
              ))}
            </div>
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
              Taste the Experience
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Ready to embark on a culinary journey unlike any other?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/experiences" className="btn-primary">
                View Experiences
              </a>
              <a href="/contact" className="btn-secondary">
                Make a Reservation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
