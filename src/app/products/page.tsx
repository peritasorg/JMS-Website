import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";
import { InfinityMark } from "@/components/Logo";
import { categories } from "@/lib/products";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse JMS Trading's complete wholesale range — bedding, travel accessories, hardware, kitchenware, stationery, rugs and bathroom essentials.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-4 md:pt-5">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] md:rounded-[28px] bg-[var(--navy)] text-white grain">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-soft)] to-[var(--blue-deep)] opacity-90" />
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-[300px] h-[300px] text-white/8 spin-slow"
            >
              <InfinityMark className="w-full h-full" />
            </div>
            <div className="relative z-10 px-6 md:px-10 lg:px-14 py-14 md:py-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--yellow)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                  Our products · 7 ranges
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-display-tight text-[44px] sm:text-[60px] md:text-[76px] lg:text-[92px] leading-[0.92] max-w-[13ch]">
                  A complete range,{" "}
                  <span className="text-[var(--yellow)]">designed to sell</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/75">
                  We offer a comprehensive range of products designed to address all your
                  varied needs — sourced, developed and distributed for real retail demand.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Categories grid */}
      <section className="py-16 md:py-24">
        <Container>
          <Stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c, i) => (
              <StaggerItem key={c.slug}>
                <Link
                  href={`/products/${c.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-white border border-[var(--line)] hover-lift"
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

                  <div className="flex-1 flex flex-col p-6">
                    <h2 className="font-display-tight text-[22px] md:text-[26px] text-[var(--navy)] leading-tight">
                      {c.name}
                    </h2>
                    <p className="mt-2 font-caps text-[11px] text-[var(--blue)]">
                      {c.tagline}
                    </p>
                    <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-[var(--ink-muted)]">
                      {c.short}
                    </p>
                    <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
                      {c.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--cream-deep)] px-2.5 py-1 text-[10px] text-[var(--ink-muted)]"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
