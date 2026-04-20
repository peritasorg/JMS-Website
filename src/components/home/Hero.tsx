"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const features = [
  {
    icon: Truck,
    title: "UK‑Based Wholesale Supply",
    body: "Trade‑friendly carton quantities shipped from our Birmingham warehouse.",
  },
  {
    icon: BadgeCheck,
    title: "Retail‑Oriented Selection",
    body: "Every SKU is chosen for shelf appeal and turnover — not trend chasing.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Quality & Consistency",
    body: "Repeatable standards in product, packaging and delivery — order after order.",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-bg grain">
      <Container className="relative z-10 pt-8 pb-0 md:pt-10">
        {/* Huge two-tone wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hero-wordmark select-none leading-[0.82] whitespace-nowrap"
        >
          <span className="block text-[15vw] sm:text-[13.5vw] md:text-[12.5vw] lg:text-[11.5vw]">
            <span className="text-[var(--ink)]">JMS</span>
            <span className="text-[var(--blue)]"> Trading</span>
          </span>
        </motion.div>

        {/* Row: device mockup + features */}
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12 mt-4 md:mt-6">
          {/* Left: laptop mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="laptop relative"
          >
            <LaptopMock />
            {/* Decorative spark */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -top-4 right-10 text-[var(--blue)]"
            >
              <Sparkles className="h-9 w-9" strokeWidth={1.5} />
            </motion.div>
          </motion.div>

          {/* Right: Why JMS features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.02] tracking-[-0.025em] text-[var(--ink)]">
              Why JMS? The{" "}
              <span className="relative inline-block">
                <span className="mark">ultimate wholesale</span>
              </span>{" "}
              <span className="text-[var(--blue)]">solution.</span>
            </h2>

            <ul className="mt-8 space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                  className="group flex items-start gap-4"
                >
                  <span className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--blue-soft)] text-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white transition-colors duration-300">
                    <f.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="font-semibold text-[15px] text-[var(--ink)] tracking-tight">
                      {f.title}
                    </div>
                    <p className="mt-1 text-[14px] leading-relaxed text-[var(--ink-muted)]">
                      {f.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>

      {/* Bottom CTA strip */}
      <div className="relative z-10 mt-16 md:mt-20 border-t border-[var(--ink)]/10 bg-[var(--ink)] text-white">
        <Container className="flex flex-col items-start gap-6 py-10 md:flex-row md:items-center md:justify-between md:gap-10">
          <div className="flex items-start gap-5">
            <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--yellow)] text-[var(--ink)]">
              <ArrowUpRight className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <div>
              <div className="font-display text-3xl md:text-4xl tracking-[-0.02em]">
                Open Your Account Today!
              </div>
              <p className="mt-1 text-white/70 text-[15px] max-w-xl">
                Join retailers, distributors and online sellers already stocking JMS across
                the UK. Get started now — trade pricing, carton quantities, dedicated support.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button href="/contact" variant="light" size="lg" arrow>
              Open an Account
            </Button>
            <a
              href="tel:+447424553894"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[var(--yellow)] transition-colors"
            >
              <Phone className="h-4 w-4" /> +44 (0) 7424 553 894
            </a>
          </div>
        </Container>
      </div>

      {/* Intro copy — tagline + headline below the bold wordmark area */}
      <div className="relative z-10 border-t border-[var(--line)] bg-[var(--surface)]">
        <Container className="py-16 md:py-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--blue-soft)] text-[var(--blue-deep)] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)]" />
              Better Products · Better Prices · Better Service
            </span>
            <h1 className="mt-7 font-display text-4xl md:text-5xl lg:text-[56px] leading-[1.05] tracking-[-0.025em] text-[var(--ink)]">
              Delivering <span className="mark">unbeatable value</span> in wholesale and
              distribution — without compromising on quality, reliability or support.
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface-muted)] p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[var(--blue)] border border-[var(--line)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Visit us
                  </div>
                  <div className="mt-1 text-[15px] text-[var(--ink)]">
                    JAS House, Titford Lane, Birmingham, B65 0PY
                  </div>
                </div>
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
                  target="_blank"
                  rel="noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 text-sm text-[var(--blue)] hover:text-[var(--blue-deep)]"
                >
                  View on Google <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="mt-4 pt-4 border-t border-[var(--line)] flex flex-wrap gap-x-6 gap-y-3">
                <a
                  href="tel:+447424553894"
                  className="inline-flex items-center gap-2 text-[15px] text-[var(--ink)] hover:text-[var(--blue)]"
                >
                  <Phone className="h-4 w-4 text-[var(--blue)]" /> +44 (0) 7424 553 894
                </a>
                <Link
                  href="/trade-login"
                  className="inline-flex items-center gap-2 text-[15px] text-[var(--ink)] hover:text-[var(--blue)]"
                >
                  <span className="h-1 w-1 rounded-full bg-[var(--yellow)]" /> Trade login
                </Link>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" size="lg" arrow>
                Open Your Account Now
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Browse the catalogue
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

function LaptopMock() {
  return (
    <div className="laptop-screen relative aspect-[16/10] overflow-hidden">
      {/* Browser chrome */}
      <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-2 bg-[#0b1510] px-4 py-2.5 border-b border-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <div className="ml-3 flex-1 max-w-xs rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/60">
          jmstrading.co.uk
        </div>
      </div>

      {/* Screen content */}
      <div className="absolute inset-0 pt-9 bg-[var(--cream)]">
        <div className="relative h-full w-full">
          <Image
            src="/imagery/warehouse.jpg"
            alt="JMS Trading warehouse"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Gradient overlay for content */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)]/85 via-[var(--ink)]/60 to-transparent" />

          {/* Overlay content */}
          <div className="relative z-10 flex h-full flex-col p-5 md:p-8">
            <div className="flex items-center gap-2 text-white">
              <Image
                src="/brand/logo-a.png"
                alt=""
                width={32}
                height={32}
                className="h-7 w-7 object-contain"
              />
              <span className="font-display text-sm tracking-tight">
                JMS <span className="text-[var(--yellow-soft)]">Trading</span>
              </span>
            </div>

            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--ink)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em]">
                Wholesale · Distribution
              </span>
              <div className="mt-4 font-display text-3xl md:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.025em] text-white">
                Wholesale,<br />
                <span className="text-[var(--yellow)]">simplified.</span>
              </div>
              <p className="mt-4 max-w-md text-sm text-white/80 leading-relaxed">
                A comprehensive wholesale range for retailers, distributors and trade buyers
                — household, kitchenware and lifestyle products built to sell.
              </p>
              <div className="mt-5 flex gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white text-[var(--ink)] px-3 py-1.5 text-xs font-medium">
                  Open an Account →
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur border border-white/30 text-white px-3 py-1.5 text-xs font-medium">
                  Catalogue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
