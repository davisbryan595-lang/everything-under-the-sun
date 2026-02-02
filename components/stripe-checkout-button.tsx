"use client"

import { useState } from "react"
import { getStripe } from "@/lib/stripe-client"

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

      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || "Failed to initiate checkout")
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
      className="w-full bg-gold text-white py-3 font-semibold hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
    >
      {isLoading ? "Processing..." : "Complete Purchase with Stripe"}
    </button>
  )
}
