"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import type { Photo } from "@/data/photos";
import WashiTape from "@/components/ui/WashiTape";
import styles from "@/styles/components/_Scrapbook.module.scss";

interface PolaroidCardProps {
  photo: Photo;
  /** Position in the album — passed back to open the lightbox at this index. */
  index: number;
  onOpen?: (index: number) => void;
  className?: string;
}

export default function PolaroidCard({
  photo,
  index,
  onOpen,
  className,
}: PolaroidCardProps) {
  const handleOpen = () => onOpen?.(index);

  return (
    <motion.article
      className={clsx(
        "group relative cursor-pointer border border-outline-hairline bg-surface-container-lowest p-3 pb-6",
        styles.polaroidShadow,
        className
      )}
      // Start at the organic micro-rotation; lift & straighten on hover, press on tap.
      initial={false}
      animate={{ rotate: photo.rotation ?? 0, y: 0, scale: 1 }}
      whileHover={{ rotate: 0, y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      role="button"
      tabIndex={0}
      aria-label={`Open photo: ${photo.title}`}
      onClick={handleOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOpen();
        }
      }}
    >
      {/* Translucent washi tape securing the snapshot */}
      <WashiTape
        tone={photo.tapeTone ?? "terracotta"}
        rotation={-1}
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5"
      />

      {/* Image container with vintage darkroom mounting corners */}
      <div className="relative aspect-square overflow-hidden bg-surface-container">
        <span className={clsx(styles.mountingCorner, styles.mountingCornerTopLeft)} aria-hidden="true" />
        <span className={clsx(styles.mountingCorner, styles.mountingCornerTopRight)} aria-hidden="true" />
        <span className={clsx(styles.mountingCorner, styles.mountingCornerBottomLeft)} aria-hidden="true" />
        <span className={clsx(styles.mountingCorner, styles.mountingCornerBottomRight)} aria-hidden="true" />

        <img
          src={photo.imageUrl}
          alt={photo.title}
          loading="lazy"
          draggable={false}
          className="h-full w-full object-cover sepia-[0.08] transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute bottom-1.5 right-1.5 bg-surface-container-lowest/85 px-2 py-0.5 font-sans text-[10px] font-bold text-on-surface-espresso shadow-sm backdrop-blur">
          {photo.year}
        </div>
      </div>

      {/* Handwritten polaroid caption */}
      <div className="pt-3 text-center space-y-1">
        <p className="font-cursive text-xl leading-tight text-on-surface-espresso">
          {photo.title}
        </p>
        <p className="font-body text-xs italic line-clamp-2 text-on-surface-muted">
          {photo.caption}
        </p>
      </div>
    </motion.article>
  );
}
