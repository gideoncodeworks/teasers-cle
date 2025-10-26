"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import data from "@/context/teasersCLE.json";

export default function NavBar() {
  const { brand } = data;
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
      className="w-full fixed top-0 z-50 bg-hunter/90 backdrop-blur-md border-b border-emerald/30 text-white py-3 md:py-4 px-4 md:px-8 flex justify-between items-center"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative h-10 w-32 md:h-12 md:w-40">
          <Image
            src="/brand/logo.png"
            alt={`${brand.name} logo`}
            fill
            className="object-contain drop-shadow-[0_0_12px_rgba(0,255,157,0.4)] group-hover:drop-shadow-[0_0_16px_rgba(0,255,157,0.4)] transition-all"
            priority
            sizes="(max-width: 768px) 8rem, 10rem"
          />
        </div>
        <span className="hidden md:block text-2xl font-serif neon-text tracking-wide">
          {brand.name}
        </span>
      </Link>
      <div className="flex gap-3 md:gap-6 text-xs md:text-sm tracking-wide uppercase">
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-roseGold transition-colors duration-300 text-emerald"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
