"use client";

import { useMemo } from "react";
import type { Artifact, SearchFilters } from "@/types";
import { searchArtifacts } from "@/lib/search";
import ArtifactCard from "./ArtifactCard";
import EmptyState from "@/components/ui/EmptyState";

interface ArtifactGridProps {
  filters?: Partial<SearchFilters>;
  artifacts?: Artifact[];
  columns?: 3 | 4;
}

const defaultFilters: SearchFilters = {
  query: "",
  category: "",
  sort: "destaque",
};

export default function ArtifactGrid({
  filters,
  artifacts: providedArtifacts,
  columns = 3,
}: ArtifactGridProps) {
  const results = useMemo(() => {
    if (providedArtifacts) return providedArtifacts;
    return searchArtifacts({ ...defaultFilters, ...filters });
  }, [filters, providedArtifacts]);

  if (results.length === 0) {
    return (
      <EmptyState
        title="No artifacts found"
        description="Try adjusting your filters or search query."
      />
    );
  }

  return (
    <section aria-label="Artifact gallery">
      <div
        className={`grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 ${
          columns === 4
            ? "lg:grid-cols-3 xl:grid-cols-4"
            : "lg:grid-cols-3"
        }`}
      >
        {results.map((artifact, i) => (
          <ArtifactCard
            key={artifact.id}
            artifact={artifact}
            priority={i < 6}
          />
        ))}
      </div>
    </section>
  );
}
