"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { categories } from "@/lib/products";
import { cn } from "@/lib/cn";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasMenu: true },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
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
      {/* Blue top bar */}
      <div className="relative bg-[var(--blue)] text-white overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent via-[var(--blue-deep)]/40 to-[var(--blue-deep)]/70"
        />
        <Container className="relative flex flex-wrap items-center justify-between gap-2 py-2.5 text-sm">
          <div className="flex items-center gap-3">
            <motion.span
              aria-hidden
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block h-2 w-2 rounded-full bg-[var(--yellow)]"
            />
            <span className="font-semibold tracking-wide">
              Welcome to JMS Trading
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/95">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">JAS House, Titford Lane, Birmingham, B65 0PY</span>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-[var(--line)]">
        <Container className="flex items-center justify-between h-[76px] gap-6">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 text-[15px]">
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
                      "inline-flex items-center gap-1 px-4 py-2 rounded-full transition-colors font-medium",
                      isActive(link.href)
                        ? "text-[var(--blue)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--blue)]",
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
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
                        <div className="w-[640px] rounded-3xl border border-[var(--line)] bg-white shadow-[0_30px_60px_-20px_rgba(17,29,21,0.25)] p-6">
                          <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)] mb-4">
                            Product categories
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {categories.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/products/${c.slug}`}
                                className="group flex flex-col gap-1 rounded-2xl p-3 hover:bg-[var(--blue-soft)] transition-colors"
                              >
                                <span className="font-display text-[17px] text-[var(--ink)] leading-tight group-hover:text-[var(--blue-deep)]">
                                  {c.name}
                                </span>
                                <span className="text-[13px] text-[var(--ink-muted)] leading-snug">
                                  {c.tagline}
                                </span>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-5 pt-5 border-t border-[var(--line)] flex items-center justify-between">
                            <span className="text-sm text-[var(--ink-muted)]">
                              Can't decide? Browse the full catalogue.
                            </span>
                            <Link
                              href="/products"
                              className="text-sm font-medium text-[var(--blue)] hover:text-[var(--blue-deep)] underline-grow"
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
                    "inline-flex items-center px-4 py-2 rounded-full transition-colors font-medium",
                    isActive(link.href)
                      ? "text-[var(--blue)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--blue)]",
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
              className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-[var(--ink)] hover:text-[var(--blue)]"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--blue-soft)] text-[var(--blue)]">
                <Phone className="h-4 w-4" />
              </span>
              +44 (0) 7424 553 894
            </a>
            <Link
              href="/trade-login"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-2.5 text-sm font-medium hover:bg-[var(--blue)] transition-colors btn-shine"
            >
              Trade Login
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] text-[var(--ink)]"
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
              className="absolute inset-0 bg-[var(--ink)]/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white flex flex-col"
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--line)]">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)]"
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
                    className="px-3 py-3 rounded-2xl hover:bg-[var(--blue-soft)] font-display text-xl"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 px-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  Categories
                </div>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="px-3 py-2.5 rounded-2xl hover:bg-[var(--blue-soft)] text-[15px] flex items-center justify-between"
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-[var(--blue)]">→</span>
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
                <Link
                  href="/trade-login"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--ink)] text-white px-5 py-3 text-sm font-medium"
                >
                  Trade Login
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
