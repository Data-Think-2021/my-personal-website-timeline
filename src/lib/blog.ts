import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { isBlogCategory, type BlogCategory } from '@/lib/blog-categories';

export type { BlogCategory } from '@/lib/blog-categories';
export { BLOG_CATEGORIES, isBlogCategory } from '@/lib/blog-categories';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category?: BlogCategory;
  tags?: string[];
}

function parsePost(slug: string, fileContents: string): BlogPost {
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    content,
    category: isBlogCategory(data.category) ? data.category : undefined,
    tags: data.tags || [],
  };
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      return parsePost(slug, fileContents);
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return parsePost(slug, fileContents);
  } catch {
    return null;
  }
}

/** Drop a leading markdown H1 that duplicates the page title (avoids double H1 in HTML). */
export function stripLeadingTitleHeading(content: string, title: string): string {
  const lines = content.trimStart().split('\n');
  if (lines.length === 0) return content;

  const match = lines[0].match(/^#\s+(.+)$/);
  if (!match) return content;

  const heading = match[1].trim();
  if (heading === title.trim() || heading.replace(/\\/g, '') === title.trim()) {
    return lines.slice(1).join('\n').trimStart();
  }
  return content;
}

