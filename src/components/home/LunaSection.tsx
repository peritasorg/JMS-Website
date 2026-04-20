import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Moon, Sparkles, Infinity as InfinityIcon } from "lucide-react";

const tokens = [
  {
    icon: Moon,
    title: "Luna",
    body: "Our flagship umbrella range — thoughtful, reliable essentials that sit well on any shelf.",
  },
  {
    icon: Sparkles,
    title: "Quality, accessible",
    body: "Commercial pricing without compromising on the feel, finish and durability customers expect.",
  },
  {
    icon: InfinityIcon,
    title: "A complete range",
    body: "Everyday essentials and specialised solutions, all sourced under one dependable supplier.",
  },
];

export function LunaSection() {
  return (
    <section id="luna" className="py-24 md:py-32">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-20 items-start">
          <Reveal>
            <Eyebrow>What we offer</Eyebrow>
            <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
              A look into <em className="not-italic text-[var(--blue-deep)]">Luna.</em>
            </h2>
            <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-[var(--ink-soft)]">
              We make quality accessible with Luna, our comprehensive range of products from
              JMS Trading Ltd. Whether you're seeking everyday essentials or specialised
              solutions, our Luna collection delivers everything you need for reliable
              performance and exceptional value across all your requirements.
            </p>
            <div className="mt-8">
              <Button href="/products" variant="outline" arrow>
                Explore the Luna range
              </Button>
            </div>
          </Reveal>

          <div className="grid gap-4">
            {tokens.map((t, i) => (
              <Reveal key={t.title} delay={0.1 + i * 0.1}>
                <div className="group relative overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-8 hover-lift">
                  <div
                    aria-hidden
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-[var(--yellow-soft)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="relative flex items-start gap-6">
                    <div className="flex-shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--yellow-soft)]">
                      <t.icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[var(--ink)] tracking-tight">
                        {t.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-[var(--ink-soft)]">
                        {t.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
