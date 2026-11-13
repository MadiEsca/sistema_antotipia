import type { Artifact, SearchFilters, SortOption } from "@/types";
import { artifacts } from "@/data/artifacts";

export function searchArtifacts(filters: SearchFilters): Artifact[] {
  let results = [...artifacts];

  // Text search
  if (filters.query.trim()) {
    const q = filters.query.trim().toLowerCase();
    results = results.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q)) ||
        a.id.toLowerCase().includes(q) ||
        String(a.year).includes(q) ||
        (a.longDescription?.toLowerCase().includes(q) ?? false)
    );
  }

  // Category filter
  if (filters.category) {
    results = results.filter((a) => a.category === filters.category);
  }

  // Sort
  results = sortArtifacts(results, filters.sort);

  return results;
}

export function sortArtifacts(
  items: Artifact[],
  sort: SortOption
): Artifact[] {
  const sorted = [...items];
  switch (sort) {
    case "recente":
      return sorted.sort((a, b) => b.year - a.year);
    case "antigas":
      return sorted.sort((a, b) => a.year - b.year);
    case "alfabetico":
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case "destaque":
      return sorted.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.year - a.year;
      });
    default:
      return sorted;
  }
}

export function getCategories(): string[] {
  const cats = new Set(artifacts.map((a) => a.category));
  return Array.from(cats).sort();
}

export function getPrevNextArtifacts(
  slug: string
): { prev: Artifact | null; next: Artifact | null } {
  const idx = artifacts.findIndex((a) => a.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? artifacts[idx - 1] : null,
    next: idx < artifacts.length - 1 ? artifacts[idx + 1] : null,
  };
}
