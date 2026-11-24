import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer id="dedication" className="scroll-mt-20 pb-12 pt-6">
      <div className="relative mx-auto max-w-3xl space-y-6 border border-outline-hairline bg-surface-container-lowest p-8 text-center shadow-lg sm:p-12">
        {/* Delicate dashed inner stitch line */}
        <div
          className="pointer-events-none absolute inset-3 border border-dashed border-outline-hairline/60"
          aria-hidden="true"
        />

        {/* Embossed terracotta wax seal */}
        <div className="inline-flex h-14 w-14 -rotate-3 items-center justify-center bg-primary text-white shadow-md">
          <Heart
            className="h-7 w-7"
            fill="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>

        <div className="space-y-1">
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-primary">
            Family Dedication • November 2026
          </span>
          <h2 className="font-headline text-3xl text-on-surface-espresso sm:text-4xl">
            To the Heart of Our Family
          </h2>
        </div>

        <p className="mx-auto max-w-xl font-body text-lg leading-relaxed text-on-surface-umber">
          Here is to 60 magnificent years, and every golden sunrise still ahead.
          Thank you for being the shelter in every storm, the laughter at every
          hearth, and the joy in every celebration.
        </p>

        <div className="py-2">
          <p className="font-cursive text-3xl tracking-wide text-primary">
            “To the heart of our family — forever grateful for you, Dad ♡”
          </p>
        </div>

        <div className="pt-2">
          <div className="inline-block bg-surface-container px-4 py-2 shadow-sm">
            <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary">
              With boundless love &amp; admiration — Chulani, Dewni, Ovini,
              Nipuna, Thisal &amp; all of us
            </p>
          </div>
        </div>

        <div className="pt-4 font-sans text-[10px] uppercase tracking-widest text-on-surface-muted">
          Archived 2026 • Sri Lanka • Kept in Living Memory
        </div>
      </div>
    </footer>
  );
}
