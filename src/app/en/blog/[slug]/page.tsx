import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import JsonLd from "@/components/JsonLd";
import {
  getAllPosts,
  getPostBySlug,
  stripLeadingTitleHeading,
} from "@/lib/blog";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  buildPageMetadata,
  localePath,
} from "@/lib/seo";
import { getTranslation } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    locale: "en",
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.excerpt || post.title,
    ogType: "article",
    preferredLocale: "en",
  });
}

export default async function EnBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const contentForHtml = stripLeadingTitleHeading(post.content, post.title);
  const processedContent = await remark().use(html).process(contentForHtml);
  const contentHtml = processedContent.toString();
  const enPath = localePath("en", `/blog/${post.slug}`);
  const t = (key: string) => getTranslation("en", key);
  const keywords = [
    ...(post.category ? [t(`blog.categories.${post.category}`)] : []),
    ...(post.tags || []),
  ];

  return (
    <>
      <JsonLd
        data={[
          blogPostingJsonLd({
            title: post.title,
            description: post.excerpt || post.title,
            path: enPath,
            datePublished: post.date,
            tags: keywords,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/en" },
            { name: "Blog", path: "/en/blog" },
            { name: post.title, path: enPath },
          ]),
        ]}
      />
      <Navigation />

      <div className="min-h-screen bg-gray-900 pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/en/blog"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            {t("blog.backToBlog")}
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>

              {post.category && (
                <>
                  <span>•</span>
                  <span className="px-3 py-1 bg-purple-600/30 border border-purple-500 text-purple-200 text-sm rounded-full">
                    {t(`blog.categories.${post.category}`)}
                  </span>
                </>
              )}

              {post.tags && post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <article
            className="prose prose-lg prose-invert max-w-none
              prose-headings:text-white
              prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6
              prose-h2:text-2xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-8
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-6
              prose-p:text-gray-300 prose-p:mb-6 prose-p:leading-relaxed
              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white prose-strong:font-semibold
              prose-code:text-purple-300 prose-code:bg-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded
              prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-700
              prose-blockquote:border-purple-500 prose-blockquote:text-gray-300
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:text-gray-300 prose-li:marker:text-gray-400
              [&_ul]:list-disc [&_ol]:list-decimal [&_li]:ml-4
              [&_p]:mb-6 [&_p+_p]:mt-0"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </>
  );
}
