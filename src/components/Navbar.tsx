"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  LogIn,
  Menu,
  Package,
  Phone,
  Tag,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { categories } from "@/lib/products";
import { cn } from "@/lib/cn";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasMenu: true },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const tickerItems = [
  "Trade pricing for approved accounts",
  "UK-wide distribution from Birmingham",
  "Bulk orders · Carton quantities",
];

export function Navbar() {
  const pathname = usePathname();
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Navy top bar: marquee ticker (left) + Trade Login button (right) */}
      <div className="bg-[var(--navy)] text-white">
        <Container className="flex items-center justify-between gap-4 h-10">
          <div className="flex-1 min-w-0 overflow-hidden">
            <div className="marquee text-[11px] md:text-[12px] tracking-[0.15em] font-caps">
              <div className="marquee__track">
                {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-2.5 whitespace-nowrap">
                    <Tag className="h-3 w-3 md:h-3.5 md:w-3.5 text-[var(--yellow)]" />
                    {t}
                    <span className="text-[var(--yellow)]">∞</span>
                  </span>
                ))}
              </div>
              <div className="marquee__track" aria-hidden>
                {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-2.5 whitespace-nowrap">
                    <Tag className="h-3 w-3 md:h-3.5 md:w-3.5 text-[var(--yellow)]" />
                    {t}
                    <span className="text-[var(--yellow)]">∞</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href="https://shop.jmstrading.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1.5 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-3 md:px-4 py-1.5 font-caps text-[10px] md:text-[11px] hover:bg-[var(--yellow-hot)] transition-colors"
          >
            <LogIn className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
            Trade Login
            <ArrowUpRight className="h-3 w-3 md:h-3.5 md:w-3.5" strokeWidth={2.5} />
          </a>
        </Container>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 bg-[var(--cream)]/85 backdrop-blur-md border-b border-[var(--line)]">
        <Container className="flex items-center justify-between h-[78px] gap-6">
          <Logo />

          <nav className="hidden lg:flex items-center gap-1">
            {mainLinks.map((link) =>
              link.hasMenu ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "inline-flex items-center gap-1 px-4 py-2 rounded-full font-caps text-[13px] transition-colors",
                      isActive(link.href)
                        ? "text-[var(--navy)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--navy)]",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-300",
                        productsOpen ? "rotate-180" : "",
                      )}
                    />
                  </Link>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="w-[660px] rounded-[24px] border border-[var(--line)] bg-white shadow-[0_30px_60px_-20px_rgba(10,24,52,0.25)] p-6">
                          <div className="font-caps text-[11px] text-[var(--ink-muted)] mb-4">
                            ∞ Product categories
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {categories.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/products/${c.slug}`}
                                className="group flex flex-col gap-1 rounded-xl p-3 hover:bg-[var(--yellow)]/15 transition-colors"
                              >
                                <span className="font-display text-[18px] text-[var(--navy)] leading-tight">
                                  {c.name.toUpperCase()}
                                </span>
                                <span className="text-[13px] text-[var(--ink-muted)] leading-snug">
                                  {c.tagline}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-5 pt-5 border-t border-[var(--line)] flex items-center justify-between">
                            <span className="text-sm text-[var(--ink-muted)]">
                              Can't decide? Browse everything.
                            </span>
                            <Link
                              href="/products"
                              className="inline-flex items-center gap-1 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-4 py-2 font-caps text-[12px]"
                            >
                              View all products →
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "inline-flex items-center px-4 py-2 rounded-full font-caps text-[13px] transition-colors",
                    isActive(link.href)
                      ? "text-[var(--navy)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--navy)]",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+447424553894"
              className="hidden xl:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--navy)] border border-[var(--line)] hover:bg-[var(--yellow)] hover:border-[var(--yellow)] transition-colors"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-6 pr-5 py-3 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors shadow-[0_8px_24px_-8px_rgba(255,217,61,0.6)]"
            >
              Open Account
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="hidden sm:inline-flex h-11 w-11 items-center justify-center rounded-full bg-white border border-[var(--line)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition-colors relative"
              aria-label="Products"
            >
              <Package className="h-4 w-4" />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-[var(--yellow)] border-2 border-[var(--cream)]" />
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--navy)]"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-[var(--navy)]/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[var(--cream)] flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--line)]">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white"
                  onClick={() => setMobileOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-1">
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-2xl hover:bg-[var(--yellow)]/20 font-display text-2xl text-[var(--navy)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-5 px-4 font-caps text-[11px] text-[var(--ink-muted)]">
                  ∞ Categories
                </div>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="px-4 py-2.5 rounded-2xl hover:bg-[var(--yellow)]/20 font-caps text-[15px] flex items-center justify-between"
                  >
                    <span>{c.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-[var(--blue)]" />
                  </Link>
                ))}
              </div>
              <div className="p-5 border-t border-[var(--line)] flex flex-col gap-3">
                <a
                  href="tel:+447424553894"
                  className="inline-flex items-center gap-2 text-[var(--ink)]"
                >
                  <Phone className="h-4 w-4 text-[var(--blue)]" />
                  +44 (0) 7424 553 894
                </a>
                <a
                  href="https://shop.jmstrading.co.uk/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--navy)] text-[var(--navy)] px-5 py-3 font-caps text-[13px]"
                >
                  <LogIn className="h-4 w-4" /> Trade Login
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-5 py-3 font-caps text-[13px]"
                >
                  Open Account <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
