export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  salePrice?: number;
  sale?: boolean;
  image: string;
  images: string[];
  slug: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  related: string[];
  alt: string;
}

export const allProducts: Product[] = [
  {
    id: "101",
    name: "Rhinestone Heart Clutch & Necklace Set",
    category: "Accessories",
    price: 30,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fd3e9ad52c5dd4e0c8efde56c7e86fe90?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fd3e9ad52c5dd4e0c8efde56c7e86fe90?format=webp&width=800&height=1200"],
    slug: "rhinestone-heart-clutch-necklace-set",
    description: "A stunning heart-shaped clutch paired with a matching fringe necklace, both adorned with sparkling rhinestones. Perfect for making a statement at evening events.",
    details: ["High-quality rhinestones", "Heart-shaped clutch", "Matching fringe necklace", "Perfect for evening events", "Gift ready"],
    sizes: ["One Size"],
    colors: [{ name: "Gold/Silver", hex: "#D4AF37" }],
    related: ["102", "104", "105"],
    alt: "Rhinestone Heart Clutch and Necklace Set"
  },
  {
    id: "102",
    name: "Mosaic Rhinestone Tumbler",
    category: "Accessories",
    price: 25,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F60949003c2ff4b898f7673fe3b08ad86?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F60949003c2ff4b898f7673fe3b08ad86?format=webp&width=800&height=1200"],
    slug: "mosaic-rhinestone-tumbler",
    description: "Stylish tumblers decorated with colorful mosaic rhinestones, perfect for adding a touch of glamour to your daily hydration. Available in multiple designs.",
    details: ["Colorful mosaic rhinestones", "Durable material", "Includes matching straw", "Perfect gift item", "Eye-catching design"],
    sizes: ["One Size"],
    colors: [{ name: "Multi-color", hex: "#FF6B6B" }],
    related: ["101", "121", "122"],
    alt: "Mosaic Rhinestone Tumbler"
  },
  {
    id: "103",
    name: "LSKINR Gel Nail Polish Set",
    category: "Beauty",
    price: 22,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F7d7771c98d4d4cf88d1c5b033d16e6c2?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F7d7771c98d4d4cf88d1c5b033d16e6c2?format=webp&width=800&height=1200"],
    slug: "lskinr-gel-nail-polish-set",
    description: "Professional 36-piece gel nail polish collection featuring a wide variety of colors and glitters. Achieve salon-quality results at home.",
    details: ["36 professional colors", "Long-lasting gel formula", "Includes glitters and solids", "Fashion expert approved", "Gift box included"],
    sizes: ["Set of 36"],
    colors: [{ name: "Multi", hex: "#FFB6C1" }],
    related: ["101", "102", "121"],
    alt: "LSKINR Gel Nail Polish Set"
  },
  {
    id: "104",
    name: "Abstract Face Jewelry Set",
    category: "Jewelry",
    price: 40,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fce30ba8354bc45e19ce781ed5482aa5e?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fce30ba8354bc45e19ce781ed5482aa5e?format=webp&width=800&height=1200"],
    slug: "abstract-face-jewelry-set",
    description: "Artistic silver-toned jewelry set featuring abstract face designs on both the ring and cuff bracelet. A unique conversation piece for art lovers.",
    details: ["Silver-toned finish", "Abstract face motif", "Adjustable cuff bracelet", "Matching statement ring", "Unique artisanal design"],
    sizes: ["One Size"],
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    related: ["105", "111", "113"],
    alt: "Abstract Face Jewelry Set"
  },
  {
    id: "105",
    name: "Golden Face Brooch & Earring Set",
    category: "Jewelry",
    price: 30,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F28c57e78e6ab4a52a9663b3d1b13c980?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F28c57e78e6ab4a52a9663b3d1b13c980?format=webp&width=800&height=1200"],
    slug: "golden-face-brooch-earring-set",
    description: "Elegant gold-finished set with abstract face motifs, including a large brooch and matching pearl-drop earrings. Adds a sophisticated touch to any outfit.",
    details: ["Gold-finished metal", "Abstract face design", "Pearl-drop earrings", "Large statement brooch", "Elegant and artistic"],
    sizes: ["One Size"],
    colors: [{ name: "Gold", hex: "#D4AF37" }],
    related: ["104", "111", "113"],
    alt: "Golden Face Brooch and Earring Set"
  },
  {
    id: "106",
    name: "Classic Striped Handbag",
    category: "Purses",
    price: 30,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F477599a80eaa4f33b72940bbdb51b3ee?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F477599a80eaa4f33b72940bbdb51b3ee?format=webp&width=800&height=1200"],
    slug: "classic-striped-handbag",
    description: "Timeless striped design handbags with tan leather accents and gold-tone hardware. Available in two sizes for your convenience.",
    details: ["Durable striped fabric", "Tan leather accents", "Gold-tone hardware", "Top handle and shoulder strap", "Classic silhouette"],
    sizes: ["Small", "Large"],
    colors: [{ name: "Striped", hex: "#4A4A4A" }],
    related: ["107", "112", "115"],
    alt: "Classic Striped Handbag"
  },
  {
    id: "107",
    name: "BPC Design Textured Bag Set",
    category: "Purses",
    price: 30,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F5c6f09e3d39040848c4a0daf8b380e0a?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F5c6f09e3d39040848c4a0daf8b380e0a?format=webp&width=800&height=1200"],
    slug: "bpc-design-textured-bag-set",
    description: "Sophisticated black pebble-textured handbag set with tan handles and gold-tone closures. A professional and stylish choice for daily use.",
    details: ["Pebble-textured black finish", "Tan leather handles", "Gold-tone hardware", "Set of two bags", "BPC Design brand"],
    sizes: ["Set of 2"],
    colors: [{ name: "Black/Tan", hex: "#000000" }],
    related: ["106", "112", "115"],
    alt: "BPC Design Textured Bag Set"
  },
  {
    id: "108",
    name: "Beige Ring Handle Handbag",
    category: "Purses",
    price: 22,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fafbe0ba2bf0d43e5bdeafb8486dfcf3e?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fafbe0ba2bf0d43e5bdeafb8486dfcf3e?format=webp&width=800&height=1200"],
    slug: "beige-ring-handle-handbag",
    description: "Modern beige handbag featuring a unique circular top handle and a chunky gold-tone chain accent. A perfect blend of style and practicality.",
    details: ["Chic beige finish", "Padded ring handle", "Gold-tone chunky chain", "Removable shoulder strap", "Contemporary design"],
    sizes: ["One Size"],
    colors: [{ name: "Beige", hex: "#F5F5DC" }],
    related: ["109", "112", "114"],
    alt: "Beige Ring Handle Handbag"
  },
  {
    id: "109",
    name: "Black Ring Handle Handbag",
    category: "Purses",
    price: 22,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fc58d2c7d17da47049a21b5aec7f2a15b?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fc58d2c7d17da47049a21b5aec7f2a15b?format=webp&width=800&height=1200"],
    slug: "black-ring-handle-handbag",
    description: "Sleek black handbag with a distinctive ring handle and a bold gold-tone chain strap. Versatile enough for both day and night.",
    details: ["Sleek black finish", "Padded ring handle", "Gold-tone chunky chain", "Removable shoulder strap", "Bold accessory statement"],
    sizes: ["One Size"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["108", "112", "114"],
    alt: "Black Ring Handle Handbag"
  },
  {
    id: "110",
    name: "Boho Statement Earrings",
    category: "Jewelry",
    price: 12,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F18774a9d8de9480b8528fbd1cb89f96d?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F18774a9d8de9480b8528fbd1cb89f96d?format=webp&width=800&height=1200"],
    slug: "boho-statement-earrings",
    description: "Vibrant collection of colorful statement earrings with intricate beadwork and woven designs. Choose from four stunning styles.",
    details: ["Vibrant colorful beads", "Intricate woven designs", "Statement-making size", "Lightweight for comfort", "Multiple styles available"],
    sizes: ["One Size"],
    colors: [{ name: "Multi", hex: "#FF6B6B" }],
    related: ["111", "113", "101"],
    alt: "Boho Statement Earrings"
  },
  {
    id: "111",
    name: "Blue Spiral Necklace Set",
    category: "Jewelry",
    price: 18,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fb922fea87c9e44d3a2c7ccf515e68bd9?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fb922fea87c9e44d3a2c7ccf515e68bd9?format=webp&width=800&height=1200"],
    slug: "blue-spiral-necklace-set",
    description: "Unique blue and silver wire-wrapped necklace set with a central floral motif and matching spiral earrings. A handcrafted masterpiece.",
    details: ["Blue and silver wire", "Spiral wire design", "Central floral pendant", "Matching spiral earrings", "Handcrafted look"],
    sizes: ["One Size"],
    colors: [{ name: "Blue/Silver", hex: "#4169E1" }],
    related: ["113", "110", "104"],
    alt: "Blue Spiral Necklace Set"
  },
  {
    id: "112",
    name: "Quilted Patent Leather Bag",
    category: "Purses",
    price: 28,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F6e1eba3637d6430b8efd95fb6ea51987?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F6e1eba3637d6430b8efd95fb6ea51987?format=webp&width=800&height=1200"],
    slug: "quilted-patent-leather-bag",
    description: "Chic black patent leather handbag featuring a classic quilted pattern and gold-tone hardware. High-shine elegance for any occasion.",
    details: ["High-shine patent leather", "Classic quilted pattern", "Gold-tone chain strap", "Top handle", "Sophisticated black finish"],
    sizes: ["One Size"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["106", "107", "114"],
    alt: "Quilted Patent Leather Bag"
  },
  {
    id: "113",
    name: "Green Floral Statement Set",
    category: "Jewelry",
    price: 18,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F09c2b1c63f8e4c0693b37fecdc801061?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F09c2b1c63f8e4c0693b37fecdc801061?format=webp&width=800&height=1200"],
    slug: "green-floral-statement-set",
    description: "Striking green wire-wrapped jewelry set with a large floral pendant and matching spiral earrings. Bold, artistic, and beautifully colored.",
    details: ["Vibrant green wire", "Large floral pendant", "Matching spiral earrings", "Artistic statement set", "Handcrafted design"],
    sizes: ["One Size"],
    colors: [{ name: "Green", hex: "#006400" }],
    related: ["111", "110", "105"],
    alt: "Green Floral Statement Set"
  },
  {
    id: "114",
    name: "Pink Corset Crossbody Bag",
    category: "Purses",
    price: 28,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F171851d010f240cbbeb24e3e2f66b9a4?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F171851d010f240cbbeb24e3e2f66b9a4?format=webp&width=800&height=1200"],
    slug: "pink-corset-crossbody-bag",
    description: "Playful pink handbag designed with corset-style lacing and lace trim. A unique and feminine accessory that stands out.",
    details: ["Pink corset-style design", "Lace trim detailing", "Crossbody strap", "Metallic accents", "Playful and unique"],
    sizes: ["One Size"],
    colors: [{ name: "Pink", hex: "#FFC0CB" }],
    related: ["108", "109", "116"],
    alt: "Pink Corset Crossbody Bag"
  },
  {
    id: "115",
    name: "Fashion Diva Red Handbag",
    category: "Purses",
    price: 18,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fe8d4fb1c71e749ec8136cf2fe29cc5c9?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fe8d4fb1c71e749ec8136cf2fe29cc5c9?format=webp&width=800&height=1200"],
    slug: "fashion-diva-red-handbag",
    description: "Eye-catching red handbag featuring a stylish illustration of a woman with sunglasses and red lips. A bold statement for any fashionista.",
    details: ["Vibrant red finish", "Fashionista illustration", "Gold-tone studs", "Top handle and strap", "Bold pop of color"],
    sizes: ["One Size"],
    colors: [{ name: "Red", hex: "#FF0000" }],
    related: ["116", "112", "106"],
    alt: "Fashion Diva Red Handbag"
  },
  {
    id: "116",
    name: "Fashion Diva Black Handbag",
    category: "Purses",
    price: 18,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fddad1bc3e93c439a9f913a38d56f8d5e?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fddad1bc3e93c439a9f913a38d56f8d5e?format=webp&width=800&height=1200"],
    slug: "fashion-diva-black-handbag",
    description: "Sleek black handbag adorned with a chic fashionista illustration and gold-tone accents. Sophisticated with a fun artistic twist.",
    details: ["Classic black finish", "Chic fashionista illustration", "Gold-tone studs and chain", "Top handle and strap", "Unique artistic design"],
    sizes: ["One Size"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["115", "112", "107"],
    alt: "Fashion Diva Black Handbag"
  },
  {
    id: "117",
    name: "Vintage Gold Filigree Tray",
    category: "Home",
    price: 20,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fa92380a2dd774a5c96b36e42b559b500?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fa92380a2dd774a5c96b36e42b559b500?format=webp&width=800&height=1200"],
    slug: "vintage-gold-filigree-tray",
    description: "Elegant oval mirrored tray with an ornate gold filigree border and dual handles. Perfect for displaying perfumes or jewelry.",
    details: ["Ornate gold filigree border", "Mirrored glass surface", "Dual handles", "Oval silhouette", "Perfect for vanity display"],
    sizes: ["One Size"],
    colors: [{ name: "Gold", hex: "#D4AF37" }],
    related: ["118", "121", "122"],
    alt: "Vintage Gold Filigree Tray"
  },
  {
    id: "118",
    name: "Oval Gold Mirrored Tray",
    category: "Home",
    price: 15,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F2723a5264b72416092e21db89772ad57?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F2723a5264b72416092e21db89772ad57?format=webp&width=800&height=1200"],
    slug: "oval-gold-mirrored-tray",
    description: "Minimalist yet elegant oval mirrored tray with a thin gold-tone frame and handles. Ideal for adding a touch of luxury to any room.",
    details: ["Thin gold-tone frame", "Mirrored glass surface", "Dual handles", "Elegant oval shape", "Versatile decor piece"],
    sizes: ["One Size"],
    colors: [{ name: "Gold", hex: "#D4AF37" }],
    related: ["117", "121", "122"],
    alt: "Oval Gold Mirrored Tray"
  },
  {
    id: "119",
    name: "Greek Key Patterned Tray",
    category: "Home",
    price: 15,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F0271515b07884e9aa670b7f26b6651fe?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F0271515b07884e9aa670b7f26b6651fe?format=webp&width=800&height=1200"],
    slug: "greek-key-patterned-tray",
    description: "Sophisticated round tray featuring a classic black and gold Greek key border and intricate floral center. A timeless decorative accent.",
    details: ["Greek key border pattern", "Black and gold design", "Intricate floral center", "Round silhouette", "Classic decorative piece"],
    sizes: ["One Size"],
    colors: [{ name: "Black/Gold", hex: "#000000" }],
    related: ["120", "117", "118"],
    alt: "Greek Key Patterned Tray"
  },
  {
    id: "120",
    name: "Monochrome Patterned Tray",
    category: "Home",
    price: 15,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fcd37cdb87a1e44969868f61388b5ab06?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fcd37cdb87a1e44969868f61388b5ab06?format=webp&width=800&height=1200"],
    slug: "monochrome-patterned-tray",
    description: "Stylish round tray with a black and silver Greek key pattern and decorative floral design. Modern elegance for your home.",
    details: ["Greek key border pattern", "Black and silver design", "Decorative floral center", "Round silhouette", "Modern elegant decor"],
    sizes: ["One Size"],
    colors: [{ name: "Black/Silver", hex: "#000000" }],
    related: ["119", "117", "118"],
    alt: "Monochrome Patterned Tray"
  },
  {
    id: "121",
    name: "Round Gold Mirrored Tray",
    category: "Home",
    price: 15,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fbf2836b8f4454710b7369f2d0ebbe2f0?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fbf2836b8f4454710b7369f2d0ebbe2f0?format=webp&width=800&height=1200"],
    slug: "round-gold-mirrored-tray",
    description: "Classic round mirrored tray with a delicate gold-tone mesh border. Beautifully simple and perfect for any vanity or coffee table.",
    details: ["Gold-tone mesh border", "Mirrored glass surface", "Round silhouette", "Delicate dual handles", "Timeless vanity tray"],
    sizes: ["One Size"],
    colors: [{ name: "Gold", hex: "#D4AF37" }],
    related: ["122", "117", "118"],
    alt: "Round Gold Mirrored Tray"
  },
  {
    id: "122",
    name: "Ornate Silver Mirrored Tray",
    category: "Home",
    price: 15,
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fd81f18e256e94ddcb61f005619f1906f?format=webp&width=800&height=1200",
    images: ["https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2Fd81f18e256e94ddcb61f005619f1906f?format=webp&width=800&height=1200"],
    slug: "ornate-silver-mirrored-tray",
    description: "Beautifully designed mirrored tray with an elaborate silver-tone frame and decorative handles. Adds a touch of vintage charm.",
    details: ["Elaborate silver-tone frame", "Mirrored glass surface", "Decorative ornate handles", "Round silhouette", "Vintage-inspired design"],
    sizes: ["One Size"],
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    related: ["121", "117", "118"],
    alt: "Ornate Silver Mirrored Tray"
  }
];

export const getProductBySlug = (slug: string) => {
  return allProducts.find(p => p.slug === slug);
};

export const getRelatedProducts = (ids: string[]) => {
  return allProducts.filter(p => ids.includes(p.id));
};
