"use client";

import { motion } from "motion/react";
import { CalendarDays, FolderOpen, Heart, Pin } from "lucide-react";
import WashiTape from "@/components/ui/WashiTape";
import { tributes } from "@/data/tributes";
import { photos } from "@/data/photos";

// Master keepsake portrait (reference/code.html hero "★ The Best Smile").
const HERO_PORTRAIT_SRC =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAerGh59XzscT6NQvhXus_w3NJahsNuihfU6pjMZqQ_HA1Fu0urUcX4Hb_-SQQdIltArwG9DaWvMyDB_9rfLa2Tsjukl_7QR8XNPEZr--KncZdbK_Bpxu_hN9mgfecWtiyttmZm8-DOvdKygmbArvwJMbpIfPLW9R6Oc4iSFk5mrFRM9cKqEQm2kIRcTbZX81YCXw6Oo7Q6kS3kxEn3RozosC4iVfRx0qSCw5qvGBgw";

export default function Hero() {
  return (
    <section
      id="story"
      className="grid scroll-mt-20 grid-cols-1 items-center gap-10 pt-2 lg:grid-cols-12 lg:gap-14"
    >
      {/* Left — master Polaroid keepsake portrait */}
      <motion.div
        className="flex justify-center lg:col-span-5 lg:justify-start"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="group relative w-full max-w-95 rotate-[-1.5deg] transition-transform duration-500 hover:rotate-0">
          <WashiTape
            tone="terracotta"
            label="★ The Best Smile"
            rotation={-2}
            className="absolute -top-3.5 left-1/2 z-20 h-6 w-32 -translate-x-1/2"
          />

          <div className="border border-outline-hairline bg-surface-container-lowest p-3.5 pb-7 shadow-xl">
            <div className="relative aspect-[4/4.3] w-full overflow-hidden bg-surface-container">
              <img
                src={HERO_PORTRAIT_SRC}
                alt="Arthur portrait 2023"
                className="h-full w-full object-cover sepia-[0.06] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-2 right-2 bg-on-surface-espresso/50 px-2 py-0.5 font-sans text-[10px] tracking-widest text-white backdrop-blur-sm">
                OCT ’23
              </div>
            </div>

            <div className="space-y-1 pt-3 text-center">
              <p className="font-cursive text-2xl leading-tight text-on-surface-espresso">
                Arthur — London &amp; Home, 2023 ♡
              </p>
              <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-on-surface-muted">
                Celebrating Six Decades of Life, Love &amp; Laughter
              </p>
            </div>
          </div>

          <div
            className="absolute -bottom-2 -left-2 z-10 h-5 w-16 rotate-12 bg-secondary-container/85 shadow-sm"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Right — welcome tribute letter */}
      <motion.div
        className="space-y-6 lg:col-span-7"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12, ease: "easeOut" }}
      >
        <div className="inline-flex rotate-1 items-center gap-2 bg-secondary-container px-3.5 py-1 shadow-sm">
          <Pin className="h-3.75 w-3.75 text-secondary" aria-hidden="true" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-on-surface-umber">
            Pinned with Love by the Whole Family
          </span>
        </div>

        <h1 className="font-headline text-4xl leading-[1.12] text-on-surface-espresso sm:text-5xl lg:text-[54px]">
          Celebrating 60 Years of Wisdom, Love &amp; Memories
        </h1>

        <div className="space-y-4 font-body text-lg leading-relaxed text-on-surface-umber">
          <p>
            Gathered here in one safe place: sixty years of stories, Sunday
            dinners, quiet sacrifices, and unending warmth. From late-night
            bicycle repairs in the damp garden shed to tender lullabies sung
            under the attic rafters, you have built our entire world with gentle
            hands.
          </p>

          <div className="relative border-l-4 border-primary bg-surface-container-low p-5 shadow-sm">
            <span className="mb-1 block font-cursive text-xl text-primary">
              “A note from our hearts…”
            </span>
            <p className="font-body italic text-primary">
              “We love you more than words can say. May these preserved pages
              hold just a fraction of the comfort, laughter, and pure joy you
              have poured into every single one of us.”
            </p>
          </div>
        </div>

        {/* Archival metadata ribbon */}
        <div className="flex flex-wrap items-center gap-4 pt-2 font-sans text-xs uppercase tracking-wider text-on-surface-muted">
          <div className="flex items-center gap-1.5">
            <FolderOpen
              className="h-4.5 w-4.5 text-primary"
              aria-hidden="true"
            />
            <span>Volume I • Milestone Archive</span>
          </div>
          <span className="text-outline-hairline" aria-hidden="true">
            •
          </span>
          <div className="flex items-center gap-1.5">
            <CalendarDays
              className="h-4.5 w-4.5 text-secondary"
              aria-hidden="true"
            />
            <span>October 24, 2024</span>
          </div>
          <span className="text-outline-hairline" aria-hidden="true">
            •
          </span>
          <div className="flex items-center gap-1.5">
            <Heart className="h-4.5 w-4.5 text-tertiary" aria-hidden="true" />
            <span>
              {tributes.length} Tributes • {photos.length} Curated Snapshots
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
