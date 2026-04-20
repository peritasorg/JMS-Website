import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";
import { InfinityMark } from "@/components/Logo";
import {
  Building2,
  Truck,
  Sparkles,
  Handshake,
  MapPin,
  Boxes,
  BadgeCheck,
  ArrowUpRight,
  Phone,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "JMS Trading is a UK-based wholesale supplier of household, kitchenware and lifestyle products — built on understanding what sells.",
};

const values = [
  { icon: Building2, label: "UK-based wholesale" },
  { icon: Boxes, label: "Retail-oriented" },
  { icon: BadgeCheck, label: "Reliable quality" },
  { icon: Handshake, label: "Trade-focused" },
];

const whatWeDo = [
  {
    icon: Truck,
    title: "Wholesale supply at scale",
    body: "Broad, continuously evolving product range supplied in trade-friendly carton quantities for volume buyers.",
  },
  {
    icon: Sparkles,
    title: "Product selection that sells",
    body: "Every item chosen for practicality, durability and shelf appeal — strong turnover across supermarkets, independents and online.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable quality & consistency",
    body: "Product standards, packaging quality and repeatability that let customers reorder with confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-4 md:pt-5">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] md:rounded-[28px] bg-[var(--navy)] text-white grain">
            <div className="absolute inset-0">
              <Image
                src="/imagery/warehouse-2.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/75 to-[var(--navy)]/40" />
            </div>
            <div className="absolute -top-16 -right-16 w-[280px] h-[280px] text-white/5 spin-slow">
              <InfinityMark className="w-full h-full" tone="light" />
            </div>
            <div className="relative z-10 px-6 md:px-10 lg:px-14 py-14 md:py-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--yellow)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                  About JMS Trading
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-display-tight text-[44px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-[0.92] max-w-[14ch]">
                  Built on <span className="text-[var(--yellow)]">understanding</span> what sells
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/75">
                  Our journey has been marked by continuous improvement, expansion of our
                  service offerings, and a relentless focus on customer satisfaction.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission + values */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                Our mission
              </div>
              <h2 className="mt-5 font-display-tight text-[36px] md:text-[48px] lg:text-[56px] text-[var(--navy)] leading-[0.92]">
                Practical, dependable, retail-ready
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-[15px] md:text-[16px] leading-relaxed text-[var(--ink-muted)]">
                <p>
                  JMS Trading is a UK-based wholesale supplier specialising in high-demand
                  household, kitchenware and lifestyle products for retailers, distributors
                  and trade buyers. We focus on delivering reliable everyday essentials that
                  combine practicality, durability and strong retail appeal.
                </p>
                <p>
                  Our business is built on understanding what sells. We source, develop and
                  distribute products that meet real market needs — supported by competitive
                  pricing, consistent quality and efficient logistics.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
                {values.map((v) => (
                  <div
                    key={v.label}
                    className="flex flex-col gap-3 rounded-[18px] border border-[var(--line)] bg-white p-4 hover-lift"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--yellow)]">
                      <v.icon className="h-4 w-4" strokeWidth={1.75} />
                    </div>
                    <div className="font-display text-[14px] text-[var(--navy)] leading-tight">
                      {v.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="py-16 md:py-24 bg-[var(--cream-deep)]">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                What we do
              </div>
              <h2 className="mt-5 font-display-tight text-[36px] md:text-[48px] lg:text-[60px] text-[var(--navy)] leading-[0.92]">
                We don't chase <span className="text-[var(--blue)]">trends</span> for the sake of it
              </h2>
              <p className="mt-5 text-[15px] md:text-[17px] leading-relaxed text-[var(--ink-muted)] max-w-2xl">
                We focus on products that perform, pricing that works, and partnerships built
                on trust and reliability.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {whatWeDo.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="group h-full rounded-[22px] bg-white p-7 hover-lift">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--yellow)]">
                      <w.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-[13px] text-[var(--blue)]">
                      {String(i + 1).padStart(2, "0")}/
                    </span>
                  </div>
                  <h3 className="mt-6 font-display-tight text-[22px] md:text-[24px] text-[var(--navy)] leading-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-[var(--ink-muted)]">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3 border-y border-[var(--line)] py-10">
            {[
              { k: "UK-based", v: "Warehousing & logistics in Birmingham" },
              { k: "7 categories", v: "From bedding to bathroom essentials" },
              { k: "Trade-first", v: "Carton quantities for real retail operations" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 0.1}>
                <div>
                  <div className="font-display-tight text-[32px] md:text-[44px] text-[var(--navy)]">
                    {s.k}
                  </div>
                  <p className="mt-2 text-[14px] text-[var(--ink-muted)]">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="pb-10">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[22px] bg-[var(--navy)] text-white p-8 md:p-12">
              <div
                aria-hidden
                className="absolute -bottom-20 -right-20 w-[300px] h-[300px] text-white/5 spin-slow"
              >
                <InfinityMark className="w-full h-full" tone="light" />
              </div>
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--yellow)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                    Visit us
                  </div>
                  <h3 className="mt-4 font-display-tight text-[28px] md:text-[36px]">
                    JAS House, Birmingham
                  </h3>
                  <div className="mt-3 flex items-start gap-2 text-white/80 text-[14px]">
                    <MapPin className="h-4 w-4 mt-0.5 text-[var(--yellow)]" />
                    JAS House, Titford Lane, Birmingham, B65 0PY
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-5 py-3 font-caps text-[13px] hover:bg-[var(--yellow-hot)] transition-colors"
                  >
                    View on Google <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-caps text-[13px] text-white hover:bg-white hover:text-[var(--navy)] transition-colors"
                  >
                    <Phone className="h-4 w-4" /> Get in touch
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
