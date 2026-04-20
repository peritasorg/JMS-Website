"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InfinityMark } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative pt-5 md:pt-6">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-[var(--navy)] text-white grain"
        >
          {/* Background warehouse photo */}
          <div className="absolute inset-0">
            <Image
              src="/imagery/warehouse.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/55 to-[var(--navy)]/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
          </div>

          {/* Big ∞ watermark background */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-20 w-[400px] h-[400px] text-[var(--yellow)]/8 opacity-40"
          >
            <InfinityMark className="w-full h-full" />
          </motion.div>

          {/* Inner content */}
          <div className="relative z-10 min-h-[560px] md:min-h-[640px] lg:min-h-[720px] flex flex-col">
            {/* Top row: rating + see details */}
            <div className="flex items-center justify-between px-6 md:px-10 lg:px-14 pt-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5">
                <span className="flex items-center gap-[1px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-[var(--yellow)] text-[var(--yellow)]"
                      strokeWidth={1}
                    />
                  ))}
                </span>
                <span className="font-caps text-[11px]">5.0 · Google</span>
              </div>
              <Link
                href="/products"
                className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-5 py-2.5 font-caps text-[12px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors"
              >
                See Catalogue <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Main headline */}
            <div className="flex-1 flex flex-col justify-center px-6 md:px-10 lg:px-14 py-10 md:py-16">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display-tight text-[54px] sm:text-[84px] md:text-[108px] lg:text-[136px] text-white max-w-[14ch]"
              >
                Better <span className="text-[var(--yellow)]">Products.</span>
                <br />
                Better <span className="text-[var(--yellow)]">Prices.</span>
                <br />
                Better <span className="text-[var(--yellow)]">Service.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-6 pr-5 py-3.5 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors shadow-[0_10px_30px_-10px_rgba(255,217,61,0.6)]"
                >
                  Open Your Account Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 font-caps text-[13px] text-white hover:text-[var(--yellow)] transition-colors"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--navy)] hover:bg-[var(--yellow)] transition-colors">
                    <Play className="h-4 w-4 fill-current translate-x-[1px]" />
                  </span>
                  Watch our story
                </Link>
              </motion.div>
            </div>

            {/* Bottom strip */}
            <div className="border-t border-white/15 backdrop-blur-sm">
              <div className="px-6 md:px-10 lg:px-14 py-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="max-w-md text-[14px] md:text-[15px] text-white/80 leading-relaxed"
                >
                  Delivering unbeatable value in wholesale & distribution — without
                  compromising on quality, reliability or support.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="flex items-center gap-6 md:gap-8"
                >
                  <Stat n="7" label="PRODUCT RANGES" />
                  <div className="h-8 w-px bg-white/15" />
                  <Stat n="UK" label="WIDE DISTRIBUTION" />
                  <div className="hidden md:block h-8 w-px bg-white/15" />
                  <Stat n="∞" label="TRADE CAPACITY" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-display text-[28px] md:text-[34px] text-[var(--yellow)] leading-none">
        {n}
      </span>
      <span className="font-caps text-[10px] md:text-[11px] text-white/70">
        {label}
      </span>
    </div>
  );
}
