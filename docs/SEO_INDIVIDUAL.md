# SEO — Siteye Özel (INDIVIDUAL)

> Bu dosya **yalnız bu siteye** aittir; serbestçe düzenlenir. Tüm sitelerde geçerli rijit çekirdek kurallar → [`SEO_STANDARD.md`](SEO_STANDARD.md) (master'dan senkronlanır, elle düzenlenmez).
>
> Esneklik buradadır: site değiştikçe burası güncellenir, standart bozulmaz.

## Kimlik

- **Domain:** `efendilergrup.com`
- **Diller:** `TR (varsayılan) + EN`

## Path Helper'lar (slash garantili — elle href yazma)

`Standart kurulurken merkezi path helper'ı henüz tanımlı değil (`src/data/*` ve statik href'ler kullanılıyor). 2026-06-12'de `trailingSlash` `'never'` → `'always'` migrasyonu yapıldı; iç bağlantılar elle slash'lanmalı veya merkezi helper eklendiğinde tek noktadan garanti edilmeli.`

## BANNED — Yasak (ölü) Path'ler

`scripts/seo-check.mjs` içindeki BANNED listesinin gerekçeleri. Her giriş **neden** yasak:

`Şu an yasak path yok.`

## Siteye Özel Notlar

`**MIGRASYON (2026-06-12):** `astro.config.mjs` `'never'` → `'always'`. Site kuruluşta varsayılan never ile kalmış, ortak SEO standardı dışındaydı. Migrasyon sonrası GSC'de **geçici 'Yönlendirmeli sayfa' artışı normaldir** (~2-4 hafta), Google sitemap'i yeniden tarayınca düzelir. Sitemap+canonical+server+config artık 4-katman 'always'.`

## Değişiklik Geçmişi (INDIVIDUAL)

- 2026-06-12 — İlk sürüm (GSC temizliği).
