"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InfinityMark } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative pt-4 md:pt-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[22px] md:rounded-[28px] bg-[var(--navy)] text-white grain"
          style={{ minHeight: "min(78svh, 720px)" }}
        >
          {/* Background warehouse photo */}
          <div className="absolute inset-0">
            <Image
              src="/imagery/warehouse.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-55"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/60 to-[var(--navy)]/15" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/80 via-transparent to-transparent" />
          </div>

          {/* Rotating ∞ watermark */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -right-16 w-[320px] h-[320px] text-white/[0.07]"
          >
            <InfinityMark className="w-full h-full" />
          </motion.div>

          {/* Inner content */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Top row */}
            <div className="flex items-center justify-between px-5 md:px-8 lg:px-12 pt-5 md:pt-6">
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
            <div className="flex-1 flex flex-col justify-center px-5 md:px-8 lg:px-12 py-8 md:py-10 lg:py-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display-tight text-[40px] sm:text-[64px] md:text-[84px] lg:text-[108px] xl:text-[120px] text-white max-w-[14ch]"
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
                className="mt-7 md:mt-9 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-5 pr-4 py-3 md:pl-6 md:pr-5 md:py-3.5 font-caps text-[12px] md:text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors shadow-[0_10px_30px_-10px_rgba(255,217,61,0.6)]"
                >
                  Open Your Account Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2.5 font-caps text-[12px] md:text-[13px] text-white hover:text-[var(--yellow)] transition-colors"
                >
                  <span className="inline-flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-full bg-white text-[var(--navy)] hover:bg-[var(--yellow)] transition-colors">
                    <Play className="h-3.5 w-3.5 md:h-4 md:w-4 fill-current translate-x-[1px]" />
                  </span>
                  Watch our story
                </Link>
              </motion.div>
            </div>

            {/* Bottom strip */}
            <div className="border-t border-white/15 backdrop-blur-sm">
              <div className="px-5 md:px-8 lg:px-12 py-4 md:py-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="max-w-md text-[12px] md:text-[14px] text-white/75 leading-relaxed"
                >
                  Delivering unbeatable value in wholesale & distribution — without
                  compromising on quality, reliability or support.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  className="flex items-center gap-4 md:gap-6"
                >
                  <Stat n="7" label="RANGES" />
                  <div className="h-7 w-px bg-white/15" />
                  <Stat n="UK" label="WIDE" />
                  <div className="h-7 w-px bg-white/15" />
                  <Stat n="∞" label="CAPACITY" />
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
      <span className="font-display text-[22px] md:text-[28px] text-[var(--yellow)] leading-none">
        {n}
      </span>
      <span className="font-caps text-[9px] md:text-[10px] text-white/70">
        {label}
      </span>
    </div>
  );
}
