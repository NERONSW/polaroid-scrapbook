import clsx from "clsx";
import type { ReactNode } from "react";
import type { WashiTone } from "@/data/photos";
import styles from "@/styles/components/_Scrapbook.module.scss";

interface WashiTapeProps {
  /** Washi tone — terracotta & gold are the DESIGN.md tokens; blush is a tertiary fallback. */
  tone?: WashiTone;
  /** Optional stamped label rendered in small caps. */
  label?: ReactNode;
  /** Degrees of rotation (the CSS `rotate` property, so it composes with Tailwind translates). */
  rotation?: number;
  /** Tailwind utilities for size & placement, e.g. "absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5". */
  className?: string;
}

const TONE_CLASS: Record<WashiTone, string> = {
  terracotta: styles.washiTapeTerracotta,
  gold: styles.washiTapeGold,
  blush: styles.washiTapeBlush,
};

const LABEL_TONE: Record<WashiTone, string> = {
  terracotta: "text-white",
  gold: "text-secondary",
  blush: "text-on-surface-umber",
};

export default function WashiTape({
  tone = "terracotta",
  label,
  rotation = -1,
  className,
}: WashiTapeProps) {
  return (
    <span
      aria-hidden={label == null ? true : undefined}
      className={clsx(styles.washiTape, TONE_CLASS[tone], "h-5 px-3", className)}
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
