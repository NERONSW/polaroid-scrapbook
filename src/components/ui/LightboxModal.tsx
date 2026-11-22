"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Photo } from "@/data/photos";
import WashiTape from "@/components/ui/WashiTape";

interface LightboxModalProps {
  open: boolean;
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  open,
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxModalProps) {
  const photo = photos[index];

  // Keyboard navigation + scroll lock while the darkroom is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") onPrev();
      else if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {open && photo && (
        <motion.div
          className="fixed inset-0 z-60 flex items-center justify-center bg-surface-darkroom p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={photo.title}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Close lightbox"
            onClick={onClose}
            className="absolute right-5 top-5 z-20 rounded-full bg-surface-container-low p-3 text-on-surface-umber transition-colors hover:text-on-surface-espresso"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Previous */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary/80 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-primary sm:left-8"
          >
            <ChevronLeft className="h-7 w-7" aria-hidden="true" />
          </button>

          {/* Next */}
          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-primary/80 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-primary sm:right-8"
          >
            <ChevronRight className="h-7 w-7" aria-hidden="true" />
          </button>

          {/* Framed print — swipable on touch */}
          <motion.div
            key={photo.id}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col items-center border border-outline-hairline bg-surface-container-lowest p-4 shadow-2xl sm:p-6"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80 || info.velocity.x < -400) onNext();
              else if (info.offset.x > 80 || info.velocity.x > 400) onPrev();
            }}
          >
            <WashiTape
              tone={photo.tapeTone ?? "terracotta"}
              label="Vintage Kodak Archive"
              rotation={1}
              className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 h-6 w-fit"
            />

            <div className="relative flex max-h-[60vh] w-full items-center justify-center overflow-hidden border border-outline-hairline bg-surface-container">
              <img
                src={photo.imageUrl}
                alt={photo.title}
                draggable={false}
                className="max-h-[60vh] w-full object-contain"
              />
            </div>

            <div className="w-full space-y-1 pt-4 text-center">
              <div className="flex items-center justify-between px-2 font-sans text-xs">
                <span className="rounded bg-surface-container px-2 py-0.5 font-bold text-secondary">
                  Photo {index + 1} of {photos.length}
                </span>
                <span className="rounded bg-surface-container px-2 py-0.5 font-bold text-primary">
                  Year {photo.year}
                </span>
              </div>

              <h3 className="font-headline text-xl text-on-surface-espresso sm:text-2xl">
                {photo.title}
              </h3>

              <p className="font-body text-sm italic text-on-surface-muted sm:text-base">
                {photo.caption}
              </p>

              {photo.location && (
                <p className="font-sans text-xs uppercase tracking-wider text-on-surface-muted">
                  {photo.location}
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
