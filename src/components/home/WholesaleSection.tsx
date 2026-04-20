"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function WholesaleSection() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1fr_1.6fr] lg:gap-8 items-stretch">
          {/* Left copy */}
          <Reveal>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                  Service & Supply
                </div>
                <h2 className="mt-4 font-display-tight text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] text-[var(--navy)] max-w-[14ch]">
                  Wholesale Supply For Every Retailer
                </h2>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-6 pr-5 py-3 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors"
                >
                  Explore Products
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-8 text-[14px] md:text-[15px] leading-relaxed text-[var(--ink-muted)] max-w-sm">
                We provide complete wholesale supply — from sourcing to dispatch — with
                carton quantities ready for supermarkets, independents and online sellers.
              </p>
            </div>
          </Reveal>

          {/* Right: 2 featured cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Reveal delay={0.1}>
              <FeaturedCard
                label="Bedding · Home"
                title="HOME & BEDDING"
                subtitle="Range"
                image="/imagery/bedding.jpg"
                href="/products/home-bedding"
                color="yellow"
                cta="Browse Range"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <FeaturedCard
                label="Kitchenware"
                title="KITCHENWARE"
                subtitle="Collection"
                image="/imagery/kitchenware.jpg"
                href="/products/kitchenware"
                color="blue"
                cta="See Products"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FeaturedCard({
  label,
  title,
  subtitle,
  image,
  href,
  color,
  cta,
}: {
  label: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
  color: "yellow" | "blue";
  cta: string;
}) {
  const isYellow = color === "yellow";
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
      <Link
        href={href}
        className={`group relative flex flex-col h-full min-h-[420px] md:min-h-[460px] rounded-[22px] overflow-hidden ${
          isYellow ? "bg-[var(--yellow)]" : "bg-[var(--blue)]"
        }`}
      >
        {/* Top color panel with label + title */}
        <div className="relative px-5 md:px-6 pt-5 md:pt-6 pb-5">
          <span
            className={`inline-flex items-center gap-2 rounded-full font-caps text-[10px] px-3 py-1.5 ${
              isYellow
                ? "bg-[var(--navy)] text-white"
                : "bg-white text-[var(--navy)]"
            }`}
          >
            ∞ {label}
          </span>
          <div
            className={`mt-4 font-display-tight text-[28px] md:text-[32px] lg:text-[34px] leading-[0.95] ${
              isYellow ? "text-[var(--navy)]" : "text-white"
            }`}
          >
            {title}
            <br />
            <span className="opacity-80 text-[22px] md:text-[24px] lg:text-[26px] lowercase italic font-normal">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Image area */}
        <div className="relative flex-1 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <span
              className={`inline-flex items-center gap-2 rounded-full font-caps text-[12px] px-5 py-2.5 ${
                isYellow
                  ? "bg-[var(--navy)] text-white"
                  : "bg-white text-[var(--navy)]"
              } btn-shine`}
            >
              {cta} <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${
                isYellow
                  ? "bg-[var(--navy)] text-white"
                  : "bg-white text-[var(--navy)]"
              } group-hover:rotate-45 transition-transform duration-500`}
            >
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
