import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "digital-decay",
    slug: "digital-decay",
    name: "Digital Decay",
    description:
      "Artifacts that examine entropy, degradation, and transformation in digital systems — the aesthetics of breakdown and corruption as creative material.",
    coverImage: "/images/artifacts/fragment-001.svg",
    artifactIds: [
      "fragment-001",
      "static-dreams",
      "digital-ruins",
      "synthetic-memory",
      "lost-frequencies",
      "cassette-archive",
      "system-archaeology",
    ],
    year: 2024,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
