"use client"

import { useStore } from "@/lib/store"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Trash2 } from "lucide-react"
import { useState } from "react"

export default function CartPage() {
  const { cart, removeFromCart, updateCartQuantity } = useStore()
  const [promoCode, setPromoCode] = useState("")

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal >= 100 ? 0 : 10
  const tax = Math.round(subtotal * 0.08 * 100) / 100
  const total = subtotal + shipping + tax

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="bg-light-yellow min-h-screen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl text-black mb-4">Your Cart</h1>
            <p className="text-gray-600 mb-8">Your cart is currently empty</p>
            <Link
              href="/shop"
              className="inline-block bg-gold text-black px-8 py-3 font-semibold hover:bg-gold-dark transition-colors"
            >
              Continue Shopping
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
          <h1 className="font-serif text-4xl text-black mb-12">Your Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-white border-2 border-gold p-4 flex gap-4">
                  <div className="w-24 h-24 flex-shrink-0 bg-gray-100 overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="font-semibold text-black mb-2">{item.name}</h3>
                    {item.size && <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>}
                    {item.color && <p className="text-sm text-gray-600 mb-2">Color: {item.color}</p>}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 border-2 border-gold hover:bg-gold hover:text-black text-black text-xs flex items-center justify-center transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 border-2 border-gold hover:bg-gold hover:text-black text-black text-xs flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="font-semibold text-black">${(item.price * item.quantity).toFixed(2)}</p>
                        <p className="text-sm text-gray-600">${item.price} each</p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-gold p-6 sticky top-24">
                <h2 className="font-serif text-xl text-black mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6 pb-6 border-b-2 border-gold">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span>
                      {shipping === 0 ? (
                        <span className="text-gold font-semibold">Free</span>
                      ) : (
                        `$${shipping.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-lg font-semibold text-black mb-3">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  {subtotal < 100 && <p className="text-xs text-gray-600">Free shipping on orders over $100</p>}
                </div>

                <Link
                  href="/checkout"
                  className="w-full bg-gold text-white py-3 font-semibold hover:text-white transition-colors block text-center mb-3"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className="w-full border-2 border-gold text-white bg-black py-3 font-semibold hover:text-white transition-colors block text-center"
                >
                  Continue Shopping
                </Link>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t-2 border-gold">
                  <label className="block text-sm font-semibold text-black mb-2">Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-grow px-3 py-2 border-2 border-gold bg-white text-black text-sm focus:border-gold outline-none"
                    />
                    <button className="px-4 py-2 bg-black text-white font-semibold hover:text-white transition-colors text-sm">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
