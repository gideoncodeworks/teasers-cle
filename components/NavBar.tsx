"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import data from "@/context/teasersCLE.json";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Experiences", href: "/experiences" },
    { name: "Menu", href: "/menu" },
    { name: "Gallery", href: "/gallery" },
    { name: "Press", href: "/press" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <motion.h1
              className="text-2xl md:text-3xl font-bold tracking-wider text-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {data.brand.name.toUpperCase()}
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest text-white/80 hover:text-gold transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className="w-full h-[2px] bg-gold block"
            />
            <motion.span
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
              className="w-full h-[2px] bg-gold block"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className="w-full h-[2px] bg-gold block"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-6 border-t border-gold/20 mt-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg uppercase tracking-widest text-white/80 hover:text-gold transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
