"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FilterSidebar, type FilterState } from "@/components/filter-sidebar"

const allProducts = [
  // Dresses
  {
    id: "1",
    name: "Black Casual Dress",
    category: "Dresses",
    price: 49,
    salePrice: 39,
    sale: true,
    image: "/products/p1.jpg",
    slug: "black-casual-dress",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: "2",
    name: "White Cotton Dress",
    category: "Dresses",
    price: 39,
    image: "/products/p2.jpg",
    slug: "white-cotton-dress",
    sizes: ["S", "M", "L"],
    colors: ["White"],
  },
  {
    id: "3",
    name: "Printed Summer Dress",
    category: "Dresses",
    price: 45,
    image: "/products/p3.jpg",
    slug: "printed-summer-dress",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Multi"],
  },
  {
    id: "4",
    name: "Denim Shift Dress",
    category: "Dresses",
    price: 55,
    salePrice: 42,
    sale: true,
    image: "/products/p4.jpg",
    slug: "denim-shift-dress",
    sizes: ["XS", "M", "L", "XL"],
    colors: ["Blue"],
  },
  {
    id: "5",
    name: "Pink Everyday Dress",
    category: "Dresses",
    price: 42,
    image: "/products/p1.jpg",
    slug: "pink-everyday-dress",
    sizes: ["S", "M", "L", "XL", "2X"],
    colors: ["Pink"],
  },
  // Shoes
  {
    id: "6",
    name: "Black Casual Flats",
    category: "Shoes",
    price: 35,
    image: "/products/p2.jpg",
    slug: "black-casual-flats",
    sizes: ["S", "M", "L"],
    colors: ["Black"],
  },
  {
    id: "7",
    name: "Comfy Walking Sandals",
    category: "Shoes",
    price: 32,
    salePrice: 22,
    sale: true,
    image: "/products/p3.jpg",
    slug: "comfy-walking-sandals",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Tan"],
  },
  {
    id: "8",
    name: "White Sneakers",
    category: "Shoes",
    price: 45,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
    slug: "white-sneakers",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White"],
  },
  // Purses
  {
    id: "9",
    name: "Black Leather Handbag",
    category: "Purses",
    price: 65,
    image: "https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg",
    slug: "black-leather-handbag",
    sizes: ["M"],
    colors: ["Black"],
  },
  {
    id: "10",
    name: "Canvas Crossbody Bag",
    category: "Purses",
    price: 42,
    salePrice: 32,
    sale: true,
    image: "/products/p2.jpg",
    slug: "canvas-crossbody-bag",
    sizes: ["S"],
    colors: ["Tan"],
  },
  {
    id: "11",
    name: "Neutral Tote Bag",
    category: "Purses",
    price: 48,
    image: "/products/p3.jpg",
    slug: "neutral-tote-bag",
    sizes: ["M"],
    colors: ["Beige"],
  },
  // Accessories
  {
    id: "12",
    name: "Coffee Tumbler",
    category: "Accessories",
    price: 18,
    salePrice: 12,
    sale: true,
    image: "https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg",
    slug: "coffee-tumbler",
    sizes: ["M"],
    colors: ["White"],
  },
  {
    id: "13",
    name: "Basic Pendant Necklace",
    category: "Accessories",
    price: 18,
    salePrice: 12,
    sale: true,
    image: "/products/p1.jpg",
    slug: "basic-pendant-necklace",
    sizes: ["M"],
    colors: ["Silver"],
  },
  {
    id: "14",
    name: "Casual Canvas Belt",
    category: "Accessories",
    price: 22,
    image: "/products/p2.jpg",
    slug: "casual-canvas-belt",
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: "15",
    name: "Cotton Print Scarf",
    category: "Accessories",
    price: 16,
    image: "/products/p3.jpg",
    slug: "cotton-print-scarf",
    sizes: ["M"],
    colors: ["Multi", "Blue"],
  },
  {
    id: "16",
    name: "Everyday Ring Set",
    category: "Accessories",
    price: 19,
    image: "/products/p4.jpg",
    slug: "everyday-ring-set",
    sizes: ["S", "M", "L"],
    colors: ["Silver"],
  },
]

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    sizes: [],
    colors: [],
    priceRange: [0, 1000],
    sort: "newest",
  })

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // Apply category filter
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category))
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) => filters.sizes.some((size) => p.sizes.includes(size)))
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      result = result.filter((p) => filters.colors.some((color) => p.colors.includes(color)))
    }

    // Apply price filter
    result = result.filter(
      (p) => (p.salePrice || p.price) >= filters.priceRange[0] && (p.salePrice || p.price) <= filters.priceRange[1],
    )

    // Apply sorting
    switch (filters.sort) {
      case "price-low":
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
        break
      case "price-high":
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
        break
      case "popular":
        result.reverse()
        break
      case "newest":
      default:
        break
    }

    return result
  }, [filters])

  return (
    <>
      <Navbar />

      <div className="bg-cream">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-5xl text-black mb-4">Shop</h1>
          <p className="text-gray-600">Affordable fashion for everyday style</p>
        </div>

        {/* Shop Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <FilterSidebar onFiltersChange={setFilters} />
            </div>

            {/* Products */}
            <div className="lg:col-span-3">
              <div className="mb-6 text-sm text-gray-600">Showing {filteredProducts.length} products</div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg mb-4">No products found with current filters</p>
                  <button
                    onClick={() =>
                      setFilters({
                        category: [],
                        sizes: [],
                        colors: [],
                        priceRange: [0, 1000],
                        sort: "newest",
                      })
                    }
                    className="text-gold hover:text-gold-dark font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
