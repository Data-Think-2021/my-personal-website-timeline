export const BLOG_CATEGORIES = [
  'leading-people',
  'data-cloud-ai',
  'hiring-talent',
  'career-path',
  'mentorship-community',
  'balance-belonging',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export function isBlogCategory(value: unknown): value is BlogCategory {
  return (
    typeof value === 'string' &&
    (BLOG_CATEGORIES as readonly string[]).includes(value)
  );
}
