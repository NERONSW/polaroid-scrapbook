import clsx from "clsx";
import type { ReactNode } from "react";
import { BadgeCheck, Heart, Mail } from "lucide-react";
import { tributes } from "@/data/tributes";
import { photos } from "@/data/photos";
import styles from "@/styles/components/_Scrapbook.module.scss";

interface QuickLinkProps {
  href: string;
  children: ReactNode;
  count?: number;
}

function QuickLink({ href, children, count }: QuickLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1 font-sans text-xs font-semibold text-on-surface-umber transition-colors hover:bg-surface-container hover:text-primary"
    >
      {children}
      {typeof count === "number" && (
        <span className="inline-flex items-center rounded-full bg-primary/10 px-1.5 py-0.5 font-sans text-[10px] font-bold leading-none text-primary">
          {count}
        </span>
      )}
    </a>
  );
}

export default function Header() {
  return (
    <>
      {/* Editorial postal & keepsake banner — stays in normal document flow */}
      <header className="w-full border-b border-outline-hairline/40 bg-surface-container-low">
        <div className={clsx("h-1.5", styles.airmailHatch)} aria-hidden="true" />

        <div className="px-4 py-2.5">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs sm:flex-row">
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-[17px] w-[17px] text-primary" aria-hidden="true" />
              <span className="font-sans font-semibold uppercase tracking-widest text-on-surface-umber">
                A Private Family Keepsake Edition • Vol. 1 • 1964 — 2024
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex rotate-[-0.5deg] items-center gap-2 bg-surface-container px-3 py-1 shadow-sm">
                <Mail className="h-[15px] w-[15px] text-primary" aria-hidden="true" />
                <span className="font-sans font-bold uppercase tracking-wider text-secondary">
                  Par Avion • Air Mail
                </span>
                <span className="text-outline-hairline" aria-hidden="true">
                  •
                </span>
                <span className="font-sans text-on-surface-umber">
                  Oct 1964 — London
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Floating pill nav — the only sticky element */}
      <nav
        aria-label="Quick jump"
        className="sticky top-4 z-50 mx-auto my-2 w-fit max-w-full px-2"
      >
        <div className="flex items-center gap-1 overflow-x-auto rounded-full border border-outline-hairline/60 bg-surface-container-lowest/95 px-3 py-1.5 shadow-lg backdrop-blur-md sm:gap-2">
          <div className="hidden shrink-0 items-center gap-1.5 border-r border-outline-hairline/40 pl-2 pr-1 text-primary sm:flex">
            <Heart className="h-4 w-4" aria-hidden="true" />
            <span className="font-headline text-xs italic">Arthur @ 60</span>
          </div>

          <QuickLink href="#story">Arthur’s Story</QuickLink>
          <QuickLink href="#wishes" count={tributes.length}>
            Wishes
          </QuickLink>
          <QuickLink href="#gallery" count={photos.length}>
            Photo Gallery
          </QuickLink>
          <QuickLink href="#dedication">Family Dedication</QuickLink>
        </div>
      </nav>
    </>
  );
}
