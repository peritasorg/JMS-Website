"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  PackageCheck,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GoogleTrustBar } from "@/components/GoogleTrustBar";

const marquee = [
  "HOME & BEDDING",
  "TRAVEL ACCESSORIES",
  "HARDWARE",
  "STATIONERY",
  "RUGS",
  "KITCHENWARE",
  "BATHROOM ESSENTIALS",
];

const pillars = [
  { icon: Truck, label: "UK-based wholesale" },
  { icon: Boxes, label: "Retail-ready packs" },
  { icon: BadgeCheck, label: "Consistent quality" },
  { icon: Zap, label: "Trade-focused" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative pt-8 pb-0">
        {/* The big dark hero card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[28px] md:rounded-[36px] grain"
        >
          {/* Warehouse background image */}
          <div className="absolute inset-0">
            <Image
              src="/imagery/warehouse.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/95 via-[var(--ink)]/75 to-[var(--ink)]/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/90 via-[var(--ink)]/20 to-transparent" />
          </div>

          {/* Animated glows */}
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[var(--blue)]/40 blur-[100px]"
          />
          <motion.div
            aria-hidden
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 0.3 }}
            className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-[var(--yellow)]/20 blur-[110px]"
          />

          {/* Floating sparkle particles */}
          <FloatingSparkles />

          <div className="relative z-10 px-6 sm:px-10 md:px-14 lg:px-16 pt-14 pb-14 md:pt-20 md:pb-20 lg:pt-24 lg:pb-28">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-10">
              {/* LEFT */}
              <div>
                {/* Tagline pill */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur border border-white/20 pl-2 pr-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--yellow)] text-[var(--ink)] text-[9px] font-bold">
                    ✦
                  </span>
                  Wholesale · Distribution · Birmingham UK
                </motion.span>

                {/* Tri-color stacked headline */}
                <div className="mt-8 font-display leading-[0.95] tracking-[-0.03em]">
                  {["Products.", "Prices.", "Service."].map((word, i) => (
                    <motion.div
                      key={word}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4 + i * 0.12,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-[52px] sm:text-[72px] md:text-[88px] lg:text-[104px]"
                    >
                      <span className="text-white">Better</span>{" "}
                      <span className="text-[var(--yellow)] italic" style={{ fontWeight: 700 }}>
                        {word}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="mt-9 max-w-lg text-[16px] md:text-[17px] leading-relaxed text-white/80"
                >
                  Delivering unbeatable value in wholesale and distribution — without
                  compromising on quality, reliability or support. UK-based supplier of
                  household, kitchenware and lifestyle products.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="mt-10 flex flex-wrap items-center gap-3"
                >
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--yellow)] text-[var(--ink)] px-7 py-4 text-[15px] font-semibold btn-shine transition-all hover:bg-[var(--yellow-glow)] hover:scale-[1.02] shadow-[0_10px_30px_-10px_rgba(255,236,25,0.5)]"
                  >
                    Open Your Account Now
                    <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white px-6 py-4 text-[15px] font-medium hover:bg-white hover:text-[var(--ink)] transition-colors"
                  >
                    Browse the catalogue
                  </Link>
                </motion.div>

                {/* Google trust bar */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="mt-8"
                >
                  <GoogleTrustBar tone="dark" />
                </motion.div>
              </div>

              {/* RIGHT — floating image + catalogue book */}
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative hidden lg:block"
              >
                <HeroRightVisual />
              </motion.div>
            </div>

            {/* Bottom pillars strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mt-14 lg:mt-20 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-5"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-3 text-white"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur border border-white/20 text-[var(--yellow)]">
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="text-[13px] md:text-[14px] font-medium">{p.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>

      {/* Marquee strip */}
      <div className="mt-10 md:mt-14 border-y border-[var(--line)] bg-[var(--blue)] text-white overflow-hidden">
        <div className="marquee py-5">
          <div className="marquee__track">
            {[...marquee, ...marquee].map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-4 font-display text-[18px] md:text-[24px] tracking-[-0.01em] whitespace-nowrap"
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
                className="inline-flex items-center gap-4 font-display text-[18px] md:text-[24px] tracking-[-0.01em] whitespace-nowrap"
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

function FloatingSparkles() {
  const dots = [
    { top: "18%", left: "68%", delay: 0, color: "yellow" },
    { top: "35%", left: "92%", delay: 0.8, color: "blue" },
    { top: "68%", left: "48%", delay: 1.6, color: "yellow" },
    { top: "82%", left: "76%", delay: 0.4, color: "white" },
    { top: "12%", left: "42%", delay: 2, color: "white" },
  ];
  return (
    <>
      {dots.map((d, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0.4, 1, 0],
            scale: [0, 1, 0.7, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-2 w-2 rounded-full"
          style={{
            top: d.top,
            left: d.left,
            background:
              d.color === "yellow"
                ? "var(--yellow)"
                : d.color === "blue"
                ? "var(--blue)"
                : "rgba(255,255,255,0.8)",
            boxShadow:
              d.color === "yellow"
                ? "0 0 20px rgba(255,236,25,0.7)"
                : d.color === "blue"
                ? "0 0 20px rgba(29,101,209,0.7)"
                : "0 0 12px rgba(255,255,255,0.6)",
          }}
        />
      ))}
    </>
  );
}

function HeroRightVisual() {
  return (
    <div className="relative h-full min-h-[480px]">
      {/* Main warehouse mini-card (angled) */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 1.5, 0, -1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: "3deg" }}
        className="absolute top-4 right-4 w-[340px] h-[240px] rounded-[20px] overflow-hidden border border-white/20 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
      >
        <Image
          src="/imagery/warehouse-2.jpg"
          alt="JMS warehouse"
          fill
          sizes="340px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/40 to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--ink)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--blue)] animate-pulse" />
          Birmingham · Live
        </div>
      </motion.div>

      {/* Catalogue book (main floating element) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ rotate: "-6deg" }}
        className="absolute bottom-6 left-2 w-[300px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)]"
      >
        <Image
          src="/brand/logo-e.png"
          alt="JMS Trading product catalogue"
          width={600}
          height={750}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Yellow since sticker */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 10 }}
        transition={{ duration: 0.7, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 w-[108px] h-[108px] rounded-full bg-[var(--yellow)] text-[var(--ink)] flex items-center justify-center shadow-[0_15px_30px_-10px_rgba(255,236,25,0.5)]"
      >
        <div className="text-center">
          <div className="font-display text-[9px] uppercase tracking-[0.18em] opacity-80">
            Since
          </div>
          <div className="font-display text-[28px] leading-none tracking-[-0.02em] font-semibold">
            2024
          </div>
          <div className="font-display text-[8px] uppercase tracking-[0.18em] mt-0.5 opacity-80">
            UK · B65
          </div>
        </div>
      </motion.div>

      {/* Floating stat card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-20 right-0 rounded-2xl bg-white/95 backdrop-blur p-4 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.25)] border border-white/40"
      >
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--blue-soft)] text-[var(--blue)]">
            <PackageCheck className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <div className="font-display text-[17px] text-[var(--ink)] leading-none">
              7 ranges
            </div>
            <div className="mt-1 text-[11px] text-[var(--ink-muted)]">
              under one roof
            </div>
          </div>
        </div>
      </motion.div>

      {/* Small spinning sparkle */}
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-6 text-[var(--yellow)]"
      >
        <Sparkles className="h-6 w-6" strokeWidth={1.5} />
      </motion.div>
    </div>
  );
}
