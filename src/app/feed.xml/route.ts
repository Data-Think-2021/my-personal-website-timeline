import { getAllPosts } from "@/lib/blog";
import { absoluteUrl, localePath } from "@/lib/seo";
import { AUTHOR_EMAIL, AUTHOR_NAME, SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = getAllPosts();
  const latest = posts[0]?.date
    ? new Date(posts[0].date).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = absoluteUrl(localePath("en", `/blog/${post.slug}`));
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt || post.title)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} Blog</title>
    <link>${SITE_URL}/en/blog</link>
    <description>Thoughts on data, leadership, and AI from ${escapeXml(AUTHOR_NAME)}</description>
    <language>en</language>
    <managingEditor>${AUTHOR_EMAIL} (${escapeXml(AUTHOR_NAME)})</managingEditor>
    <lastBuildDate>${latest}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
