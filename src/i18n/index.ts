import tr from './locales/tr.json';
import en from './locales/en.json';
import ru from './locales/ru.json';

export type Locale = 'tr' | 'en' | 'ru';

export const defaultLocale: Locale = 'tr';
export const supportedLocales: Locale[] = ['tr', 'en', 'ru'];

export const locales = { tr, en, ru } as const;

type TranslationValue = string | string[] | { [key: string]: TranslationValue };

/**
 * Nested key lookup ("nav.products", "footer.nav_products") on the given
 * locale dictionary. Falls back to the default locale if missing, then
 * returns the key itself as last resort so templates never break.
 */
export function useTranslations(locale: Locale) {
  const dict = locales[locale] ?? locales[defaultLocale];
  const fallback = locales[defaultLocale];

  return function t(key: string): string {
    const resolved = resolveKey(dict, key);
    if (resolved !== undefined) return coerceToString(resolved);

    const fb = resolveKey(fallback, key);
    if (fb !== undefined) return coerceToString(fb);

    return key;
  };
}

function resolveKey(dict: unknown, key: string): TranslationValue | undefined {
  const parts = key.split('.');
  let cursor: unknown = dict;
  for (const part of parts) {
    if (cursor === null || cursor === undefined) return undefined;
    if (typeof cursor !== 'object') return undefined;
    cursor = (cursor as Record<string, unknown>)[part];
  }
  return cursor as TranslationValue | undefined;
}

/**
 * Array/object translations (örn. footer.nav_products) direkt olarak
 * template tarafında `.map` edilebilmeli. `t()` string döndüğü için
 * öyle kullanımlarda `as unknown as string[]` cast gerek.
 */
function coerceToString(value: TranslationValue): string {
  if (typeof value === 'string') return value;
  // Array ve object değerler stringify edilmeden üst katmana dönsün diye
  // referansı koru; Astro template "as unknown as T" cast ile kullanacak.
  return value as unknown as string;
}

/**
 * URL path'inden locale tespit eder. `prefixDefaultLocale: false` olduğu
 * için "/" ve "/urunler" TR; "/en/..." EN; "/ru/..." RU.
 */
export function getLocaleFromURL(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  const first = segments[0];
  if (first === 'en' || first === 'ru') return first;
  return defaultLocale;
}

/**
 * Aktif path'in her üç dildeki karşılığını üretir. Dil prefix'i varsa
 * soyar, sonra hedef dile göre yeniden üretir. Çıktı her zaman
 * slash'lıdır (`trailingSlash: 'always'` 4-katman tutarlığı için).
 */
export function getAlternateLinks(pathname: string): {
  tr: string;
  en: string;
  ru: string;
} {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const hasLocalePrefix = first === 'en' || first === 'ru';
  const rest = hasLocalePrefix ? segments.slice(1) : segments;
  const suffix = rest.length > 0 ? `/${rest.join('/')}/` : '/';

  return {
    tr: suffix,
    en: suffix === '/' ? '/en/' : `/en${suffix}`,
    ru: suffix === '/' ? '/ru/' : `/ru${suffix}`,
  };
}
