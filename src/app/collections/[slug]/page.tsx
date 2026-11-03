import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { collections } from "@/data/collections";
import { artifacts } from "@/data/artifacts";
import { getCollectionBySlug } from "@/data/collections";
import ArtifactCard from "@/components/gallery/ArtifactCard";
import ArtifactImage from "@/components/gallery/ArtifactImage";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const collectionArtifacts = artifacts.filter((a) =>
    collection.artifactIds.includes(a.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      {/* Back link */}
      <Link
        href="/collections"
        className="inline-flex items-center gap-2 font-mono text-[10px] text-da-muted hover:text-da-text transition-colors uppercase tracking-widest mb-8"
      >
        <ArrowLeft size={10} aria-hidden="true" />
        All Collections
      </Link>

      {/* Collection header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 pb-12 border-b border-da-border">
        {/* Cover */}
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-da-surface border border-da-border">
          <ArtifactImage
            src={collection.coverImage}
            alt={collection.name}
            artifactId={collection.id}
            fill
          />
        </div>

        {/* Info */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-3">
              — Collection
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-da-text mb-4">
              {collection.name}
            </h1>
            <p className="text-da-muted leading-relaxed max-w-xl">
              {collection.description}
            </p>
          </div>
          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-da-border/50">
            <div>
              <div className="font-mono text-2xl font-bold text-da-text tabular-nums">
                {String(collectionArtifacts.length).padStart(2, "0")}
              </div>
              <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase">
                Artifacts
              </div>
            </div>
            {collection.year && (
              <div>
                <div className="font-mono text-2xl font-bold text-da-text tabular-nums">
                  {collection.year}
                </div>
                <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase">
                  Updated
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Artifacts grid */}
      <h2 className="sr-only">Artifacts in this collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collectionArtifacts.map((artifact, i) => (
          <ArtifactCard key={artifact.id} artifact={artifact} priority={i < 3} />
        ))}
      </div>
    </div>
  );
}
