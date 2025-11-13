"use client"

import Link from "next/link"
import Image from "next/image"
import { useStore } from "@/lib/store"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const { cart } = useStore()
  const [menuOpen, setMenuOpen] = useState(false)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/shop?new=true", label: "New Arrivals" },
    { href: "/shop?sale=true", label: "Sale" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="w-12 h-12 relative">
              <Image
                src="/images/hitube-cds7hc5owt-2025-11-13-23-16-59.jpg"
                alt="Everything Under the Sun Boutique"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Cart Icon */}
          <Link href="/cart" className="relative p-2 text-black hover:text-gold transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 w-5 h-5 bg-gold text-black text-xs font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-black hover:text-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
