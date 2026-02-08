'use client';

import { usePathname } from 'next/navigation';
import {
  getLocaleFromPathname,
  getLocalePrefix,
  getLocalizedPath,
  getTranslation,
  type Locale,
} from '@/lib/i18n';

export function useLocale() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const prefix = getLocalePrefix(locale);

  const t = (key: string) => getTranslation(locale, key);
  const localizedPath = (targetLocale: Locale) => getLocalizedPath(pathname, targetLocale);

  return { locale, prefix, t, localizedPath };
}
