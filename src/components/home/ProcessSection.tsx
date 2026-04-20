"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Truck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const steps = [
  {
    n: "01",
    label: "Warehouse",
    body: "Our Birmingham warehouse ensures safe, accurate, on-time dispatch across every category.",
    image: "/imagery/warehouse.jpg",
  },
  {
    n: "02",
    label: "Product prep",
    body: "Every SKU is prepped, labelled and carton-packed — ready for supermarkets and independents.",
    image: "/imagery/kitchenware.jpg",
  },
  {
    n: "03",
    label: "Delivery",
    body: "UK-wide delivery to trade partners — with reliable lead times and full tracking.",
    image: "/imagery/bedding.jpg",
  },
];

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[var(--cream)]">
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
          <Reveal>
            <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
              Optimised handling
            </div>
            <h2 className="mt-5 font-display-tight text-[44px] md:text-[56px] lg:text-[64px] text-[var(--navy)] leading-[0.92]">
              Precision handling for accurate product delivery
            </h2>
            <div className="mt-8 flex items-center gap-5">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] pl-6 pr-5 py-3 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors"
              >
                Explore Process
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Truck illustration */}
            <div className="mt-10 relative">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-4"
              >
                <div className="relative h-16 w-28 rounded-lg bg-[var(--red)] flex items-center justify-center text-white shadow-lg">
                  <Truck className="h-7 w-7" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center h-5 w-5 rounded-full bg-[var(--yellow)] text-[10px] font-display text-[var(--navy)]">
                    ∞
                  </span>
                </div>
                <div>
                  <div className="font-display text-[18px] text-[var(--navy)]">
                    UK-wide delivery
                  </div>
                  <div className="text-[12px] text-[var(--ink-muted)]">
                    Mon – Fri · From £0 over carton
                  </div>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5">
            <Stagger className="contents">
              {steps.map((s, i) => (
                <StaggerItem key={s.n} className={i === 1 ? "sm:row-span-2" : ""}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className={`relative overflow-hidden rounded-[22px] ${
                      i === 1 ? "aspect-[4/5]" : "aspect-[5/4]"
                    } h-full`}
                  >
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/85 via-[var(--navy)]/20 to-transparent" />
                    <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white text-[var(--navy)] font-caps text-[11px] px-3 py-1.5">
                      {s.n}/ {s.label}
                    </span>
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="font-display text-[20px] md:text-[22px] leading-tight">
                        {s.label}
                      </div>
                      <p className="mt-2 text-[13px] leading-relaxed text-white/85 line-clamp-3">
                        {s.body}
                      </p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
