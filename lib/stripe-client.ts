import { loadStripe } from "@stripe/stripe-js"

export const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

export const getStripe = () => {
  if (!STRIPE_PUBLIC_KEY) {
    console.warn("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable")
    return null
  }
  return loadStripe(STRIPE_PUBLIC_KEY)
}
