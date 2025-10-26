"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  children?: ReactNode;
  height?: "full" | "tall" | "medium";
}

const HeroSection = ({
  title,
  subtitle,
  description,
  backgroundImage,
  children,
  height = "tall",
}: HeroSectionProps) => {
  const heightClasses = {
    full: "h-screen",
    tall: "h-[80vh]",
    medium: "h-[60vh]",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image or Gradient */}
      {backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-plum-dark via-black to-black" />
      )}

      {/* Content */}
      <div className="relative z-10 container-custom px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle && (
            <motion.p
              className="text-gold uppercase tracking-[0.3em] text-sm md:text-base mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            className="heading-xl text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {description}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-8"
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
