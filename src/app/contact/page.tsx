import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { InfinityMark } from "@/components/Logo";
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
      <section className="relative pt-4 md:pt-5">
        <Container>
          <div className="relative overflow-hidden rounded-[22px] md:rounded-[28px] bg-[var(--navy)] text-white grain">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy-soft)] to-[var(--blue-deep)] opacity-90" />
            <div
              aria-hidden
              className="absolute -top-16 -right-16 w-[320px] h-[320px] text-white/10 spin-slow"
            >
              <InfinityMark className="w-full h-full" />
            </div>
            <div className="relative z-10 px-6 md:px-10 lg:px-14 py-14 md:py-20">
              <Reveal>
                <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--yellow)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                  Contact us
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 font-display-tight text-[44px] sm:text-[60px] md:text-[76px] lg:text-[92px] leading-[0.92] max-w-[15ch]">
                  Let's get in touch{" "}
                  <span className="text-[var(--yellow)]">and work together</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-8 max-w-2xl text-[15px] md:text-[17px] leading-relaxed text-white/75">
                  Get in touch with our team today to discuss your product needs or trade
                  opportunities. Whether you're an existing partner or a new customer, our
                  team is here to help you every step of the way.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Form + details */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 items-start">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                Get in touch
              </div>
              <h2 className="mt-5 font-display-tight text-[36px] md:text-[44px] lg:text-[52px] text-[var(--navy)] leading-[0.92]">
                Dependable service, tailored support
              </h2>
              <p className="mt-5 text-[15px] md:text-[16px] leading-relaxed text-[var(--ink-muted)] max-w-md">
                We're committed to providing dependable service, quality products and
                tailored support for all your wholesale and distribution requirements.
              </p>

              <div className="mt-8 space-y-3">
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

              <div className="mt-8 rounded-[18px] bg-[var(--yellow)] text-[var(--navy)] p-6">
                <div className="font-caps text-[11px]">∞ Trade customers</div>
                <h3 className="mt-2 font-display-tight text-[22px]">
                  Ready to open an account?
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed opacity-80">
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

      {/* Map card */}
      <section className="pb-16">
        <Container>
          <Reveal>
            <a
              href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-[22px] bg-[var(--navy)] text-white hover-lift"
            >
              <div className="absolute inset-0">
                <Image
                  src="/imagery/warehouse.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 to-[var(--navy)]/60" />
              </div>
              <div className="relative z-10 flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between md:p-12">
                <div>
                  <div className="font-caps text-[11px] text-[var(--yellow)]">
                    ∞ Find us
                  </div>
                  <h3 className="mt-3 font-display-tight text-[28px] md:text-[36px]">
                    JAS House, Titford Lane, Birmingham
                  </h3>
                  <p className="mt-2 text-white/70 text-[14px]">
                    B65 0PY · United Kingdom
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-5 py-3 font-caps text-[13px] group-hover:bg-[var(--yellow-hot)] transition-colors">
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
    <div className="group flex items-start gap-4 p-4 -m-4 rounded-xl hover:bg-[var(--cream-deep)] transition-colors">
      <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--navy)] text-[var(--yellow)] flex-shrink-0">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div className="min-w-0">
        <div className="font-caps text-[10px] text-[var(--ink-muted)]">{label}</div>
        <div className="mt-1 text-[14px] md:text-[15px] text-[var(--navy)] group-hover:text-[var(--blue)] transition-colors">
          {value}
        </div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
      >
        {body}
      </a>
    );
  }
  return body;
}
