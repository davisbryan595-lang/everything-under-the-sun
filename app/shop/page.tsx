"use client"

import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FilterSidebar, type FilterState } from "@/components/filter-sidebar"

const allProducts = [
  // Clothing - Dresses & Tops
  {
    id: "1",
    name: "Elegant Evening Dress",
    category: "Dresses",
    price: 89,
    image: "/shop/IMG-20251114-WA0003.jpg",
    slug: "elegant-evening-dress",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
  },
  {
    id: "2",
    name: "Casual Linen Dress",
    category: "Dresses",
    price: 65,
    salePrice: 49,
    sale: true,
    image: "/shop/IMG-20251114-WA0004.jpg",
    slug: "casual-linen-dress",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige", "White"],
  },
  {
    id: "3",
    name: "Vintage Floral Blouse",
    category: "Dresses",
    price: 55,
    image: "/shop/IMG-20251114-WA0005.jpg",
    slug: "vintage-floral-blouse",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Multi", "Pink"],
  },
  {
    id: "4",
    name: "Premium Wool Coat",
    category: "Outerwear",
    price: 145,
    image: "/shop/IMG-20251114-WA0006.jpg",
    slug: "premium-wool-coat",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Gray"],
  },
  {
    id: "5",
    name: "Tailored Blazer",
    category: "Dresses",
    price: 98,
    image: "/shop/IMG-20251114-WA0007.jpg",
    slug: "tailored-blazer",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "White"],
  },
  {
    id: "6",
    name: "Silk Slip Dress",
    category: "Dresses",
    price: 79,
    image: "/shop/IMG-20251114-WA0008.jpg",
    slug: "silk-slip-dress",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Champagne", "Burgundy"],
  },
  {
    id: "7",
    name: "Structured Pencil Skirt",
    category: "Dresses",
    price: 68,
    image: "/shop/IMG-20251114-WA0009.jpg",
    slug: "structured-pencil-skirt",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Charcoal"],
  },
  {
    id: "8",
    name: "Bohemian Wrap Top",
    category: "Dresses",
    price: 72,
    salePrice: 54,
    sale: true,
    image: "/shop/IMG-20251114-WA0010.jpg",
    slug: "bohemian-wrap-top",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Multi", "Earth Tones"],
  },
  {
    id: "9",
    name: "Statement Sleeve Blouse",
    category: "Dresses",
    price: 76,
    image: "/shop/IMG-20251114-WA0011.jpg",
    slug: "statement-sleeve-blouse",
    sizes: ["XS", "S", "M", "L"],
    colors: ["White", "Black", "Blush"],
  },
  // Bags & Purses
  {
    id: "10",
    name: "Luxury Handbag",
    category: "Purses",
    price: 165,
    image: "/shop/IMG-20251114-WA0012.jpg",
    slug: "luxury-handbag",
    sizes: ["M"],
    colors: ["Black", "Cognac", "Burgundy"],
  },
  {
    id: "11",
    name: "Woven Crossbody Bag",
    category: "Purses",
    price: 58,
    image: "/shop/IMG-20251114-WA0013.jpg",
    slug: "woven-crossbody-bag",
    sizes: ["S", "M"],
    colors: ["Natural", "Tan", "Black"],
  },
  {
    id: "12",
    name: "Suede Shoulder Tote",
    category: "Purses",
    price: 92,
    image: "/shop/IMG-20251114-WA0014.jpg",
    slug: "suede-shoulder-tote",
    sizes: ["M", "L"],
    colors: ["Black", "Camel", "Taupe"],
  },
  // Footwear
  {
    id: "13",
    name: "Metallic Accent Heels",
    category: "Shoes",
    price: 85,
    image: "/shop/IMG-20251114-WA0015.jpg",
    slug: "metallic-accent-heels",
    sizes: ["S", "M", "L"],
    colors: ["Gold", "Silver", "Rose Gold"],
  },
  {
    id: "14",
    name: "Classic Leather Loafers",
    category: "Shoes",
    price: 95,
    image: "/shop/IMG-20251114-WA0016.jpg",
    slug: "classic-leather-loafers",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Tan", "Burgundy"],
  },
  // More Clothing
  {
    id: "15",
    name: "Embroidered Evening Top",
    category: "Dresses",
    price: 81,
    image: "/shop/IMG-20251114-WA0017.jpg",
    slug: "embroidered-evening-top",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Black", "Navy", "Emerald"],
  },
  {
    id: "16",
    name: "Designer Midi Dress",
    category: "Dresses",
    price: 124,
    image: "/shop/IMG-20251114-WA0018.jpg",
    slug: "designer-midi-dress",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream", "Navy"],
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

      <div className="bg-light-yellow">
        {/* Page Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="font-serif text-5xl text-black mb-4">Shop Everything</h1>
          <p className="text-gray-600">Clothing, purses, accessories, shoes, and more - all at affordable prices</p>
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
