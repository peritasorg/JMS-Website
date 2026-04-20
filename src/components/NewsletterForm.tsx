"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NewsletterForm() {
  const [state, setState] = useState<"idle" | "sent">("idle");

  return (
    <AnimatePresence mode="wait">
      {state === "sent" ? (
        <motion.div
          key="done"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="inline-flex items-center gap-3 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-6 py-4 font-caps text-[13px]"
        >
          <CheckCircle2 className="h-4 w-4" /> Signed up — we'll be in touch
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={(e) => {
            e.preventDefault();
            setState("sent");
          }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Your name"
            className="flex-1 rounded-full bg-white/5 border border-white/15 px-5 py-3.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--yellow)]"
          />
          <input
            type="email"
            placeholder="Email address"
            required
            className="flex-1 rounded-full bg-white/5 border border-white/15 px-5 py-3.5 text-[14px] text-white placeholder:text-white/40 focus:outline-none focus:border-[var(--yellow)]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--yellow)] text-[var(--navy)] px-6 py-3.5 font-caps text-[13px] btn-shine hover:bg-[var(--yellow-hot)] transition-colors"
          >
            Submit <Send className="h-4 w-4" />
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
