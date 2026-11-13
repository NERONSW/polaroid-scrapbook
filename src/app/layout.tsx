import type { Metadata } from "next";
import {
  Playfair_Display,
  Newsreader,
  Plus_Jakarta_Sans,
  Caveat,
  Noto_Serif_Sinhala,
} from "next/font/google";
import "./globals.css";

// High-editorial display — mastheads, hero banners, chapter roman numerals.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Narrative reading & letters.
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

// Stamps, badges & functional UI.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

// Handwritten script — signatures, polaroid captions, annotations.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Sinhala fallback for multi-generational wishes (DESIGN.md §3).
const sinhala = Noto_Serif_Sinhala({
  variable: "--font-sinhala",
  subsets: ["latin", "sinhala"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arthur Edwards — 60th Birthday Archival Scrapbook",
  description:
    "A private family keepsake celebrating sixty years of wisdom, love, and memories — 24 letters and 22 archival snapshots.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${newsreader.variable} ${jakarta.variable} ${caveat.variable} ${sinhala.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-surface-canvas text-on-surface-espresso">
        {children}
      </body>
    </html>
  );
}
