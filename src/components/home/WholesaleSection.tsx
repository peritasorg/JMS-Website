"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function WholesaleSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.6fr] lg:gap-10 items-stretch">
          {/* Left copy */}
          <Reveal>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                  Service & Supply
                </div>
                <h2 className="mt-5 font-display-tight text-[44px] md:text-[56px] lg:text-[64px] text-[var(--navy)] max-w-[14ch]">
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
              <p className="mt-10 text-[15px] leading-relaxed text-[var(--ink-muted)] max-w-sm">
                We provide complete wholesale supply — from sourcing to dispatch — with
                carton quantities ready for supermarkets, independents and online sellers.
              </p>
            </div>
          </Reveal>

          {/* Right 2 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <Reveal delay={0.1}>
              <FeaturedCard
                label="Bedding · Home"
                title="HOME & BEDDING RANGE"
                image="/imagery/bedding.jpg"
                href="/products/home-bedding"
                color="yellow"
                cta="Browse Range"
              />
            </Reveal>
            <Reveal delay={0.2}>
              <FeaturedCard
                label="Kitchenware"
                title="KITCHENWARE COLLECTION"
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
  image,
  href,
  color,
  cta,
}: {
  label: string;
  title: string;
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
        className={`group relative block h-full min-h-[360px] md:min-h-[440px] rounded-[24px] overflow-hidden ${
          isYellow ? "bg-[var(--yellow)]" : "bg-[var(--blue)]"
        }`}
      >
        <span
          className={`absolute top-5 left-5 z-10 inline-flex items-center gap-2 rounded-full font-caps text-[11px] px-3 py-1.5 ${
            isYellow
              ? "bg-[var(--navy)] text-white"
              : "bg-white text-[var(--navy)]"
          }`}
        >
          ∞ {label}
        </span>

        <div
          className={`absolute top-5 right-5 z-10 font-display text-[28px] ${
            isYellow ? "text-[var(--navy)]" : "text-white"
          }`}
        >
          {title}
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[68%] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        </div>

        <div className="absolute bottom-5 left-5 z-10">
          <span
            className={`inline-flex items-center gap-2 rounded-full font-caps text-[12px] px-5 py-2.5 ${
              isYellow
                ? "bg-[var(--navy)] text-white"
                : "bg-white text-[var(--navy)]"
            } btn-shine`}
          >
            {cta} <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>

        <div
          className={`absolute bottom-5 right-5 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full ${
            isYellow ? "bg-[var(--navy)] text-white" : "bg-white text-[var(--navy)]"
          } group-hover:rotate-45 transition-transform duration-500`}
        >
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </Link>
    </motion.div>
  );
}
