import { Star, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

const GOOGLE_REVIEW_WRITE_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ_____JMS_Trading";
const GOOGLE_LISTING_URL =
  "https://www.google.com/maps/search/?api=1&query=JMS+Trading+Birmingham";

export function GoogleTrustBar({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <div
      className={cn(
        "group inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border px-4 py-2.5 backdrop-blur",
        isDark
          ? "border-white/15 bg-white/5 text-white"
          : "border-[var(--line)] bg-white/80 text-[var(--ink)]",
        className,
      )}
    >
      {/* Google G */}
      <div className="flex items-center gap-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="h-6 w-6 flex-shrink-0"
          aria-hidden
        >
          <path
            fill="#EA4335"
            d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
          />
          <path
            fill="#4285F4"
            d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
          />
          <path
            fill="#FBBC05"
            d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
          />
          <path
            fill="#34A853"
            d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
          />
        </svg>

        <div className="flex flex-col leading-none">
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] opacity-70">
            Google reviews
          </span>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="font-display text-[20px] tracking-tight">5.0</span>
            <span className="flex items-center gap-[1px]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-[#fbbc05] text-[#fbbc05]"
                  strokeWidth={1}
                />
              ))}
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "hidden sm:block h-8 w-px",
          isDark ? "bg-white/15" : "bg-[var(--line)]",
        )}
      />

      <a
        href={GOOGLE_REVIEW_WRITE_URL}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "inline-flex items-center gap-1 text-[13px] font-medium transition-colors",
          isDark
            ? "text-white hover:text-[var(--yellow)]"
            : "text-[var(--ink)] hover:text-[var(--blue)]",
        )}
      >
        Leave a review
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
      <a
        href={GOOGLE_LISTING_URL}
        target="_blank"
        rel="noreferrer"
        className={cn(
          "text-[13px] transition-colors",
          isDark
            ? "text-white/70 hover:text-white"
            : "text-[var(--ink-muted)] hover:text-[var(--ink)]",
        )}
      >
        Read all →
      </a>
    </div>
  );
}
