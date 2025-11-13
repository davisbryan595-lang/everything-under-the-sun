import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  size?: string
  color?: string
}

export interface WishlistItem {
  id: string
  name: string
  price: number
  image: string
}

interface Store {
  cart: CartItem[]
  wishlist: WishlistItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateCartQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  addToWishlist: (item: WishlistItem) => void
  removeFromWishlist: (id: string) => void
  toggleWishlist: (item: WishlistItem) => boolean
  isInWishlist: (id: string) => boolean
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find(
            (cartItem) => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color,
          )
          if (existing) {
            return {
              cart: state.cart.map((cartItem) =>
                cartItem === existing ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem,
              ),
            }
          }
          return { cart: [...state.cart, item] }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      updateCartQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart
            .map((item) => (item.id === id ? { ...item, quantity } : item))
            .filter((item) => item.quantity > 0),
        })),
      clearCart: () => set({ cart: [] }),
      addToWishlist: (item) =>
        set((state) => ({
          wishlist: [...state.wishlist, item],
        })),
      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== id),
        })),
      toggleWishlist: (item) => {
        const { isInWishlist, addToWishlist, removeFromWishlist } = get()
        if (isInWishlist(item.id)) {
          removeFromWishlist(item.id)
          return false
        } else {
          addToWishlist(item)
          return true
        }
      },
      isInWishlist: (id) => get().wishlist.some((item) => item.id === id),
    }),
    {
      name: "boutique-store",
    },
  ),
)
