'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Heart, ShoppingCart } from 'lucide-react'
import { useStore } from '@/lib/store'

interface Product {
  id: string
  name: string
  price: number
  salePrice?: number
  image: string
  description: string
  category: string
}

interface ProductDetailPanelProps {
  product: Product | null
  onClose: () => void
}

export function ProductDetailPanel({ product, onClose }: ProductDetailPanelProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useStore()
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const isWishlisted = isInWishlist(product.id)
  const finalPrice = product.salePrice || product.price
  const isSale = !!product.salePrice

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
      quantity,
    })
    alert('Added to cart!')
  }

  const handleWishlist = () => {
    toggleWishlist({
      id: product.id,
      name: product.name,
      price: finalPrice,
      image: product.image,
    })
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className="fixed inset-0 md:inset-auto md:right-0 md:top-0 md:h-full md:w-full md:max-w-md bg-white shadow-2xl z-50 overflow-y-auto transition-transform rounded-t-2xl md:rounded-none">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gold/10 p-4 md:p-6 flex items-center justify-between rounded-t-2xl md:rounded-none">
          <h2 className="font-serif text-xl md:text-2xl text-black">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 space-y-6">
          {/* Image */}
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-xs md:text-sm text-gold font-semibold mb-2">{product.category}</p>
            <h1 className="font-serif text-2xl md:text-3xl text-black mb-3">{product.name}</h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="text-xl md:text-2xl font-bold text-black">
                ${finalPrice.toFixed(2)}
              </span>
              {isSale && (
                <span className="text-base md:text-lg text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>

            {/* Sale Badge */}
            {isSale && (
              <div className="bg-gold/10 border border-gold/30 text-gold text-sm font-semibold px-3 py-1 inline-block rounded mb-4">
                Sale
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold text-black mb-2">About this item</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-semibold text-black mb-3">
              Quantity
            </label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 border border-gold/20 hover:border-gold text-black flex items-center justify-center rounded transition-colors"
              >
                −
              </button>
              <span className="w-12 text-center font-semibold text-black">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 border border-gold/20 hover:border-gold text-black flex items-center justify-center rounded transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleAddToCart}
              className="w-full bg-black text-white py-3 md:py-4 font-semibold text-sm md:text-base hover:text-white transition-colors flex items-center justify-center gap-2 rounded btn-lift"
            >
              <ShoppingCart className="w-4 md:w-5 h-4 md:h-5" />
              Add to Cart
            </button>

            <button
              onClick={handleWishlist}
              className={`w-full py-2 md:py-3 font-semibold rounded border transition-colors flex items-center justify-center gap-2 text-sm md:text-base ${
                isWishlisted
                  ? 'bg-gold/10 border-gold text-gold'
                  : 'border-gold/20 text-black hover:border-gold'
              }`}
            >
              <Heart className={`w-4 md:w-5 h-4 md:h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
            </button>
          </div>

          {/* Additional Info */}
          <div className="pt-4 border-t border-gold/10 space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free on orders over $100</span>
            </div>
            <div className="flex justify-between">
              <span>Returns</span>
              <span>30-day return policy</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
