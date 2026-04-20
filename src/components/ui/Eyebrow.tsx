import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "accent" | "light";
}) {
  const toneCls =
    tone === "accent"
      ? "text-[var(--blue)] before:bg-[var(--blue)]"
      : tone === "light"
      ? "text-white/75 before:bg-[var(--yellow)]"
      : "text-[var(--ink-muted)] before:bg-[var(--ink)]";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] before:block before:h-px before:w-8",
        toneCls,
        className,
      )}
    >
      {children}
    </span>
  );
}
