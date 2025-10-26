"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experiences", label: "Experiences" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/press", label: "Press" },
    { href: "/contact", label: "Join" },
  ];

  return (
    <motion.nav
      className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md border-b border-[#2b0f18]/70 text-white py-4 px-8 flex justify-between items-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/" className="text-2xl font-serif text-[#d4af37]">Teasers CLE</Link>
      <div className="flex gap-6 text-sm tracking-wide">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-[#e8b6a9] transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
