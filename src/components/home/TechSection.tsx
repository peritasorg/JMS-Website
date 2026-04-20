"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { InfinityMark } from "@/components/Logo";

export function TechSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[var(--navy)] text-white">
      {/* Giant ∞ watermark */}
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -top-32 w-[500px] h-[500px] text-white/5"
      >
        <InfinityMark className="w-full h-full" tone="light" />
      </motion.div>

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16 items-center">
          {/* Left: warehouse card */}
          <Reveal>
            <div className="relative rounded-[22px] overflow-hidden aspect-[5/4]">
              <Image
                src="/imagery/warehouse-2.jpg"
                alt="JMS warehouse operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 via-transparent to-transparent" />

              {/* Collaboration badge overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute top-5 right-5 w-[180px] rounded-2xl bg-[var(--blue-soft)] text-[var(--navy)] p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="font-caps text-[10px] text-[var(--blue-deep)]">
                    Luna collection
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[var(--blue-deep)]" />
                </div>
                <div className="mt-3 w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-[var(--yellow)]" />
                </div>
                <div className="mt-3 font-display text-[14px] leading-tight">
                  Sourced & packaged for UK retail
                </div>
              </motion.div>

              {/* Label bottom-left */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="font-caps text-[11px] text-[var(--yellow)]">
                  ∞ Trade infrastructure
                </div>
                <div className="mt-2 font-display-tight text-[28px] md:text-[34px] text-white leading-[0.95]">
                  Pinpoint order accuracy
                  <br />
                  and dispatch safety
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: copy */}
          <Reveal delay={0.1}>
            <div>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-white/60">
                <ShieldCheck className="h-3.5 w-3.5 text-[var(--yellow)]" />
                Operations
              </div>

              <h2 className="mt-5 font-display-tight text-[44px] md:text-[60px] lg:text-[72px] text-white leading-[0.92]">
                Powered by <span className="text-[var(--yellow)]">next-gen</span>{" "}
                wholesale logistics
              </h2>

              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/75">
                Experience faster, safer and smarter fulfilment with our Birmingham-based
                operation. From sourcing to the shelf — consistent quality, carton-ready
                packaging and full stock visibility.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-6 pr-5 py-3.5 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors"
                >
                  Get Trade Pricing
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <button className="inline-flex items-center gap-3 font-caps text-[13px] text-white hover:text-[var(--yellow)] transition-colors">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-[var(--yellow)] hover:border-[var(--yellow)] hover:text-[var(--navy)] transition-colors">
                    <Play className="h-4 w-4 fill-current translate-x-[1px]" />
                  </span>
                  Watch a demo
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
