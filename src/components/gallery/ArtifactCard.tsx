import Link from "next/link";
import type { Artifact } from "@/types";
import ArtifactImage from "./ArtifactImage";

interface ArtifactCardProps {
  artifact: Artifact;
  priority?: boolean;
}

const statusLabel: Record<string, string> = {
  available: "Available",
  restricted: "Restricted",
  archived: "Archived",
};

const statusClass: Record<string, string> = {
  available: "text-da-accent",
  restricted: "text-da-alert",
  archived: "text-da-muted",
};

export default function ArtifactCard({ artifact, priority }: ArtifactCardProps) {
  return (
    <article className="group relative">
      <Link
        href={`/artifact/${artifact.slug}`}
        className="block focus-visible:outline-da-accent focus-visible:outline-2 focus-visible:outline-offset-4 rounded-sm"
        aria-label={`View ${artifact.title}`}
      >
        {/* Image container */}
        <div className="relative overflow-hidden bg-da-surface border border-da-border aspect-[4/3] rounded-sm">
          <ArtifactImage
            src={artifact.coverImage}
            alt={artifact.title}
            artifactId={artifact.id}
            priority={priority}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-da-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Featured badge */}
          {artifact.featured && (
            <div className="absolute top-3 left-3 bg-da-accent/10 border border-da-accent/30 rounded-sm px-2 py-0.5">
              <span className="font-mono text-[9px] text-da-accent tracking-widest uppercase">
                Featured
              </span>
            </div>
          )}

          {/* Access indicator on hover */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-da-bg/90 border border-da-border rounded-sm px-2 py-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-da-accent inline-block" aria-hidden="true" />
              <span className="font-mono text-[9px] text-da-text tracking-wider uppercase">
                View
              </span>
            </div>
          </div>
        </div>

        {/* Card info */}
        <div className="mt-3 space-y-1.5">
          {/* ID and category row */}
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] text-da-muted tracking-wider uppercase">
              {artifact.id.toUpperCase()}
            </span>
            {artifact.status && (
              <span
                className={`font-mono text-[9px] tracking-wider uppercase ${statusClass[artifact.status] ?? "text-da-muted"}`}
                aria-label={`Status: ${statusLabel[artifact.status] ?? artifact.status}`}
              >
                {statusLabel[artifact.status]}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-da-text text-sm font-medium group-hover:text-da-accent transition-colors duration-200 text-balance leading-snug">
            {artifact.title}
          </h3>

          {/* Description */}
          <p className="text-da-muted text-xs leading-relaxed line-clamp-2">
            {artifact.description}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-2 pt-1">
            <span className="font-mono text-[10px] text-da-muted/70 bg-da-surface border border-da-border/60 rounded-sm px-1.5 py-0.5">
              {artifact.category}
            </span>
            <span className="text-da-border">·</span>
            <span className="font-mono text-[10px] text-da-muted tabular-nums">
              {artifact.year}
            </span>
          </div>

          {/* Tags */}
          {artifact.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-0.5" aria-label="Tags">
              {artifact.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[9px] text-da-muted/60 tracking-wide"
                >
                  #{tag}
                </span>
              ))}
              {artifact.tags.length > 3 && (
                <span className="font-mono text-[9px] text-da-muted/40">
                  +{artifact.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
