"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Moon, Sparkles, Infinity as InfinityIcon, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const tokens = [
  {
    icon: Moon,
    title: "Luna",
    body: "Our flagship umbrella range — thoughtful, reliable essentials that sit well on any shelf.",
    color: "yellow",
  },
  {
    icon: Sparkles,
    title: "Quality, accessible",
    body: "Commercial pricing without compromising on feel, finish and durability.",
    color: "blue",
  },
  {
    icon: InfinityIcon,
    title: "A complete range",
    body: "Everyday essentials and specialised solutions, all sourced under one dependable supplier.",
    color: "ink",
  },
];

export function LunaSection() {
  return (
    <section
      id="luna"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--blue-soft) 0%, #ffffff 55%, var(--yellow-glow) 100%)",
      }}
    >
      {/* Decorative shapes */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full border-2 border-[var(--blue)]/10"
      />
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-60 -left-40 w-[520px] h-[520px] rounded-full border-2 border-[var(--yellow)]/30"
      />

      <Container className="relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-center">
          <Reveal>
            <Eyebrow tone="accent">What we offer</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.02] tracking-[-0.025em]">
              A look into{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic">Luna.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute inset-x-0 bottom-1 h-3 bg-[var(--yellow)] origin-left rounded-sm -z-0"
                />
              </span>
            </h2>
            <p className="mt-7 max-w-lg text-[17px] leading-relaxed text-[var(--ink-soft)]">
              We make quality accessible with Luna, our comprehensive range of products from
              JMS Trading Ltd. Whether you're seeking everyday essentials or specialised
              solutions, our Luna collection delivers everything you need for reliable
              performance and exceptional value.
            </p>

            {/* Sub-brand logos */}
            <div className="mt-9 flex items-center gap-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                Family
              </span>
              <div className="flex items-center gap-8">
                <div className="h-10 w-auto relative">
                  <Image
                    src="/brand/logo-c.png"
                    alt="Luna Products"
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="h-10 w-auto relative">
                  <Image
                    src="/brand/logo-b.png"
                    alt="Luna Rugs"
                    width={120}
                    height={40}
                    className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button href="/products" arrow>
                Explore the Luna range
              </Button>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/15 bg-white px-5 py-3 text-sm font-medium text-[var(--ink)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors"
              >
                Request catalogue
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {tokens.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, x: 4 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-white p-7 md:p-8"
                >
                  <div
                    aria-hidden
                    className={`absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl transition-opacity duration-500 ${
                      t.color === "yellow"
                        ? "bg-[var(--yellow)]/30"
                        : t.color === "blue"
                        ? "bg-[var(--blue)]/20"
                        : "bg-[var(--ink)]/10"
                    } opacity-0 group-hover:opacity-100`}
                  />
                  <div className="relative flex items-start gap-5">
                    <div
                      className={`flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${
                        t.color === "yellow"
                          ? "bg-[var(--yellow)] text-[var(--ink)]"
                          : t.color === "blue"
                          ? "bg-[var(--blue)] text-white"
                          : "bg-[var(--ink)] text-[var(--yellow)]"
                      }`}
                    >
                      <t.icon className="h-6 w-6" strokeWidth={1.75} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-[26px] text-[var(--ink)] tracking-tight leading-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-muted)]">
                        {t.body}
                      </p>
                    </div>
                    <span className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
