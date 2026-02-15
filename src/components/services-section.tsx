"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

function ServiceCard({ title, description, icon, index }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for the tilt
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(normalizedX);
    y.set(normalizedY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <ScrollReveal delay={0.15 * index}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full"
      >
        <div
          className="relative h-full p-8 md:p-10 rounded-2xl bg-card transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(201,169,110,0.12)] group cursor-default"
          style={{
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.05)",
            transform: "translateZ(0)",
          }}
        >
          {/* Gold accent line at top */}
          <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div
            className="mb-6 w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all duration-500"
            style={{ transform: "translateZ(30px)" }}
          >
            {icon}
          </div>

          <h3
            className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-4"
            style={{ transform: "translateZ(25px)" }}
          >
            {title}
          </h3>

          <p
            className="text-muted-foreground text-sm md:text-base leading-relaxed"
            style={{ transform: "translateZ(20px)" }}
          >
            {description}
          </p>

          {/* Subtle bottom CTA */}
          <div
            className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
            style={{ transform: "translateZ(30px)" }}
          >
            <span>Learn more</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

const SERVICES = [
  {
    title: "Wills & Testaments",
    description:
      "Expertly drafted wills that protect your legacy and ensure your wishes are honoured. We guide you through every consideration with discretion and thoroughness.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Trusts & Estate Planning",
    description:
      "Strategic trust structures and comprehensive estate plans that safeguard your assets across generations. We structure with precision and foresight.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
  {
    title: "Tax Compliance",
    description:
      "Navigate the complexities of SARS regulations with confidence. We ensure full compliance while identifying every legitimate opportunity to protect your wealth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-muted/50 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <ScrollReveal>
            <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4">
              Core Focus
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6">
              Specialised in What
              <br />
              <span className="text-gold-gradient">Matters Most</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              We have deliberately focused our practice on three interconnected
              disciplines where deep expertise creates the greatest impact for
              our clients.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Grid with 3D Tilt */}
        <div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          style={{ perspective: "1200px" }}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
