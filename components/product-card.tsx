"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart } from "lucide-react"
import { useStore } from "@/lib/store"
import { useState } from "react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  sale?: boolean
  salePrice?: number
  slug: string
}

export function ProductCard({ id, name, price, image, sale, salePrice, slug }: ProductCardProps) {
  const { toggleWishlist, isInWishlist } = useStore()
  const [quantity, setQuantity] = useState(1)
  const inWishlist = isInWishlist(id)

  const handleAddToCart = () => {
    useStore.setState((state) => ({
      cart: [
        ...state.cart,
        {
          id,
          name,
          price: salePrice || price,
          image,
          quantity,
        },
      ],
    }))
  }

  return (
    <div className="group relative bg-white border border-gold/10 hover:border-gold/30 transition-all duration-300">
      <div className="relative w-full h-96 overflow-hidden bg-gray-100">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {sale && <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 font-semibold text-sm">Sale</div>}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="space-y-3">
            <button
              onClick={handleAddToCart}
              className="w-40 bg-gold text-white py-3 font-semibold hover:text-white transition-colors btn-lift"
            >
              Quick Add
            </button>
            <Link
              href={`/shop/${slug}`}
              className="w-40 bg-black text-white border border-gold py-3 font-semibold hover:text-white transition-colors block text-center btn-lift"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist({ id, name, price: salePrice || price, image })}
          className="absolute top-4 left-4 p-2 bg-white rounded-full hover:bg-gold transition-colors"
        >
          <Heart className={`w-5 h-5 ${inWishlist ? "fill-gold text-gold" : "text-gray-400"}`} />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-serif text-lg text-black mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          {sale ? (
            <>
              <span className="text-lg font-semibold text-gold">${salePrice}</span>
              <span className="text-sm text-gray-400 line-through">${price}</span>
            </>
          ) : (
            <span className="text-lg font-semibold text-black">${price}</span>
          )}
        </div>
      </div>
    </div>
  )
}
