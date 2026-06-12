/**
 * Path helper'ları — slash garantili iç bağlantı üretimi.
 *
 * Strateji: `astro.config.mjs`'de `trailingSlash: 'always'` aktif olduğu
 * için her iç href `/sayfa/` veya `/en/sayfa/` formatında olmalı. Aksi
 * halde Astro 301 üretir, Google "Yönlendirmeli sayfa" raporu çıkarır.
 *
 * Kural seti (`docs/SEO_STANDARD.md` ile uyumlu):
 *  - Uzantısız her iç path `/` ile biter.
 *  - Dosya uzantılı href slash almaz (`/rss.xml`, `/og.jpg`).
 *  - `?` ve `#` varsa slash onlardan önce gelir: `/giris/?tab=x`, `/ar/#hizmetler`.
 *  - Mutlak URL'ler (http://, mailto:, tel:) ve anchor-only (`#xxx`) değişmez.
 */

import type { Locale } from './index';

/**
 * Verilen path'in `trailingSlash: 'always'` kurallarına uymasını garanti
 * eder. Anchor (`#`) ve query (`?`) parçaları korunur, slash bunlardan
 * önce ek-lenir. Dosya uzantılı path'lere slash eklenmez.
 *
 * Örnekler:
 *   "/urunler"           → "/urunler/"
 *   "/urunler/"          → "/urunler/"
 *   "/urunler#cat-foo"   → "/urunler/#cat-foo"
 *   "/urunler?tab=1"     → "/urunler/?tab=1"
 *   "/rss.xml"           → "/rss.xml"
 *   "/"                  → "/"
 *   "#teklif"            → "#teklif"
 *   "mailto:a@b.com"     → "mailto:a@b.com"
 *   "https://x.com/y"    → "https://x.com/y" (dış URL'e müdahale yok)
 */
export function ensureTrailingSlash(href: string): string {
  if (!href) return '/';

  // Anchor-only veya şema'lı (mailto:, tel:, http://, https://, //) → dokunma
  if (
    href.startsWith('#') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('//')
  ) {
    return href;
  }

  // Path + ?query + #hash parçalarını ayır
  const hashIdx = href.indexOf('#');
  const queryIdx = href.indexOf('?');
  let cutIdx = -1;
  if (hashIdx >= 0 && queryIdx >= 0) cutIdx = Math.min(hashIdx, queryIdx);
  else if (hashIdx >= 0) cutIdx = hashIdx;
  else if (queryIdx >= 0) cutIdx = queryIdx;

  const path = cutIdx >= 0 ? href.slice(0, cutIdx) : href;
  const suffix = cutIdx >= 0 ? href.slice(cutIdx) : '';

  // Root path zaten "/"
  if (path === '' || path === '/') return `/${suffix}`;

  // Dosya uzantılı path (son segment'te `.`) slash almaz
  const lastSegment = path.split('/').pop() ?? '';
  const hasExtension = lastSegment.includes('.');
  if (hasExtension) return `${path}${suffix}`;

  // Zaten `/` ile bitiyor mu?
  if (path.endsWith('/')) return `${path}${suffix}`;

  return `${path}/${suffix}`;
}

/**
 * Locale prefix + path birleştirir; slash garantili. RAW path ver
 * (örn. `urunler` veya `/urunler` veya `urunler#cat-x`); helper prefix'i
 * ve slash'ı kendisi koyar.
 *
 * Örnekler (locale='tr', prefixDefaultLocale: false):
 *   localizedHref('tr', '')                  → "/"
 *   localizedHref('tr', 'urunler')           → "/urunler/"
 *   localizedHref('en', 'urunler')           → "/en/urunler/"
 *   localizedHref('en', '')                  → "/en/"
 *   localizedHref('tr', 'urunler#cat-cotton')→ "/urunler/#cat-cotton"
 *   localizedHref('en', '#teklif')           → "/en/#teklif"
 *   localizedHref('tr', 'urunler/ham-pamuk') → "/urunler/ham-pamuk/"
 */
export function localizedHref(locale: Locale, rawPath: string): string {
  const prefix = locale === 'tr' ? '' : `/${locale}`;
  // rawPath'in başındaki '/' temizlenir, '#' veya '?' başlangıcı ayrı işlenir
  const trimmed = rawPath.replace(/^\/+/, '');

  // Anchor-only veya query-only ise prefix sonrasına ekle, kök root'a slash koy
  if (trimmed.startsWith('#') || trimmed.startsWith('?')) {
    return `${prefix}/${trimmed}`;
  }

  if (trimmed === '') {
    // Sadece locale kökü
    return prefix === '' ? '/' : `${prefix}/`;
  }

  return ensureTrailingSlash(`${prefix}/${trimmed}`);
}
