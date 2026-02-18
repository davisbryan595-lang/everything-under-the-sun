"use client"

import { useState, useMemo, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { FilterSidebar, type FilterState } from "@/components/filter-sidebar"
import { allProducts } from "@/data/products"

function ShopContent() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category")
  const isSale = searchParams.get("sale") === "true"

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory ? [initialCategory] : [],
    sizes: [],
    colors: [],
    priceRange: [0, 1000],
    sort: "newest",
  })

  // Update filters when search params change
  useEffect(() => {
    const category = searchParams.get("category")
    if (category) {
      setFilters(prev => ({ ...prev, category: [category] }))
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    // Apply category filter
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category))
    }

    // Apply sale filter if from URL
    if (isSale) {
      result = result.filter((p) => p.salePrice || p.sale)
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter((p) => filters.sizes.some((size) => p.sizes.includes(size)))
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      result = result.filter((p) => filters.colors.some((color) => p.colors.some(c => c.name === color)))
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
  }, [filters, isSale])

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

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-light-yellow flex items-center justify-center font-serif text-2xl">Loading Shop...</div>}>
      <ShopContent />
    </Suspense>
  )
}
