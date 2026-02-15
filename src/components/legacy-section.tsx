"use client";

import { ScrollReveal } from "./scroll-reveal";

const MILESTONES = [
  { year: "1976", event: "Founded in Pietermartzburg by the Ganie family" },
  { year: "1990s", event: "Expanded into estate planning & trust administration" },
  { year: "2000s", event: "Recognised as a leading firm in wills & tax compliance" },
  { year: "Today", event: "50 years of trusted legal counsel, still family-led" },
] as const;

export function LegacySection() {
  return (
    <section
      id="legacy"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Subtle decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/[0.03] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text */}
          <div>
            <ScrollReveal>
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4">
                Our Legacy
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6">
                Half a Century of
                <br />
                <span className="text-gold-gradient">Trusted Counsel</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                Since 1976, Ganie & Co has been a cornerstone of legal
                excellence in Pietermaritzburg. What began as a commitment to
                serve our community has grown into a legacy spanning five
                decades.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our practice is built on the belief that exceptional legal
                counsel should be both accessible and uncompromising. Every
                client receives the personal attention and depth of expertise
                that has defined our firm for generations.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Timeline */}
          <div className="relative">
            {/* Vertical connecting line */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />

            <div className="space-y-10">
              {MILESTONES.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={0.15 * index} direction="right">
                  <div className="flex gap-6 items-start group">
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-gold/60 bg-background flex items-center justify-center group-hover:border-gold transition-colors duration-300">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      </div>
                    </div>

                    {/* Content card */}
                    <div
                      className="flex-1 p-6 rounded-xl bg-card transition-all duration-500 group-hover:-translate-y-0.5"
                      style={{
                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <span className="text-gold font-serif text-xl font-bold block mb-1.5">
                        {milestone.year}
                      </span>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {milestone.event}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <ScrollReveal delay={0.3}>
          <div
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10 rounded-2xl bg-card"
            style={{
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.05)",
            }}
          >
            {[
              { value: "50+", label: "Years of Practice" },
              { value: "3", label: "Generations Served" },
              { value: "1000+", label: "Families Guided" },
              { value: "100%", label: "Client Focused" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <span className="font-serif text-3xl md:text-4xl font-bold text-gold-gradient block mb-1">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-xs md:text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
