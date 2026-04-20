import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Package, ShoppingBag, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Package,
    n: "01",
    title: "Wholesale supply at scale",
    body: "A broad, continuously evolving product range, supplied in trade-friendly carton quantities to support volume purchasing and efficient stock management.",
  },
  {
    icon: ShoppingBag,
    n: "02",
    title: "Product selection that sells",
    body: "Every item is chosen for practicality, durability, and shelf appeal — ensuring strong turnover across supermarkets, independent retailers and online sellers.",
  },
  {
    icon: ShieldCheck,
    n: "03",
    title: "Reliable quality & consistency",
    body: "We prioritise product standards, packaging quality and repeatability, so customers can reorder with confidence and minimal risk.",
  },
];

export function PillarsSection() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
              At JMS, we don't chase trends for the sake of it.
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-2xl">
              We focus on products that perform, pricing that works, and partnerships built
              on trust and reliability.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px rounded-3xl border border-[var(--line)] bg-[var(--line)] overflow-hidden md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="group relative h-full bg-[var(--background)] p-8 md:p-10 transition-colors duration-500 hover:bg-[var(--surface)]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm text-[var(--ink-muted)] tracking-widest">
                    {p.n}
                  </span>
                  <p.icon className="h-5 w-5 text-[var(--blue-deep)]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-10 font-display text-[26px] md:text-[28px] text-[var(--ink)] leading-tight tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                  {p.body}
                </p>
                <div className="mt-8 h-px w-full bg-[var(--line)] origin-left scale-x-0 group-hover:scale-x-100 group-hover:bg-[var(--blue)] transition-transform duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
