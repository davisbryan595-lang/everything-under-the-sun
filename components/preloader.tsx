"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Only show preloader once per session
    const hasShownPreloader = sessionStorage.getItem('preloaderShown')
    if (hasShownPreloader) {
      setIsLoading(false)
      setProgress(100)
      return
    }

    const timer = setTimeout(() => {
      setIsLoading(false)
      sessionStorage.setItem('preloaderShown', 'true')
    }, 2000)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30
        return next > 90 ? 90 : next
      })
    }, 300)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [mounted])

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
    }
  }, [isLoading])

  if (!mounted || (!isLoading && progress === 100)) return null

  return (
    <div className="preloader-container">
      <div className="preloader-content">
        {/* Main Logo Animation */}
        <div className="preloader-logo">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer circle */}
            <circle cx="60" cy="60" r="55" stroke="currentColor" strokeWidth="1.5" className="preloader-outer-circle" opacity="0.3" />
            
            {/* Animated rotating circle */}
            <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" className="preloader-rotating-circle" fill="none" strokeDasharray="157" strokeDashoffset="0" />
            
            {/* Inner geometric shape */}
            <g className="preloader-inner-shape">
              <polygon points="60,25 75,45 65,60 75,75 60,95 45,75 55,60 45,45" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </g>
            
            {/* Center dot */}
            <circle cx="60" cy="60" r="4" fill="currentColor" className="preloader-center" />
          </svg>
        </div>

        {/* Text */}
        <div className="preloader-text">
          <h2 className="preloader-title">Curating Your Experience</h2>
          <p className="preloader-subtitle">Discovering timeless elegance</p>
        </div>

        {/* Progress Bar */}
        <div className="preloader-progress">
          <div className="preloader-progress-bar" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
