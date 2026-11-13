import type { Metadata } from "next";
import ExploreClient from "@/components/gallery/ExploreClient";

export const metadata: Metadata = {
  title: "Explore",
  description:
    "Busque e filtre pelas ciêntistas em nosso catálogo.",
};

export default function ExplorePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Page header */}
      <div className="mb-10">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-3">
          — Um tributo a Elas
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-da-text mb-3">
          Explore
        </h1>
        <p className="text-da-muted text-sm leading-relaxed max-w-lg">
          Busque e filtre pelas ciêntistas em nosso catálogo, seja pelo seu nome, categoria ou palavra chave relacionada a ela.
        </p>
      </div>

      <ExploreClient />
    </div>
  );
}
