"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea";
  required: boolean;
}

const FORM_FIELDS: FormField[] = [
  { name: "fullName", label: "Full Name", type: "text", required: true },
  { name: "email", label: "Email Address", type: "email", required: true },
  { name: "phone", label: "Phone Number", type: "tel", required: false },
  { name: "message", label: "How can we assist you?", type: "textarea", required: true },
];

function FloatingInput({ field }: { field: FormField }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const isActive = focused || value.length > 0;

  const baseClasses =
    "w-full bg-transparent border border-border rounded-lg px-4 text-foreground text-sm transition-all duration-300 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/30";

  if (field.type === "textarea") {
    return (
      <div className="relative">
        <textarea
          name={field.name}
          required={field.required}
          rows={4}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${baseClasses} pt-6 pb-3 resize-none`}
        />
        <label
          className={`absolute left-4 transition-all duration-300 pointer-events-none ${
            isActive
              ? "top-2 text-xs text-gold"
              : "top-4 text-sm text-muted-foreground"
          }`}
        >
          {field.label}
          {field.required && <span className="text-gold ml-0.5">*</span>}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        type={field.type}
        name={field.name}
        required={field.required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${baseClasses} h-14 pt-4 pb-1`}
      />
      <label
        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
          isActive
            ? "top-2 text-xs text-gold"
            : "top-1/2 -translate-y-1/2 text-sm text-muted-foreground"
        }`}
      >
        {field.label}
        {field.required && <span className="text-gold ml-0.5">*</span>}
      </label>
    </div>
  );
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Optimistic UI - show success immediately
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-background overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-gold/[0.02] rounded-full blur-3xl translate-x-1/2" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Info */}
          <div>
            <ScrollReveal>
              <p className="text-gold text-xs uppercase tracking-[0.3em] font-medium mb-4">
                Get in Touch
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-6">
                Begin Your
                <br />
                <span className="text-gold-gradient">Consultation</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10">
                Every great legal outcome begins with a conversation. Reach out
                to discuss your needs — there is no obligation, only the promise
                of honest, expert guidance.
              </p>
            </ScrollReveal>

            {/* Contact Details */}
            <div className="space-y-6">
              <ScrollReveal delay={0.3}>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Office</p>
                    <p className="text-sm text-muted-foreground">Pietermaritzburg, KwaZulu-Natal</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.35}>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Email</p>
                    <p className="text-sm text-muted-foreground">info@ganieandco.co.za</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-0.5">Phone</p>
                    <p className="text-sm text-muted-foreground">+27 (33) 000 0000</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Right Column: Form */}
          <ScrollReveal delay={0.2} direction="right">
            <div
              className="p-8 md:p-10 rounded-2xl bg-card"
              style={{
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.05)",
              }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                      Thank You
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      We&apos;ll be in touch within 24 hours with next steps.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {FORM_FIELDS.map((field) => (
                      <FloatingInput key={field.name} field={field} />
                    ))}

                    <button
                      type="submit"
                      className="w-full h-14 bg-gold text-midnight font-semibold text-sm rounded-lg hover:bg-gold-light transition-all duration-300 shadow-[0_4px_20px_rgba(201,169,110,0.3)] hover:shadow-[0_8px_30px_rgba(201,169,110,0.4)] hover:-translate-y-0.5 active:translate-y-0"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      Your information is kept strictly confidential.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
