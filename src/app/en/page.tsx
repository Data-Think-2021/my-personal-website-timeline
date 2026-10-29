import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getAllPosts } from "@/lib/blog";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/",
  title: getTranslation("en", "home.headline"),
  description: getTranslation("en", "home.metaDescription"),
});

export default function EnHome() {
  const posts = getAllPosts()
    .slice(0, 2)
    .map(({ slug, title, excerpt, date }) => ({ slug, title, excerpt, date }));

  return <HomeContent locale="en" posts={posts} />;
}
