"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";
import { categories } from "@/lib/products";
import { cn } from "@/lib/cn";

const mainLinks = [
  { label: "Products", href: "/products", hasMenu: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block border-b border-[var(--line)] bg-[var(--surface-muted)]">
        <Container className="flex items-center justify-between py-2 text-xs text-[var(--ink-muted)]">
          <span className="tracking-wide">
            Welcome to <span className="text-[var(--ink)]">JMS Trading</span> — JAS House, Titford Lane, Birmingham, B65 0PY
          </span>
          <div className="flex items-center gap-6">
            <a
              href="tel:+447424553894"
              className="inline-flex items-center gap-2 text-[var(--ink)] hover:text-[var(--blue-deep)] transition-colors"
            >
              <Phone className="h-3.5 w-3.5" strokeWidth={2} />
              +44 (0) 7424 553 894
            </a>
            <Link
              href="/trade-login"
              className="text-[var(--ink)] underline-grow"
            >
              Trade Login
            </Link>
          </div>
        </Container>
      </div>

      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-[var(--background)]/85 backdrop-blur-lg border-b border-[var(--line)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <Container className="flex items-center justify-between h-[72px]">
          <Logo />

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
                      "inline-flex items-center gap-1 px-4 py-2 rounded-full transition-colors",
                      pathname.startsWith("/products")
                        ? "text-[var(--ink)]"
                        : "text-[var(--ink-soft)] hover:text-[var(--ink)]",
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
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-3"
                      >
                        <div className="w-[620px] rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_30px_60px_-20px_rgba(11,26,44,0.25)] p-6">
                          <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)] mb-4">
                            Product categories
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {categories.map((c) => (
                              <Link
                                key={c.slug}
                                href={`/products/${c.slug}`}
                                className="group flex flex-col gap-1 rounded-2xl p-3 hover:bg-[var(--surface-muted)] transition-colors"
                              >
                                <span className="font-display text-[17px] text-[var(--ink)] leading-tight">
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
                              className="text-sm font-medium text-[var(--ink)] underline-grow"
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
                    "inline-flex items-center px-4 py-2 rounded-full transition-colors",
                    pathname === link.href
                      ? "text-[var(--ink)]"
                      : "text-[var(--ink-soft)] hover:text-[var(--ink)]",
                  )}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:block">
              <Button href="/contact" variant="primary" size="sm" arrow>
                Open an Account
              </Button>
            </div>
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
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-[var(--background)] flex flex-col"
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
                <Link
                  href="/"
                  className="px-3 py-3 rounded-2xl hover:bg-[var(--surface-muted)] font-display text-xl"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-3 rounded-2xl hover:bg-[var(--surface-muted)] font-display text-xl"
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="px-3 py-3 rounded-2xl hover:bg-[var(--surface-muted)] font-display text-xl"
                >
                  Contact
                </Link>
                <div className="mt-4 px-3 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                  Products
                </div>
                <Link
                  href="/products"
                  className="px-3 py-2.5 rounded-2xl hover:bg-[var(--surface-muted)] text-[15px]"
                >
                  All products
                </Link>
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/products/${c.slug}`}
                    className="px-3 py-2.5 rounded-2xl hover:bg-[var(--surface-muted)] text-[15px] flex items-center justify-between"
                  >
                    <span>{c.name}</span>
                    <span className="text-xs text-[var(--ink-muted)]">
                      {c.tagline.split(",")[0]}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="p-5 border-t border-[var(--line)] flex flex-col gap-3">
                <a
                  href="tel:+447424553894"
                  className="inline-flex items-center gap-2 text-[var(--ink)]"
                >
                  <Phone className="h-4 w-4" />
                  +44 (0) 7424 553 894
                </a>
                <Button href="/contact" variant="primary" arrow>
                  Open an Account
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
