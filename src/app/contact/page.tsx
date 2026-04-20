import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with JMS Trading — phone, email and enquiry form. Based at JAS House, Titford Lane, Birmingham.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--cream)] grain">
        <Container className="relative z-10 pt-14 pb-16 md:pt-20 md:pb-24">
          <Reveal>
            <Eyebrow tone="accent">Contact us</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[92px] leading-[0.98] tracking-[-0.03em] text-[var(--ink)] max-w-4xl">
              Let's get in touch{" "}
              <em className="not-italic text-[var(--blue-deep)]">and work together.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-2xl text-[18px] leading-relaxed text-[var(--ink-soft)]">
              Get in touch with our team today to discuss your product needs or trade
              opportunities. Whether you're an existing partner or a new customer, our team
              is here to help you every step of the way.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Form + details */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
            <Reveal>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
                Dependable service, tailored support.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-md">
                We're committed to providing dependable service, quality products and
                tailored support for all your wholesale and distribution requirements.
              </p>

              <div className="mt-10 space-y-5">
                <DetailRow
                  icon={Phone}
                  label="Phone"
                  value="+44 (0) 7424 553 894"
                  href="tel:+447424553894"
                />
                <DetailRow
                  icon={Mail}
                  label="Email"
                  value="info@jmstrading.co.uk"
                  href="mailto:info@jmstrading.co.uk"
                />
                <DetailRow
                  icon={MapPin}
                  label="Warehouse"
                  value="JAS House, Titford Lane, Birmingham, B65 0PY"
                  href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
                  external
                />
                <DetailRow
                  icon={Clock}
                  label="Opening hours"
                  value="Mon – Fri · 9:00 – 17:30"
                />
              </div>

              <div className="mt-10 rounded-2xl border border-[var(--line)] bg-[var(--surface-muted)]/60 p-6">
                <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  Trade customers
                </div>
                <h3 className="mt-3 font-display text-xl text-[var(--ink)] tracking-tight">
                  Ready to open an account?
                </h3>
                <p className="mt-2 text-sm text-[var(--ink-soft)]">
                  Send us your business details via the form and a member of our team will
                  reach out to confirm pricing, catalogues and delivery options.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Map / location card */}
      <section className="pb-20">
        <Container>
          <Reveal>
            <a
              href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--ink)] text-white hover-lift"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 600 400%22><defs><linearGradient id=%22g%22 x1=%220%22 x2=%221%22 y1=%220%22 y2=%221%22><stop offset=%220%22 stop-color=%22%23c2893c%22 stop-opacity=%220.3%22/><stop offset=%221%22 stop-color=%22%230b1a2c%22/></linearGradient></defs><rect width=%22600%22 height=%22400%22 fill=%22url(%23g)%22/><g stroke=%22%23ffffff%22 stroke-opacity=%220.08%22 fill=%22none%22 stroke-width=%221%22><path d=%22M 0 320 Q 150 280 300 300 T 600 260%22/><path d=%22M 0 260 Q 150 220 300 240 T 600 200%22/><path d=%22M 0 200 Q 150 160 300 180 T 600 140%22/><path d=%22M 100 0 L 100 400%22/><path d=%22M 250 0 L 250 400%22/><path d=%22M 400 0 L 400 400%22/><path d=%22M 550 0 L 550 400%22/></g></svg>')] bg-cover opacity-80"
              />
              <div className="relative z-10 flex flex-col gap-4 p-10 md:flex-row md:items-center md:justify-between md:gap-8 md:p-14">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/60">
                    Find us
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl tracking-[-0.02em]">
                    JAS House, Titford Lane, Birmingham
                  </h3>
                  <p className="mt-2 text-white/70">B65 0PY · United Kingdom</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium border border-white/20 group-hover:bg-white group-hover:text-[var(--ink)] transition-colors">
                  Open in Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function DetailRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const body = (
    <div className="group flex items-start gap-4 p-4 -m-4 rounded-2xl hover:bg-[var(--surface-muted)]/60 transition-colors">
      <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--ink)] text-[var(--yellow-soft)]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
          {label}
        </div>
        <div className="mt-1 text-[15px] text-[var(--ink)] group-hover:text-[var(--blue-deep)] transition-colors">
          {value}
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
        {body}
      </a>
    );
  }
  return body;
}
