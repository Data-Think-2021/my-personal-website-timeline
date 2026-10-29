import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getAllPosts } from "@/lib/blog";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "de",
  path: "/",
  title: getTranslation("de", "home.headline"),
  description: getTranslation("de", "home.metaDescription"),
});

export default function Home() {
  const posts = getAllPosts()
    .slice(0, 2)
    .map(({ slug, title, excerpt, date }) => ({ slug, title, excerpt, date }));

  return <HomeContent locale="de" posts={posts} />;
}
