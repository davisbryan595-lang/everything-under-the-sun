import Link from "next/link"
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-light-yellow text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-serif text-lg md:text-xl mb-4 text-gold">Visit Us</h3>
            <div className="space-y-3 text-xs md:text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p>
                  1911 West 170th Street
                  <br />
                  Hazel Crest, IL 60429
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:312-929-0496" className="hover:text-gold transition-colors">
                  312-929-0496
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:hello@boutique.com" className="hover:text-gold transition-colors">
                  hello@boutique.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg md:text-xl mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li>
                <Link href="/shop" className="hover:text-gold transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gold transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-serif text-lg md:text-xl mb-4 text-gold">Customer Service</h3>
            <ul className="space-y-2 text-xs md:text-sm text-gray-700">
              <li>
                <Link href="/shipping" className="hover:text-gold transition-colors">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-gold transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-gold transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="font-serif text-lg md:text-xl mb-4 text-gold">Stay Connected</h3>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-white border-2 border-gold text-black placeholder-gray-400 text-xs md:text-sm mb-2 focus:border-gold outline-none transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-gold text-black font-medium py-2 hover:bg-gold-dark transition-colors text-xs md:text-sm"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                <Instagram className="w-4 md:w-5 h-4 md:h-5" />
              </a>
              <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                <Facebook className="w-4 md:w-5 h-4 md:h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-gold mt-8 pt-8 text-center text-xs md:text-sm text-gray-600">
          <p>&copy; 2025 Everything Under the Sun Boutique. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
