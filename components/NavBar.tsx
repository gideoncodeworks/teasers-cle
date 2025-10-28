"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import data from "@/context/teasersCLE.json";

export default function NavBar() {
  const { brand } = data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experiences", label: "Experiences" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/press", label: "Press" },
    { href: "/takeover", label: "Takeover" },
    { href: "/collective", label: "Collective" },
    { href: "/contact", label: "Join" }
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 z-50 w-full border-b border-emerald/30 bg-hunter/90 px-4 py-3 text-white backdrop-blur-md md:px-8 md:py-4"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-6">
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-28 md:h-12 md:w-40">
              <Image
                src="/brand/logo.png"
                alt={`${brand.name} logo`}
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(0,255,157,0.4)] transition-all group-hover:drop-shadow-[0_0_16px_rgba(213,155,246,0.45)]"
                priority
                sizes="(max-width: 768px) 8rem, 10rem"
              />
            </div>
          </Link>

          <div className="hidden items-center justify-center gap-2 text-[10px] uppercase tracking-[0.15em] text-emerald md:flex md:flex-wrap md:justify-center lg:flex-nowrap lg:gap-3 lg:text-[11px] xl:gap-4 xl:text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap transition-colors duration-300 hover:text-roseGold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-full border border-emerald/40 px-3 py-2 text-xs uppercase tracking-[0.25em] text-emerald transition-colors hover:border-roseGold/60 hover:text-roseGold md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span>Menu</span>
              <span className="relative h-3 w-4">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-full bg-emerald transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-full bg-emerald transition-opacity duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-0.5 w-full bg-emerald transition-transform duration-300 ${
                    isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-4 right-4 top-24 space-y-4 rounded-3xl border border-emerald/40 bg-hunter/95 p-6 text-center shadow-neon"
              onClick={(event) => event.stopPropagation()}
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-full border border-emerald/30 px-4 py-3 text-sm uppercase tracking-[0.3em] text-emerald transition-colors hover:border-roseGold/50 hover:text-roseGold"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
