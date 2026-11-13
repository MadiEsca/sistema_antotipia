"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { Search, Menu, X } from "lucide-react";
import { useSearch } from "@/lib/searchContext";

const navLinks = [
  { href: "/", label: "Galeria" },
  { href: "/explore", label: "Explore" },
  { href: "/collections", label: "Coleções" },
  { href: "/about", label: "Sobre" },
];

export default function Header() {
  const pathname = usePathname();
  const { openSearch } = useSearch();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Trap focus in mobile menu
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-da-bg/95 backdrop-blur-sm border-b border-da-border"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col leading-none focus-visible:outline-da-accent"
              aria-label="DARK ARCHIVE — Home"
            >
              <span className="text-da-text font-mono text-[11px] tracking-[0.25em] uppercase text-da-muted">
                Antotipia
              </span>
              <span className="text-da-text font-mono text-sm font-bold tracking-[0.2em] uppercase">
                Um tributo a Elas
              </span>
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-6"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono tracking-widest uppercase transition-colors duration-200 relative py-1 ${
                    isActive(link.href)
                      ? "text-da-accent"
                      : "text-da-muted hover:text-da-text"
                  }`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {isActive(link.href) && (
                    <span
                      className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-da-accent"
                      aria-hidden="true"
                    />
                  )}
                  {link.label}
                </Link>
              ))}

              <button
                onClick={openSearch}
                className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-da-muted hover:text-da-text transition-colors duration-200 border border-da-border rounded px-3 py-1.5 hover:border-da-text/30"
                aria-label="Open search (press / to activate)"
              >
                <Search size={12} aria-hidden="true" />
                <span>Search</span>
                <kbd className="text-[9px] opacity-50 border border-da-border rounded px-1">/</kbd>
              </button>
            </nav>

            {/* Mobile controls */}
            <div className="flex md:hidden items-center gap-3">
              <button
                onClick={openSearch}
                className="text-da-muted hover:text-da-text transition-colors p-1"
                aria-label="Open search"
              >
                <Search size={18} aria-hidden="true" />
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-da-muted hover:text-da-text transition-colors p-1"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? (
                  <X size={18} aria-hidden="true" />
                ) : (
                  <Menu size={18} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className="absolute inset-0 bg-da-bg/95 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <nav
          className="relative flex flex-col justify-center h-full px-8 gap-2"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-2xl font-mono font-bold tracking-widest uppercase py-3 border-b border-da-border/50 transition-colors duration-200 ${
                isActive(link.href) ? "text-da-accent" : "text-da-text"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-8 font-mono text-xs text-da-muted tracking-wider">
            Antotipia - Um tributo a Elas
          </div>
        </nav>
      </div>
    </>
  );
}
