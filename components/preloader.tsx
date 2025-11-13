"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="sunburst-spin">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Sun rays */}
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="40"
                y1="5"
                x2="40"
                y2="15"
                stroke="currentColor"
                strokeWidth="2"
                className="text-yellow-400"
                style={{
                  transform: `rotate(${(i * 360) / 12}deg)`,
                  transformOrigin: "40px 40px",
                }}
              />
            ))}
            {/* Sun circle */}
            <circle cx="40" cy="40" r="25" fill="currentColor" className="text-yellow-400" />
          </svg>
        </div>
        <p className="text-yellow-400 text-lg font-serif tracking-wider">Loading the sunshine...</p>
      </div>
    </div>
  )
}
