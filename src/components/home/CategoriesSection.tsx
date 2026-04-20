"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/products";
import { CategoryIcon } from "@/components/CategoryIcon";

export function CategoriesSection() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-[var(--surface-muted)]/60">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>Our products</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em] max-w-3xl">
                A comprehensive range,{" "}
                <span className="text-[var(--ink-muted)]">designed to address all your needs.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Button href="/products" variant="ghost" arrow>
              View all categories
            </Button>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <StaggerItem key={c.slug}>
              <Link
                href={`/products/${c.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-7 hover-lift"
              >
                <div
                  className={`absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${c.accentHue} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative flex items-start justify-between">
                  <CategoryIcon slug={c.slug} className="h-10 w-10 text-[var(--ink)]" />
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)] transition-all duration-300 group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="relative mt-10">
                  <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Category · {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display text-3xl text-[var(--ink)] tracking-[-0.02em] leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-[15px] text-[var(--ink-soft)]">{c.tagline}</p>
                  <p className="mt-4 text-sm text-[var(--ink-muted)] leading-relaxed">
                    {c.short}
                  </p>
                </div>
                <motion.div
                  className="relative mt-6 h-px origin-left scale-x-0 bg-[var(--blue)] group-hover:scale-x-100"
                  transition={{ duration: 0.5 }}
                />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-3xl border border-[var(--line)] bg-[var(--surface)] px-8 py-10 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <div className="font-display text-2xl md:text-3xl text-[var(--ink)] tracking-tight">
                Can't decide? Download our full catalogue.
              </div>
              <p className="mt-2 text-[15px] text-[var(--ink-soft)] max-w-xl">
                A complete view of every SKU — sizes, packaging and carton quantities, ready
                for your next order.
              </p>
            </div>
            <Button href="/contact" arrow>
              <Download className="h-4 w-4" /> Request catalogue
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
