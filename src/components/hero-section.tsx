"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with scenic blur placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #2C3E50 0%, #34495E 30%, #1a1a2e 60%, #16213e 100%)",
        }}
      >
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
      </div>

      {/* Decorative gold line accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Glassmorphism Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 glass rounded-2xl px-8 py-12 md:px-16 md:py-20 max-w-3xl mx-6 text-center"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        {/* Decorative element */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "3rem" }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-[2px] bg-gold mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-gold text-xs uppercase tracking-[0.35em] font-medium mb-6"
        >
          Established 1976 &bull; Pietermaritzburg
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
        >
          Five Decades of
          <br />
          <span className="text-gold-gradient">Legal Mastery</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-white/70 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Guiding families, businesses, and estates through the complexities of
          law with unwavering integrity and precision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-midnight font-semibold text-sm rounded-lg hover:bg-gold-light transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.4)] hover:shadow-[0_8px_30px_rgba(201,169,110,0.5)] hover:-translate-y-0.5"
          >
            Book a Consultation
          </a>
          <a
            href="#legacy"
            className="inline-flex items-center justify-center px-8 py-3.5 text-white/90 font-medium text-sm rounded-lg border border-white/20 hover:border-gold/50 hover:text-gold transition-all duration-300"
          >
            Our Legacy
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
