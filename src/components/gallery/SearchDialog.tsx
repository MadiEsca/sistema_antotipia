"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { X, Search, ArrowRight } from "lucide-react";
import { useSearch } from "@/lib/searchContext";
import { searchArtifacts } from "@/lib/search";

export default function SearchDialog() {
  const { filters, setQuery, closeSearch, isSearchOpen } = useSearch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const results = searchArtifacts({ ...filters, query: filters.query });

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const handleSelect = (slug: string) => {
    closeSearch();
    router.push(`/artifact/${slug}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (filters.query.trim()) {
      closeSearch();
      router.push(`/explore?q=${encodeURIComponent(filters.query.trim())}`);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Search artifacts"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-da-bg/90 backdrop-blur-sm"
        onClick={closeSearch}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl bg-da-surface border border-da-border rounded-sm shadow-2xl">
        {/* Search input */}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 px-4 py-3 border-b border-da-border">
            <Search size={16} className="text-da-muted shrink-0" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={filters.query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Busque por personagens, categorias, tags...."
              className="flex-1 bg-transparent text-da-text placeholder-da-muted text-sm font-mono focus:outline-none"
              aria-label="Search query"
            />
            {filters.query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-da-muted hover:text-da-text transition-colors shrink-0"
                aria-label="Clear search"
              >
                <X size={14} aria-hidden="true" />
              </button>
            )}
            <button
              type="button"
              onClick={closeSearch}
              className="text-da-muted hover:text-da-text transition-colors shrink-0 ml-1"
              aria-label="Close search"
            >
              <kbd className="font-mono text-[10px] border border-da-border rounded px-1.5 py-0.5">ESC</kbd>
            </button>
          </div>
        </form>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {filters.query.trim() === "" ? (
            <div className="px-4 py-6 text-center">
              <p className="text-da-muted text-xs font-mono">
                Escreva para pesquisar uma personagem dentro de {/* */}
                <span className="text-da-text">16 Personagens</span>
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-da-muted text-sm font-mono">
                A personagem &ldquo;{filters.query}&rdquo; não foi encontrada
              </p>
            </div>
          ) : (
            <ul role="listbox">
              {results.slice(0, 8).map((artifact) => (
                <li key={artifact.id} role="option" aria-selected={false}>
                  <button
                    onClick={() => handleSelect(artifact.slug)}
                    className="w-full flex items-center gap-4 px-4 py-3 hover:bg-da-bg2 transition-colors text-left group border-b border-da-border/50 last:border-0"
                  >
                    <div className="shrink-0 w-8 h-8 bg-da-bg rounded border border-da-border flex items-center justify-center">
                      <span className="font-mono text-[8px] text-da-muted">
                        {artifact.id.slice(-3).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-da-text text-sm font-medium truncate group-hover:text-da-accent transition-colors">
                        {artifact.name}
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="font-mono text-[10px] text-da-muted">
                          {artifact.category}
                        </span>
                        <span className="text-da-border">·</span>
                        <span className="font-mono text-[10px] text-da-muted tabular-nums">
                          {artifact.year}
                        </span>
                      </div>
                    </div>
                    <ArrowRight
                      size={12}
                      className="text-da-border group-hover:text-da-accent transition-colors shrink-0"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {filters.query.trim() !== "" && results.length > 0 && (
          <div className="border-t border-da-border px-4 py-2 flex items-center justify-between">
            <span className="font-mono text-[10px] text-da-muted tabular-nums">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </span>
            <button
              onClick={() => {
                closeSearch();
                router.push(`/explore?q=${encodeURIComponent(filters.query.trim())}`);
              }}
              className="font-mono text-[10px] text-da-accent hover:text-da-text transition-colors flex items-center gap-1"
            >
              View all in Explore
              <ArrowRight size={10} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
