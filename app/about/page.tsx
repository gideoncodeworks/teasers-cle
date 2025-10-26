"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import data from "@/context/teasersCLE.json";

export default function AboutPage() {
  const values = [
    {
      title: "Artistry",
      description:
        "Every detail is intentional—from the first sip to the final course, we architect emotions through culinary excellence.",
    },
    {
      title: "Innovation",
      description:
        "We push boundaries, challenge expectations, and create experiences that transcend traditional dining.",
    },
    {
      title: "Community",
      description:
        "Cleveland is our canvas. We celebrate local talent, ingredients, and the vibrant culture of our city.",
    },
    {
      title: "Anticipation",
      description:
        "The magic lies in the moments before revelation. We curate suspense, wonder, and the thrill of discovery.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <HeroSection
        title="Our Story"
        subtitle="The Journey"
        description="Where vision meets execution, and dining becomes art."
        height="medium"
      />

      {/* Origin Story */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="heading-md text-gradient mb-6">The Beginning</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {data.story.origin}
              </p>
            </div>

            <div>
              <h2 className="heading-md text-gradient mb-6">Evolution</h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {data.story.evolution}
              </p>
            </div>

            <div>
              <h2 className="heading-md text-gradient mb-6">Philosophy</h2>
              <p className="text-lg text-white/80 leading-relaxed italic">
                {data.story.philosophy}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-plum-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6">
              Our Mission
            </p>
            <h2 className="heading-lg text-white mb-8">
              Redefining Experience
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              {data.brand.mission}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
              What Drives Us
            </p>
            <h2 className="heading-md text-white">Core Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center group-hover:bg-gold transition-all duration-300">
                  <span className="text-3xl font-bold text-gold group-hover:text-black transition-colors duration-300">
                    {value.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="section-padding bg-gradient-to-br from-plum via-plum-dark to-black">
        <div className="container-custom max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="heading-md text-white mb-8">Our Voice</h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              {data.voice.tone}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {data.voice.adjectives.map((adj, index) => (
                <motion.span
                  key={adj}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-6 py-2 border border-gold/40 text-gold uppercase tracking-wider text-sm hover:bg-gold hover:text-black transition-all duration-300 cursor-default"
                >
                  {adj}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg text-gradient mb-8">
              Experience the Difference
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Ready to step into a world where anticipation is the main course?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/experiences" className="btn-primary">
                Explore Experiences
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
