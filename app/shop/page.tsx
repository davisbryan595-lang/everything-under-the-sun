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
    name: "Classic Black Evening Gown",
    category: "Dresses",
    price: 299,
    salePrice: 249,
    sale: true,
    image: "/product-1.jpg",
    slug: "classic-black-evening-gown",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: "2",
    name: "White Silk Dress",
    category: "Dresses",
    price: 249,
    image: "/product-2.jpg",
    slug: "white-silk-dress",
    sizes: ["S", "M", "L"],
    colors: ["White"],
  },
  {
    id: "3",
    name: "Gold Sequin Dress",
    category: "Dresses",
    price: 350,
    image: "/product-3.jpg",
    slug: "gold-sequin-dress",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gold"],
  },
  {
    id: "4",
    name: "Red Velvet Gown",
    category: "Dresses",
    price: 399,
    salePrice: 299,
    sale: true,
    image: "/product-4.jpg",
    slug: "red-velvet-gown",
    sizes: ["XS", "M", "L", "XL"],
    colors: ["Red"],
  },
  {
    id: "5",
    name: "Blush Pink Dress",
    category: "Dresses",
    price: 229,
    image: "/product-5.jpg",
    slug: "blush-pink-dress",
    sizes: ["S", "M", "L", "XL", "2X"],
    colors: ["Blush"],
  },
  // Shoes
  {
    id: "6",
    name: "Black Luxury Heels",
    category: "Shoes",
    price: 199,
    image: "/product-6.jpg",
    slug: "black-luxury-heels",
    sizes: ["S", "M", "L"],
    colors: ["Black"],
  },
  {
    id: "7",
    name: "Gold Strappy Heels",
    category: "Shoes",
    price: 189,
    salePrice: 129,
    sale: true,
    image: "/product-7.jpg",
    slug: "gold-strappy-heels",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gold"],
  },
  {
    id: "8",
    name: "Nude Pumps",
    category: "Shoes",
    price: 169,
    image: "/product-8.jpg",
    slug: "nude-pumps",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Nude"],
  },
  // Purses
  {
    id: "9",
    name: "Black Designer Handbag",
    category: "Purses",
    price: 399,
    image: "/product-9.jpg",
    slug: "black-designer-handbag",
    sizes: ["M"],
    colors: ["Black"],
  },
  {
    id: "10",
    name: "Gold Clutch",
    category: "Purses",
    price: 279,
    salePrice: 199,
    sale: true,
    image: "/product-10.jpg",
    slug: "gold-clutch",
    sizes: ["S"],
    colors: ["Gold"],
  },
  {
    id: "11",
    name: "Nude Crossbody Bag",
    category: "Purses",
    price: 329,
    image: "/product-11.jpg",
    slug: "nude-crossbody-bag",
    sizes: ["M"],
    colors: ["Nude"],
  },
  // Accessories
  {
    id: "12",
    name: "Gold Statement Earrings",
    category: "Accessories",
    price: 89,
    image: "/product-12.jpg",
    slug: "gold-statement-earrings",
    sizes: ["M"],
    colors: ["Gold"],
  },
  {
    id: "13",
    name: "Pearl Necklace",
    category: "Accessories",
    price: 149,
    salePrice: 99,
    sale: true,
    image: "/product-13.jpg",
    slug: "pearl-necklace",
    sizes: ["M"],
    colors: ["White"],
  },
  {
    id: "14",
    name: "Black Leather Belt",
    category: "Accessories",
    price: 79,
    image: "/product-14.jpg",
    slug: "black-leather-belt",
    sizes: ["M", "L", "XL"],
    colors: ["Black"],
  },
  {
    id: "15",
    name: "Silk Scarf",
    category: "Accessories",
    price: 59,
    image: "/product-15.jpg",
    slug: "silk-scarf",
    sizes: ["M"],
    colors: ["Gold", "Blush"],
  },
  {
    id: "16",
    name: "Gold Ring Set",
    category: "Accessories",
    price: 119,
    image: "/product-16.jpg",
    slug: "gold-ring-set",
    sizes: ["S", "M", "L"],
    colors: ["Gold"],
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
          <p className="text-gray-600">Discover our curated collection of luxury fashion</p>
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
