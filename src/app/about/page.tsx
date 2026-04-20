import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/home/CTASection";
import {
  Building2,
  Truck,
  Sparkles,
  Handshake,
  MapPin,
  Boxes,
  BadgeCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "JMS Trading is a UK-based wholesale supplier of household, kitchenware and lifestyle products — built on understanding what sells.",
};

const values = [
  { icon: Building2, label: "UK-based Wholesale" },
  { icon: Boxes, label: "Retail-Oriented" },
  { icon: BadgeCheck, label: "Reliable Quality" },
  { icon: Handshake, label: "Trade-Focused" },
];

const whatWeDo = [
  {
    icon: Truck,
    title: "Wholesale supply at scale",
    body: "We provide a broad and continuously evolving product range, supplied in trade-friendly carton quantities to support volume purchasing and efficient stock management.",
  },
  {
    icon: Sparkles,
    title: "Product selection that sells",
    body: "Every item is chosen for practicality, durability and shelf appeal, ensuring strong turnover across supermarkets, independent retailers and online sellers.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable quality & consistency",
    body: "We prioritise product standards, packaging quality and repeatability, so customers can reorder with confidence and minimal risk.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--cream)] grain">
        <Container className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24">
          <Reveal>
            <Eyebrow tone="accent">About JMS Trading</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[92px] leading-[0.98] tracking-[-0.03em] text-[var(--ink)] max-w-5xl">
              Built on{" "}
              <em className="not-italic relative">
                <span className="relative z-10">understanding</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-[var(--blue)]/35 rounded-sm" />
              </em>{" "}
              what sells.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-[18px] leading-relaxed text-[var(--ink-soft)]">
              Our journey has been marked by continuous improvement, expansion of our service
              offerings, and a relentless focus on customer satisfaction.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
            <Reveal>
              <Eyebrow>Our mission</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
                Practical, dependable, retail-ready.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-[17px] leading-relaxed text-[var(--ink-soft)]">
                <p>
                  JMS Trading is a UK-based wholesale supplier specialising in high-demand
                  household, kitchenware, and lifestyle products for retailers, distributors
                  and trade buyers. We focus on delivering reliable everyday essentials that
                  combine practicality, durability and strong retail appeal.
                </p>
                <p>
                  Our business is built on understanding what sells. We source, develop and
                  distribute products that meet real market needs — supported by competitive
                  pricing, consistent quality and efficient logistics.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {values.map((v, i) => (
                  <Reveal key={v.label} delay={0.15 + i * 0.05}>
                    <div className="group flex flex-col gap-3 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 hover-lift">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ink)] text-[var(--yellow-soft)]">
                        <v.icon className="h-4 w-4" strokeWidth={1.75} />
                      </div>
                      <div className="font-display text-[17px] text-[var(--ink)] tracking-tight">
                        {v.label}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section className="py-24 md:py-32 bg-[var(--surface-muted)]/60">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
                We don't chase trends for the sake of it.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-2xl">
                We focus on products that perform, pricing that works, and partnerships built
                on trust and reliability.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.1}>
                <div className="group h-full rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 hover-lift">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--yellow-soft)]">
                      <w.icon className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-sm text-[var(--ink-muted)] tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-8 font-display text-2xl md:text-[26px] text-[var(--ink)] leading-tight tracking-tight">
                    {w.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                    {w.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section className="py-20">
        <Container>
          <div className="grid gap-y-10 gap-x-6 sm:grid-cols-3 border-y border-[var(--line)] py-12">
            {[
              { k: "UK-based", v: "Warehousing & logistics in Birmingham" },
              { k: "7 categories", v: "From bedding to bathroom essentials" },
              { k: "Trade-first", v: "Carton quantities for real retail operations" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 0.1}>
                <div>
                  <div className="font-display text-4xl md:text-5xl text-[var(--ink)] tracking-[-0.02em]">
                    {s.k}
                  </div>
                  <p className="mt-2 text-[15px] text-[var(--ink-soft)]">{s.v}</p>
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
            <div className="relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-10 md:p-14">
              <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <Eyebrow>Visit us</Eyebrow>
                  <h3 className="mt-5 font-display text-3xl md:text-4xl text-[var(--ink)] tracking-[-0.02em]">
                    JAS House, Birmingham.
                  </h3>
                  <div className="mt-4 flex items-start gap-3 text-[var(--ink-soft)] text-[15px]">
                    <MapPin className="h-5 w-5 mt-0.5 text-[var(--blue-deep)]" />
                    JAS House, Titford Lane, Birmingham, B65 0PY
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button
                    href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
                    external
                    arrow
                  >
                    View on Google
                  </Button>
                  <Button href="/contact" variant="outline">
                    Get in touch
                  </Button>
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
