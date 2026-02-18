export interface Product {
  name: string;
  price: string;
  image: string;
  collection: string;
}

export interface Collection {
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  image: string;
}

export const collections: Collection[] = [
  {
    name: "Tartan",
    slug: "tartan",
    description: "Bold patterns meet timeless elegance",
    longDescription: "The Tartan collection celebrates bold patterns and rich textures, blending Scottish heritage with Brazilian craftsmanship. Each piece features our signature hand-woven tartan fabric in earthy forest greens and warm greys.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/Juju_tartan_collection_vanessa_saroni_535831b3-8057-403e-8f79-3693254f8577_1400x.jpg?v=1614326105",
  },
  {
    name: "Piano",
    slug: "piano",
    description: "Off-white sophistication",
    longDescription: "The Piano collection is an ode to purity and sophistication. Crafted in delicate off-white tones with subtle tonal weaves, these bags bring a quiet luxury to any ensemble. Available in grey, royal, forest green, and classic off-white.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/Vanessa_Saroni_-_Linda_Piano_Collection_Off_White_1400x.jpg?v=1614326016",
  },
  {
    name: "Colorcore",
    slug: "colorcore",
    description: "Emotion through vibrant color",
    longDescription: "Colorcore is where emotion meets design. Vibrant hues and bold color combinations express joy, confidence, and creativity. Each bag in this collection is a statement piece that celebrates the power of color.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/X3-01_e5f6b035-4844-4d3a-b7cd-c7e38e331c32_1400x.jpg?v=1661776410",
  },
  {
    name: "Lyric",
    slug: "lyric",
    description: "Poetic designs that sing",
    longDescription: "The Lyric collection draws inspiration from music and poetry. Flowing lines, harmonious proportions, and lyrical woven patterns create bags that feel like wearable art — each one telling its own melodic story.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/X2-01_1400x.jpg?v=1661772900",
  },
  {
    name: "Timeless",
    slug: "timeless",
    description: "Classic beauty that endures",
    longDescription: "True to its name, the Timeless collection features designs that transcend seasons and trends. Clean silhouettes, neutral tones, and impeccable craftsmanship make these bags investment pieces you'll cherish for years.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/MG_0993-2-01_1400x.jpg?v=1661772622",
  },
  {
    name: "Geometry",
    slug: "geometry",
    description: "Structured lines, modern forms",
    longDescription: "Geometry explores the intersection of mathematical precision and organic craftsmanship. Angular shapes, structured silhouettes, and precise weaving patterns create bags with architectural presence.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/Capodanno_1400x.jpg?v=1734195219",
  },
  {
    name: "Tropical",
    slug: "tropical",
    description: "Vibrant rainbow-inspired pieces",
    longDescription: "The Tropical collection captures the spirit of Brazil — vibrant, joyful, and full of life. Rainbow-inspired colour palettes and playful weaving patterns bring sunshine to every outfit.",
    image: "https://www.vanessasaroni.com/cdn/shop/files/juju_tartan_collection_vanessa_saronihomepage_1400x.jpg?v=1614326298",
  },
];

export const products: Product[] = [
  // Tartan
  { name: "Linda Tartan Forest Green", price: "€395", image: "https://www.vanessasaroni.com/cdn/shop/products/FW-91-890938_400x.jpg?v=1632528913", collection: "tartan" },
  { name: "Linda Tartan Grey", price: "€395", image: "https://www.vanessasaroni.com/cdn/shop/products/FW-146-624068_400x.jpg?v=1632788534", collection: "tartan" },
  // Piano
  { name: "Thata Vies Piano Grey", price: "€575", image: "https://www.vanessasaroni.com/cdn/shop/products/FW-13-838649_400x.jpg?v=1632269360", collection: "piano" },
  { name: "Karol Piano Grey", price: "€595", image: "https://www.vanessasaroni.com/cdn/shop/products/FW-11-316104_400x.jpg?v=1632788509", collection: "piano" },
  { name: "Malu Piano Royal", price: "€455", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220719_E-Commerce_51_400x.jpg?v=1673632079", collection: "piano" },
  { name: "Malu Vies Piano Forest Green", price: "€455", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220719_E-Commerce_53-2_400x.jpg?v=1665649996", collection: "piano" },
  { name: "Malu Vies Piano Grey", price: "€455", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220719_E-Commerce_47-2_400x.jpg?v=1665650036", collection: "piano" },
  { name: "Linda Piano Off White", price: "€455", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_E-commerce_202203018_3_400x.jpg?v=1687882048", collection: "piano" },
  { name: "Malu Off-White Piano", price: "€495", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220719_E-Commerce_57_400x.jpg?v=1659010805", collection: "piano" },
  { name: "Mary Piano Grey", price: "€365", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_E-commerce_20220228_8-2_400x.jpg?v=1665650255", collection: "piano" },
  { name: "Mary Piano Mustard", price: "€365", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220121_27_27617958-252d-454e-b23d-9502c7f4165b_400x.jpg?v=1665650158", collection: "piano" },
  { name: "Mary Piano Off-White", price: "€365", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220121_28-2_400x.jpg?v=1665650129", collection: "piano" },
  // Colorcore / Sianinha / Allegro
  { name: "Linda Sianinha Black", price: "€415", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_E-commerce_202203018_13_1_400x.jpg?v=1663790852", collection: "colorcore" },
  { name: "Liz Sianinha Black", price: "€395", image: "https://www.vanessasaroni.com/cdn/shop/products/FW-46-166226_400x.jpg?v=1631663662", collection: "colorcore" },
  { name: "Mary Allegro Black", price: "€365", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220121_25_908c8de2-324a-4646-8e3c-e0fee6b42f92_400x.jpg?v=1653548727", collection: "colorcore" },
  // Timeless
  { name: "Linda Ivory Zaha", price: "€455", image: "https://www.vanessasaroni.com/cdn/shop/products/DRAWSTRING_BAG_IVORY_ZHA_LINDA_055fa642-8ffe-4ee7-824a-0c1e5002a258-146672_400x.jpg?v=1617820493", collection: "timeless" },
  { name: "Donna Off White", price: "€345", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_20220121_33_400x.jpg?v=1649374107", collection: "timeless" },
  { name: "Malu Piano Off-White", price: "€495", image: "https://www.vanessasaroni.com/cdn/shop/products/VanessaSaroni_E-commerce_20220228_83_400x.jpg?v=1653552282", collection: "timeless" },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(slug: string) {
  return products.filter((p) => p.collection === slug);
}
