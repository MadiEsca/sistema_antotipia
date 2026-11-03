import type { MetadataRoute } from "next";
import { artifacts } from "@/data/artifacts";
import { collections } from "@/data/collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://dark-archive.example.com";

  const artifactPages = artifacts.map((a) => ({
    url: `${base}/artifact/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const collectionPages = collections.map((c) => ({
    url: `${base}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/explore`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/collections`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...artifactPages,
    ...collectionPages,
  ];
}
