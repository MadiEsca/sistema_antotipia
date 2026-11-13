import Link from "next/link";
import { ArrowLeft, Archive } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Background grid */}
      <div
        className="fixed inset-0 archive-grid opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg">
        {/* 404 large number */}
        <div
          className="font-mono font-bold text-[clamp(6rem,20vw,12rem)] leading-none text-da-border select-none"
          aria-hidden="true"
        >
          404
        </div>

        {/* Message */}
        <div className="mt-4 mb-2">
          <div className="font-mono text-[10px] text-da-muted tracking-[0.4em] uppercase mb-3">
            — Critical Error
          </div>
          <h1 className="text-2xl font-serif font-bold text-da-text mb-3">
            PESSOA NÃO ENCONTRADA
          </h1>
          <p className="text-da-muted text-sm leading-relaxed">
            Vish... Parece que você está tentando acessar algo inexistente, tem certeza que era isso que estava procurando?
          </p>
        </div>

        {/* Terminal-style error message */}
        {/*<div className="my-8 bg-da-surface border border-da-border rounded-sm p-4 text-left">
          <div className="font-mono text-[11px] space-y-1">
            <div className="text-da-muted">
              <span className="text-da-accent/60">ARCHIVE_SYS</span>
              {"  "}
              <span className="text-da-muted/60">{">"}</span>{" "}
              <span className="text-da-text/80">resolve path failed</span>
            </div>
            <div className="text-da-muted">
              <span className="text-da-accent/60">ERROR</span>
              {"      "}
              <span className="text-da-muted/60">{">"}</span>{" "}
              <span className="text-da-alert/70">ENTRY_NOT_FOUND (0x404)</span>
            </div>
            <div className="text-da-muted">
              <span className="text-da-accent/60">SUGGEST</span>
              {"    "}
              <span className="text-da-muted/60">{">"}</span>{" "}
              <span className="text-da-muted/70">return to catalog index</span>
            </div>
          </div>
        </div> */}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-da-accent text-da-bg font-mono text-xs tracking-widest uppercase font-bold px-5 py-2.5 rounded-sm hover:bg-da-accent/90 transition-colors"
          >
            <Archive size={14} aria-hidden="true" />
            Página inicial
          </Link>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-da-muted hover:text-da-text border border-da-border hover:border-da-text/30 rounded-sm px-5 py-2.5 transition-all duration-200"
          >
            <ArrowLeft size={12} aria-hidden="true" />
            Catálogo de pessoas
          </Link>
        </div>
      </div>
    </div>
  );
}
