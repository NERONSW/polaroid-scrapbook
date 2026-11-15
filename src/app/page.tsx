import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WishesSection from "@/components/sections/WishesSection";
import PhotoGallery from "@/components/sections/PhotoGallery";

export const metadata: Metadata = {
  title: "Arthur Edwards — 60th Birthday Archival Scrapbook",
  description:
    "A private family keepsake celebrating sixty years of wisdom, love & memories — heartfelt letters and archival Polaroid snapshots from one family's archive.",
  openGraph: {
    title: "Arthur Edwards — 60th Birthday Archival Scrapbook",
    description:
      "Celebrating 60 years of wisdom, love, and memories — a private family keepsake edition.",
    type: "website",
    locale: "en_GB",
    siteName: "Arthur Edwards — 60th Birthday Archival Scrapbook",
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main className="paper-texture mx-auto w-full max-w-6xl flex-1 space-y-20 px-4 py-4 sm:px-6 sm:py-8 md:space-y-28 lg:px-8">
        <Hero />
        <WishesSection />
        <PhotoGallery />
      </main>

      <Footer />
    </>
  );
}
