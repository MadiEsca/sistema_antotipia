import type { Metadata } from "next";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { getFeaturedArtifacts } from "@/data/artifacts";
import ArtifactGrid from "@/components/gallery/ArtifactGrid";
import ArtifactCard from "@/components/gallery/ArtifactCard";
import { ArrowRight, Archive } from "lucide-react";

export const metadata: Metadata = {
  title: "DARK ARCHIVE — Digital Artifact Gallery",
  description:
    "An experimental digital gallery cataloging artifacts, images, and fragments from the less explored corners of digital culture.",
};

export default function HomePage() {
  const featured = getFeaturedArtifacts();
  const recent = artifacts.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col justify-end pb-16 pt-28 px-4 sm:px-6 lg:px-8 scan-lines overflow-hidden"
        aria-label="Archive hero"
      >
        {/* Background grid */}
        <div className="absolute inset-0 archive-grid opacity-40 pointer-events-none" aria-hidden="true" />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, #08090B 80%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Pre-label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-px bg-da-accent" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-da-accent">
              Dark Archive / Catalog v1.0
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-[clamp(2.5rem,8vw,6.5rem)] font-serif font-bold leading-[0.9] tracking-tight text-da-text text-balance max-w-4xl mb-8"
            style={{ animationName: "fadeUp", animationDuration: "0.8s", animationFillMode: "both" }}
          >
            An Archive of{" "}
            <span className="italic text-da-muted">Digital</span>
            <br />
            Obscurity.
          </h1>

          {/* Subtitle and metadata row */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-16">
            <div className="max-w-md">
              <p className="text-da-muted text-base leading-relaxed">
                Artifacts, experiments and fragments from the less explored
                corners of digital culture — cataloged, preserved, examined.
              </p>
            </div>

            {/* Stats grid */}
            <div className="flex gap-8 lg:gap-12">
              <div>
                <div className="font-mono text-3xl font-bold text-da-text tabular-nums">
                  {String(artifacts.length).padStart(2, "0")}
                </div>
                <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase mt-1">
                  Artifacts
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-da-text tabular-nums">
                  06
                </div>
                <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase mt-1">
                  Categories
                </div>
              </div>
              <div>
                <div className="font-mono text-3xl font-bold text-da-text tabular-nums">
                  05
                </div>
                <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase mt-1">
                  Collections
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6 mt-10">
            <Link
              href="/explore"
              className="inline-flex items-center gap-3 bg-da-accent text-da-bg font-mono text-xs tracking-widest uppercase font-bold px-6 py-3 rounded-sm hover:bg-da-accent/90 transition-colors duration-200 focus-visible:outline-da-accent focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <Archive size={14} aria-hidden="true" />
              Explore the Archive
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/collections"
              className="font-mono text-xs tracking-widest uppercase text-da-muted hover:text-da-text transition-colors duration-200 flex items-center gap-2"
            >
              Collections
              <ArrowRight size={12} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-da-border max-w-7xl mx-auto" aria-hidden="true" />

      {/* Featured section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        aria-labelledby="featured-heading"
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-2">
              — Selected Works
            </div>
            <h2
              id="featured-heading"
              className="text-2xl font-serif font-bold text-da-text"
            >
              Featured Artifacts
            </h2>
          </div>
          <Link
            href="/explore"
            className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-da-muted hover:text-da-text transition-colors uppercase tracking-widest"
          >
            View All
            <ArrowRight size={10} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((artifact, i) => (
            <ArtifactCard key={artifact.id} artifact={artifact} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-da-border/40 max-w-7xl mx-auto" aria-hidden="true" />

      {/* Recent section */}
      <section
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        aria-labelledby="recent-heading"
      >
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="font-mono text-[10px] text-da-muted tracking-[0.4em] uppercase mb-2">
              — Catalog
            </div>
            <h2
              id="recent-heading"
              className="text-2xl font-serif font-bold text-da-text"
            >
              Recent Acquisitions
            </h2>
          </div>
          <Link
            href="/explore"
            className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-da-muted hover:text-da-text transition-colors uppercase tracking-widest"
          >
            Browse All
            <ArrowRight size={10} aria-hidden="true" />
          </Link>
        </div>

        <ArtifactGrid artifacts={recent} />

        <div className="text-center mt-12">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 font-mono text-xs text-da-muted hover:text-da-text border border-da-border hover:border-da-text/30 rounded-sm px-6 py-3 transition-all duration-200 tracking-widest uppercase"
          >
            View All {artifacts.length} Artifacts
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Manifesto strip */}
      <section className="border-t border-da-border bg-da-surface/30" aria-labelledby="manifesto-teaser">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <div className="font-mono text-[10px] text-da-muted tracking-[0.4em] uppercase mb-3">
              — About This Archive
            </div>
            <h2
              id="manifesto-teaser"
              className="text-xl font-serif font-bold text-da-text mb-3"
            >
              Why we preserve digital artifacts
            </h2>
            <p className="text-da-muted text-sm leading-relaxed">
              Digital culture leaves traces that are fragile, ephemeral, and
              systematically undervalued. This archive exists to examine those
              traces before they disappear.
            </p>
          </div>
          <Link
            href="/about"
            className="shrink-0 inline-flex items-center gap-2 font-mono text-xs text-da-muted hover:text-da-text border border-da-border hover:border-da-text/30 rounded-sm px-5 py-2.5 transition-all duration-200 tracking-widest uppercase"
          >
            Read Manifesto
            <ArrowRight size={12} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
