import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  tone = "dark",
  className,
  iconOnly = false,
}: {
  tone?: "dark" | "light";
  className?: string;
  iconOnly?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="JMS Trading — home"
      className={cn("inline-flex items-center gap-2.5 group", className)}
    >
      <span className="relative inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
        <Image
          src="/brand/logo-a.png"
          alt=""
          width={80}
          height={80}
          priority
          className={cn(
            "h-10 w-10 object-contain select-none",
            tone === "light" ? "brightness-0 invert" : "",
          )}
        />
      </span>
      {!iconOnly && (
        <span className="flex flex-col leading-none whitespace-nowrap">
          <span
            className={cn(
              "font-display text-[20px] font-semibold tracking-[-0.02em]",
              tone === "dark" ? "text-[var(--ink)]" : "text-white",
            )}
          >
            JMS <span className="text-[var(--blue)]">Trading</span>
          </span>
          <span
            className={cn(
              "mt-0.5 hidden sm:inline text-[9px] font-medium uppercase tracking-[0.24em]",
              tone === "dark" ? "text-[var(--ink-muted)]" : "text-white/60",
            )}
          >
            Wholesale · Distribution
          </span>
        </span>
      )}
    </Link>
  );
}
