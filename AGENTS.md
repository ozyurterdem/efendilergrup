# AGENTS.md

> Bu dosya projenin **tek kaynak** çalışma rehberidir — insan geliştiriciler ve AI kodlama ajanları için ortaktır. Araç-spesifik yapılandırma dosyaları yalnızca bu dosyaya köprü kurar, içerik tekrar etmez.
>
> Konvansiyon: <https://agents.md>

## Proje

- **Ad / amaç:** `Efendiler Grup — pamuk/telef B2B kurumsal sitesi`
- **Stack:** `Astro statik + Tailwind, `trailingSlash: 'always'` (2026-06-12 migrasyonu), 2 dil (TR/EN)`
- **Canlı:** `https://efendilergrup.com (Coolify-IST nginx, running:healthy)`
- **Deploy:** `main'e push → Coolify deploy`

## Kurallar (Genel)

- Tüm çıktı/yorum/commit mesajı **Türkçe**; teknik terim ve kod tanımlayıcıları orijinal.
- Commit mesajına AI imzası (`Co-Authored-By`, araç adı vb.) **eklenmez**.
- `credentials/` ve `.env` dosyalarına dokunma, commit etme.
- Değişiklikten önce mevcut durumu doğrula; "düzelttim" demeden önce **kanıtla** (build/test/crawl çıktısı).

## SEO (Statik Site)

Bu proje `trailingSlash: 'always'` bir statik sitedir. SEO/GEO kuralları **üç katman**, hepsi bağlayıcı:
- [`docs/SEO_STANDARD.md`](docs/SEO_STANDARD.md) — teknik/GSC çekirdeği, tüm sitelerde ortak (master'dan senkron, elle düzenlenmez).
- [`docs/GEO_STANDARD.md`](docs/GEO_STANDARD.md) — AI görünürlük + içerik standardı, tüm sitelerde ortak (master'dan senkron, elle düzenlenmez).
- [`docs/SEO_INDIVIDUAL.md`](docs/SEO_INDIVIDUAL.md) — bu siteye özel (helper'lar, BANNED listesi, diller, OPSEC).

Özet:
- Her iç bağlantı `/` ile biter; bağlantıyı elle yazma, path helper kullan (helper'lar → INDIVIDUAL).
- `npm run build` içindeki `scripts/seo-check.mjs` guard'ı slash'sız/ölü iç bağlantıda build'i kırar — bypass etme, bağlantıyı düzelt.
- Sayfa silerken: iç bağlantıları sök → nginx 301/410 → guard BANNED listesine ekle (gerekçe INDIVIDUAL'a).

## Komutlar

```bash
npm run dev      # gelistirme
npm run build    # astro build + scripts/seo-check.mjs guard
```

## Doğrulama

`Migrasyon sonrası ilk hafta: GSC bildirimleri izlenir, **`Düzeltmeyi Doğrula`** butonuna basılır. Full crawl ile iç baglanti sapma kontrolu.`
