import type { Metadata } from "next";
import Link from "next/link";
import { collections } from "@/data/collections";
import { artifacts } from "@/data/artifacts";
import ArtifactImage from "@/components/gallery/ArtifactImage";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Thematic collections within the DARK ARCHIVE — curated groupings of digital artifacts by theme, medium, and era.",
};

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Header */}
      <div className="mb-12">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-3">
          — Thematic Groups
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-da-text mb-3">
          Collections
        </h1>
        <p className="text-da-muted text-sm leading-relaxed max-w-lg">
          The archive is organized into thematic collections — groupings of
          artifacts that share aesthetic, historical, or conceptual threads.
        </p>
      </div>

      {/* Collections grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {collections.map((collection) => {
          const collectionArtifacts = artifacts.filter((a) =>
            collection.artifactIds.includes(a.id)
          );

          return (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative bg-da-surface border border-da-border rounded-sm overflow-hidden hover:border-da-text/30 transition-all duration-300 focus-visible:outline-da-accent focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {/* Cover image area */}
              <div className="relative aspect-[16/7] overflow-hidden">
                <ArtifactImage
                  src={collection.coverImage}
                  alt={collection.name}
                  artifactId={collection.id}
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-r from-da-bg/70 via-da-bg/20 to-transparent" />

                {/* Item thumbnails */}
                <div className="absolute bottom-3 right-3 flex gap-1.5">
                  {collectionArtifacts.slice(0, 3).map((a) => (
                    <div
                      key={a.id}
                      className="w-8 h-8 rounded-sm border border-da-border/50 overflow-hidden bg-da-bg"
                    >
                      <ArtifactImage
                        src={a.coverImage}
                        alt={a.name}
                        artifactId={a.id}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-da-muted tracking-wider uppercase mb-2">
                      {collectionArtifacts.length} artifact{collectionArtifacts.length !== 1 ? "s" : ""}
                      {collection.year && ` · ${collection.year}`}
                    </div>
                    <h2 className="text-da-text text-lg font-medium group-hover:text-da-accent transition-colors duration-200 mb-2">
                      {collection.name}
                    </h2>
                    <p className="text-da-muted text-xs leading-relaxed line-clamp-2">
                      {collection.description}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-da-border group-hover:text-da-accent transition-colors shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
