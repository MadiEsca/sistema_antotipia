import type { Artifact } from "@/types";

// Lista com todos os artifacts "chumbados dentro do programa"
// Vou implementar uma api em python para lidar com o envio desses artefatos, que no caso serão as mulheres da ciencia
// É necessário editar o tipo Artifact
export const artifacts: Artifact[] = [
  {
    id: "ada-lovelace",
    slug: "ada-lovelace",
    name: "Ada Lovelace",
    category: "Direitos Humanos",
    year: 2023,
    description: "An experimental study in digital decay — layers of corrupted raster data examined as aesthetic material.",
    longDescription: "Fragment_001 emerged from a process of deliberate file corruption and reconstruction. The source images were subjected to iterative encoding failures, byte manipulations, and format conversions that introduced unpredictable visual artifacts. The resulting composition sits at the boundary between breakdown and beauty, examining what persists when digital systems fail.\n\nThe work challenges the assumption that data corruption is purely destructive. Instead, it reveals an emergent aesthetic — glitch as a language, noise as texture, failure as form.",
    tags: ["pioneiraComputacao", "Programacao", "", "decay"],
    coverImage: "/images/artifacts/fragment-001.svg",
    featured: true,
    collectionIds: ["digital-decay", "experimental-visions"],
    status: "available",
    medium: "macacos",
    dimensions: "4096 × 4096 px",
  },
];

export function getArtifactBySlug(slug: string): Artifact | undefined {
  return artifacts.find((a) => a.slug === slug);
}

export function getFeaturedArtifacts(): Artifact[] {
  return artifacts.filter((a) => a.featured);
}

export function getRelatedArtifacts(artifact: Artifact, count = 4): Artifact[] {
  const candidates = artifacts.filter(
    (a) =>
      a.id !== artifact.id &&
      (a.category === artifact.category ||
        a.tags.some((t) => artifact.tags.includes(t)) ||
        (a.collectionIds &&
          artifact.collectionIds &&
          a.collectionIds.some((c) => artifact.collectionIds!.includes(c))))
  );
  return candidates.slice(0, count);
}
