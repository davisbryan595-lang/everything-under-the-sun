"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/hero-1.jpg",
    title: "Fresh Styles",
    subtitle: "Great prices on quality dresses for everyday wear",
  },
  {
    id: 2,
    image: "/hero-2.jpg",
    title: "Everyday Fashion",
    subtitle: "Affordable pieces that work for any occasion",
  },
  {
    id: 3,
    image: "/hero-3.jpg",
    title: "Look Good, Feel Great",
    subtitle: "Everything you need, under the sun",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl mb-4 fade-in">{slide.title}</h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl fade-in">{slide.subtitle}</p>
            <Link
              href="/shop"
              className="bg-gold text-black px-8 py-3 font-semibold hover:bg-gold-dark transition-colors slide-up"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white p-2 transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-gold w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}
