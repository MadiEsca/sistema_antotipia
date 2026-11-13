import type { Metadata } from "next";
import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";

export const metadata: Metadata = {
  title: "Pesquisa Interna",
  description: "Faça uma busca aprofundada pelo nosso catálogo de ciêntistas",
};

export default function SearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="mb-10">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-3">
          — Pesquisa Interna
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-da-text mb-3">
          Resultados da busca
        </h1>
      </div>
      <Suspense fallback={<div className="font-mono text-da-muted text-sm">Carregando...</div>}>
        <SearchPageClient />
      </Suspense>
    </div>
  );
}
