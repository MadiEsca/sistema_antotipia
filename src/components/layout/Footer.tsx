import Link from "next/link";
import { artifacts } from "@/data/artifacts";
import { collections } from "@/data/collections";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-da-border mt-24" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-da-muted mb-1">
              Antotipia
            </div>
            <div className="font-mono text-base font-bold tracking-[0.25em] uppercase text-da-text mb-4">
              um tributo a Elas
            </div>
            <p className="text-da-muted text-sm leading-relaxed max-w-xs">
              Um catálogo em homenagem às mulheres que mudaram o mundo, reveladas pela luz.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-da-muted mb-4">
              Navegue
            </div>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Galeria" },
                { href: "/explore", label: "Explore" },
                { href: "/collections", label: "Coleções" },
                { href: "/about", label: "Sobre nós" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-da-muted hover:text-da-text transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-da-muted mb-4">
              Coleções
            </div>
            <ul className="space-y-2">
              {collections.slice(0, 4).map((col) => (
                <li key={col.id}>
                  <Link
                    href={`/collections/${col.slug}`}
                    className="text-sm text-da-muted hover:text-da-text transition-colors duration-200 truncate block"
                  >
                    {col.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-da-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="font-mono text-xs text-da-muted tabular-nums">
            © {year} Antotipia
          </div>
          <div className="font-mono text-xs text-da-muted flex items-center gap-4">
            <span className="tabular-nums">
              {artifacts.length} cientistas catalogadas
            </span>
            <span className="text-da-border">|</span>
            <span>Sesi-{String(year)}-Feira de Ciências</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
