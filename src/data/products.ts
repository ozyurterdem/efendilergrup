/**
 * Efendiler Grup — Ürün Kataloğu (21 SKU)
 *
 * Dört kategoride 21 ürün. TR ana dil, EN/RU tam çeviri.
 * Özcan Pamuk içerik mantığından ilhamla — birebir kopya değil.
 *
 * Kategoriler:
 *  1. cotton         — Pamuk (5 SKU)
 *  2. cotton-waste   — Pamuk Telefleri (5 SKU)
 *  3. yarn-waste     — İplik Telefleri (7 SKU)
 *  4. fiber-other    — Elyaf & Diğer (4 SKU)
 *
 * Toplam: 5 + 5 + 7 + 4 = 21 SKU
 */

export type ProductCategory =
  | 'cotton'
  | 'cotton-waste'
  | 'yarn-waste'
  | 'fiber-other';

export type LocaleKey = 'tr' | 'en' | 'ru';

export interface LocalizedString {
  tr: string;
  en: string;
  ru: string;
}

export interface Product {
  /** URL-friendly benzersiz kimlik (kebab-case). */
  slug: string;
  /** Ait olduğu kategori. */
  category: ProductCategory;
  /** Ürün adının üç dilli karşılıkları. */
  names: LocalizedString;
  /** 2–3 cümlelik ürün tanımı (üç dilli). */
  description: LocalizedString;
  /** Öne çıkan özellikler (TR). Liste, kısa cümleler. */
  features?: string[];
  /** Minimum sipariş miktarı örneği. */
  moq?: string;
  /** Uygulanabilir Incoterms kısaltmaları. */
  incoterms?: string[];
  /** Uygulanabilir uluslararası sertifikalar. */
  certifications?: string[];
  /** Opsiyonel görsel URL'i (placeholder). */
  image?: string;
}

/**
 * Kategori meta-verisi — UI başlıklarında, filtreleme ve rotalama için.
 */
export const categories = [
  {
    key: 'cotton',
    names: { tr: 'Pamuk', en: 'Cotton', ru: 'Хлопок' },
  },
  {
    key: 'cotton-waste',
    names: {
      tr: 'Pamuk Telefleri',
      en: 'Cotton Waste',
      ru: 'Хлопковые отходы',
    },
  },
  {
    key: 'yarn-waste',
    names: {
      tr: 'İplik Telefleri',
      en: 'Yarn Waste',
      ru: 'Пряжа отходы',
    },
  },
  {
    key: 'fiber-other',
    names: {
      tr: 'Elyaf & Diğer',
      en: 'Fibers & Other',
      ru: 'Волокна и прочее',
    },
  },
] as const satisfies ReadonlyArray<{
  key: ProductCategory;
  names: LocalizedString;
}>;

/* -------------------------------------------------------------------------- */
/*  Ana katalog                                                               */
/* -------------------------------------------------------------------------- */

