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
  const color =
    tone === "accent"
      ? "text-[var(--blue)]"
      : tone === "light"
      ? "text-white/75"
      : "text-[var(--ink-muted)]";
  const dotColor =
    tone === "accent"
      ? "bg-[var(--yellow)]"
      : tone === "light"
      ? "bg-[var(--yellow)]"
      : "bg-[var(--yellow)]";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-caps text-[11px]",
        color,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />
      {children}
    </span>
  );
}
