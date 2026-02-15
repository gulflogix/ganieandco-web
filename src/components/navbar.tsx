"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { label: "Legacy", href: "#legacy" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When over the hero (not scrolled), use white text so it's visible on the dark background
  const textClass = scrolled ? "text-foreground" : "text-white";
  const mutedTextClass = scrolled ? "text-muted-foreground" : "text-white/70";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          {/* Show light logo when over hero (not scrolled) in light mode, always show light logo in dark mode */}
          <Image
            src="/images/logo-sm-1.png"
            alt="Ganie & Co"
            width={56}
            height={62}
            className={scrolled ? "dark:hidden" : "hidden"}
            priority
          />
          <Image
            src="/images/logo-sm-2.png"
            alt="Ganie & Co"
            width={56}
            height={62}
            className={scrolled ? "hidden dark:block" : "block"}
            priority
          />
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-500 ${textClass}`}>
              Ganie & Co
            </span>
            <span className={`text-[10px] uppercase tracking-[0.25em] transition-colors duration-500 ${mutedTextClass}`}>
              Attorneys
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-500 relative group hover:text-gold ${mutedTextClass}`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-[2px] block transition-colors duration-500 ${scrolled ? 'bg-foreground' : 'bg-white'}`}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className={`w-6 h-[2px] block transition-colors duration-500 ${scrolled ? 'bg-foreground' : 'bg-white'}`}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className={`w-6 h-[2px] block transition-colors duration-500 ${scrolled ? 'bg-foreground' : 'bg-white'}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
