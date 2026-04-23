# Efendiler Grup

**EFENDİLER GRUP PAMUK İTH. İHR. LTD. ŞTİ.** — kurumsal web sitesi.

- **Domain:** efendilergrup.com (Cloudflare zone `ac06bc29fe6ba7290df5ac4db9f42db2`)
- **Stack:** Astro 6 + Tailwind 4 + TypeScript
- **Diller:** TR (default), EN, RU
- **Deploy:** Coolify IST (planlanıyor)

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:4323
npm run build
```

## Yapı

```
src/
├── components/sections/   # Hero, Products, Numbers, Sustainability, GlobalMap, QuoteForm ...
├── layouts/               # Layout.astro
├── pages/                 # index.astro + locale routes
├── data/                  # products.ts (21 SKU), site.ts
├── i18n/locales/          # tr.json, en.json, ru.json
└── styles/global.css      # Tailwind 4 @theme + custom classes
```

## Referanslar

- Mockup: `../efendilergrup-mockup/index.html`
- Rakip analiz: Özcan Pamuk (Mersin, 1989)
