import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import {
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

/** Path without locale prefix, e.g. `/`, `/blog`, `/mentoring`. */
export function localePath(locale: Locale, path: string): string {
  const normalized =
    !path || path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    return normalized === "/" ? "/en" : `/en${normalized}`;
  }
  return normalized;
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}

type PageMetadataOptions = {
  locale: Locale;
  /** Path without locale prefix (`/`, `/blog`, `/mentoring`). */
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  ogType?: "website" | "article";
  /**
   * When set, canonical points at this locale's URL (used for English-preferred blog posts).
   * Alternates still list both locales.
   */
  preferredLocale?: Locale;
  /** Legal pages with no EN counterpart. */
  noAlternates?: boolean;
};

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  preferredLocale,
  noAlternates = false,
}: PageMetadataOptions): Metadata {
  const dePath = localePath("de", path);
  const enPath = localePath("en", path);
  const thisPath = localePath(locale, path);
  const canonicalLocale = preferredLocale ?? locale;
  const canonicalPath = localePath(canonicalLocale, path);

  const alternates: Metadata["alternates"] = {
    canonical: absoluteUrl(canonicalPath),
  };

  if (!noAlternates) {
    const xDefault = preferredLocale === "en" ? enPath : dePath;
    alternates.languages = {
      de: absoluteUrl(dePath),
      en: absoluteUrl(enPath),
      "x-default": absoluteUrl(xDefault),
    };
  }

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: absoluteUrl(thisPath),
      siteName: SITE_NAME,
      locale: locale === "de" ? "de_DE" : "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${title}`,
        },
      ],
      type: ogType,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    url: SITE_URL,
    email: "info@datathinker.de",
    jobTitle: "Head of Data and Cloud",
    description:
      "Xia He-Bleinagel, Head of Data & Cloud at NOW GmbH, Berlin. Data & AI strategy that ships. Cloud Governance. Speaker and mentor on tech, leadership and career reinvention.",
    image: absoluteUrl("/profile.png"),
    sameAs: [
      "https://www.linkedin.com/in/xia-he-bleinagel-51773585/",
      "https://github.com/Data-Think-2021",
    ],
    worksFor: {
      "@type": "Organization",
      name: "NOW GmbH",
    },
    knowsAbout: [
      "Data Engineering",
      "Cloud Computing",
      "Artificial Intelligence",
      "Mentorship",
      "Women in Tech",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
    },
    inLanguage: ["de", "en"],
  };
}

export function blogPostingJsonLd({
  title,
  description,
  path,
  datePublished,
  tags,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  tags?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
    url: absoluteUrl(path),
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    keywords: tags?.join(", "),
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function mentoringServiceJsonLd(locale: Locale) {
  const path = localePath(locale, "/mentoring");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name:
      locale === "de"
        ? "Mentoring in Data, Cloud & KI"
        : "Mentoring in Data, Cloud & AI",
    description:
      locale === "de"
        ? "Persönliches Mentoring für Quereinstieg in Tech, Karrierewachstum und Frauen in Data & KI."
        : "Personal mentorship for tech career transitions, growth, and women in data & AI.",
    provider: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    url: absoluteUrl(path),
    areaServed: "DE",
    serviceType: "Career Mentoring",
  };
}

export function aiSprintCourseJsonLd(locale: Locale) {
  const path = localePath(locale, "/ai-kickstart-sprint");
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name:
      locale === "de"
        ? "KI Kickstart Sprint"
        : "AI Kickstart Sprint",
    description:
      locale === "de"
        ? "6-wöchiges Programm, um KI-Gewohnheiten für Beruf und Alltag aufzubauen."
        : "A 6-week guided program to build real AI habits for work and life.",
    provider: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    url: absoluteUrl(path),
    inLanguage: ["en", "de"],
  };
}
