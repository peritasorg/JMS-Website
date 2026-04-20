import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "ghost" | "yellow" | "light";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--navy)] text-white hover:bg-[var(--blue)] border border-[var(--navy)] hover:border-[var(--blue)]",
  yellow:
    "bg-[var(--yellow)] text-[var(--navy)] border border-[var(--yellow)] hover:bg-[var(--yellow-hot)] hover:border-[var(--yellow-hot)]",
  outline:
    "bg-transparent text-[var(--navy)] border border-[var(--navy)]/20 hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white",
  ghost:
    "bg-transparent text-[var(--navy)] border border-transparent hover:bg-[var(--cream-deep)]",
  light:
    "bg-[var(--yellow)] text-[var(--navy)] border border-[var(--yellow)] hover:bg-[var(--yellow-hot)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[12px]",
  md: "h-11 px-5 text-[13px]",
  lg: "h-13 px-7 text-[14px]",
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
    "inline-flex items-center gap-2 rounded-full font-caps btn-shine transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] whitespace-nowrap";
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
