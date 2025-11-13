"use client"

import type React from "react"

import { useState } from "react"

interface AdminLoginProps {
  onLogin: () => void
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple password protection (in production, use proper authentication)
    if (password === "admin123") {
      localStorage.setItem("adminLoggedIn", "true")
      onLogin()
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  return (
    <div className="bg-light-yellow min-h-screen flex items-center justify-center py-12 px-4">
      <div className="bg-white border-2 border-gold p-8 max-w-md w-full">
        <h1 className="font-serif text-3xl text-black text-center mb-8">Admin Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gold text-black py-2 font-semibold hover:bg-gold-dark transition-colors"
          >
            Login
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 mt-4">Demo password: admin123</p>
      </div>
    </div>
  )
}
