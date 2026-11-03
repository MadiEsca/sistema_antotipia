import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description:
    "",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
      {/* Header */}
      <div className="mb-16">
        <div className="font-mono text-[10px] text-da-accent tracking-[0.4em] uppercase mb-4">
          — Manifesto
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-da-text leading-tight mb-6">
          On the preservation of digital culture.
        </h1>
        <div className="w-12 h-px bg-da-accent" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="space-y-12 text-da-muted text-[15px] leading-relaxed">
        <Section label="I. The Problem of Digital Impermanence">
          <p>
            Digital artifacts disappear. Not gradually, the way a photograph
            fades, but suddenly — a server goes offline, a company is acquired,
            a file format becomes unsupported. A decade of cultural production
            can be made inaccessible in an afternoon.
          </p>
          <p>
            This is not accidental. The infrastructure of digital culture is
            built for efficiency and profit, not for durability. Platforms
            optimize for engagement, not preservation. The financial incentives
            of the technology industry are profoundly misaligned with the
            requirements of cultural memory.
          </p>
        </Section>

        <Section label="II. What We Mean by Digital Artifacts">
          <p>
            An artifact is any object that carries information about the context
            that produced it. A stone tool tells us something about the humans
            who made it. A corrupted file tells us something about the systems
            and practices that produced it.
          </p>
          <p>
            Digital artifacts include software, interfaces, visual works,
            communication patterns, and the structural properties of networks
            and platforms. They include not just the polished outputs of digital
            culture but its waste products, its failures, its abandoned
            experiments.
          </p>
          <p>
            These are the materials that will tell future researchers — and that
            already tell us — what it meant to inhabit digital space at the
            beginning of the twenty-first century.
          </p>
        </Section>

        <Section label="III. On the Aesthetics of Underground Digital Culture">
          <p>
            Some of what this archive catalogs is explicitly underground:
            produced outside commercial contexts, distributed through informal
            networks, created in defiance of legal or institutional constraints.
            This material occupies an ambiguous position in cultural memory.
          </p>
          <p>
            We preserve it not because we endorse every value it embodies, but
            because the underground has always been where the most interesting
            formal experiments occur. Constraints produce creativity. The margins
            produce the avant-garde.
          </p>
          <p>
            To ignore underground digital culture in the project of digital
            preservation is to tell a profoundly incomplete story — one that
            flatters the powerful and erases the rest.
          </p>
        </Section>

        <Section label="IV. The Politics of the Archive">
          <p>
            Every archive is a political act. The decision to preserve some
            things and not others encodes values. Institutional archives encode
            institutional values; commercial archives encode commercial values.
          </p>
          <p>
            This archive is an independent project. It has no institutional
            affiliation, no commercial obligations, no mandate from any
            authority. Its only obligation is to the material itself and to the
            researchers, artists, and curious people who want to understand it.
          </p>
          <p>
            We make no claim to comprehensiveness. We make no claim to
            neutrality. We claim only that the work we document is worth
            documenting, and that we will document it honestly.
          </p>
        </Section>

        <Section label="V. On the Future of This Work">
          <p>
            Preservation is not a state but a practice. An archive that stops
            growing becomes a museum. A museum that stops acquiring becomes a
            mausoleum.
          </p>
          <p>
            This archive is a living project. We add to it as we encounter
            material that belongs here. We revise our descriptions as our
            understanding of the material deepens. We remove nothing without
            documentation of why.
          </p>
          <p>
            We invite engagement. If you have material that belongs in this
            archive, or knowledge that would improve our understanding of what
            is already here, we want to know.
          </p>
        </Section>

        {/* Archive note */}
        <div className="border-t border-da-border pt-10 mt-10">
          <div className="font-mono text-[10px] text-da-muted tracking-widest uppercase mb-4">
            — A Note on This Project
          </div>
          <p className="text-da-muted/70 text-sm">
            DARK ARCHIVE is a conceptual project and experimental interface
            study. The artifacts it catalogs are used for demonstration and
            research purposes. Descriptions are original and written for this
            project. No proprietary content or personal data is reproduced
            without authorization.
          </p>
          <div className="mt-6 font-mono text-[10px] text-da-muted/50 tabular-nums">
            DA-ARCHIVE / CATALOG v1.0 / EST. 2025
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="font-mono text-[10px] text-da-muted/60 tracking-widest uppercase mb-4 flex items-center gap-3">
        <span className="w-4 h-px bg-da-border" aria-hidden="true" />
        {label}
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
