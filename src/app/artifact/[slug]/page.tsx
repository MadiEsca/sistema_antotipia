import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { getArtifactBySlug, getRelatedArtifacts } from "@/data/artifacts";
import { getPrevNextArtifacts } from "@/lib/search";
import ArtifactImage from "@/components/gallery/ArtifactImage";
import ArtifactCard from "@/components/gallery/ArtifactCard";
import ImageModal from "@/components/artifact/ImageModal";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return artifacts.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);
  if (!artifact) return { title: "Artifact Not Found" };
  return {
    title: artifact.name,
    description: artifact.description,
    openGraph: {
      title: artifact.name,
      description: artifact.description,
      type: "article",
    },
  };
}

const statusLabel: Record<string, string> = {
  available: "Available",
  restricted: "Restricted",
  archived: "Archived",
};
const statusColor: Record<string, string> = {
  available: "text-da-accent border-da-accent/30",
  restricted: "text-da-alert border-da-alert/30",
  archived: "text-da-muted border-da-border",
};

export default async function ArtifactPage({ params }: Props) {
  const { slug } = await params;
  const artifact = getArtifactBySlug(slug);
  if (!artifact) notFound();

  const related = getRelatedArtifacts(artifact, 3);
  const { prev, next } = getPrevNextArtifacts(slug);

  const paragraphs = artifact.longDescription?.split("\n\n") ?? [artifact.description];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 mb-8 flex-wrap">
        <Link href="/" className="font-mono text-[10px] text-da-muted hover:text-da-text transition-colors uppercase tracking-widest">
          Cientista
        </Link>
        <span className="text-da-border font-mono text-[10px]">/</span>
        <Link href="/explore" className="font-mono text-[10px] text-da-muted hover:text-da-text transition-colors uppercase tracking-widest">
          Explore
        </Link>
        <span className="text-da-border font-mono text-[10px]">/</span>
        <span className="font-mono text-[10px] text-da-text uppercase tracking-widest truncate">
          {artifact.name}
        </span>
      </nav>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        {/* Image */}
        <div className="lg:col-span-3">
          <ImageModal artifact={artifact} />
        </div>

        {/* Metadata sidebar */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-da-muted tracking-widest uppercase">
              {artifact.id.toUpperCase()}
            </span>
            {artifact.status && (
              <span className={`font-mono text-[9px] tracking-wider uppercase border rounded-sm px-2 py-0.5 ${statusColor[artifact.status] ?? "text-da-muted border-da-border"}`}>
                {statusLabel[artifact.status]}
              </span>
            )}
          </div>

          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-da-text leading-tight">
            {artifact.name}
          </h1>

          <div className="space-y-3">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-da-muted text-sm leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2" aria-label="Tags">
            {artifact.tags.map((tag) => (
              <span key={tag} className="font-mono text-[10px] text-da-muted border border-da-border/60 rounded-sm px-2 py-1 bg-da-surface/50">
                #{tag}
              </span>
            ))}
          </div>

          <div className="border border-da-border rounded-sm divide-y divide-da-border bg-da-surface/30">
            <MetaRow label="Categoria" value={artifact.category} />
            <MetaRow label="Nascimento" value={String(artifact.year)} />
            {artifact.medium && <MetaRow label="Resumo" value={artifact.medium} />}
            {/*{artifact.dimensions && <MetaRow label="Dimensions" value={artifact.dimensions} />} */}
            <MetaRow label="Identificador" value={artifact.id.toUpperCase()} mono />
          </div>

          <Link href="/explore" className="inline-flex items-center gap-2 font-mono text-[10px] text-da-muted hover:text-da-text transition-colors uppercase tracking-widest">
            <ArrowLeft size={10} aria-hidden="true" />
            Back to Gallery
          </Link>
        </div>
      </div>

      {/* Prev / next */}
      {(prev || next) && (
        <nav className="mt-16 pt-8 border-t border-da-border flex items-center justify-between gap-4" aria-label="Artifact navigation">
          {prev ? (
            <Link href={`/artifact/${prev.slug}`} className="group flex items-center gap-3 min-w-0">
              <ArrowLeft size={14} className="text-da-muted group-hover:text-da-accent shrink-0 transition-colors" aria-hidden="true" />
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-da-muted uppercase tracking-widest mb-1">Previous</div>
                <div className="text-sm text-da-text group-hover:text-da-accent transition-colors truncate">{prev.name}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/artifact/${next.slug}`} className="group flex items-center gap-3 text-right min-w-0">
              <div className="min-w-0">
                <div className="font-mono text-[10px] text-da-muted uppercase tracking-widest mb-1">Next</div>
                <div className="text-sm text-da-text group-hover:text-da-accent transition-colors truncate">{next.name}</div>
              </div>
              <ArrowRight size={14} className="text-da-muted group-hover:text-da-accent shrink-0 transition-colors" aria-hidden="true" />
            </Link>
          ) : <div />}
        </nav>
      )}

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16 pt-12 border-t border-da-border" aria-labelledby="related-heading">
          <div className="mb-8">
            <div className="font-mono text-[10px] text-da-muted tracking-[0.4em] uppercase mb-2">— Related Works</div>
            <h2 id="related-heading" className="text-xl font-serif font-bold text-da-text">You might also explore</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a) => (
              <ArtifactCard key={a.id} artifact={a} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function MetaRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start gap-4 px-4 py-2.5">
      <span className="font-mono text-[10px] text-da-muted tracking-wider uppercase shrink-0 w-24">{label}</span>
      <span className={`text-xs text-da-text text-right flex-1 ${mono ? "font-mono" : ""}`}>{value}</span>
    </div>
  );
}
