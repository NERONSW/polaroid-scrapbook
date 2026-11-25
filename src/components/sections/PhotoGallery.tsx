"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Images } from "lucide-react";
import { photos } from "@/data/photos";
import PolaroidCard from "@/components/ui/PolaroidCard";
import LightboxModal from "@/components/ui/LightboxModal";

export default function PhotoGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + photos.length) % photos.length
    );
  const showNext = () =>
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % photos.length
    );

  return (
    <section id="gallery" className="scroll-mt-[148px] md:scroll-mt-20 space-y-8">
      {/* Section header */}
      <motion.div
        className="mx-auto max-w-3xl space-y-2 text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="inline-flex items-center justify-center gap-2 bg-surface-container px-3 py-1">
          <Images className="h-4 w-4 text-secondary" aria-hidden="true" />
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
            Chapter II • The Archival Album
          </span>
        </div>
        <h2 className="font-headline text-3xl text-on-surface-espresso sm:text-4xl">
          Curated Polaroid Album: {photos.length} Snapshot Moments from Six
          Decades
        </h2>
        <p className="font-body italic text-on-surface-muted">
          Mounting corner preserves • Click any snapshot to inspect in the
          archival lightbox modal
        </p>
      </motion.div>

      {/* 1 → 2 → 4 column polaroid spread */}
      <div className="grid grid-cols-1 gap-6 pt-2 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <PolaroidCard
            key={photo.id}
            photo={photo}
            index={index}
            onOpen={(i) => setActiveIndex(i)}
          />
        ))}
      </div>

      <LightboxModal
        open={activeIndex !== null}
        photos={photos}
        index={activeIndex ?? 0}
        onClose={close}
        onPrev={showPrev}
        onNext={showNext}
      />
    </section>
  );
}
