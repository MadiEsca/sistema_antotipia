"use client";

import Image from "next/image";
import { useState } from "react";

interface ArtifactImageProps {
  src: string;
  alt: string;
  artifactId: string;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}

// Deterministic color palette per artifact based on ID
function getPlaceholderColors(id: string): [string, string] {
  const palettes: [string, string][] = [
    ["#1a1f2a", "#C5FF4A"],
    ["#1f1a2a", "#FF5B64"],
    ["#1a2a20", "#4AC5FF"],
    ["#2a1a1a", "#C5FF4A"],
    ["#1a2a2a", "#FFB84A"],
    ["#2a1f1a", "#A44AC5"],
    ["#1a1a2a", "#4AFFA0"],
    ["#2a2a1a", "#FF9B4A"],
  ];
  let hash = 0;
  for (const ch of id) hash = (hash * 31 + ch.charCodeAt(0)) & 0xffff;
  return palettes[hash % palettes.length];
}

function PlaceholderSVG({ id, alt }: { id: string; alt: string }) {
  const [bg, accent] = getPlaceholderColors(id);
  const initials = id
    .split("-")
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 3);

  return (
    <svg
      viewBox="0 0 400 300"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      role="img"
      aria-label={alt}
    >
      <defs>
        <pattern id={`grid-${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={accent} strokeWidth="0.3" opacity="0.2" />
        </pattern>
        <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.08" />
          <stop offset="100%" stopColor={bg} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill={bg} />
      <rect width="400" height="300" fill={`url(#grid-${id})`} />
      <circle cx="200" cy="150" r="120" fill={`url(#glow-${id})`} />
      {/* Geometric elements */}
      <rect x="80" y="80" width="60" height="60" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.3" transform="rotate(15, 110, 110)" />
      <rect x="260" y="160" width="40" height="40" fill="none" stroke={accent} strokeWidth="0.8" opacity="0.2" transform="rotate(-10, 280, 180)" />
      <circle cx="200" cy="150" r="50" fill="none" stroke={accent} strokeWidth="1" opacity="0.15" />
      <circle cx="200" cy="150" r="30" fill="none" stroke={accent} strokeWidth="0.5" opacity="0.25" />
      {/* Cross lines */}
      <line x1="170" y1="150" x2="230" y2="150" stroke={accent} strokeWidth="0.5" opacity="0.4" />
      <line x1="200" y1="120" x2="200" y2="180" stroke={accent} strokeWidth="0.5" opacity="0.4" />
      {/* Identifier text */}
      <text x="200" y="158" textAnchor="middle" fontFamily="monospace" fontSize="18" fill={accent} opacity="0.6" fontWeight="bold">
        {initials}
      </text>
      {/* Bottom label */}
      <text x="200" y="270" textAnchor="middle" fontFamily="monospace" fontSize="8" fill={accent} opacity="0.3" letterSpacing="3">
        {id.toUpperCase()}
      </text>
    </svg>
  );
}

export default function ArtifactImage({
  src,
  alt,
  artifactId,
  priority,
  fill,
  className = "",
}: ArtifactImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored || src.endsWith(".svg")) {
    // Use inline SVG placeholder for all .svg entries or fallback
    return (
      <div className={`w-full h-full ${fill ? "absolute inset-0" : ""} ${className}`}>
        <PlaceholderSVG id={artifactId} alt={alt} />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill ?? true}
      className={`object-cover transition-transform duration-500 group-hover:scale-105 ${className}`}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      priority={priority}
      onError={() => setErrored(true)}
    />
  );
}
