"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { categories } from "@/lib/products";

export function CategoriesSection() {
  return (
    <section className="py-16 md:py-24 bg-[var(--cream-deep)]">
      <Container>
        <div className="flex items-end justify-between gap-6 mb-10">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                7 Product categories
              </div>
              <h2 className="mt-5 font-display-tight text-[44px] md:text-[56px] lg:text-[64px] text-[var(--navy)] leading-[0.92] max-w-[18ch]">
                Every range a retailer needs, under one supplier
              </h2>
            </div>
          </Reveal>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-[var(--navy)] text-white pl-5 pr-4 py-3 font-caps text-[13px] hover:bg-[var(--blue)] transition-colors"
          >
            View All <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <StaggerItem key={c.slug}>
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white border border-[var(--line)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white font-caps text-[11px] text-[var(--navy)] px-3 py-1.5">
                      {String(i + 1).padStart(2, "0")}/ {c.name}
                    </span>
                    <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--navy)] group-hover:bg-[var(--yellow)] transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex-1 p-6">
                    <h3 className="font-display text-[22px] md:text-[24px] text-[var(--navy)] leading-tight">
                      {c.name.toUpperCase()}
                    </h3>
                    <p className="mt-2 text-[13px] font-caps text-[var(--blue)]">
                      {c.tagline}
                    </p>
                    <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-muted)]">
                      {c.short}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
