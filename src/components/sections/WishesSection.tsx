"use client";

import { useState } from "react";
import clsx from "clsx";
import { motion } from "motion/react";
import Image from "next/image";
import { ChevronDown, PenLine } from "lucide-react";
import {
  INITIAL_VISIBLE_TRIBUTE_COUNT,
  tributes,
  type Tribute,
} from "@/data/tributes";
import WashiTape from "@/components/ui/WashiTape";

// Deterministic organic micro-rotations (DESIGN.md §4: -1.5deg → +2.0deg).
const CARD_ROTATIONS = [
  "rotate-[-0.8deg]",
  "rotate-[1deg]",
  "rotate-[-1.2deg]",
  "rotate-[0.7deg]",
  "rotate-[-1deg]",
  "rotate-[1.4deg]",
  "rotate-[-1.5deg]",
  "rotate-[0.9deg]",
] as const;

// Small tilt variety for the mini-polaroid author portraits.
const PORTRAIT_TILTS = [
  "rotate-2",
  "rotate-[-3deg]",
  "rotate-[1.5deg]",
  "rotate-[-2deg]",
] as const;

function AuthorPortrait({
  tribute,
  index,
}: {
  tribute: Tribute;
  index: number;
}) {
  const initial = tribute.author.trim().charAt(0).toUpperCase();

  return (
    <div
      className={clsx(
        "w-16 shrink-0 rounded-xs border border-outline-hairline bg-surface-container-lowest p-1 shadow-sm",
        PORTRAIT_TILTS[index % PORTRAIT_TILTS.length],
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-surface-container">
        {tribute.authorImage ? (
          <Image
            src={tribute.authorImage}
            alt={`${tribute.author} portrait`}
            fill
            sizes="4rem"
            quality={82}
            className="object-cover sepia-[0.08]"
          />
        ) : (
          /* Charming archival monogram fallback when no photo is provided. */
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center justify-center font-cursive text-2xl leading-none text-on-surface-muted"
          >
            {initial}
          </span>
        )}
      </div>

      <div className="pt-0.5 text-center font-body text-[9px] italic leading-tight text-on-surface-muted">
        {tribute.authorImageCaption || " "}
      </div>
    </div>
  );
}

function TributeCard({ tribute, index }: { tribute: Tribute; index: number }) {
  const hasTape = Boolean(tribute.tapeText);
  const hasTag = Boolean(tribute.tag);

  return (
    <motion.article
      className={clsx(
        "relative mb-6 break-inside-avoid border border-outline-hairline bg-surface-container-lowest px-6 pb-6 shadow-md transition-transform duration-300 hover:rotate-0",
        hasTape ? "pt-12" : "pt-6",
        CARD_ROTATIONS[index % CARD_ROTATIONS.length],
      )}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {hasTape && (
        <WashiTape
          tone={tribute.tapeColor ?? "terracotta"}
          label={tribute.tapeText}
          rotation={-1.5}
          className="absolute top-1 left-6 z-30 h-5 w-fit"
        />
      )}

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <span className="block font-sans text-[11px] font-bold uppercase tracking-wider text-primary">
              {tribute.author}
            </span>
            <span className="font-body text-xs italic text-on-surface-muted">
              {tribute.relation}
            </span>
            <h3 className="mt-1 font-headline text-lg text-on-surface-espresso">
              {tribute.title}
            </h3>
          </div>

          {/* Upper-right mini-polaroid author portrait. */}
          <AuthorPortrait tribute={tribute} index={index} />
        </div>

        {/* lang="si" switches on Noto Serif Sinhala + 1.85 line-height via globals.css */}
        <p
          lang={tribute.language === "si" ? "si" : undefined}
          className="whitespace-pre-line font-body text-sm leading-relaxed text-on-surface-umber"
        >
          {tribute.content}
        </p>

        <div
          className={clsx(
            "flex items-center border-t border-dashed border-outline-hairline/60 pt-2",
            hasTag ? "justify-between" : "justify-end",
          )}
        >
          {hasTag && (
            <span className="bg-surface-container px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider text-secondary">
              {tribute.tag}
            </span>
          )}
          <span className="font-cursive text-lg text-primary">
            {tribute.signature}
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export default function WishesSection() {
  const [expanded, setExpanded] = useState(false);

  const coreTributes = tributes.slice(0, INITIAL_VISIBLE_TRIBUTE_COUNT);
  const remainingTributes = tributes.slice(INITIAL_VISIBLE_TRIBUTE_COUNT);
  const remainingCount = tributes.length - INITIAL_VISIBLE_TRIBUTE_COUNT;

  return (
    <section id="wishes" className="scroll-mt-37 md:scroll-mt-20 space-y-8">
      {/* Section header */}
      <motion.div
        className="mx-auto max-w-2xl space-y-2 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-flex items-center justify-center gap-2 bg-surface-container px-3 py-1">
          <PenLine className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">
            Chapter I • WORDS FROM THE HEART
          </span>
        </div>
        <h2 className="font-headline text-3xl text-on-surface-espresso sm:text-4xl">
          The People, The Moments, The Memories
        </h2>
        <p className="font-body italic text-on-surface-muted">
          ඔබට ආදරය කරන, ඔබ සමඟ ජීවිතයේ මතකයන් බෙදාගත් ආදරණීයයන්ගේ හදවතින් නැඟුණු
          සටහන්, සුන්දර මතකයන් සහ ආදරණීය සුබපැතුම් එකතුවක්.
        </p>
      </motion.div>

      {/* 1 → 2 → 3 column masonry of tribute cards */}
      <div className="columns-1 gap-6 md:columns-2 lg:columns-3 space-y-0">
        {coreTributes.map((tribute, index) => (
          <TributeCard key={tribute.id} tribute={tribute} index={index} />
        ))}

        {expanded &&
          remainingTributes.map((tribute, index) => (
            <TributeCard
              key={tribute.id}
              tribute={tribute}
              index={index + INITIAL_VISIBLE_TRIBUTE_COUNT}
            />
          ))}
      </div>

      {/* Progressive disclosure toggle */}
      <div className="pt-2 text-center">
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="inline-flex min-h-12 items-center gap-2 rounded-full border border-outline-hairline bg-surface-container-lowest px-6 py-3 font-sans text-sm font-semibold text-primary shadow-md transition-all duration-300 hover:bg-surface-container hover:shadow-lg"
        >
          <span>
            {expanded
              ? "Show Fewer Tributes"
              : `Reveal All ${tributes.length} Tributes ♡`}
          </span>
          <ChevronDown
            className={clsx(
              "h-5 w-5 transition-transform duration-300",
              expanded && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </div>
    </section>
  );
}
