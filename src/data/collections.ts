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
  {
    id: "forgotten-interfaces",
    slug: "forgotten-interfaces",
    name: "Forgotten Interfaces",
    description:
      "A catalog of user interface systems that were displaced, discontinued, or simply forgotten — alternative visions for how humans and computers might interact.",
    coverImage: "/images/artifacts/obsidian-interface.svg",
    artifactIds: [
      "obsidian-interface",
      "ghost-protocol-archive",
      "forgotten-systems",
      "membrane-protocol",
    ],
    year: 2023,
  },
  {
    id: "machine-aesthetics",
    slug: "machine-aesthetics",
    name: "Machine Aesthetics",
    description:
      "Works that take computation itself as aesthetic material — algorithms, processes, and system outputs examined as visual and conceptual phenomena.",
    coverImage: "/images/artifacts/terminal-studies.svg",
    artifactIds: [
      "obsidian-interface",
      "terminal-studies",
      "midnight-repository",
      "broken-geometry",
      "membrane-protocol",
    ],
    year: 2023,
  },
  {
    id: "experimental-visions",
    slug: "experimental-visions",
    name: "Experimental Visions",
    description:
      "Works that resist categorization — experiments at the edges of photography, computation, visualization, and digital art practice.",
    coverImage: "/images/artifacts/synthetic-memory.svg",
    artifactIds: [
      "fragment-001",
      "digital-ruins",
      "terminal-studies",
      "synthetic-memory",
      "unknown-signal",
      "broken-geometry",
      "null-space",
      "chromatic-absence",
    ],
    year: 2024,
  },
  {
    id: "historical-computing",
    slug: "historical-computing",
    name: "Historical Computing",
    description:
      "Primary sources, documentation, and visual records from the history of personal and networked computing — the material record of digital culture's formation.",
    coverImage: "/images/artifacts/forgotten-systems.svg",
    artifactIds: [
      "ghost-protocol-archive",
      "static-dreams",
      "forgotten-systems",
      "midnight-repository",
      "lost-frequencies",
      "cassette-archive",
      "wire-protocols",
      "system-archaeology",
    ],
    year: 2022,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
