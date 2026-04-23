/**
 * Site-wide constants — tek kaynak (single source of truth).
 *
 * Component'ler i18n (dil çevirisi) için `useTranslations(locale)` kullanır,
 * ama sayılar (skus, countries), adres, ülke listeleri gibi DİLDEN BAĞIMSIZ
 * veriler buradan okunur. Böylece:
 *   - tr.json / en.json / ru.json'da kopya sayı tutmuyoruz
 *   - İstatistik güncellerken tek yer (bu dosya) değişir
 *   - TypeScript `as const` ile tam tip güvenliği sağlanır
 *
 * Certifications status:
 *   - "current" = şu an sahibi olduğumuz sertifika
 *   - "target"  = hedeflenen, marketing iletişiminde "standards"
 *                 olarak geçiyor ancak henüz resmi sertifika YOK
 *
 * NOT: Şu an hiçbir sertifika resmi olarak alınmış durumda değil.
 * Kullanıcı (Erdem Özyurt) henüz netleştirmedi. Alındıkça `status` alanı
 * tek tek 'target' → 'current' yapılacak. Footer/Trust marquee'de bu ayrıma
 * göre filtrelenebilir (örn. `certifications.filter(c => c.status === 'current')`).
 */

export const site = {
  name: 'Efendiler Grup',
  legalName: 'EFEND\u0130LER GRUP PAMUK \u0130TH. \u0130HR. LTD. \u015eT\u0130.',
  founded: 2021,

  address: {
    line1: 'Hal Mah. 6025 sk. No 108/A',
    district: 'Akdeniz',
    city: 'Mersin',
    country: 'T\u00fcrkiye',
    coordinates: { lat: 36.812, lng: 34.641 },
  },

  contact: {
    email: 'info@efendilergrup.com',
    phone: '+90 XXX XXX XX XX', // ger\u00e7ek telefon geldi\u011finde swap
    whatsapp: '',
  },

  social: {
    linkedin: '',
    instagram: '',
  },

  certifications: [
    { key: 'gots',      name: 'GOTS',      full: 'Global Organic Textile Standard', status: 'target' },
    { key: 'oeko-tex',  name: 'OEKO-TEX',  full: 'OEKO-TEX Standard 100',            status: 'target' },
    { key: 'iso-9001',  name: 'ISO 9001',  full: 'Quality Management',               status: 'target' },
    { key: 'iso-14001', name: 'ISO 14001', full: 'Environmental Management',         status: 'target' },
    { key: 'ica',       name: 'ICA',       full: 'International Cotton Association', status: 'target' },
  ],

  /**
   * Pazarlar — 3 bölge, toplam 14+ ülke. GlobalMap bölgesel listede
   * kullan\u0131l\u0131yor ama \u00fclke isimleri orada i18n'den geliyor (Rusça/Türkçe
   * \u00e7eviriler i\u00e7in). Bu yap\u0131, program yaz\u0131l\u0131mı i\u00e7in (SEO JSON-LD
   * "areaServed", sitemap kategori metadata'sı vb.) kullan\u0131l\u0131yor.
   */
  markets: {
    central_asia: [
      'Azerbaijan', 'Turkmenistan', 'Kazakhstan',
      'Uzbekistan', 'Kyrgyzstan',   'Tajikistan',
    ],
    asia_pacific: [
      'China',      'India',        'Pakistan',
      'Bangladesh', 'Vietnam',      'Thailand',
    ],
    eu_us_me: [
      'Germany',       'Italy', 'Spain',
      'United States', 'UAE',   'Saudi Arabia',
    ],
  },

  /**
   * Stats — Numbers component ve Hero "At a glance" kartı buradan okuyor.
   * G\u00fcncelleme noktas\u0131 sadece burada — tr.json / en.json / ru.json'da sayı TUTMA.
   */
  stats: {
    countries: 14,
    skus: 21,
    categories: 4,
    certs: 4,
    responseHours: 24,
  },
} as const;

export const seo = {
  defaultOgImage: '/og-default.jpg',
  twitter: '@efendilergrup',
} as const;

export type Site = typeof site;
export type Certification = Site['certifications'][number];
export type MarketRegion = keyof Site['markets'];
