import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";
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
      <section className="relative overflow-hidden bg-[var(--cream)] grain">
        <Container className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24">
          <Reveal>
            <Eyebrow tone="accent">Our products</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[92px] leading-[0.98] tracking-[-0.03em] text-[var(--ink)] max-w-5xl">
              A complete range,{" "}
              <em className="not-italic text-[var(--blue-deep)]">designed to sell.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-[18px] leading-relaxed text-[var(--ink-soft)]">
              We offer a comprehensive range of products designed to address all your varied
              needs — sourced, developed and distributed for real retail demand.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--ink)]">
                      {String(i + 1).padStart(2, "0")} · Category
                    </div>
                    <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 backdrop-blur text-[var(--ink)] group-hover:bg-[var(--yellow)] transition-colors">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-7">
                    <h2 className="font-display text-[26px] text-[var(--ink)] tracking-[-0.02em] leading-tight">
                      {c.name}
                    </h2>
                    <p className="mt-2 text-[14px] text-[var(--ink-muted)]">{c.tagline}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                      {c.short}
                    </p>
                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                      {c.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface-muted)] px-3 py-1 text-[11px] text-[var(--ink-soft)]"
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
