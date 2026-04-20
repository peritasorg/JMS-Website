"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Package, ShoppingBag, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Package,
    n: "01",
    title: "Wholesale supply at scale",
    body: "A broad, continuously evolving product range, supplied in trade-friendly carton quantities to support volume purchasing and efficient stock management.",
    theme: "blue",
  },
  {
    icon: ShoppingBag,
    n: "02",
    title: "Product selection that sells",
    body: "Every item is chosen for practicality, durability, and shelf appeal — ensuring strong turnover across supermarkets, independent retailers and online sellers.",
    theme: "yellow",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Reliable quality & consistency",
    body: "We prioritise product standards, packaging quality and repeatability, so customers can reorder with confidence and minimal risk.",
    theme: "ink",
  },
];

export function PillarsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white">
      {/* Decorative blurs */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--blue)]/5 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--yellow)]/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow tone="accent">What we do</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
              At JMS, we don't chase{" "}
              <span className="relative inline-block">
                <span className="relative z-10">trends</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute inset-x-0 bottom-1 h-3 bg-[var(--yellow)] origin-left rounded-sm -z-0"
                />
              </span>
              {" "}for the sake of it.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-2xl">
              We focus on products that perform, pricing that works, and partnerships built
              on trust and reliability.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative h-full overflow-hidden rounded-3xl p-8 md:p-10 ${
                  p.theme === "blue"
                    ? "bg-gradient-to-br from-[var(--blue)] to-[var(--blue-deep)] text-white"
                    : p.theme === "yellow"
                    ? "bg-gradient-to-br from-[var(--yellow)] to-[var(--yellow-soft)] text-[var(--ink)]"
                    : "bg-gradient-to-br from-[var(--ink)] to-[var(--ink-soft)] text-white"
                }`}
              >
                {/* Decorative number */}
                <div
                  aria-hidden
                  className={`absolute -right-4 -top-12 font-display text-[220px] font-semibold tracking-[-0.04em] leading-none select-none ${
                    p.theme === "yellow" ? "text-white/20" : "text-white/[0.06]"
                  }`}
                >
                  {p.n}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-display text-sm tracking-[0.22em] font-medium ${
                        p.theme === "yellow" ? "text-[var(--ink)]/70" : "text-white/60"
                      }`}
                    >
                      {p.n}
                    </span>
                    <span
                      className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
                        p.theme === "blue"
                          ? "bg-white/15 text-[var(--yellow)]"
                          : p.theme === "yellow"
                          ? "bg-[var(--ink)] text-[var(--yellow)]"
                          : "bg-white/10 text-[var(--yellow)]"
                      }`}
                    >
                      <p.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                  </div>
                  <h3 className="mt-10 font-display text-[26px] md:text-[30px] leading-tight tracking-tight">
                    {p.title}
                  </h3>
                  <p
                    className={`mt-4 text-[15px] leading-relaxed ${
                      p.theme === "yellow" ? "text-[var(--ink)]/80" : "text-white/75"
                    }`}
                  >
                    {p.body}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
