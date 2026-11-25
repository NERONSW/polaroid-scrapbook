import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WishesSection from "@/components/sections/WishesSection";
import PhotoGallery from "@/components/sections/PhotoGallery";

export const metadata: Metadata = {
  title: "Sixty Years of Thilakasiri",
  description:
    "A keepsake scrapbook of birthday wishes, shared memories, and snapshots gathered from family and friends around the world celebrating Thilakasiri at 60.",
  openGraph: {
    title: "Sixty Years of Thilakasiri",
    description:
      "A keepsake scrapbook of birthday wishes, shared memories, and snapshots gathered from family and friends around the world celebrating Thilakasiri at 60.",
    type: "website",
    locale: "en_GB",
    siteName: "Sixty Years of Thilakasiri",
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
