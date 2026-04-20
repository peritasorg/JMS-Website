import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { CategoryIcon } from "@/components/CategoryIcon";
import { CTASection } from "@/components/home/CTASection";
import { InfinityMark } from "@/components/Logo";
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
      <Container className="pt-6">
        <div className="flex items-center gap-2 font-caps text-[10px] text-[var(--ink-muted)]">
          <Link href="/" className="hover:text-[var(--navy)]">
            Home
          </Link>
          <span>/</span>
          <Link href="/products" className="hover:text-[var(--navy)]">
            Products
          </Link>
          <span>/</span>
          <span className="text-[var(--navy)]">{c.name}</span>
        </div>
      </Container>

      {/* Hero */}
      <section className="relative pt-4 md:pt-5">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] md:rounded-[28px] bg-[var(--navy)] text-white grain">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-soft)] to-[var(--blue-deep)] opacity-95" />
            <div
              aria-hidden
              className="absolute -bottom-20 -left-20 w-[320px] h-[320px] text-white/5 spin-slow"
            >
              <InfinityMark className="w-full h-full" tone="light" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center p-6 md:p-10 lg:p-14">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--yellow)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                    Category · {String(currentIndex + 1).padStart(2, "0")}
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <h1 className="mt-5 font-display-tight text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[0.92]">
                    {c.name}
                  </h1>
                </Reveal>
                <Reveal delay={0.15}>
                  <div className="mt-3 font-caps text-[14px] md:text-[16px] text-[var(--yellow)] max-w-2xl">
                    {c.tagline}
                  </div>
                </Reveal>
                <Reveal delay={0.25}>
                  <p className="mt-6 max-w-xl text-[14px] md:text-[16px] leading-relaxed text-white/75">
                    {c.intro}
                  </p>
                </Reveal>
                <Reveal delay={0.35}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-6 pr-5 py-3 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors"
                    >
                      Request a quote
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-caps text-[13px] text-white hover:bg-white hover:text-[var(--navy)] transition-colors"
                    >
                      <ArrowLeft className="h-4 w-4" /> All categories
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <div className="relative aspect-square rounded-[18px] overflow-hidden">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--navy)]/30 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 font-caps text-[10px] text-[var(--navy)]">
                    <CategoryIcon slug={c.slug} className="h-3.5 w-3.5" />
                    Luna · {c.name}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-3 py-1.5 font-caps text-[10px]">
                    ∞ Trade pack
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-10">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {c.highlights.map((h, i) => (
              <Reveal key={h} delay={i * 0.05}>
                <div className="flex items-center gap-3 rounded-xl border border-[var(--line)] bg-white px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[var(--blue)]" />
                  <span className="text-[13px] text-[var(--navy)]">{h}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Groups */}
      <section className="py-14 md:py-20">
        <Container>
          <Reveal>
            <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
              What's in the range
            </div>
            <h2 className="mt-5 font-display-tight text-[36px] md:text-[48px] lg:text-[56px] text-[var(--navy)] leading-[0.92] max-w-3xl">
              Every part of the {c.name.toLowerCase()} aisle
            </h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
            {c.groups.map((g, i) => (
              <StaggerItem key={g.title}>
                <div className="group h-full rounded-[22px] border border-[var(--line)] bg-white p-7 hover-lift">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[13px] text-[var(--blue)]">
                      {String(i + 1).padStart(2, "0")}/
                    </span>
                    <Package className="h-5 w-5 text-[var(--blue)]" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 font-display-tight text-[22px] md:text-[26px] text-[var(--navy)] leading-tight">
                    {g.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-muted)]">
                    {g.body}
                  </p>
                  {g.bullets && (
                    <ul className="mt-5 space-y-2">
                      {g.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-[13px] text-[var(--navy)]"
                        >
                          <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-[var(--yellow-hot)]" />
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
      <section className="py-14 md:py-20 bg-[var(--cream-deep)]">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                Why choose JMS for {c.name.toLowerCase()}
              </div>
              <h2 className="mt-5 font-display-tight text-[36px] md:text-[44px] lg:text-[52px] text-[var(--navy)] leading-[0.92]">
                The details that keep retailers coming back
              </h2>
              <p className="mt-5 text-[14px] md:text-[16px] leading-relaxed text-[var(--ink-muted)] max-w-md">
                Every category is built to sell — from the fabric of a throw to the edge of
                a knife. Here's what that looks like in practice.
              </p>
            </Reveal>

            <div className="grid gap-3">
              {c.why.map((w, i) => (
                <Reveal key={w} delay={i * 0.08}>
                  <div className="flex items-start gap-4 rounded-[18px] bg-white p-5 hover-lift">
                    <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--navy)] text-[var(--yellow)] font-display text-[14px]">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="text-[14px] md:text-[15px] leading-relaxed text-[var(--navy)]">
                      {w}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Prev/Next */}
      <section className="py-12">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href={`/products/${prev.slug}`}
              className="group flex items-center justify-between rounded-[20px] border border-[var(--line)] bg-white p-5 hover-lift"
            >
              <div>
                <div className="font-caps text-[10px] text-[var(--ink-muted)]">
                  ← Previous
                </div>
                <div className="mt-1.5 font-display-tight text-[20px] text-[var(--navy)]">
                  {prev.name}
                </div>
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] group-hover:bg-[var(--navy)] group-hover:text-white group-hover:border-[var(--navy)] transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
            </Link>
            <Link
              href={`/products/${next.slug}`}
              className="group flex items-center justify-between rounded-[20px] border border-[var(--line)] bg-white p-5 hover-lift"
            >
              <div>
                <div className="font-caps text-[10px] text-[var(--ink-muted)]">
                  Next category →
                </div>
                <div className="mt-1.5 font-display-tight text-[20px] text-[var(--navy)]">
                  {next.name}
                </div>
              </div>
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--yellow)] text-[var(--navy)] group-hover:bg-[var(--navy)] group-hover:text-[var(--yellow)] transition-colors">
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
