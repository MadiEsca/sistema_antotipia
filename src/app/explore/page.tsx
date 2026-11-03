import type { Metadata } from "next";
import ExploreClient from "@/components/gallery/ExploreClient";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Browse and filter the complete DARK ARCHIVE catalog of digital artifacts, experiments, and fragments.",
};

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Page header */}
      <div className="mb-10">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-3">
          — Archive Catalog
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-da-text mb-3">
          Explore
        </h1>
        <p className="text-da-muted text-sm leading-relaxed max-w-lg">
          Browse the complete catalog. Filter by category, search by keyword, or
          sort to navigate the archive.
        </p>
      </div>

      <ExploreClient />
    </div>
  );
}
