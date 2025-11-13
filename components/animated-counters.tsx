"use client"

import { useEffect, useState } from "react"

interface Counter {
  label: string
  value: string
}

const counters: Counter[] = [
  { label: "Products", value: "500+" },
  { label: "Free Shipping", value: "Over $50" },
  { label: "Happy", value: "Customers" },
]

export function AnimatedCounters() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
      }
    })

    const element = document.getElementById("counters")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="counters" className="bg-black text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {counters.map((counter, index) => (
            <div key={index} className="text-center slide-up">
              <div className="text-5xl md:text-6xl font-serif text-gold mb-2">{counter.value}</div>
              <div className="text-lg text-gray-400">{counter.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
