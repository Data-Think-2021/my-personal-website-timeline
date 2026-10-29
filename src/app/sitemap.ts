import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, localePath } from "@/lib/seo";

const STATIC_PATHS = [
  "/",
  "/blog",
  "/mentoring",
  "/ai-kickstart-sprint",
  "/book-call",
  "/contact",
] as const;

const DE_ONLY_PATHS = ["/privacy", "/imprint"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    const de = localePath("de", path);
    const en = localePath("en", path);
    entries.push({
      url: absoluteUrl(de),
      lastModified: now,
      changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/ai-kickstart-sprint" ? 0.9 : 0.8,
      alternates: {
        languages: {
          de: absoluteUrl(de),
          en: absoluteUrl(en),
        },
      },
    });
    entries.push({
      url: absoluteUrl(en),
      lastModified: now,
      changeFrequency: path === "/" || path === "/blog" ? "weekly" : "monthly",
      priority: path === "/" ? 0.95 : 0.75,
      alternates: {
        languages: {
          de: absoluteUrl(de),
          en: absoluteUrl(en),
        },
      },
    });
  }

  for (const path of DE_ONLY_PATHS) {
    entries.push({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    });
  }

  for (const post of getAllPosts()) {
    const de = `/blog/${post.slug}`;
    const en = `/en/blog/${post.slug}`;
    const lastModified = new Date(post.date);
    entries.push({
      url: absoluteUrl(de),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: {
          de: absoluteUrl(de),
          en: absoluteUrl(en),
        },
      },
    });
    entries.push({
      url: absoluteUrl(en),
      lastModified,
      changeFrequency: "monthly",
      // Prefer EN URLs slightly higher (blog content is English)
      priority: 0.75,
      alternates: {
        languages: {
          de: absoluteUrl(de),
          en: absoluteUrl(en),
        },
      },
    });
  }

  return entries;
}
