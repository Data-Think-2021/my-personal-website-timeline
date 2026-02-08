import de from '@/messages/de';
import en from '@/messages/en';

export const locales = ['de', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

const messages: Record<Locale, Record<string, unknown>> = { de, en };

/**
 * Get nested value from object by dot path, e.g. "home.headline"
 */
function getNested(obj: Record<string, unknown>, path: string): unknown {
  return path.split('.').reduce((acc: unknown, key) => {
    if (acc != null && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

/**
 * Get translation for a key. Supports dot notation, e.g. t('home.headline').
 * Returns the key if translation is missing.
 */
export function getTranslation(locale: Locale, key: string): string {
  const value = getNested(messages[locale] as Record<string, unknown>, key);
  if (typeof value === 'string') return value;
  return key;
}

/**
 * Get a nested object/array from messages (e.g. mentoring.areas)
 */
export function getMessage(locale: Locale, key: string): unknown {
  return getNested(messages[locale] as Record<string, unknown>, key);
}

/**
 * Get all messages for a locale (for passing to client components)
 */
export function getMessages(locale: Locale): Record<string, unknown> {
  return messages[locale] as Record<string, unknown>;
}

/**
 * Derive locale from pathname: /en/* -> 'en', else 'de'
 */
export function getLocaleFromPathname(pathname: string | null): Locale {
  if (!pathname) return defaultLocale;
  return pathname.startsWith('/en') ? 'en' : 'de';
}

/**
 * Base path for links: '' for German (root), '/en' for English
 */
export function getLocalePrefix(locale: Locale): string {
  return locale === 'en' ? '/en' : '';
}

/**
 * Get the path for the other locale (for language switcher)
 */
export function getLocalizedPath(pathname: string | null, targetLocale: Locale): string {
  const currentLocale = getLocaleFromPathname(pathname);
  if (currentLocale === targetLocale) return pathname ?? '/';

  const prefix = getLocalePrefix(targetLocale);
  if (!pathname) return prefix || '/';

  // Strip current locale prefix to get the "page" part
  const withoutPrefix = pathname.startsWith('/en') ? pathname.slice(3) || '' : pathname;
  const path = withoutPrefix || '/';
  return prefix + path;
}
