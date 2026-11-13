"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import type { Artifact } from "@/types";
import ArtifactImage from "@/components/gallery/ArtifactImage";

interface ImageModalProps {
  artifact: Artifact;
}

export default function ImageModal({ artifact }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setZoom(false);
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, close]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Thumbnail */}
      <button
        onClick={open}
        className="relative bg-da-surface border border-da-border rounded-sm aspect-[4/3] w-full overflow-hidden group focus-visible:outline-da-accent focus-visible:outline-2 focus-visible:outline-offset-4"
        aria-label={`View larger image of ${artifact.name}`}
      >
        <ArtifactImage
          src={artifact.coverImage}
          alt={artifact.name}
          artifactId={artifact.id}
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-t from-da-bg/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-da-bg/20">
          <ZoomIn size={28} className="text-da-text/80" aria-hidden="true" />
        </div>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-da-bg/95 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Image viewer for ${artifact.name}`}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-10 text-da-text/80 hover:text-da-accent transition-colors bg-da-bg/80 border border-da-border rounded-sm p-2.5 focus-visible:outline-da-accent"
            aria-label="Close image viewer"
          >
            <X size={18} aria-hidden="true" />
          </button>

          {/* Zoom button */}
          <button
            onClick={() => setZoom(!zoom)}
            className="absolute top-4 right-16 z-10 text-da-text/80 hover:text-da-accent transition-colors bg-da-bg/80 border border-da-border rounded-sm p-2.5 focus-visible:outline-da-accent"
            aria-label={zoom ? "Zoom out" : "Zoom in"}
          >
            <ZoomIn size={18} aria-hidden="true" />
          </button>

          {/* Escape hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <span className="font-mono text-[10px] text-da-muted/60 bg-da-bg/80 border border-da-border rounded-sm px-3 py-1">
              Press <kbd className="ml-1 px-1">ESC</kbd> to close
            </span>
          </div>

          {/* Image container */}
          <div
            className={`relative max-w-[90vw] max-h-[90vh] ${zoom ? "w-auto h-auto" : "w-full h-full"} transition-all duration-300`}
            onClick={close}
          >
            <div className="relative w-full h-full">
              <ArtifactImage
                src={artifact.coverImage}
                alt={artifact.name}
                artifactId={artifact.id}
                fill={!zoom}
                className={`cursor-${zoom ? "zoom-out" : "zoom-in"} ${zoom ? "max-w-none max-h-none" : "object-contain"}`}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
