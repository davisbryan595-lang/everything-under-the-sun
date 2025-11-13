"use client"

import { useStore } from "@/lib/store"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Heart, ShoppingCart, Trash2 } from "lucide-react"
import { useState } from "react"

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useStore()
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity,
    })
    alert("Added to cart!")
  }

  if (wishlist.length === 0) {
    return (
      <>
        <Navbar />
        <div className="bg-light-yellow min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Heart className="w-16 h-16 text-gold mx-auto mb-4 opacity-50" />
            <h1 className="font-serif text-4xl text-black mb-4">Your Wishlist</h1>
            <p className="text-gray-600 mb-8">Your wishlist is empty</p>
            <Link
              href="/shop"
              className="inline-block bg-gold text-white px-8 py-3 font-semibold hover:text-white transition-colors btn-lift"
            >
              Start Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-black mb-12">My Wishlist</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white border-2 border-gold overflow-hidden hover:border-gold transition-all"
              >
                <div className="relative w-full h-80 bg-gray-100">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>

                <div className="p-4">
                  <h3 className="font-serif text-lg text-black mb-2 line-clamp-2">{item.name}</h3>
                  <p className="text-lg font-semibold text-gold mb-4">${item.price}</p>

                  <div className="space-y-3">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-gold text-white py-2 font-semibold hover:text-white transition-colors flex items-center justify-center gap-2 btn-lift"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="w-full border border-red-300 text-red-600 py-2 font-semibold hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
