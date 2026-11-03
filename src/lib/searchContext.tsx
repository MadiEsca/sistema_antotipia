"use client";

import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import type { SearchFilters, Category, SortOption } from "@/types";

interface SearchContextValue {
  filters: SearchFilters;
  setQuery: (q: string) => void;
  setCategory: (c: Category | "") => void;
  setSort: (s: SortOption) => void;
  clearFilters: () => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
}

const defaults: SearchFilters = { query: "", category: "", sort: "featured" };

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<SearchFilters>(defaults);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const setQuery = useCallback((query: string) => {
    setFilters((f) => ({ ...f, query }));
  }, []);

  const setCategory = useCallback((category: Category | "") => {
    setFilters((f) => ({ ...f, category }));
  }, []);

  const setSort = useCallback((sort: SortOption) => {
    setFilters((f) => ({ ...f, sort }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters(defaults);
  }, []);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => setIsSearchOpen(false), []);

  // Global keyboard shortcut: "/" to open search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;
      if (e.key === "/" && !isInput) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        filters,
        setQuery,
        setCategory,
        setSort,
        clearFilters,
        isSearchOpen,
        openSearch,
        closeSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used inside SearchProvider");
  return ctx;
}
