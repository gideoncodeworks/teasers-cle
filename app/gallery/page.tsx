"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  { src: "/brand/gallery1.jpg", alt: "Velvet Ember Event" },
  { src: "/brand/gallery2.jpg", alt: "The Tasting Room" },
  { src: "/brand/gallery3.jpg", alt: "Mirror Dinner" },
  { src: "/brand/gallery4.jpg", alt: "Noir Nights" },
  { src: "/brand/gallery5.jpg", alt: "Whisper & Wine" },
  { src: "/brand/gallery6.jpg", alt: "Eclipse Supper" }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-black text-white p-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-serif text-[#d4af37] mb-8 text-center"
      >
        Gallery
      </motion.h1>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="relative cursor-pointer overflow-hidden rounded-xl bg-[#2b0f18] aspect-square"
            onClick={() => setSelectedImage(image.src)}
          >
            <div className="absolute inset-0 flex items-center justify-center text-6xl font-serif text-[#d4af37]/20">
              {image.alt.charAt(0)}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-3">
              <p className="text-sm text-[#e8b6a9]">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[90vh] bg-[#2b0f18] rounded-lg border border-[#d4af37] p-4"
            >
              <div className="text-center text-white">Image placeholder</div>
            </motion.div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white text-3xl font-bold hover:text-[#d4af37]"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
