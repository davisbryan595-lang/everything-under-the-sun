"use client"

import { useState } from "react"

interface StripeCheckoutButtonProps {
  total: number
  items: any[]
  shipping: number
}

export function StripeCheckoutButton({ total, items, shipping }: StripeCheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = async () => {
    setIsLoading(true)

    try {
      const response = await fetch("/api/checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, total, shipping }),
      })

      const data = await response.json()

      if (data.sessionId) {
        // In a real app, you'd redirect to Stripe checkout here
        // window.location.href = `${STRIPE_CHECKOUT_URL}?sessionId=${data.sessionId}`
        alert("In production, this would redirect to Stripe Checkout. Session: " + data.sessionId)
      }
    } catch (error) {
      console.error("Checkout error:", error)
      alert("Failed to initiate checkout. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={isLoading}
      className="w-full bg-gold text-black py-3 font-semibold hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? "Processing..." : "Complete Purchase with Stripe"}
    </button>
  )
}
