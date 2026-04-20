import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--ink)] text-white hover:bg-[var(--blue)] border border-[var(--ink)] hover:border-[var(--blue)]",
  outline:
    "bg-transparent text-[var(--ink)] border border-[var(--ink)]/20 hover:border-[var(--ink)] hover:bg-[var(--ink)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--ink)] border border-transparent hover:bg-[var(--surface-muted)]",
  light:
    "bg-[var(--yellow)] text-[var(--ink)] border border-[var(--yellow)] hover:bg-[var(--yellow-soft)] hover:border-[var(--yellow-soft)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-13 px-7 text-base",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  external?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow,
  className,
  onClick,
  type = "button",
  external,
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-full font-medium tracking-tight btn-shine transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] whitespace-nowrap";
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-[1.05em] w-[1.05em] flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(classes, "group")}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
