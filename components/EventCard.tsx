"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface EventCardProps {
  event: {
    id: string;
    name: string;
    theme: string;
    date: string;
    description: string;
    location: string;
    tagline: string;
    image: string;
    capacity: number;
    duration: string;
    priceRange: string;
  };
  index: number;
}

const EventCard = ({ event, index }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-plum rounded-none border border-gold/20 hover:border-gold transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-plum-dark">
        <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/50 to-transparent z-10" />
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 bg-gradient-to-br from-plum-light to-plum-dark flex items-center justify-center">
          <span className="text-6xl opacity-20">{event.name.charAt(0)}</span>
        </div>
        <motion.div
          className="absolute inset-0 bg-gold/10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <p className="text-gold text-xs uppercase tracking-widest mb-2">
            {event.theme}
          </p>
          <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
            {event.name}
          </h3>
          <p className="text-sm text-white/60 italic mt-1">{event.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gold/20">
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider">Date</p>
            <p className="text-sm text-white/90">{event.date}</p>
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Location
            </p>
            <p className="text-sm text-white/90">{event.location}</p>
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider">
              Duration
            </p>
            <p className="text-sm text-white/90">{event.duration}</p>
          </div>
          <div>
            <p className="text-xs text-white/50 uppercase tracking-wider">Price</p>
            <p className="text-sm text-white/90">{event.priceRange}</p>
          </div>
        </div>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 btn-secondary"
        >
          Reserve Your Seat
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard;
