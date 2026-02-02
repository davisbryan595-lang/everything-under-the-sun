import Stripe from "stripe"

export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY

export const stripe = new Stripe(STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20" as any,
})
