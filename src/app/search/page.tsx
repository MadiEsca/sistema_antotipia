import type { Metadata } from "next";
import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search the DARK ARCHIVE catalog by title, category, tags, or year.",
};

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="mb-10">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-3">
          — Archive Search
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-da-text mb-3">
          Search Results
        </h1>
      </div>
      <Suspense fallback={<div className="font-mono text-da-muted text-sm">Loading...</div>}>
        <SearchPageClient />
      </Suspense>
    </div>
  );
}
