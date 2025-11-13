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
      name: "Classic Black Dress",
      price: 49,
      image: "/products/p1.jpg",
      alt: "Classic Black Dress styling",
      category: "Clothing",
      description: "A timeless classic black dress that transitions seamlessly from day to night. Crafted from premium fabric with a flattering silhouette, this dress is a versatile staple for any wardrobe. Perfect for work events, casual outings, or elegant evenings.",
    },
    {
      id: "2",
      name: "White Linen Top",
      price: 39,
      salePrice: 29,
      image: "/products/p2.jpg",
      alt: "White Linen Top outfit",
      category: "Clothing",
      description: "Breathable white linen top featuring a clean, minimalist design. Ideal for warm weather, this top can be dressed up or down depending on the occasion. The natural linen fabric offers comfort and elegance in one beautiful piece.",
    },
    {
      id: "3",
      name: "Crossbody Shoulder Bag",
      price: 55,
      image: "/products/p3.jpg",
      alt: "Crossbody Shoulder Bag styling",
      category: "Bags & Purses",
      description: "Functional and stylish crossbody bag with adjustable strap for all-day wear. Features multiple compartments for organized storage and durable construction. The perfect companion for shopping, travel, or everyday adventures.",
    },
    {
      id: "4",
      name: "Designer Handbag",
      price: 89,
      image: "/products/p4.jpg",
      alt: "Designer handbag collection",
      category: "Bags & Purses",
      description: "Elegant designer handbag crafted with attention to detail. Premium materials and sophisticated design make this bag a statement piece that complements any outfit. Spacious enough for daily essentials with refined aesthetic.",
    },
    {
      id: "5",
      name: "Black Leather Tote",
      price: 59,
      image: "https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg",
      alt: "Black Leather Tote styling",
      category: "Bags & Purses",
      description: "Sophisticated black leather tote featuring quality craftsmanship and professional styling. Perfect for work or weekend getaways, this tote offers ample space without compromising on elegance. Durable leather improves with age.",
    },
    {
      id: "6",
      name: "Fashion Accessories Set",
      price: 35,
      image: "/products/p6.jpg",
      alt: "Fashion accessories display",
      category: "Accessories",
      description: "Curated collection of fashion accessories to elevate any outfit. Includes versatile pieces that pair well together or separately. Mix and match to create your signature style.",
    },
    {
      id: "7",
      name: "White Canvas Sneakers",
      price: 45,
      image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
      alt: "White Canvas Sneakers outfit",
      category: "Footwear",
      description: "Classic white canvas sneakers that go with everything. Comfortable for all-day wear with a timeless design that never goes out of style. The perfect foundation for casual, sporty, or even dressed-up looks.",
    },
    {
      id: "8",
      name: "Ceramic Coffee Mug",
      price: 18,
      salePrice: 12,
      image: "https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg",
      alt: "Ceramic Coffee Mug lifestyle",
      category: "Accessories & More",
      description: "Beautiful ceramic coffee mug perfect for your morning brew. Handcrafted with attention to detail, this mug combines functionality with artistic design. A thoughtful gift for coffee lovers.",
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
