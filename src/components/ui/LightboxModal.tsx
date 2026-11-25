"use client";

import { useEffect, useState, type SyntheticEvent } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
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

// Archival "developing" placeholder frame. Rendered as a child of the keyed
// motion.div (`key={photo.id}`), so its loading state resets synchronously on
// every open / close / print switch, then clears once the image decodes.
function PhotoFrame({ photo }: { photo: Photo }) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [aspect, setAspect] = useState<string | undefined>(undefined);

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth > 0 && naturalHeight > 0) {
      setAspect(`${naturalWidth} / ${naturalHeight}`);
    }
    setIsImageLoading(false);
  };

  return (
    <div
      style={aspect ? { aspectRatio: aspect } : undefined}
      className="relative flex max-h-[60vh] min-h-60 min-w-65 w-full items-center justify-center overflow-hidden border border-outline-hairline bg-surface-container sm:min-h-[320px]"
    >
      {isImageLoading && (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-container-low"
        >
          <Camera
            className="h-8 w-8 animate-pulse text-on-surface-muted"
            aria-hidden="true"
          />
          <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-on-surface-muted">
            Developing…
          </span>
        </div>
      )}

      <Image
        src={photo.imageUrl}
        alt={photo.title}
        fill
        sizes="(max-width: 768px) 95vw, 80vw"
        quality={85}
        draggable={false}
        onLoad={handleLoad}
        onError={() => setIsImageLoading(false)}
        className={clsx(
          "object-contain transition-opacity duration-300 ease-out",
          isImageLoading ? "opacity-0" : "opacity-100",
        )}
      />
    </div>
  );
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
              label="From The Archive"
              rotation={1}
              className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 h-6 w-fit"
            />

            <PhotoFrame photo={photo} />

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
