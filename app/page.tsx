import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { HeroCarousel } from "@/components/hero-carousel"
import { AnimatedCounters } from "@/components/animated-counters"
import { ProductCard } from "@/components/product-card"
import { Shirt, Footprints, ShoppingBag, Sparkles } from "lucide-react"

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
  { name: "Clothing", href: "/shop?category=dresses", icon: Shirt },
  { name: "Footwear", href: "/shop?category=shoes", icon: Footprints },
  { name: "Bags & Purses", href: "/shop?category=purses", icon: ShoppingBag },
  { name: "Accessories & More", href: "/shop?category=accessories", icon: Sparkles },
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
      <section className="py-16 md:py-20 bg-light-yellow">
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
              className="inline-block bg-black text-white px-8 py-3 font-semibold hover:text-white transition-colors border-2 border-gold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">Shop by Category</h2>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Link
                  key={category.name}
                  href={category.href}
                  className="group relative overflow-hidden h-64 flex flex-col items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors border-2 border-gold"
                >
                  <div className="absolute inset-0 bg-gold/10 group-hover:bg-gold/20 transition-colors" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <IconComponent className="w-16 h-16 text-gold group-hover:text-gold-dark transition-colors" />
                    <h3 className="font-serif text-3xl text-black group-hover:text-gold transition-colors text-center">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Categorical Products Section */}
      <section className="py-16 md:py-20 bg-light-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">Featured by Category</h2>
            <p className="text-gray-600 mb-4">Explore our curated collection of timeless pieces</p>
            <div className="w-24 h-1 bg-gold mx-auto"></div>
          </div>

          {/* Clothing Category */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Clothing</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div key="clothing-0"><ProductCard {...newArrivals[0]} /></div>
              <div key="clothing-1"><ProductCard {...newArrivals[1]} /></div>
              <div key="clothing-5"><ProductCard {...newArrivals[5]} /></div>
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=dresses"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm"
              >
                View All Clothing
              </Link>
            </div>
          </div>

          {/* Bags & Accessories Category */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Bags & Accessories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div key="bags-2"><ProductCard {...newArrivals[2]} /></div>
              <div key="bags-6"><ProductCard {...newArrivals[6]} /></div>
              <div key="bags-7"><ProductCard {...newArrivals[7]} /></div>
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=purses"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm"
              >
                View All Bags & Accessories
              </Link>
            </div>
          </div>

          {/* Footwear Category */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Footwear</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div key="footwear-3"><ProductCard {...newArrivals[3]} /></div>
              <div key="footwear-4"><ProductCard {...newArrivals[4]} /></div>
              <div key="footwear-0"><ProductCard {...newArrivals[0]} /></div>
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=shoes"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm"
              >
                View All Footwear
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
