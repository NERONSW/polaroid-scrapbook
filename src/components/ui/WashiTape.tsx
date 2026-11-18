import clsx from "clsx";
import type { ReactNode } from "react";
import type { WashiTone } from "@/data/photos";

interface WashiTapeProps {
  /** Washi tone — terracotta & gold are the DESIGN.md tokens; blush is a tertiary fallback. */
  tone?: WashiTone;
  /** Optional stamped label rendered in small caps. */
  label?: ReactNode;
  /** Degrees of rotation (the CSS `rotate` property, so it composes with Tailwind translates). */
  rotation?: number;
  /** Use the more opaque "solid badge" tone (code.html hero tape) instead of translucent washi. */
  solid?: boolean;
  /** Tailwind utilities for size & placement, e.g. "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5". */
  className?: string;
}

// Class names are plain global styles defined in Scrapbook.scss (imported once
// in the root layout), so they are referenced here as literal strings.
const TONE_CLASS: Record<WashiTone, string> = {
  terracotta: "washi-tape--terracotta",
  gold: "washi-tape--gold",
  blush: "washi-tape--blush",
  amber: "washi-tape--amber",
  emerald: "washi-tape--emerald",
  pink: "washi-tape--pink",
};

const SOLID_TONE_CLASS: Record<WashiTone, string> = {
  terracotta: "washi-tape--terracotta-solid",
  gold: "washi-tape--gold-solid",
  blush: "washi-tape--blush-solid",
  amber: "washi-tape--amber-solid",
  emerald: "washi-tape--emerald-solid",
  pink: "washi-tape--pink-solid",
};

const LABEL_TONE: Record<WashiTone, string> = {
  terracotta: "text-white",
  gold: "text-secondary",
  blush: "text-on-surface-umber",
  amber: "text-on-surface-espresso",
  emerald: "text-on-surface-espresso",
  pink: "text-on-surface-espresso",
};

export default function WashiTape({
  tone = "terracotta",
  label,
  rotation = -1,
  solid = false,
  className,
}: WashiTapeProps) {
  const toneClass = solid ? SOLID_TONE_CLASS[tone] : TONE_CLASS[tone];

  return (
    <span
      aria-hidden={label == null ? true : undefined}
      className={clsx("washi-tape", toneClass, "h-5 px-3", className)}
      style={{ rotate: `${rotation}deg` }}
    >
      {label != null && (
        <span
          className={clsx(
            "whitespace-nowrap font-sans text-[10px] uppercase leading-none tracking-widest",
            LABEL_TONE[tone]
          )}
        >
          {label}
        </span>
      )}
    </span>
  );
}
