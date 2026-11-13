"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { searchArtifacts } from "@/lib/search";
import { useSearch } from "@/lib/searchContext";
import ArtifactGrid from "@/components/gallery/ArtifactGrid";
import GalleryFilters from "@/components/gallery/GalleryFilters";
import { Search, X } from "lucide-react";
import type { Category, SortOption } from "@/types";

export default function SearchPageClient() {
  const searchParams = useSearchParams();
  const urlQuery = searchParams.get("q") ?? "";
  const { filters, setQuery, setCategory, setSort, clearFilters } = useSearch();

  // Sync URL query param on mount
  useEffect(() => {
    if (urlQuery) setQuery(urlQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlQuery]);

  const results = useMemo(() => searchArtifacts(filters), [filters]);
  const hasActiveFilters =
    filters.query.trim() !== "" ||
    filters.category !== "" ||
    filters.sort !== "destaque";

  return (
    <>
      <div className="relative mb-6">
        <div className="flex items-center gap-3 bg-da-surface border border-da-border rounded-sm px-4 py-3 focus-within:border-da-text/30 transition-colors">
          <Search size={16} className="text-da-muted shrink-0" aria-hidden="true" />
          <input
            type="search"
            value={filters.query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busque pela pessoa..."
            className="flex-1 bg-transparent text-da-text placeholder-da-muted text-sm font-mono focus:outline-none"
            aria-label="Busque pela pessoa"
            autoFocus
          />
          {filters.query && (
            <button
              onClick={() => setQuery("")}
              className="text-da-muted hover:text-da-text transition-colors"
              aria-label="Limpar pesquisa"
            >
              <X size={14} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      <GalleryFilters
        category={filters.category}
        sort={filters.sort}
        resultCount={results.length}
        onCategoryChange={setCategory}
        onSortChange={setSort}
        onClear={clearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      <div className="mt-8">
        <ArtifactGrid artifacts={results} />
      </div>
    </>
  );
}
