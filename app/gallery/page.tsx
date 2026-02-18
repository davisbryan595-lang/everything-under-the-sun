'use client'

import { useState } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductDetailPanel } from "@/components/product-detail-panel"
import Image from "next/image"
import { allProducts, type Product } from "@/data/products"

export default function GalleryPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const galleryProducts = allProducts

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
