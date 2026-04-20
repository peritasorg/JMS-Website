import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] ink-bg grain px-8 py-16 md:px-16 md:py-24 text-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[var(--blue)]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-24 h-[32rem] w-[32rem] rounded-full bg-[var(--yellow-soft)]/10 blur-3xl"
          />

          <div className="relative z-10 max-w-3xl">
            <Reveal>
              <Eyebrow tone="light">Join JMS Trading today</Eyebrow>
              <h2 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.02em]">
                Ready to stock<br className="hidden md:block" />{" "}
                <em className="not-italic text-[var(--yellow-soft)]">what sells?</em>
              </h2>
              <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-white/75">
                Open a trade account today for access to our complete catalogue, competitive
                bulk pricing and dedicated account support across every category.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/contact" variant="light" size="lg" arrow>
                  Sign up now
                </Button>
                <a
                  href="tel:+447424553894"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[15px] font-medium text-white hover:bg-white/10 transition-colors"
                >
                  Call +44 (0) 7424 553 894
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
