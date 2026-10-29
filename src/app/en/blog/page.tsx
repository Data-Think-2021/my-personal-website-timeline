import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import BlogIndex from "@/components/BlogIndex";
import { getAllPosts } from "@/lib/blog";
import { getTranslation } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  locale: "en",
  path: "/blog",
  title: "Blog",
  description:
    "Thoughts on data, leadership, and my journey as Head of Data and Cloud",
  preferredLocale: "en",
});

export default function EnBlogPage() {
  const posts = getAllPosts().map(({ slug, title, date, excerpt, category }) => ({
    slug,
    title,
    date,
    excerpt,
    category,
  }));
  const t = (key: string) => getTranslation("en", key);

  return (
    <>
      <Navigation />

      <div className="min-h-screen bg-gray-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              {t("blog.title")}
            </h1>
            <p className="text-xl text-gray-300">{t("blog.subtitle")}</p>
          </div>

          <BlogIndex posts={posts} />
        </div>
      </div>
    </>
  );
}
