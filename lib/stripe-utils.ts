import { loadStripe } from "@stripe/stripe-js"
import Stripe from "stripe"

export const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

if (!STRIPE_PUBLIC_KEY) {
  console.warn("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable")
}

// Stripe client for server-side
export const stripe = new Stripe(STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27-acacia" as any, // Using a recent stable version
})

// Stripe loader for client-side
export const getStripe = () => {
  if (!STRIPE_PUBLIC_KEY) return null
  return loadStripe(STRIPE_PUBLIC_KEY)
}
