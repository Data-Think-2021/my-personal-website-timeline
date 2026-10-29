'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  BLOG_CATEGORIES,
  type BlogCategory,
} from '@/lib/blog-categories';
import { useLocale } from '@/hooks/useLocale';

type BlogIndexPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: BlogCategory;
};

type BlogIndexProps = {
  posts: BlogIndexPost[];
};

export default function BlogIndex({ posts }: BlogIndexProps) {
  const { locale, prefix, t } = useLocale();
  const [active, setActive] = useState<BlogCategory | 'all'>('all');

  const counts = useMemo(() => {
    const next = Object.fromEntries(
      BLOG_CATEGORIES.map((category) => [category, 0]),
    ) as Record<BlogCategory, number>;
    for (const post of posts) {
      if (post.category) next[post.category] += 1;
    }
    return next;
  }, [posts]);

  const maxCount = useMemo(
    () => Math.max(1, ...BLOG_CATEGORIES.map((category) => counts[category])),
    [counts],
  );

  const filtered = useMemo(() => {
    if (active === 'all') return posts;
    return posts.filter((post) => post.category === active);
  }, [active, posts]);

  const dateLocale = locale === 'de' ? 'de-DE' : 'en-US';

  const formatCount = (count: number) =>
    count === 1
      ? t('blog.postCountOne')
      : t('blog.postCount').replace('{count}', String(count));

  return (
    <>
      <section className="mb-10" aria-labelledby="blog-distribution-heading">
        <h2
          id="blog-distribution-heading"
          className="text-sm font-semibold uppercase tracking-wide text-gray-400 mb-4 text-center"
        >
          {t('blog.distributionTitle')}
        </h2>
        <div className="space-y-3 max-w-2xl mx-auto">
          {BLOG_CATEGORIES.map((category) => {
            const count = counts[category];
            const width = `${Math.round((count / maxCount) * 100)}%`;
            const isActive = active === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setActive(isActive ? 'all' : category)
                }
                aria-pressed={isActive}
                className="group w-full text-left"
              >
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <span
                    className={
                      isActive
                        ? 'text-sm text-purple-300 font-medium'
                        : 'text-sm text-gray-300 group-hover:text-white'
                    }
                  >
                    {t(`blog.categories.${category}`)}
                  </span>
                  <span className="text-xs text-gray-500 tabular-nums shrink-0">
                    {formatCount(count)}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-gray-800 overflow-hidden">
                  <div
                    className={
                      isActive
                        ? 'h-full rounded-full bg-purple-500 transition-[width] duration-300'
                        : 'h-full rounded-full bg-purple-600/70 group-hover:bg-purple-500 transition-[width,background-color] duration-300'
                    }
                    style={{ width }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <div
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="tablist"
        aria-label={t('blog.filterLabel')}
      >
        <FilterPill
          active={active === 'all'}
          onClick={() => setActive('all')}
          label={`${t('blog.allCategories')} (${posts.length})`}
        />
        {BLOG_CATEGORIES.map((category) => (
          <FilterPill
            key={category}
            active={active === category}
            onClick={() => setActive(category)}
            label={`${t(`blog.categories.${category}`)} (${counts[category]})`}
          />
        ))}
      </div>

      <div className="space-y-8">
        {filtered.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">{t('blog.empty')}</p>
          </div>
        ) : (
          filtered.map((post) => (
            <article
              key={post.slug}
              className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl font-bold text-white hover:text-purple-400 transition-colors">
                  <Link href={`${prefix}/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <time
                  dateTime={post.date}
                  className="text-gray-400 text-sm shrink-0"
                >
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              {post.category && (
                <button
                  type="button"
                  onClick={() => setActive(post.category!)}
                  className="mb-4 px-3 py-1 bg-purple-600/30 border border-purple-500 text-purple-200 text-sm rounded-full hover:bg-purple-600/50 transition-colors"
                >
                  {t(`blog.categories.${post.category}`)}
                </button>
              )}

              {post.excerpt && (
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
              )}

              <Link
                href={`${prefix}/blog/${post.slug}`}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                {t('blog.readMore')}
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  );
}

function FilterPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={
        active
          ? 'px-3 py-1.5 bg-purple-600 text-white text-sm rounded-full transition-colors'
          : 'px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-purple-500 hover:text-white transition-colors'
      }
    >
      {label}
    </button>
  );
}
