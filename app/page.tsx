import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { HeroCarousel } from "@/components/hero-carousel"
import { AnimatedCounters } from "@/components/animated-counters"
import { ProductCard } from "@/components/product-card"

const newArrivals = [
  {
    id: "1",
    name: "Classic Black Dress",
    price: 49,
    image: "/products/p1.jpg",
    slug: "black-casual-dress",
  },
  {
    id: "2",
    name: "White Linen Top",
    price: 39,
    image: "/products/p2.jpg",
    slug: "white-cotton-dress",
    sale: true,
    salePrice: 29,
  },
  {
    id: "3",
    name: "Black Leather Tote",
    price: 59,
    image: "https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg",
    slug: "everyday-handbag",
  },
  {
    id: "4",
    name: "White Canvas Sneakers",
    price: 45,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
    slug: "comfortable-sneakers",
  },
  {
    id: "5",
    name: "Denim Jacket",
    price: 65,
    image: "/products/p1.jpg",
    slug: "blue-denim-dress",
  },
  {
    id: "6",
    name: "Beige Summer Cardigan",
    price: 38,
    image: "/products/p2.jpg",
    slug: "summer-dress",
  },
  {
    id: "7",
    name: "Crossbody Shoulder Bag",
    price: 55,
    image: "/products/p3.jpg",
    slug: "classic-handbag",
  },
  {
    id: "8",
    name: "Ceramic Coffee Mug",
    price: 18,
    image: "https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg",
    slug: "coffee-tumbler",
    sale: true,
    salePrice: 12,
  },
]

const categories = [
  { name: "Clothing", href: "/shop?category=dresses" },
  { name: "Footwear", href: "/shop?category=shoes" },
  { name: "Bags & Purses", href: "/shop?category=purses" },
  { name: "Accessories & More", href: "/shop?category=accessories" },
]

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Animated Counters */}
      <AnimatedCounters />

      {/* New Arrivals Section */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">Just In</h2>
            <p className="text-gray-600 mb-4">Fresh arrivals in clothing, accessories, purses, and lifestyle products</p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/shop"
              className="inline-block bg-black text-gold px-8 py-3 font-semibold hover:bg-gold hover:text-black transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden h-64 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors" />
                <h3 className="font-serif text-3xl text-black group-hover:text-gold transition-colors relative z-10">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">Follow Our Instagram</h2>
            <p className="text-gray-600">@everythingunderthesun</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform"
              >
                <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/10 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gold/50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.011 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.011 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.011-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.011-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162 3.403 0 6.161 2.759 6.161 6.162 0 3.403-2.758 6.162-6.161 6.162-3.403 0-6.162-2.759-6.162-6.162zm2.889 0c0 1.861 1.512 3.372 3.372 3.372 1.86 0 3.373-1.511 3.373-3.372 0-1.86-1.512-3.373-3.373-3.373-1.86 0-3.372 1.513-3.372 3.373zm11.414-5.209c0 .795.645 1.44 1.44 1.44.795 0 1.44-.645 1.44-1.44 0-.794-.645-1.439-1.44-1.439-.795 0-1.44.645-1.44 1.439z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
