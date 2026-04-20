"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const faqs = [
  {
    q: "What products does JMS Trading supply?",
    a: "JMS Trading offers a wide range of high-quality household, kitchenware and catering products designed for both retail and trade customers. Our catalogue includes durable cookware, food storage solutions, bedding, travel accessories, hardware, stationery, rugs and general home essentials sourced from trusted manufacturers.",
  },
  {
    q: "Do you supply to both businesses and individuals?",
    a: "Our primary focus is serving trade customers — retailers, distributors, wholesalers and online sellers. We work best with volume buyers who benefit from our trade-friendly carton quantities.",
  },
  {
    q: "How can I open a trade account?",
    a: "Opening a trade account is quick and straightforward. Use the 'Open Account' button to send us your business details, or call us directly on +44 (0) 7424 553 894. A member of our team will reach out to confirm pricing and delivery options.",
  },
  {
    q: "Where is JMS Trading based and how can I contact you?",
    a: "We're based at JAS House, Titford Lane, Birmingham, B65 0PY. You can reach us on +44 (0) 7424 553 894 or via our contact page. Visitors welcome by appointment.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="py-16 md:py-24 bg-[var(--cream)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <div className="inline-flex items-center gap-2 font-caps text-[11px] text-[var(--ink-muted)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--yellow)]" />
                FAQ · Support
              </div>
              <h2 className="mt-5 font-display-tight text-[44px] md:text-[56px] lg:text-[64px] text-[var(--navy)] leading-[0.92] max-w-[14ch]">
                Your questions, answered
              </h2>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-[var(--ink-muted)]">
                Can't find what you're looking for? Call us on +44 (0) 7424 553 894 — we
                usually reply within the working day.
              </p>
            </Reveal>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <FAQItem key={f.q} index={i} question={f.q} answer={f.a} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.05}>
      <div
        className={`rounded-[20px] border overflow-hidden transition-colors ${
          open
            ? "border-[var(--yellow)] bg-white"
            : "border-[var(--line)] bg-white"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-6 p-6 text-left"
          aria-expanded={open}
        >
          <span className="flex items-center gap-4">
            <span className="font-caps text-[11px] text-[var(--blue)]">
              ∞ {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-[18px] md:text-[22px] text-[var(--navy)] leading-snug">
              {question.toUpperCase()}
            </span>
          </span>
          <span
            className={`flex-shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
              open
                ? "bg-[var(--yellow)] text-[var(--navy)] rotate-45"
                : "bg-[var(--cream-deep)] text-[var(--navy)]"
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pl-[3.75rem] text-[14px] md:text-[15px] leading-relaxed text-[var(--ink-muted)]">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
