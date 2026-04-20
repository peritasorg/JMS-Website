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
  tone = "color",
}: {
  className?: string;
  tone?: "color" | "light" | "dark";
}) {
  const filter =
    tone === "light"
      ? "brightness-0 invert"
      : tone === "dark"
      ? "brightness-0"
      : "";
  // Use the real JMS infinity logo image, cropped to show only the icon
  // (logo-a.png is ~3000×2389; infinity occupies the top ~65%)
  return (
    <span
      aria-hidden
      className={cn("relative inline-block overflow-hidden", className)}
      style={{ aspectRatio: "4 / 3" }}
    >
      <Image
        src="/brand/logo-a.png"
        alt=""
        fill
        sizes="400px"
        className={cn("object-contain object-top scale-[1.45]", filter)}
        style={{ transformOrigin: "top center" }}
      />
    </span>
  );
}