export const products: Product[] = [
  /* =======================================================================
   * KATEGORİ 1 — PAMUK / COTTON (5 SKU)
   * ======================================================================= */
  {
    slug: 'ham-pamuk',
    category: 'cotton',
    names: {
      tr: 'Ham Pamuk',
      en: 'Raw Cotton',
      ru: 'Сырой хлопок',
    },
    description: {
      tr: 'Çırçırlanmış, balyalanmış ham pamuk lifleri. Orta-uzun stapeli ağırlıkta, tekstil ipliği üretimine uygun. Ege, Çukurova ve Güneydoğu Anadolu menşeli partilerle, talep üzerine Orta Asya tedariği sağlanır.',
      en: 'Ginned and baled raw cotton fibers. Predominantly medium-to-long staple, suitable for textile yarn production. Sourced from Aegean, Çukurova and Southeastern Anatolia, with Central Asian supply available upon request.',
      ru: 'Очищенный и прессованный в кипы сырой хлопок. Преимущественно средне- и длинноволокнистый, пригодный для прядильного производства. Поставки из Эгейского, Чукуровского и Юго-Восточного регионов Турции; по запросу — из Центральной Азии.',
    },
    features: [
      'Orta-uzun stapel (28–32 mm)',
      'Mic değeri 3.8–4.9 aralığında',
      'ICA kurallarına uygun sözleşme',
      'Balya ağırlığı 220 kg standart',
    ],
    moq: 'Min 20 ton (1 FCL)',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
    certifications: ['ICA Member'],
  },
  {
    slug: 'organik-pamuk',
    category: 'cotton',
    names: {
      tr: 'Organik Pamuk (GOTS)',
      en: 'Organic Cotton (GOTS)',
      ru: 'Органический хлопок (GOTS)',
    },
    description: {
      tr: 'GOTS sertifikalı, pestisit ve GDO içermeyen organik pamuk. Sertifikalı üretici ağından temin edilir; parti bazlı izlenebilirlik ve Transaction Certificate ile sevk edilir. Premium ürünler, bebek ve cilt-teması kumaşlar için ideal.',
      en: 'GOTS-certified organic cotton — pesticide-free and GMO-free. Sourced from a certified grower network and shipped with batch-level traceability plus a Transaction Certificate. Ideal for premium apparel, babywear and skin-contact fabrics.',
      ru: 'Органический хлопок с сертификатом GOTS — без пестицидов и ГМО. Закупается у сертифицированной сети производителей, поставляется с партийной прослеживаемостью и сертификатом сделки (TC). Идеален для премиальной одежды, детского и контактного текстиля.',
    },
    features: [
      'GOTS + Transaction Certificate',
      'Parti bazlı tam izlenebilirlik',
      'Pestisit ve GDO içermez',
      'OCS (Organic Content Standard) uyumlu seçenek',
    ],
    moq: 'Min 10 ton',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
    certifications: ['GOTS', 'OCS', 'OEKO-TEX Standard 100'],
  },
  {
    slug: 'linter',
    category: 'cotton',
    names: {
      tr: 'Pamuk Linteri',
      en: 'Cotton Linter',
      ru: 'Хлопковый линт',
    },
    description: {
      tr: 'Çekirdek üzerinde kalan kısa liflerin ikinci çırçırlama ile ayrılmasıyla elde edilen kısa stapel ürün. Selüloz, nitroselüloz, kağıt ve nonwoven endüstrilerinin temel hammaddesi. İlk ve ikinci kat kesim seçenekleriyle tedarik edilir.',
      en: 'Short-staple product obtained by the second ginning of residual fibers on cottonseed. A core raw material for cellulose, nitrocellulose, paper and nonwoven industries. Available in first-cut and second-cut grades.',
      ru: 'Коротковолокнистый продукт, получаемый при повторной очистке семян хлопка. Основное сырьё для производства целлюлозы, нитроцеллюлозы, бумаги и нетканых материалов. Поставляется в первой и второй категориях резки.',
    },
    features: [
      '1st cut / 2nd cut seçeneği',
      'Selüloz ve nitroselüloz kullanımına uygun',
      'Press balya, yaklaşık 180–220 kg',
    ],
    moq: 'Min 25 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },
  {
    slug: 'penye-telefi',
    category: 'cotton',
    names: {
      tr: 'Penye Telefi (Comber Noil)',
      en: 'Comber Noil',
      ru: 'Гребенной очёс',
    },
    description: {
      tr: 'Penye iplik üretimi sırasında tarama makinelerinden çıkan kısa elyaf teli. Open-end iplik, nonwoven ve dolgu malzemesi üretiminde tercih edilir. Renk ve rutubet parametrelerine göre sınıflandırılarak sevk edilir.',
      en: 'Short-fiber by-product removed by combing machines during combed-yarn production. Preferred input for open-end yarn, nonwoven and fill-fiber applications. Classified and shipped according to colour and moisture parameters.',
      ru: 'Короткое волокно, удаляемое гребнечесальными машинами в процессе производства гребенной пряжи. Используется в производстве пряжи open-end, нетканых материалов и наполнителей. Классифицируется и поставляется по цвету и влажности.',
    },
    features: [
      'Kısa lif ağırlıklı (10–15 mm)',
      'Open-end iplik için uygun',
      'Renk ve rutubet kontrollü',
    ],
    moq: 'Min 15 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },
  {
    slug: 'avaryali-pamuk',
    category: 'cotton',
    names: {
      tr: 'Avaryalı Pamuk',
      en: 'Damaged / Distressed Cotton',
      ru: 'Повреждённый хлопок',
    },
    description: {
      tr: 'Nakliye, depolama veya çırçır aşamasında standart dışı kalmış pamuk partileri. Fiyat-odaklı iplik üretimi, dolgu ve nonwoven hatları için ekonomik alternatif. Her parti için kondisyon raporu ve numune paylaşılır.',
      en: 'Cotton lots that fell outside spec during transport, storage or ginning. Cost-effective input for price-sensitive yarn, fill and nonwoven lines. A condition report and sample are shared for every lot.',
      ru: 'Партии хлопка, вышедшие за пределы стандартов при транспортировке, хранении или очистке. Экономичное решение для ценочувствительного производства пряжи, наполнителей и нетканых материалов. По каждой партии предоставляется отчёт о состоянии и образец.',
    },
    features: [
      'Parti bazlı kondisyon raporu',
      'Numune onayı sonrası sevkiyat',
      'Fiyat-odaklı üretim hatları için',
    ],
    moq: 'Min 20 ton',
    incoterms: ['EXW', 'FOB'],
  },

  /* =======================================================================
   * KATEGORİ 2 — PAMUK TELEFLERİ / COTTON WASTE (5 SKU)
   * ======================================================================= */
  {
    slug: 'sapka-telefi',
    category: 'cotton-waste',
    names: {
      tr: 'Şapka Telefi',
      en: 'Flat Strip Waste',
      ru: 'Шляпный очёс',
    },
    description: {
      tr: 'Tarak makinelerinin şapka (flat) bölümünde biriken, kısa liften ve toz/yabancı maddeden arındırılması gereken teleftir. Temizlenerek nonwoven, dolgu ve ikinci sınıf iplik üretiminde değerlendirilir.',
      en: 'Waste accumulated on the flats of carding machines, consisting of short fibers and impurities. After cleaning, it is reused in nonwoven, fill-fiber and secondary yarn production.',
      ru: 'Отходы, скапливающиеся на шляпках чесальных машин: короткое волокно и примеси. После очистки используются в производстве нетканых материалов, наполнителей и пряжи второго сорта.',
    },
    features: [
      'Kısa lif + yabancı madde karışımı',
      'Temizlenmiş / ham seçeneği',
      'Balya veya çuval ambalaj',
    ],
    moq: 'Min 10 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },
  {
    slug: 'harman-hallac',
    category: 'cotton-waste',
    names: {
      tr: 'Harman Hallaç Telefi',
      en: 'Blowroom Waste',
      ru: 'Отходы разрыхлителя',
    },
    description: {
      tr: 'İplik fabrikalarının harman hallaç hattından çıkan, pamuk lifi ile yabancı madde karışımı teleftir. Açma makinelerinde geri kazanılarak dolgu ve nonwoven hammaddesine dönüştürülür.',
      en: 'Waste generated in the blowroom line of spinning mills — a mixture of cotton fiber and impurities. Recovered through opening machines for fill-fiber and nonwoven applications.',
      ru: 'Отходы участка разрыхления прядильных фабрик — смесь хлопкового волокна и примесей. После разрыхления используются как сырьё для наполнителей и нетканых материалов.',
    },
    features: [
      'İplik fabrikası kaynaklı',
      'Açma / geri kazanım için uygun',
      'Karışım oranı parti bazlı raporlanır',
    ],
    moq: 'Min 15 ton',
    incoterms: ['EXW', 'FOB'],
  },
  {
    slug: 'meydan-telefi',
    category: 'cotton-waste',
    names: {
      tr: 'Meydan Telefi',
      en: 'Floor Sweeping Waste',
      ru: 'Половой очёс',
    },
    description: {
      tr: 'Fabrika içi taşıma, temizlik ve makine altı toplamadan elde edilen karışık telef. Daha yüksek yabancı madde içerir; temizlik ve açma işleminden sonra düşük-maliyet dolgu uygulamalarında kullanılır.',
      en: 'Mixed waste collected from floor sweepings and under-machine areas inside mills. Contains higher levels of impurities; used in low-cost fill applications after cleaning and opening.',
      ru: 'Смешанные отходы, собранные с пола и под станками в прядильных фабриках. Содержат повышенное количество примесей; после очистки используются в недорогих наполнителях.',
    },
    features: [
      'Karışık kaynaklı telef',
      'Açma ve temizleme sonrası değer kazanır',
      'Dolgu odaklı kullanım',
    ],
    moq: 'Min 10 ton',
    incoterms: ['EXW', 'FOB'],
  },
  {
    slug: 'uluk',
    category: 'cotton-waste',
    names: {
      tr: 'Uluk',
      en: 'Raw Uluk Waste',
      ru: 'Улук (сырой)',
    },
    description: {
      tr: 'Çırçır fabrikalarının çıkışında kalan, pamuk lifi, çekirdek parçası ve yabancı madde karışımı ham teleftir. Açma ve eleme hatlarında işlenerek linter veya dolgu hammaddesine dönüştürülür.',
      en: 'Raw waste left at the exit of ginning mills — a mixture of cotton fibers, seed fragments and impurities. Processed through opening and screening lines into linter or fill-fiber raw material.',
      ru: 'Сырые отходы на выходе хлопкоочистительных заводов — смесь волокна, фрагментов семян и примесей. После разрыхления и просеивания превращаются в линт или сырьё для наполнителей.',
    },
    features: [
      'Çırçır çıkışı ham telef',
      'Lif + çekirdek + yabancı madde karışımı',
      'Açma hattı girişi için uygun',
    ],
    moq: 'Min 20 ton',
    incoterms: ['EXW', 'FOB'],
  },
  {
    slug: 'temizlenmis-uluk',
    category: 'cotton-waste',
    names: {
      tr: 'Temizlenmiş Uluk',
      en: 'Cleaned Uluk Waste',
      ru: 'Очищенный улук',
    },
    description: {
      tr: 'Uluk telefinin eleme, açma ve mekanik temizleme hatlarından geçirilmesiyle elde edilen, yabancı madde oranı düşürülmüş versiyon. Open-end iplik, nonwoven ve yastık/yorgan dolgusunda değerlendirilir.',
      en: 'The cleaned version of uluk waste, passed through screening, opening and mechanical cleaning lines to reduce impurities. Used in open-end yarn, nonwoven and pillow/quilt filling.',
      ru: 'Очищенная версия улука — после просеивания, разрыхления и механической очистки с пониженным содержанием примесей. Применяется в пряже open-end, нетканых материалах и наполнителях подушек и одеял.',
    },
    features: [
      'Mekanik temizlik sonrası',
      'Open-end iplik ve dolgu uyumlu',
      'Rutubet ve yabancı madde raporlu',
    ],
    moq: 'Min 15 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },

  /* =======================================================================
   * KATEGORİ 3 — İPLİK TELEFLERİ / YARN WASTE (7 SKU)
   * ======================================================================= */
  {
    slug: 'ring-ustubu',
    category: 'yarn-waste',
    names: {
      tr: 'Ring Üstübü',
      en: 'Ring Spinning Waste (Soft)',
      ru: 'Мягкие отходы кольцевого прядения',
    },
    description: {
      tr: 'Ring iplik makinelerinde iplik kopması, bobin değişimi ve setup aşamalarında oluşan yumuşak iplik telefi. Temiz ve burgusu az olduğu için açma hatlarına doğrudan girebilir. Orta Asya ve Türkiye tedariği birlikte sunulur.',
      en: 'Soft yarn waste generated during ring-spinning operations — end breaks, bobbin changes and set-up runs. Clean and low-twist, suitable for direct feeding into opening lines. Supplied from both Turkey and Central Asia.',
      ru: 'Мягкие отходы пряжи, образующиеся при работе кольцевых прядильных машин — обрывы, смена бобин, наладка. Чистые, с низкой круткой, подходят для прямой подачи в разрыхлительные линии. Поставляется из Турции и Центральной Азии.',
    },
    features: [
      'Yumuşak, düşük burgulu iplik',
      'Orta Asya ve Türkiye tedariği',
      'Açma hattına doğrudan uygun',
      'Açma sonrası (elyaf formu) versiyonu da mevcut — open-end/nonwoven için',
    ],
    moq: 'Min 10 ton',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
  },
  {
    slug: 'hasilli-ustubu',
    category: 'yarn-waste',
    names: {
      tr: 'Haşıllı Üstübü',
      en: 'Sized Yarn Waste',
      ru: 'Ошлихтованные отходы пряжи',
    },
    description: {
      tr: 'Dokuma hazırlık ve haşıl hatlarından çıkan, yüzeyi nişasta/sentetik haşıl içeren iplik telefidir. Özel açma ve yıkama prosesinden geçirilerek geri kazanıma uygun hale getirilir. Genellikle dolgu ve endüstriyel nonwoven uygulamalarında kullanılır.',
      en: 'Yarn waste from weaving preparation and sizing lines, coated with starch or synthetic sizing. Reclaimed through dedicated opening and washing processes. Mainly used in fill and industrial nonwoven applications.',
      ru: 'Отходы пряжи с участков подготовки к ткачеству и шлихтовки, покрытые крахмальной или синтетической шлихтой. После специальной обработки — разрыхления и промывки — используются в наполнителях и технических нетканых материалах.',
    },
    features: [
      'Haşıl kaplamalı iplik telefi',
      'Açma ve yıkama sonrası kullanım',
      'Endüstriyel dolgu uyumlu',
    ],
    moq: 'Min 15 ton',
    incoterms: ['EXW', 'FOB'],
  },
  {
    slug: 'agartilmis-hidrofil',
    category: 'yarn-waste',
    names: {
      tr: 'Ağartılmış Hidrofil Pamuk',
      en: 'Bleached Hydrophilic Cotton',
      ru: 'Отбелённый гидрофильный хлопок',
    },
    description: {
      tr: 'Pamuk telefinden yola çıkılarak kaynatma, ağartma ve nötralizasyon proseslerinden geçirilmiş, yüksek emicilikli hidrofil pamuk. Medikal pamuk, eczane rulo ve kozmetik pad üretiminde temel hammadde.',
      en: 'Highly absorbent hydrophilic cotton produced from cotton waste via scouring, bleaching and neutralization. A core raw material for medical cotton, pharmacy rolls and cosmetic pads.',
      ru: 'Высокогигроскопичный гидрофильный хлопок, получаемый из хлопковых отходов путём варки, отбеливания и нейтрализации. Основное сырьё для медицинского хлопка, аптечных рулонов и косметических дисков.',
    },
    features: [
      'Kaynatma + ağartma + nötralizasyon',
      'Medikal ve kozmetik kullanım',
      'Ab/pH değerleri raporlu',
    ],
    moq: 'Min 5 ton',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
  },
  {
    slug: 'agartilmis-penye-telefi',
    category: 'yarn-waste',
    names: {
      tr: 'Ağartılmış Penye Telefi',
      en: 'Bleached Comber Noil',
      ru: 'Отбелённый гребенной очёс',
    },
    description: {
      tr: 'Penye tarak telefinin kimyasal ağartma süreciyle beyazlatılmış versiyonu. Kozmetik pad, medikal gazlı bez, yüksek kaliteli nonwoven ve bebek hijyen ürünlerinde hammadde olarak kullanılır.',
      en: 'Combed yarn noil that has been chemically bleached. Used as a raw material in cosmetic pads, medical gauze, high-grade nonwovens and baby hygiene products.',
      ru: 'Химически отбеленный гребенной очёс. Применяется как сырьё для косметических дисков, медицинской марли, нетканых материалов высокого качества и средств детской гигиены.',
    },
    features: [
      'Kimyasal ağartma sonrası',
      'Yüksek beyazlık derecesi',
      'Hijyen ürünlerinde uygun',
    ],
    moq: 'Min 5 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },
  {
    slug: 'agartilmis-pamuk-telefi',
    category: 'yarn-waste',
    names: {
      tr: 'Ağartılmış Pamuk Telefi',
      en: 'Bleached Cotton Waste',
      ru: 'Отбелённые хлопковые отходы',
    },
    description: {
      tr: 'Farklı kaynaklardan gelen pamuk teleflerinin karıştırılıp ağartıldığı, homojen beyazlıkta ve yüksek emicilikli üründür. Hijyen nonwoven, eczane pamuğu ve filtre üretiminde değerlendirilir.',
      en: 'A blended and bleached product made from cotton waste streams, offering uniform whiteness and high absorbency. Used in hygiene nonwovens, pharmacy cotton and filter production.',
      ru: 'Смесь хлопковых отходов различных источников, подвергнутая отбеливанию, с однородной белизной и высокой гигроскопичностью. Используется в гигиенических нетканых материалах, аптечном хлопке и фильтрах.',
    },
    features: [
      'Karışım kaynaklı + ağartma',
      'Homojen beyazlık',
      'Hijyen ve filtre uyumlu',
    ],
    moq: 'Min 5 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },
  {
    slug: 'rulo-eczane-pamugu',
    category: 'yarn-waste',
    names: {
      tr: 'Rulo Eczane Pamuğu',
      en: 'Pharmacy Roll Cotton',
      ru: 'Аптечный хлопок в рулонах',
    },
    description: {
      tr: 'Hidrofil pamuktan üretilen, tek kat cilt koruma ve medikal kullanım için rulo halinde sarılmış son-ürün. Farklı gramaj (50g / 100g / 200g / 500g / 1000g) ve ambalaj seçenekleriyle tedarik edilir.',
      en: 'A finished product wound into rolls from hydrophilic cotton, intended for single-layer skin protection and medical use. Supplied in various weights (50g / 100g / 200g / 500g / 1000g) and packaging options.',
      ru: 'Готовый продукт из гидрофильного хлопка, свёрнутый в рулоны для однослойной защиты кожи и медицинского применения. Доступны разные граммажи (50/100/200/500/1000 г) и варианты упаковки.',
    },
    features: [
      'Son-ürün, rulo formunda',
      'Farklı gramaj seçenekleri',
      'Özel etiketleme (private label) mümkün',
    ],
    moq: '1.000 kg (mix gramaj)',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
  },
  {
    slug: 'open-end-ustubu',
    category: 'yarn-waste',
    names: {
      tr: 'Open-End Üstübü',
      en: 'Open-End Yarn Waste',
      ru: 'Отходы пряжи open-end',
    },
    description: {
      tr: 'Open-end (OE) rotor iplik makinelerinde oluşan iplik telefi. Ring üstübüne göre daha burgulu ve kalın. Açma sonrası geri kazanım ipliği, dolgu ve nonwoven hatlarında kullanılır.',
      en: 'Yarn waste generated on open-end (OE) rotor spinning machines. More tightly twisted and thicker than ring waste. Processed through opening and used in recycled yarn, fill and nonwoven lines.',
      ru: 'Отходы пряжи open-end (OE) роторного прядения. Плотнее по крутке и толще, чем кольцевые. После разрыхления используются в регенерированной пряже, наполнителях и нетканых материалах.',
    },
    features: [
      'Daha burgulu ve kaba yapı',
      'Açma sonrası geri dönüşüm',
      'OE iplik üretimine geri besleme',
    ],
    moq: 'Min 15 ton',
    incoterms: ['EXW', 'FOB', 'CFR'],
  },

  /* =======================================================================
   * KATEGORİ 4 — ELYAF & DİĞER / FIBERS & OTHER (4 SKU)
   * ======================================================================= */
  {
    slug: 'viscon-elyaf',
    category: 'fiber-other',
    names: {
      tr: 'Viskon Elyaf',
      en: 'Viscose Fiber',
      ru: 'Вискозное волокно',
    },
    description: {
      tr: 'Selüloz bazlı, yumuşak tutumlu suni elyaf. İplik, dokuma ve nonwoven üretiminde pamukla harmanlanarak veya tek başına kullanılır. Farklı denye ve kesim uzunluğu seçenekleriyle sipariş alınır.',
      en: 'Cellulose-based regenerated fiber with a soft hand-feel. Used on its own or blended with cotton in yarn, woven and nonwoven production. Orders accepted in various denier and cut-length specifications.',
      ru: 'Вискозное волокно на основе целлюлозы с мягкой на ощупь фактурой. Используется в чистом виде или в смеси с хлопком для производства пряжи, тканых и нетканых материалов. Принимаются заказы по разным деньерам и длине резки.',
    },
    features: [
      'Selüloz esaslı, yumuşak tutum',
      'Farklı denye / kesim uzunluğu',
      'Pamukla harman uyumu yüksek',
    ],
    moq: 'Min 10 ton',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
    certifications: ['OEKO-TEX Standard 100'],
  },
  {
    slug: 'polyester-elyaf',
    category: 'fiber-other',
    names: {
      tr: 'Polyester Elyaf',
      en: 'Polyester Fiber',
      ru: 'Полиэфирное волокно',
    },
    description: {
      tr: 'Virgin veya geri dönüşümlü (rPET) PET bazlı kesik polyester elyaf. Nonwoven, dolgu, geotekstil ve harman iplik uygulamalarında kullanılır. Beyaz ve renk seçenekleriyle talep karşılanır.',
      en: 'Virgin or recycled (rPET) staple polyester fiber. Used in nonwoven, fill, geotextile and blended-yarn applications. Available in white and dope-dyed colour options.',
      ru: 'Штапельное полиэфирное волокно — первичное или переработанное (rPET). Применяется в нетканых материалах, наполнителях, геотекстиле и смесовой пряже. Доступно в белом и цветных вариантах.',
    },
    features: [
      'Virgin / rPET seçeneği',
      'Beyaz + renkli üretim',
      'Nonwoven ve dolgu uyumlu',
    ],
    moq: 'Min 20 ton',
    incoterms: ['EXW', 'FOB', 'CFR', 'CIF'],
    certifications: ['GRS (rPET için)', 'OEKO-TEX Standard 100'],
  },
  {
    slug: 'denim-kirpintisi',
    category: 'fiber-other',
    names: {
      tr: 'Denim Kırpıntısı',
      en: 'Denim Cutting Waste',
      ru: 'Денимовые обрезки',
    },
    description: {
      tr: 'Konfeksiyon sonrası denim kumaş kırpıntıları. Didikleme (shredding) hatlarında elyafa dönüştürülerek geri dönüşüm iplik, nonwoven ve endüstriyel dolgu üretiminde kullanılır. Renk bazlı (indigo / karışık) tasnif yapılır.',
      en: 'Post-production denim fabric off-cuts. Converted into fiber through shredding lines and used in recycled yarn, nonwoven and industrial fill production. Sorted by colour (indigo / mixed).',
      ru: 'Обрезки денимовой ткани после пошива. Перерабатываются через шредеры в волокно и используются в регенерированной пряже, нетканых материалах и технических наполнителях. Сортируются по цвету (индиго / смешанный).',
    },
    features: [
      'Konfeksiyon sonrası hammadde',
      'Didikleme ile elyaf geri kazanımı',
      'Renk tasnifi (indigo / karışık)',
    ],
    moq: 'Min 20 ton',
    incoterms: ['EXW', 'FOB'],
    certifications: ['GRS-uyumlu tedarik seçeneği'],
  },
  {
    slug: 'penye-kirpintisi',
    category: 'fiber-other',
    names: {
      tr: 'Penye Kırpıntısı',
      en: 'Combed Knit Cutting Waste',
      ru: 'Обрезки гребенного трикотажа',
    },
    description: {
      tr: 'Örme penye kumaş kırpıntıları, çoğunlukla t-shirt ve iç giyim üretim artığıdır. Renk ve kompozisyon (100% pamuk / pamuk-polyester) bazında ayrıştırılarak geri dönüşüm iplik hatlarına hammadde olarak verilir.',
      en: 'Combed knit fabric off-cuts, largely from t-shirt and underwear production. Sorted by colour and composition (100% cotton / cotton-polyester) and supplied as raw material for recycled yarn lines.',
      ru: 'Обрезки гребенного трикотажа, в основном с производства футболок и нижнего белья. Сортируются по цвету и составу (100% хлопок / хлопок-полиэстер) и поставляются как сырьё для линий регенерированной пряжи.',
    },
    features: [
      'Renk ve kompozisyon tasnifli',
      'Geri dönüşüm iplik hattına uygun',
      'Balya veya big-bag ambalaj',
    ],
    moq: 'Min 20 ton',
    incoterms: ['EXW', 'FOB'],
    certifications: ['GRS-uyumlu tedarik seçeneği'],
  },
];

/* -------------------------------------------------------------------------- */
/*  Yardımcı fonksiyonlar                                                     */
/* -------------------------------------------------------------------------- */

/** Verilen kategoriye ait ürünleri döndürür. */
export const getProductsByCategory = (category: ProductCategory): Product[] =>
  products.filter((p) => p.category === category);

/** Slug ile ürün arar — bulunmazsa `undefined`. */
export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

/** Bir kategorinin ürün sayısı. */
export const getCategoryCount = (category: ProductCategory): number =>
  products.filter((p) => p.category === category).length;

/** Toplam SKU sayısı (sabit 21). */
export const totalSkuCount: number = products.length;

/** Kategori meta verisi (slug ile). */
export const getCategoryMeta = (key: ProductCategory) =>
  categories.find((c) => c.key === key);

/** Kategori key ile tam meta verisi alır; `undefined` yerine default dönmez. */
export const getCategoryByKey = (key: ProductCategory) =>
  categories.find((c) => c.key === key);

/** Verilen ürüne göre aynı kategorideki diğer N ürünü döndürür (detay sayfası için). */
export const getRelatedProducts = (
  product: Product,
  limit: number = 3,
): Product[] =>
  products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
