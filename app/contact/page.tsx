"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-black mb-4">Get in Touch</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Have questions about our clothing, purses, accessories, or anything else? We'd love to hear from you.
              Contact Everything Under the Sun Boutique today!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="bg-white border-2 border-gold p-8 text-center">
              <Phone className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-black mb-2">Call Us</h3>
              <a href="tel:312-929-0496" className="text-gray-700 hover:text-gold transition-colors">
                312-929-0496
              </a>
            </div>

            <div className="bg-white border-2 border-gold p-8 text-center">
              <Mail className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-black mb-2">Email</h3>
              <a href="mailto:hello@boutique.com" className="text-gray-700 hover:text-gold transition-colors">
                hello@boutique.com
              </a>
            </div>

            <div className="bg-white border-2 border-gold p-8 text-center">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <h3 className="font-serif text-xl text-black mb-2">Visit Us</h3>
              <p className="text-gray-700">
                1911 West 170th Street
                <br />
                Hazel Crest, IL 60429
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white border-2 border-gold p-8 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-gold" />
              <h2 className="font-serif text-2xl text-black">Store Hours</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Monday - Friday</span>
                </p>
                <p className="text-gold">10:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold">Saturday - Sunday</span>
                </p>
                <p className="text-gold">11:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border-2 border-gold p-8">
            <h2 className="font-serif text-2xl text-black mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gold/20 bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
              />

              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-gold text-white py-3 font-semibold hover:text-white transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
