import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden ink-bg text-white">
      <div className="grain" />
      <Container className="relative z-10 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              UK-based wholesale supplier of high-demand household, kitchenware and
              lifestyle products for retailers, distributors and trade buyers.
            </p>
            <div className="mt-8 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-[var(--yellow-soft)]" />
                <span>JAS House, Titford Lane, Birmingham, B65 0PY</span>
              </div>
              <a
                href="tel:+447424553894"
                className="flex items-center gap-3 hover:text-[var(--yellow-soft)] transition-colors"
              >
                <Phone className="h-4 w-4 text-[var(--yellow-soft)]" />
                +44 (0) 7424 553 894
              </a>
              <a
                href="mailto:info@jmstrading.co.uk"
                className="flex items-center gap-3 hover:text-[var(--yellow-soft)] transition-colors"
              >
                <Mail className="h-4 w-4 text-[var(--yellow-soft)]" />
                info@jmstrading.co.uk
              </a>
            </div>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
              Company
            </div>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li><Link href="/" className="text-white/85 hover:text-white underline-grow">Home</Link></li>
              <li><Link href="/about" className="text-white/85 hover:text-white underline-grow">About</Link></li>
              <li><Link href="/products" className="text-white/85 hover:text-white underline-grow">Products</Link></li>
              <li><Link href="/contact" className="text-white/85 hover:text-white underline-grow">Contact</Link></li>
              <li><Link href="/trade-login" className="text-white/85 hover:text-white underline-grow">Trade Login</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
              Categories
            </div>
            <ul className="mt-5 space-y-3 text-[15px]">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products/${c.slug}`}
                    className="text-white/85 hover:text-white underline-grow"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/50">
              Trade
            </div>
            <p className="mt-5 text-[15px] text-white/75 leading-relaxed">
              Open a trade account to access bulk pricing, catalogues, and dedicated
              account support.
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white hover:text-[var(--ink)] transition-colors"
            >
              Open an Account
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a
              href="https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              View on Google
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} JMS Trading Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/cookies" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </Container>

      {/* Huge watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-12 select-none overflow-hidden"
      >
        <div className="font-display text-[22vw] leading-none font-semibold text-white/[0.05] tracking-[-0.04em] text-center whitespace-nowrap">
          JMS TRADING
        </div>
      </div>
    </footer>
  );
}
