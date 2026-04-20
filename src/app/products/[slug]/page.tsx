import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CategoryIcon } from "@/components/CategoryIcon";
import { CTASection } from "@/components/home/CTASection";
import { categories, getCategory } from "@/lib/products";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Package } from "lucide-react";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) return { title: "Not found" };
  return {
    title: c.name,
    description: c.short,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCategory(slug);
  if (!c) notFound();

  const currentIndex = categories.findIndex((cat) => cat.slug === slug);
  const next = categories[(currentIndex + 1) % categories.length];
  const prev =
    categories[(currentIndex - 1 + categories.length) % categories.length];

  return (
    <>
      {/* Breadcrumb */}
      <Container className="pt-8">
        <div className="flex items-center gap-2 text-xs text-[var(--ink-muted)]">
          <Link href="/" className="hover:text-[var(--ink)]">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[var(--ink)]">Products</Link>
          <span>/</span>
          <span className="text-[var(--ink)]">{c.name}</span>
        </div>
      </Container>

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--cream)] grain">
        <Container className="relative z-10 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Eyebrow tone="accent">
                  Category · {String(currentIndex + 1).padStart(2, "0")}
                </Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.03em] text-[var(--ink)]">
                  {c.name}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="mt-4 font-display text-[22px] md:text-[28px] text-[var(--ink-muted)] tracking-tight max-w-2xl">
                  {c.tagline}
                </div>
              </Reveal>
              <Reveal delay={0.25}>
                <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-[var(--ink-soft)]">
                  {c.intro}
                </p>
              </Reveal>
              <Reveal delay={0.35}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Button href="/contact" size="lg" arrow>
                    Request a quote
                  </Button>
                  <Button href="/products" variant="outline" size="lg">
                    <ArrowLeft className="h-4 w-4" /> All categories
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <div className="relative aspect-square rounded-[32px] border border-[var(--line)] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)]/30 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur border border-white/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[var(--ink)]">
                  <CategoryIcon slug={c.slug} className="h-3.5 w-3.5" />
                  Luna · {c.name}
                </div>
                <div className="absolute bottom-5 right-5 rounded-full bg-[var(--yellow)] text-[var(--ink)] px-3 py-1.5 text-[11px] font-medium">
                  Trade pack
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Highlights ticker */}
      <section className="border-y border-[var(--line)] bg-[var(--surface)]/60">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--line)]">
            {c.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div className="py-6 px-5 first:pl-0 flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--blue-deep)]" />
                  <span className="text-sm text-[var(--ink)]">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Groups */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <Eyebrow>What's in the range</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em] max-w-3xl">
              Every part of the {c.name.toLowerCase()} aisle.
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
            {c.groups.map((g, i) => (
              <StaggerItem key={g.title}>
                <div className="group h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 hover-lift">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm text-[var(--ink-muted)] tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Package className="h-5 w-5 text-[var(--blue-deep)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-8 font-display text-2xl md:text-[28px] text-[var(--ink)] leading-tight tracking-tight">
                    {g.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {g.body}
                  </p>
                  {g.bullets && (
                    <ul className="mt-6 space-y-2.5">
                      {g.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-[14px] text-[var(--ink)]"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--blue-deep)]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* Why choose */}
      <section className="py-24 md:py-32 bg-[var(--surface-muted)]/60">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <Eyebrow>Why choose JMS for {c.name.toLowerCase()}</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
                The details that keep retailers coming back.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-md">
                Every category is built to sell — from the fabric of a throw to the edge of a
                knife. Here's what that looks like in practice.
              </p>
            </Reveal>

            <div className="grid gap-3">
              {c.why.map((w, i) => (
                <Reveal key={w} delay={i * 0.08}>
                  <div className="flex items-start gap-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 hover-lift">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--ink)] text-[var(--yellow-soft)] text-sm font-display">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[15px] leading-relaxed text-[var(--ink)]">{w}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Prev/Next */}
      <section className="py-16">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={`/products/${prev.slug}`}
              className="group flex items-center justify-between rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 hover-lift"
            >
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  Previous
                </div>
                <div className="mt-2 font-display text-xl text-[var(--ink)] tracking-tight">
                  {prev.name}
                </div>
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href={`/products/${next.slug}`}
              className="group flex items-center justify-between rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 hover-lift"
            >
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  Next category
                </div>
                <div className="mt-2 font-display text-xl text-[var(--ink)] tracking-tight">
                  {next.name}
                </div>
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] group-hover:border-[var(--ink)] group-hover:bg-[var(--ink)] group-hover:text-white transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
