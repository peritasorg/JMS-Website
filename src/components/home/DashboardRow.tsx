"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquare, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const shipments = [
  { label: "Bedding · 4-piece sets", value: "£2,480", color: "var(--blue)" },
  { label: "Kitchenware order", value: "£1,325", color: "var(--yellow-hot)" },
  { label: "Stationery pallet", value: "£865", color: "var(--red)" },
];

export function DashboardRow() {
  return (
    <section className="py-12 md:py-20 bg-[var(--surface-muted)]">
      <Container>
        <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr_1fr] items-stretch">
          {/* Support chat card */}
          <Reveal>
            <div className="h-full rounded-[22px] bg-white border border-[var(--line)] p-6">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-full bg-[var(--blue-soft)] flex items-center justify-center flex-shrink-0 overflow-hidden">
                  <span className="font-display text-[20px] text-[var(--navy)]">
                    EB
                  </span>
                  <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <div className="font-display text-[17px] text-[var(--navy)]">
                    Edward Blake
                  </div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Trade Support · JMS
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-5 flex items-start gap-2"
              >
                <MessageSquare className="h-4 w-4 mt-1.5 flex-shrink-0 text-[var(--blue)]" />
                <div className="rounded-2xl bg-[var(--blue-soft)] text-[var(--navy)] px-4 py-2.5 text-sm">
                  Hello — how can I help you today?
                </div>
              </motion.div>

              <motion.button
                whileHover={{ y: -2 }}
                className="mt-3 w-full inline-flex items-center gap-2 rounded-full bg-[var(--navy)] text-white px-4 py-3 font-caps text-[12px]"
              >
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--yellow)]">
                  <MessageSquare className="h-3 w-3 text-[var(--navy)]" />
                </span>
                Start a trade enquiry
              </motion.button>

              <div className="mt-4 pt-4 border-t border-[var(--line)] flex items-center gap-2 text-xs text-[var(--ink-muted)]">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                Trusted by 2,000+ UK retailers
              </div>
            </div>
          </Reveal>

          {/* Center stat */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-[22px] bg-[var(--cream-deep)] p-8 flex flex-col justify-center items-center text-center">
              <div className="font-caps text-[11px] text-[var(--ink-muted)]">
                ∞ Delivering
              </div>
              <h3 className="mt-4 font-display-tight text-[32px] md:text-[40px] text-[var(--navy)] leading-[0.9]">
                Faith, Peace of Mind, and Unparalleled Quality
              </h3>

              <div className="mt-7 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["#1d65d1", "#ffd93d", "#e84030", "#0a1834"].map((c, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-[3px] border-[var(--cream-deep)] flex items-center justify-center font-display text-[14px]"
                      style={{
                        background: c,
                        color: c === "#ffd93d" ? "#0a1834" : "white",
                      }}
                    >
                      {["R", "S", "T", "J"][i]}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="font-display text-[24px] text-[var(--navy)] leading-none">
                    2K+
                  </div>
                  <div className="font-caps text-[10px] text-[var(--ink-muted)]">
                    Trade Partners
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Bookings dashboard card */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-[22px] bg-[var(--blue-soft)] p-6">
              <div className="flex items-center justify-between">
                <div className="font-caps text-[11px] text-[var(--navy)]">
                  ∞ Today's shipments
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-caps text-[var(--navy)]">
                  Today ▾
                </div>
              </div>

              <div className="mt-5 space-y-2.5">
                {shipments.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-center justify-between rounded-xl bg-white px-4 py-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className="h-2.5 w-2.5 rounded-full flex-shrink-0"
                        style={{ background: s.color }}
                      />
                      <span className="text-[13px] text-[var(--navy)] truncate">
                        {s.label}
                      </span>
                    </div>
                    <span className="font-display text-[16px] text-[var(--navy)]">
                      {s.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/60 flex items-center justify-between">
                <span className="font-caps text-[11px] text-[var(--navy)]">
                  Total order value
                </span>
                <span className="font-display text-[22px] text-[var(--navy)]">
                  £4,670
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
