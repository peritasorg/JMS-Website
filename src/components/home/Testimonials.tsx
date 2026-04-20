"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    rating: 4.8,
    quote:
      "Top-notch wholesale service with expert, dedicated support for all our trade orders. Reliable lead times and consistent quality.",
    name: "Martin Edwards",
    role: "Store Manager",
    initial: "ME",
    color: "var(--yellow)",
  },
  {
    rating: 4.7,
    quote:
      "We trust JMS Trading's dedicated team and highly recommend them as a reliable UK wholesale partner for our stores.",
    name: "James Atkinson",
    role: "Retail Director",
    initial: "JA",
    color: "var(--blue)",
  },
  {
    rating: 5.0,
    quote:
      "Exceptional 24/7 trade support — a professional, fully committed partner who solves headaches before they become problems.",
    name: "Natasha Portman",
    role: "Business Owner",
    initial: "NP",
    color: "var(--red)",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-16 md:py-24 bg-[var(--cream)]">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                What our partners say
              </div>
              <h2 className="mt-5 font-display-tight text-[44px] md:text-[56px] lg:text-[64px] text-[var(--navy)] leading-[0.92]">
                Our trade partners' testimonials
              </h2>
            </div>
          </Reveal>
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--navy)] hover:bg-[var(--yellow)] hover:border-[var(--yellow)] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-white hover:bg-[var(--yellow)] hover:text-[var(--navy)] transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-[22px] border border-[var(--line)] bg-white p-6 md:p-7 hover-lift ${
                idx === i ? "ring-2 ring-[var(--yellow)]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-caps text-[11px] text-[var(--ink-muted)]">
                  [ CLIENT ]
                </div>
                <div className="inline-flex items-center gap-1">
                  <span className="font-display text-[18px] text-[var(--navy)]">
                    {t.rating}
                  </span>
                  <Star className="h-4 w-4 fill-[var(--yellow-hot)] text-[var(--yellow-hot)]" strokeWidth={1} />
                </div>
              </div>

              <p className="mt-5 text-[15px] leading-relaxed text-[var(--ink)]">
                "{t.quote}"
              </p>

              <div className="mt-6 pt-5 border-t border-[var(--line)] flex items-center gap-3">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center font-display text-[14px]"
                  style={{
                    background: t.color,
                    color: t.color === "var(--yellow)" ? "#0a1834" : "white",
                  }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-display text-[16px] text-[var(--navy)] leading-none">
                    {t.name}
                  </div>
                  <div className="text-[11px] text-[var(--ink-muted)] mt-1">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
