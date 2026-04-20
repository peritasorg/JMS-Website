"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { InfinityMark } from "@/components/Logo";

export function CTASection() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[24px] md:rounded-[32px] bg-[var(--yellow)] text-[var(--navy)]">
          {/* Background ∞ */}
          <motion.div
            aria-hidden
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -left-20 -bottom-24 w-[440px] h-[440px] opacity-10"
          >
            <InfinityMark className="w-full h-full text-[var(--navy)]" />
          </motion.div>

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-center p-8 md:p-12 lg:p-16">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--navy)]/70">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--navy)]" />
                Join JMS Today
              </div>
              <h2 className="mt-5 font-display-tight text-[44px] md:text-[64px] lg:text-[80px] leading-[0.9]">
                Ready to stock{" "}
                <span className="italic">what sells?</span>
              </h2>
              <p className="mt-6 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-[var(--navy)]/80">
                Open a trade account today for access to our complete catalogue,
                competitive bulk pricing and dedicated account support across every
                category.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--navy)] text-white pl-6 pr-5 py-3.5 font-caps text-[13px] btn-shine hover:bg-[var(--navy-soft)] transition-colors"
                >
                  Sign Up Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+447424553894"
                  className="inline-flex items-center gap-3 font-caps text-[13px] text-[var(--navy)] hover:text-[var(--blue-deep)]"
                >
                  <Phone className="h-4 w-4" />
                  +44 (0) 7424 553 894
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative aspect-square max-w-sm mx-auto">
                <motion.div
                  animate={{ rotate: [0, 2, 0, -2, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/brand/logo-e.png"
                    alt="JMS Product Catalogue"
                    fill
                    sizes="400px"
                    className="object-contain drop-shadow-[0_30px_40px_rgba(10,24,52,0.3)]"
                  />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
