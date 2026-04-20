"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const faqs = [
  {
    q: "What products does JMS Trading supply?",
    a: "JMS Trading offers a wide range of high-quality household, kitchenware and catering products designed for both retail and trade customers. Our catalogue includes durable cookware, food storage solutions, bedding, travel accessories, hardware, stationery, rugs and general home essentials sourced from trusted manufacturers.",
  },
  {
    q: "Do you supply to both businesses and individuals?",
    a: "Our primary focus is serving trade customers — retailers, distributors, wholesalers and online sellers. We work best with volume buyers who benefit from our trade-friendly carton quantities, though we do support smaller orders through select channels. Get in touch and we'll point you to the right option.",
  },
  {
    q: "How can I open a trade account with JMS Trading?",
    a: "Opening a trade account is quick and straightforward. Use the 'Open Your Account Now' button to send us your business details, or call us directly on +44 (0) 7424 553 894. Once we have your information, a member of our team will reach out to confirm pricing, catalogues and delivery options.",
  },
  {
    q: "Where is JMS Trading based and how can I contact you?",
    a: "We're based at JAS House, Titford Lane, Birmingham, B65 0PY. You can reach us on +44 (0) 7424 553 894 or via our contact page. Visitors are welcome by appointment — drop us a line before you travel and we'll make sure the right person is on hand.",
  },
];

export function FAQSection() {
  return (
    <section id="faqs" className="py-24 md:py-32 bg-[var(--surface-muted)]/60">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-24">
            <Reveal>
              <Eyebrow>Your questions, answered</Eyebrow>
              <h2 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] leading-[1.05] tracking-[-0.02em]">
                Answers to the most common questions.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-[var(--ink-soft)] max-w-md">
                If you don't find the information you're looking for, feel free to contact us —
                we usually reply within the working day.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="outline" arrow>
                  Contact us
                </Button>
              </div>
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

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <Reveal delay={index * 0.05}>
      <div className="rounded-3xl border border-[var(--line)] bg-[var(--surface)] overflow-hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-start justify-between gap-6 p-6 md:p-7 text-left"
          aria-expanded={open}
        >
          <span className="flex gap-4">
            <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-xl md:text-2xl text-[var(--ink)] tracking-tight leading-snug">
              {question}
            </span>
          </span>
          <span
            className={`flex-shrink-0 mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "border-[var(--ink)] bg-[var(--ink)] text-white rotate-45"
                : "border-[var(--line)] text-[var(--ink)]"
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
              <div className="px-6 md:px-7 pb-7 md:pl-[5.25rem] text-[15px] md:text-base leading-relaxed text-[var(--ink-soft)]">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
