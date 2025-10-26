"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import data from "@/context/teasersCLE.json";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigate: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Experiences", href: "/experiences" },
      { name: "Menu", href: "/menu" },
    ],
    connect: [
      { name: "Gallery", href: "/gallery" },
      { name: "Press", href: "/press" },
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-plum border-t border-gold/20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">
              {data.brand.name}
            </h3>
            <p className="text-sm text-white/60 italic">
              {data.brand.tagline}
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              {data.brand.tone}
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4 uppercase tracking-wider">
              Navigate
            </h4>
            <ul className="space-y-2">
              {footerLinks.navigate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4 uppercase tracking-wider">
              Reach Us
            </h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>{data.contact.email}</p>
              <p>{data.contact.phone}</p>
              <p className="mt-4">{data.contact.address}</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center space-x-6 py-8 border-t border-gold/20">
          <motion.a
            href={data.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#d4af37" }}
            className="text-white/70 hover:text-gold transition-colors"
          >
            <span className="sr-only">Instagram</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </motion.a>
          <motion.a
            href={data.socials.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#d4af37" }}
            className="text-white/70 hover:text-gold transition-colors"
          >
            <span className="sr-only">TikTok</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
            </svg>
          </motion.a>
          <motion.a
            href={data.socials.eventbrite}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: "#d4af37" }}
            className="text-white/70 hover:text-gold transition-colors"
          >
            <span className="sr-only">Eventbrite</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10.307 6.012c-1.398 0-2.535 1.137-2.535 2.535 0 1.398 1.137 2.535 2.535 2.535 1.398 0 2.535-1.137 2.535-2.535 0-1.398-1.137-2.535-2.535-2.535zm7.421 5.07c-1.398 0-2.535 1.137-2.535 2.535 0 1.398 1.137 2.535 2.535 2.535 1.398 0 2.535-1.137 2.535-2.535 0-1.398-1.137-2.535-2.535-2.535z" />
            </svg>
          </motion.a>
          <motion.a
            href={`mailto:${data.contact.email}`}
            whileHover={{ scale: 1.1, color: "#d4af37" }}
            className="text-white/70 hover:text-gold transition-colors"
          >
            <span className="sr-only">Email</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.a>
        </div>

        {/* Copyright */}
        <div className="text-center py-6 border-t border-gold/20">
          <p className="text-sm text-white/50">
            © {currentYear} {data.brand.name}™ — All Rights Reserved
          </p>
          <p className="text-xs text-white/40 mt-2 italic">
            {data.brand.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
