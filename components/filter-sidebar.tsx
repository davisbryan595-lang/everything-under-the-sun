"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FilterSidebarProps {
  onFiltersChange: (filters: FilterState) => void
}

export interface FilterState {
  category: string[]
  sizes: string[]
  colors: string[]
  priceRange: [number, number]
  sort: string
}

const sizes = ["XS", "S", "M", "L", "XL", "2X", "3X"]
const colors = ["Black", "White", "Gold", "Red", "Blue", "Nude", "Blush"]
const categories = ["Dresses", "Shoes", "Purses", "Accessories"]

export function FilterSidebar({ onFiltersChange }: FilterSidebarProps) {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    sizes: [],
    colors: [],
    priceRange: [0, 1000],
    sort: "newest",
  })

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    sizes: true,
    colors: false,
    price: false,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFiltersChange(newFilters)
  }

  return (
    <div className="space-y-8 pr-8">
      {/* Sort */}
      <div>
        <label className="block text-sm font-semibold text-black mb-3">Sort</label>
        <select
          value={filters.sort}
          onChange={(e) => updateFilter("sort", e.target.value)}
          className="w-full px-3 py-2 border border-gold/20 bg-white text-black text-sm focus:border-gold outline-none"
        >
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="popular">Most Popular</option>
        </select>
      </div>

      {/* Category Filter */}
      <div>
        <button onClick={() => toggleSection("category")} className="flex items-center justify-between w-full mb-3">
          <h3 className="text-sm font-semibold text-black">Category</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.category ? "" : "-rotate-90"}`} />
        </button>
        {expandedSections.category && (
          <div className="space-y-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.category.includes(cat)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFilter("category", [...filters.category, cat])
                    } else {
                      updateFilter(
                        "category",
                        filters.category.filter((c) => c !== cat),
                      )
                    }
                  }}
                  className="w-4 h-4 accent-gold"
                />
                <span className="text-sm text-gray-700">{cat}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Size Filter */}
      <div>
        <button onClick={() => toggleSection("sizes")} className="flex items-center justify-between w-full mb-3">
          <h3 className="text-sm font-semibold text-black">Size</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.sizes ? "" : "-rotate-90"}`} />
        </button>
        {expandedSections.sizes && (
          <div className="grid grid-cols-3 gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => {
                  if (filters.sizes.includes(size)) {
                    updateFilter(
                      "sizes",
                      filters.sizes.filter((s) => s !== size),
                    )
                  } else {
                    updateFilter("sizes", [...filters.sizes, size])
                  }
                }}
                className={`py-2 text-xs font-semibold border transition-colors ${
                  filters.sizes.includes(size)
                    ? "bg-gold text-black border-gold"
                    : "bg-white text-black border-gold/20 hover:border-gold/50"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Color Filter */}
      <div>
        <button onClick={() => toggleSection("colors")} className="flex items-center justify-between w-full mb-3">
          <h3 className="text-sm font-semibold text-black">Color</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.colors ? "" : "-rotate-90"}`} />
        </button>
        {expandedSections.colors && (
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      updateFilter("colors", [...filters.colors, color])
                    } else {
                      updateFilter(
                        "colors",
                        filters.colors.filter((c) => c !== color),
                      )
                    }
                  }}
                  className="w-4 h-4 accent-gold"
                />
                <span className="text-sm text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button onClick={() => toggleSection("price")} className="flex items-center justify-between w-full mb-3">
          <h3 className="text-sm font-semibold text-black">Price</h3>
          <ChevronDown className={`w-4 h-4 transition-transform ${expandedSections.price ? "" : "-rotate-90"}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-3">
            <input
              type="range"
              min="0"
              max="1000"
              value={filters.priceRange[1]}
              onChange={(e) => updateFilter("priceRange", [filters.priceRange[0], Number(e.target.value)])}
              className="w-full accent-gold"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${filters.priceRange[0]}</span>
              <span>${filters.priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Clear Filters */}
      {(filters.category.length > 0 || filters.sizes.length > 0 || filters.colors.length > 0) && (
        <button
          onClick={() => {
            const newFilters: FilterState = {
              category: [],
              sizes: [],
              colors: [],
              priceRange: [0, 1000],
              sort: "newest",
            }
            setFilters(newFilters)
            onFiltersChange(newFilters)
          }}
          className="w-full py-2 text-sm font-semibold text-gold border border-gold hover:bg-gold hover:text-black transition-colors"
        >
          Clear Filters
        </button>
      )}
    </div>
  )
}
