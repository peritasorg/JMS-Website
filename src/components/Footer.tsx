import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InfinityMark } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--navy)] text-white mt-20 md:mt-24">
      {/* Signup bar */}
      <div className="border-b border-white/10">
        <Container className="py-12 md:py-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
          <div>
            <div className="font-caps text-[11px] text-[var(--yellow)]">
              ∞ Newsletter
            </div>
            <h3 className="mt-4 font-display-tight text-[36px] md:text-[48px] lg:text-[56px] leading-[0.92]">
              Sign up for trade offers
              <br />
              <span className="text-[var(--yellow)]">and stay up to date.</span>
            </h3>
          </div>
          <NewsletterForm />
        </Container>
      </div>

      {/* Main footer */}
      <Container className="relative py-16 grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-a.png"
              alt="JMS Trading"
              width={56}
              height={56}
              className="h-14 w-14 object-contain brightness-0 invert"
            />
            <span className="font-display-tight text-[56px] md:text-[72px] leading-none">
              JMS<span className="text-[var(--yellow)]">.</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
            UK-based wholesale supplier of household, kitchenware and lifestyle products
            for retailers, distributors and trade buyers. Birmingham operations, UK-wide
            distribution.
          </p>

          <div className="mt-8 space-y-3 text-[14px]">
            <a
              href="tel:+447424553894"
              className="flex items-center gap-3 hover:text-[var(--yellow)] transition-colors"
            >
              <Phone className="h-4 w-4 text-[var(--yellow)]" />
              +44 (0) 7424 553 894
            </a>
            <a
              href="mailto:info@jmstrading.co.uk"
              className="flex items-center gap-3 hover:text-[var(--yellow)] transition-colors"
            >
              <Mail className="h-4 w-4 text-[var(--yellow)]" />
              info@jmstrading.co.uk
            </a>
            <div className="flex items-start gap-3 text-white/80">
              <MapPin className="h-4 w-4 mt-0.5 text-[var(--yellow)]" />
              JAS House, Titford Lane, Birmingham, B65 0PY
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3 text-[var(--yellow)]">
            <Truck className="h-5 w-5" />
            <span className="font-caps text-[12px]">UK-wide · trade delivery</span>
          </div>
        </div>

        <FooterCol
          title="Sections"
          links={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "About Us", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Trade Login", href: "/trade-login" },
          ]}
        />
        <FooterCol
          title="Categories"
          links={categories.map((c) => ({
            label: c.name,
            href: `/products/${c.slug}`,
          }))}
        />
        <FooterCol
          title="Policies"
          links={[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms", href: "/terms" },
            { label: "Cookies", href: "/cookies" },
            { label: "Sitemap", href: "/sitemap.xml" },
          ]}
        />
      </Container>

      {/* Bottom watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-28 right-0 w-[60%] opacity-[0.08]"
      >
        <InfinityMark className="w-full h-auto text-[var(--yellow)]" />
      </div>

      <div className="relative border-t border-white/10">
        <Container className="py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} JMS Trading Ltd. All rights reserved.</div>
          <div className="font-caps tracking-[0.2em]">
            Better · Products · Prices · Service <span className="text-[var(--yellow)]">∞</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="font-caps text-[11px] text-[var(--yellow)]">∞ {title}</div>
      <ul className="mt-5 space-y-3 text-[14px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
