"use client";

import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-sm-1.png"
              alt="Ganie & Co"
              width={48}
              height={53}
              className="dark:hidden"
            />
            <Image
              src="/images/logo-sm-2.png"
              alt="Ganie & Co"
              width={48}
              height={53}
              className="hidden dark:block"
            />
            <div>
              <span className="font-serif text-base font-semibold text-foreground block">
                Ganie & Co
              </span>
              <span className="text-xs text-muted-foreground">
                Attorneys &bull; Est. 1976
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#legacy" className="hover:text-gold transition-colors duration-300">
              Legacy
            </a>
            <a href="#services" className="hover:text-gold transition-colors duration-300">
              Services
            </a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            &copy; {currentYear} Ganie & Co Attorneys.
            <br className="md:hidden" />
            <span className="md:ml-1">All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
