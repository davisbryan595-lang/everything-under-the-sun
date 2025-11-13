"use client"

import type React from "react"

import { useStore } from "@/lib/store"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StripeCheckoutButton } from "@/components/stripe-checkout-button"
import Link from "next/link"
import { useState } from "react"

export default function CheckoutPage() {
  const { cart, clearCart } = useStore()
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  })

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
            <h1 className="font-serif text-4xl text-black mb-4">Checkout</h1>
            <p className="text-gray-600 mb-8">Your cart is empty</p>
            <Link
              href="/shop"
              className="inline-block bg-gold text-white px-8 py-3 font-semibold hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form would be validated and submitted here
  }

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-black mb-12">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Shipping Information */}
                <div className="bg-white border-2 border-gold p-6">
                  <h2 className="font-serif text-2xl text-black mb-6">Shipping Address</h2>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gold/20 bg-white text-black placeholder-gray-500 focus:border-gold outline-none mb-4"
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border border-gold/20 bg-white text-black placeholder-gray-500 focus:border-gold outline-none mb-4"
                  />

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    />
                  </div>
                </div>

                {/* Order Items */}
                <div className="bg-white border-2 border-gold p-6">
                  <h2 className="font-serif text-2xl text-black mb-4">Order Items</h2>
                  <div className="space-y-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center pb-3 border-b border-gold/10">
                        <div>
                          <p className="font-semibold text-black">{item.name}</p>
                          {item.size && (
                            <p className="text-sm text-gray-600">
                              Size: {item.size} × {item.quantity}
                            </p>
                          )}
                        </div>
                        <p className="font-semibold text-black">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="hidden" aria-hidden="true" />
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-gold p-6 sticky top-24 space-y-6">
                <h2 className="font-serif text-2xl text-black">Order Summary</h2>

                <div className="space-y-3 pb-6 border-b border-gold/10">
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

                <div>
                  <div className="flex justify-between text-lg font-semibold text-black mb-4">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>

                  <StripeCheckoutButton items={cart} total={total} shipping={shipping} />

                  <Link
                    href="/cart"
                    className="w-full border-2 border-gold text-white bg-black py-3 font-semibold hover:text-white transition-colors block text-center mt-3"
                  >
                    Return to Cart
                  </Link>
                </div>

                <div className="bg-light-yellow p-4 text-sm text-gray-600">
                  <p className="mb-2 font-semibold text-black">Test Card Details:</p>
                  <p>Card: 4242 4242 4242 4242</p>
                  <p>Any future expiry date</p>
                  <p>Any 3-digit CVC</p>
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
