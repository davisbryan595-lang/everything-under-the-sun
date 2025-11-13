export const STRIPE_PUBLIC_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

if (!STRIPE_PUBLIC_KEY) {
  console.warn("Missing NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY environment variable")
}
