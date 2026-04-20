import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Logo({
  tone = "dark",
  className,
  size = "md",
}: {
  tone?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const text = tone === "light" ? "text-white" : "text-[var(--navy)]";
  const dim = {
    sm: { box: "h-8 w-8", text: "text-[20px]" },
    md: { box: "h-10 w-10", text: "text-[24px]" },
    lg: { box: "h-14 w-14", text: "text-[36px]" },
  }[size];

  return (
    <Link
      href="/"
      aria-label="JMS Trading — home"
      className={cn("inline-flex items-center gap-3 group", className)}
    >
      <span className={cn("relative inline-flex items-center justify-center flex-shrink-0", dim.box)}>
        <Image
          src="/brand/logo-a.png"
          alt=""
          width={96}
          height={96}
          priority
          className={cn(
            "h-full w-full object-contain",
            tone === "light" ? "brightness-0 invert" : "",
          )}
        />
      </span>
      <span
        className={cn(
          "font-display tracking-tight leading-none whitespace-nowrap",
          text,
          dim.text,
        )}
      >
        JMS<span className="text-[var(--yellow)]">.</span>
      </span>
    </Link>
  );
}

export function InfinityMark({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 32"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      aria-hidden
    >
      <path
        d="M16 16c0-6 5-10 10-10 4 0 6 2 8 5l4 6c2 3 4 5 8 5 5 0 10-4 10-10s-5-10-10-10c-4 0-6 2-8 5l-4 6c-2 3-4 5-8 5-5 0-10-4-10-10z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        transform="rotate(180 32 16)"
      />
    </svg>
  );
}
