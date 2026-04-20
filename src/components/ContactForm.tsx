"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Field = "name" | "company" | "email" | "phone" | "enquiry" | "message";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "submitting" | "sent">("idle");
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    enquiry: "Trade account",
    message: "",
  });

  const update =
    (field: Field) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setState("sent");
  }

  return (
    <div className="relative rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 md:p-10">
      <AnimatePresence mode="wait">
        {state === "sent" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center text-center py-10"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--yellow-soft)]/30 text-[var(--blue-deep)]">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-6 font-display text-3xl text-[var(--ink)] tracking-tight">
              Thanks — we'll be in touch.
            </h3>
            <p className="mt-3 max-w-md text-[var(--ink-soft)]">
              Your message has landed with our team. We usually reply within the working
              day. In the meantime, feel free to browse the full product range.
            </p>
            <div className="mt-6">
              <Button
                href="/products"
                variant="outline"
                onClick={() => setState("idle")}
              >
                Browse products
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={onSubmit}
            className="grid gap-4 sm:grid-cols-2"
          >
            <FormField label="Your name" required>
              <input
                value={values.name}
                onChange={update("name")}
                required
                className="form-input"
                placeholder="Jane Smith"
              />
            </FormField>
            <FormField label="Company">
              <input
                value={values.company}
                onChange={update("company")}
                className="form-input"
                placeholder="ACME Retail Ltd."
              />
            </FormField>
            <FormField label="Email" required>
              <input
                type="email"
                value={values.email}
                onChange={update("email")}
                required
                className="form-input"
                placeholder="you@company.com"
              />
            </FormField>
            <FormField label="Phone">
              <input
                type="tel"
                value={values.phone}
                onChange={update("phone")}
                className="form-input"
                placeholder="+44 ..."
              />
            </FormField>
            <FormField label="What are you enquiring about?" className="sm:col-span-2">
              <select
                value={values.enquiry}
                onChange={update("enquiry")}
                className="form-input"
              >
                <option>Trade account</option>
                <option>Catalogue request</option>
                <option>Bulk order</option>
                <option>Category-specific enquiry</option>
                <option>General question</option>
              </select>
            </FormField>
            <FormField
              label="Message"
              className="sm:col-span-2"
              required
            >
              <textarea
                value={values.message}
                onChange={update("message")}
                required
                rows={5}
                className="form-input resize-none"
                placeholder="Tell us about your business and what you're looking for..."
              />
            </FormField>
            <div className="sm:col-span-2 mt-2 flex flex-col-reverse items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-[var(--ink-muted)] max-w-xs">
                By submitting you agree to our privacy policy. We never share your details.
              </p>
              <button
                type="submit"
                disabled={state === "submitting"}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] text-white px-6 py-3 text-sm font-medium hover:bg-[var(--ink-soft)] transition-colors disabled:opacity-75 group btn-shine"
              >
                {state === "submitting" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.9rem;
          background: var(--surface-muted);
          border: 1px solid var(--line);
          color: var(--ink);
          font-size: 15px;
          transition: border-color 0.25s, background-color 0.25s, box-shadow 0.25s;
        }
        .form-input::placeholder { color: var(--ink-muted); opacity: 0.75; }
        .form-input:focus {
          outline: none;
          border-color: var(--ink);
          background: white;
          box-shadow: 0 0 0 4px rgba(11,26,44,0.06);
        }
      `}</style>
    </div>
  );
}

function FormField({
  label,
  children,
  className,
  required,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className ?? ""}`}>
      <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-[var(--ink-muted)]">
        {label}
        {required && <span className="text-[var(--blue-deep)] ml-1">*</span>}
      </span>
      {children}
    </label>
  );
}
