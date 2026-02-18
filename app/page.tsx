import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"
import { AnimatedCounters } from "@/components/animated-counters"
import { ProductCard } from "@/components/product-card"
import { Shirt, Footprints, ShoppingBag, Sparkles } from "lucide-react"
import { allProducts } from "@/data/products"

const newArrivals = allProducts.slice(0, 8)

const categories = [
  { name: "Accessories", href: "/shop?category=Accessories", icon: Sparkles },
  { name: "Beauty", href: "/shop?category=Beauty", icon: Shirt },
  { name: "Jewelry", href: "/shop?category=Jewelry", icon: Sparkles },
  { name: "Purses", href: "/shop?category=Purses", icon: ShoppingBag },
]

export default function Home() {
  return (
    <>
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
              className="inline-block bg-black text-white px-8 py-3 font-semibold hover:text-white transition-colors border-2 border-gold btn-lift"
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

          {/* Accessories Category */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Accessories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {allProducts.filter(p => p.category === "Accessories").slice(0, 3).map(p => (
                <div key={p.id}><ProductCard {...p} /></div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=Accessories"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm btn-lift"
              >
                View All Accessories
              </Link>
            </div>
          </div>

          {/* Jewelry Category */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Jewelry</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {allProducts.filter(p => p.category === "Jewelry").slice(0, 3).map(p => (
                <div key={p.id}><ProductCard {...p} /></div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=Jewelry"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm btn-lift"
              >
                View All Jewelry
              </Link>
            </div>
          </div>

          {/* Purses Category */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Purses</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {allProducts.filter(p => p.category === "Purses").slice(0, 3).map(p => (
                <div key={p.id}><ProductCard {...p} /></div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=Purses"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm btn-lift"
              >
                View All Purses
              </Link>
            </div>
          </div>

          {/* Home Decor Category */}
          <div>
            <h3 className="font-serif text-2xl md:text-3xl text-black mb-6">Home Decor</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {allProducts.filter(p => p.category === "Home").slice(0, 3).map(p => (
                <div key={p.id}><ProductCard {...p} /></div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/shop?category=Home"
                className="inline-block bg-black text-white px-6 py-2 font-semibold hover:text-white transition-colors border-2 border-gold text-sm btn-lift"
              >
                View All Home Decor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
