"use client";

import { useState, useCallback } from "react";
import type { Category, SortOption } from "@/types";
import { X, ChevronDown } from "lucide-react";

const CATEGORIES: Category[] = [
  "Ciências e Tecnologia",
  "Ciências Biológicas e da Saúde",
  "Ciências Ambientais",
  "Direitos Humanos",
  "Artes",
];

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "destaque", label: "Em destaque" },
  { value: "recente", label: "Adicionadas recentemente" },
  { value: "antigas", label: "Mais antigas" },
  { value: "alfabetico", label: "A–Z" },
];

interface GalleryFiltersProps {
  category: Category | "";
  sort: SortOption;
  resultCount: number;
  onCategoryChange: (c: Category | "") => void;
  onSortChange: (s: SortOption) => void;
  onClear: () => void;
  hasActiveFilters: boolean;
}

export default function GalleryFilters({
  category,
  sort,
  resultCount,
  onCategoryChange,
  onSortChange,
  onClear,
  hasActiveFilters,
}: GalleryFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 py-4 border-b border-da-border">
      {/* Category filters */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          onClick={() => onCategoryChange("")}
          className={`px-3 py-1.5 rounded-sm font-mono text-[10px] tracking-widest uppercase transition-all duration-200 border ${
            category === ""
              ? "bg-da-accent/10 border-da-accent/40 text-da-accent"
              : "border-da-border text-da-muted hover:border-da-text/30 hover:text-da-text"
          }`}
          aria-pressed={category === ""}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(category === cat ? "" : cat)}
            className={`px-3 py-1.5 rounded-sm font-mono text-[10px] tracking-widest uppercase transition-all duration-200 border ${
              category === cat
                ? "bg-da-accent/10 border-da-accent/40 text-da-accent"
                : "border-da-border text-da-muted hover:border-da-text/30 hover:text-da-text"
            }`}
            aria-pressed={category === cat}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1 min-w-4" />

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Result count */}
        <span className="font-mono text-[10px] text-da-muted tabular-nums whitespace-nowrap">
          {resultCount} artifact{resultCount !== 1 ? "s" : ""}
        </span>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            onClick={onClear}
            className="flex items-center gap-1 text-[10px] font-mono text-da-muted hover:text-da-alert transition-colors"
            aria-label="Limpar todos os filtros"
          >
            <X size={10} aria-hidden="true" />
            Clear
          </button>
        )}

        {/* Sort */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none bg-da-surface border border-da-border text-da-muted font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 pr-7 rounded-sm focus:border-da-text/30 focus:outline-none cursor-pointer hover:border-da-text/30 hover:text-da-text transition-colors"
            aria-label="Sort artifacts"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={10}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-da-muted pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
