"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  MapPin,
  Phone,
  Star,
  Truck,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GoogleTrustBar } from "@/components/GoogleTrustBar";

const pillars = [
  { icon: Truck, label: "UK‑based wholesale" },
  { icon: Boxes, label: "Retail‑ready packs" },
  { icon: BadgeCheck, label: "Consistent quality" },
  { icon: Star, label: "Trade‑focused" },
];

const marquee = [
  "HOME & BEDDING",
  "TRAVEL ACCESSORIES",
  "HARDWARE",
  "STATIONERY",
  "RUGS",
  "KITCHENWARE",
  "BATHROOM ESSENTIALS",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div aria-hidden className="absolute inset-0 hero-bg" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(var(--ink)_1px,transparent_1px),linear-gradient(90deg,var(--ink)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      {/* Floating yellow blob */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-[var(--yellow)]/30 blur-[100px]"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -bottom-40 -left-20 w-[480px] h-[480px] rounded-full bg-[var(--blue)]/15 blur-[110px]"
      />

      <Container className="relative z-10 pt-10 md:pt-14 pb-0">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16 items-center">
          {/* Left: headline + copy + CTAs + contact */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-[var(--blue)]/20 bg-[var(--blue-soft)] pl-2 pr-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--blue-deep)]"
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--blue)] text-white text-[9px]">★</span>
              Better Products · Better Prices · Better Service
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-[42px] leading-[1.02] sm:text-[56px] md:text-[64px] lg:text-[76px] tracking-[-0.025em] text-[var(--ink)]"
            >
              Delivering{" "}
              <span className="relative inline-block">
                <span className="relative z-10">unbeatable</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-x-0 bottom-[0.1em] h-[0.35em] origin-left bg-[var(--yellow)] -z-0 rounded-sm"
                />
              </span>{" "}
              value in wholesale &{" "}
              <span className="text-[var(--blue)]">distribution.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 max-w-xl text-[17px] leading-relaxed text-[var(--ink-muted)]"
            >
              UK‑based wholesale supplier of household, kitchenware and lifestyle products
              for retailers, distributors and trade buyers — without compromising on
              quality, reliability or support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button href="/contact" size="lg" arrow>
                Open Your Account Now
              </Button>
              <Button href="/products" variant="outline" size="lg">
                Browse the catalogue
              </Button>
            </motion.div>

            {/* Google reviews trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6"
            >
              <GoogleTrustBar />
            </motion.div>

            {/* Pillars */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
              }}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            >
              {pillars.map((p) => (
                <motion.li
                  key={p.label}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="inline-flex items-center gap-2 text-[14px] text-[var(--ink-soft)]"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white border border-[var(--line)] text-[var(--blue)]">
                    <p.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                  </span>
                  {p.label}
                </motion.li>
              ))}
            </motion.ul>

            {/* Quick contact strip */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-[var(--line)] bg-white/70 backdrop-blur px-5 py-4"
            >
              <a
                href="tel:+447424553894"
                className="inline-flex items-center gap-2 text-sm text-[var(--ink)] hover:text-[var(--blue)] transition-colors"
              >
                <Phone className="h-4 w-4 text-[var(--blue)]" />
                +44 (0) 7424 553 894
              </a>
              <div className="hidden sm:block h-4 w-px bg-[var(--line)]" />
              <div className="inline-flex items-start gap-2 text-sm text-[var(--ink-muted)]">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--blue)]" />
                JAS House, Titford Lane, Birmingham · B65 0PY
              </div>
              <div className="hidden sm:block h-4 w-px bg-[var(--line)]" />
              <Link
                href="/trade-login"
                className="inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] hover:text-[var(--blue)]"
              >
                Trade login <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: warehouse image with overlays */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      {/* Marquee strip */}
      <div className="relative z-10 mt-16 md:mt-24 border-y border-[var(--line)] bg-[var(--ink)] text-white overflow-hidden">
        <div className="marquee py-5">
          <div className="marquee__track">
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 font-display text-[18px] md:text-[22px] tracking-[-0.01em] whitespace-nowrap"
              >
                {t}
                <span className="text-[var(--yellow)]">✦</span>
              </span>
            ))}
          </div>
          <div className="marquee__track" aria-hidden>
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 font-display text-[18px] md:text-[22px] tracking-[-0.01em] whitespace-nowrap"
              >
                {t}
                <span className="text-[var(--yellow)]">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-[4/5] w-full max-w-xl mx-auto">
      {/* Main warehouse image card */}
      <div className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_40px_80px_-20px_rgba(17,29,21,0.35)]">
        <Image
          src="/imagery/warehouse.jpg"
          alt="JMS Trading warehouse — Birmingham"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/65 via-[var(--ink)]/20 to-transparent" />

        {/* Top-left badge */}
        <div className="absolute top-5 left-5 flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)] animate-pulse" />
            Live warehouse
          </span>
        </div>


        {/* Bottom overlay content */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-white">
            <div className="flex items-start gap-3">
              <Image
                src="/brand/logo-a.png"
                alt=""
                width={44}
                height={44}
                className="h-10 w-10 object-contain brightness-0 invert opacity-80"
              />
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--yellow)]">
                  The Luna Collection
                </div>
                <div className="mt-1 font-display text-2xl md:text-3xl leading-tight tracking-[-0.02em]">
                  Wholesale that works.
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/80">
                  Everyday essentials & specialised solutions — sourced, packaged and shipped
                  from our Birmingham warehouse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat card - bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-4 top-[38%] w-[210px] rounded-2xl bg-white p-4 shadow-[0_20px_40px_-10px_rgba(17,29,21,0.25)] border border-[var(--line)]"
      >
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--blue-soft)] text-[var(--blue-deep)]">
            <Truck className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <div className="font-display text-[18px] text-[var(--ink)] leading-none tracking-tight">
              Trade‑friendly
            </div>
            <div className="mt-0.5 text-[12px] text-[var(--ink-muted)]">
              Carton quantities
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating accent sticker - top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 8 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-3 -right-3 md:-right-6 w-[120px] h-[120px] rounded-full bg-[var(--yellow)] text-[var(--ink)] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(17,29,21,0.35)]"
      >
        <div className="text-center">
          <div className="font-display text-[11px] uppercase tracking-[0.18em] opacity-80">Since</div>
          <div className="font-display text-[32px] leading-none tracking-[-0.02em]">2024</div>
          <div className="font-display text-[9px] uppercase tracking-[0.18em] mt-0.5 opacity-80">UK · B65</div>
        </div>
      </motion.div>
    </div>
  );
}
