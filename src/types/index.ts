// Criação dos tipos
export type Category =
  | "Digital Art"
  | "Software History"
  | "Interfaces"
  | "Experiments"
  | "Photography"
  | "Digital Culture";

export type SortOption = "recent" | "oldest" | "alphabetical" | "featured";

// Criação das interfaces que serão utilizadas
export interface Artifact {
  id: string;
  slug: string;
  title: string;
  category: Category;
  year: number;
  description: string;
  longDescription?: string;
  tags: string[];
  coverImage: string;
  featured: boolean;
  collectionIds?: string[];
  status?: "available" | "restricted" | "archived";
  dimensions?: string;
  medium?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  coverImage: string;
  artifactIds: string[];
  year?: number;
}

export interface SearchFilters {
  query: string;
  category: Category | "";
  sort: SortOption;
}
