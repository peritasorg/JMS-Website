"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { categories } from "@/lib/products";

export function CategoriesSection() {
  return (
    <section id="products" className="relative py-24 md:py-32 bg-[var(--surface-muted)]">
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
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--ink)]">
                    {String(i + 1).padStart(2, "0")} · Category
                  </div>
                  <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur text-[var(--ink)] group-hover:bg-[var(--yellow)] transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-7">
                  <h3 className="font-display text-[26px] text-[var(--ink)] tracking-[-0.02em] leading-tight">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium text-[var(--blue)]">
                    {c.tagline}
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-[var(--ink-muted)]">
                    {c.short}
                  </p>
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-[var(--line)]">
                    <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--ink-muted)]">
                      Explore
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors">
                      {c.name.toLowerCase()} <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <div className="mt-12 relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--ink)] text-white px-8 py-10 md:py-12">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--yellow)]/20 blur-3xl"
            />
            <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between md:text-left text-center">
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--yellow)]">
                  Full catalogue
                </div>
                <div className="mt-3 font-display text-2xl md:text-3xl tracking-tight">
                  Can't decide? Download our full catalogue.
                </div>
                <p className="mt-2 text-[15px] text-white/70 max-w-xl">
                  A complete view of every SKU — sizes, packaging and carton quantities,
                  ready for your next order.
                </p>
              </div>
              <Button href="/contact" variant="light" arrow>
                <Download className="h-4 w-4" /> Request catalogue
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
