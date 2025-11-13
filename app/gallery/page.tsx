'use client'

import { useState } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetailPanel } from "@/components/product-detail-panel"
import Image from "next/image"

interface Product {
  id: string
  name: string
  price: number
  salePrice?: number
  image: string
  description: string
  category: string
  alt: string
}

export default function GalleryPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const galleryProducts: Product[] = [
    {
      id: "1",
      name: "Elegant Evening Dress",
      price: 89,
      image: "/shop/IMG-20251114-WA0003.jpg",
      alt: "Elegant Evening Dress",
      category: "Clothing",
      description: "A stunning evening dress perfect for special occasions. Features sophisticated tailoring and luxurious fabric that drapes beautifully. Ideal for galas, weddings, or upscale evening events.",
    },
    {
      id: "2",
      name: "Casual Linen Dress",
      price: 65,
      salePrice: 49,
      image: "/shop/IMG-20251114-WA0004.jpg",
      alt: "Casual Linen Dress",
      category: "Clothing",
      description: "Light and breezy linen dress perfect for warm weather. The relaxed fit provides comfort while maintaining a chic aesthetic. Great for brunches, beach outings, or casual weekend wear.",
    },
    {
      id: "3",
      name: "Vintage Floral Blouse",
      price: 55,
      image: "/shop/IMG-20251114-WA0005.jpg",
      alt: "Vintage Floral Blouse",
      category: "Clothing",
      description: "Charming vintage-inspired floral blouse with timeless appeal. The delicate print and quality fabric make it versatile for both casual and dressy occasions. Perfect for adding character to any outfit.",
    },
    {
      id: "4",
      name: "Premium Wool Coat",
      price: 145,
      image: "/shop/IMG-20251114-WA0006.jpg",
      alt: "Premium Wool Coat",
      category: "Outerwear",
      description: "Investment-worthy wool coat that provides warmth and elegance. Premium craftsmanship ensures durability and timeless style that lasts for years. Perfect for transitional seasons and formal occasions.",
    },
    {
      id: "5",
      name: "Tailored Blazer",
      price: 98,
      image: "/shop/IMG-20251114-WA0007.jpg",
      alt: "Tailored Blazer",
      category: "Clothing",
      description: "Sharp, well-fitted blazer that elevates any outfit. Whether paired with trousers or dresses, this blazer adds an instant polish to your look. Essential for professional and casual settings alike.",
    },
    {
      id: "6",
      name: "Silk Slip Dress",
      price: 79,
      image: "/shop/IMG-20251114-WA0008.jpg",
      alt: "Silk Slip Dress",
      category: "Clothing",
      description: "Luxurious silk slip dress with a minimalist design. The smooth fabric and elegant silhouette make it perfect for layering or wearing on its own. A versatile wardrobe staple for any season.",
    },
    {
      id: "7",
      name: "Structured Pencil Skirt",
      price: 68,
      image: "/shop/IMG-20251114-WA0009.jpg",
      alt: "Structured Pencil Skirt",
      category: "Clothing",
      description: "Professionally tailored pencil skirt that flatters the figure. Perfect for office wear or elevated casual styling. The structured fabric maintains its shape throughout the day.",
    },
    {
      id: "8",
      name: "Bohemian Wrap Top",
      price: 72,
      salePrice: 54,
      image: "/shop/IMG-20251114-WA0010.jpg",
      alt: "Bohemian Wrap Top",
      category: "Clothing",
      description: "Free-spirited wrap top with bohemian flair. Adjustable and flattering for all body types, this top transitions easily from day to night. Perfect for creating effortless, relaxed elegance.",
    },
    {
      id: "9",
      name: "Statement Sleeve Blouse",
      price: 76,
      image: "/shop/IMG-20251114-WA0011.jpg",
      alt: "Statement Sleeve Blouse",
      category: "Clothing",
      description: "Chic blouse featuring eye-catching statement sleeves that make a bold fashion statement. The sophisticated design adds visual interest and personality to your wardrobe. Great for both professional and social events.",
    },
    {
      id: "10",
      name: "Luxury Handbag",
      price: 165,
      image: "/shop/IMG-20251114-WA0012.jpg",
      alt: "Luxury Handbag",
      category: "Bags & Purses",
      description: "Premium designer handbag crafted from the finest materials. The timeless design ensures it remains a favorite season after season. A true investment piece that completes any ensemble.",
    },
    {
      id: "11",
      name: "Woven Crossbody Bag",
      price: 58,
      image: "/shop/IMG-20251114-WA0013.jpg",
      alt: "Woven Crossbody Bag",
      category: "Bags & Purses",
      description: "Artisanal woven crossbody bag with natural charm. Perfect for summer days and casual outings, this bag adds texture and visual interest to any look. Lightweight and practical for everyday use.",
    },
    {
      id: "12",
      name: "Suede Shoulder Tote",
      price: 92,
      image: "/shop/IMG-20251114-WA0014.jpg",
      alt: "Suede Shoulder Tote",
      category: "Bags & Purses",
      description: "Luxurious suede tote in a perfect size for work or shopping. The soft fabric and spacious interior make it both stylish and functional. An excellent choice for everyday elegance.",
    },
    {
      id: "13",
      name: "Metallic Accent Heels",
      price: 85,
      image: "/shop/IMG-20251114-WA0015.jpg",
      alt: "Metallic Accent Heels",
      category: "Footwear",
      description: "Glamorous heels with eye-catching metallic accents. Perfect for special occasions and evening wear, these heels add an extra touch of sparkle and sophistication to any outfit.",
    },
    {
      id: "14",
      name: "Classic Leather Loafers",
      price: 95,
      image: "/shop/IMG-20251114-WA0016.jpg",
      alt: "Classic Leather Loafers",
      category: "Footwear",
      description: "Timeless leather loafers combining comfort and style. Perfect for professional settings or casual weekends, these classic shoes are a wardrobe essential. Quality construction ensures lasting wear.",
    },
    {
      id: "15",
      name: "Embroidered Evening Top",
      price: 81,
      image: "/shop/IMG-20251114-WA0017.jpg",
      alt: "Embroidered Evening Top",
      category: "Clothing",
      description: "Exquisitely embroidered top perfect for evening affairs. The detailed embroidery adds elegance and visual interest without being overwhelming. A statement piece that pairs beautifully with simple bottoms.",
    },
    {
      id: "16",
      name: "Designer Midi Dress",
      price: 124,
      image: "/shop/IMG-20251114-WA0018.jpg",
      alt: "Designer Midi Dress",
      category: "Clothing",
      description: "Sophisticated midi dress from a premium collection. The flattering length and elegant silhouette make it perfect for various occasions. A versatile piece that deserves a place in every wardrobe.",
    },
  ]

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-5xl text-black mb-4 text-center">Style Inspiration</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how our customers style their favorite clothing, accessories, and purses from Everything Under the Sun.
          </p>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryProducts.map((product, idx) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className={`group overflow-hidden bg-gray-200 rounded-lg hover:shadow-lg transition-shadow cursor-pointer ${
                  idx % 3 === 1 ? "lg:col-span-1 lg:row-span-2" : ""
                } ${idx % 5 === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`relative ${idx % 3 === 1 ? "h-96 md:h-[500px]" : "h-64"}`}>
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay with product info */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-4">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-sm font-semibold">{product.category}</p>
                      <h3 className="font-serif text-lg">{product.name}</h3>
                      <p className="text-sm mt-1">${product.salePrice || product.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductDetailPanel product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      <Footer />
    </>
  )
}
