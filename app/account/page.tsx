import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ShoppingBag, Heart, User } from "lucide-react"

export default function AccountPage() {
  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl text-black mb-12">My Account</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Account Info */}
            <div className="bg-white border-2 border-gold p-8 text-center">
              <User className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-black mb-4">Profile</h2>
              <p className="text-gray-600 mb-6">Manage your profile information and settings</p>
              <button className="w-full bg-gold text-white py-2 font-semibold hover:text-white transition-colors">
                Edit Profile
              </button>
            </div>

            {/* Orders */}
            <Link
              href="/account/orders"
              className="bg-white border-2 border-gold p-8 text-center hover:border-gold transition-colors"
            >
              <ShoppingBag className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-black mb-4">Orders</h2>
              <p className="text-gray-600 mb-6">View your order history</p>
              <div className="w-full bg-gold text-black py-2 font-semibold hover:bg-gold-dark transition-colors">
                View Orders
              </div>
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              className="bg-white border-2 border-gold p-8 text-center hover:border-gold transition-colors"
            >
              <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
              <h2 className="font-serif text-2xl text-black mb-4">Wishlist</h2>
              <p className="text-gray-600 mb-6">View your saved items</p>
              <div className="w-full bg-gold text-black py-2 font-semibold hover:bg-gold-dark transition-colors">
                View Wishlist
              </div>
            </Link>
          </div>

          {/* Additional Links */}
          <div className="mt-12 bg-white border-2 border-gold p-8">
            <h2 className="font-serif text-2xl text-black mb-6">Account Settings</h2>
            <ul className="space-y-4">
              <li>
                <button className="text-gold hover:text-gold-dark transition-colors font-semibold">
                  Change Password
                </button>
              </li>
              <li>
                <button className="text-gold hover:text-gold-dark transition-colors font-semibold">
                  Manage Addresses
                </button>
              </li>
              <li>
                <button className="text-gold hover:text-gold-dark transition-colors font-semibold">
                  Email Preferences
                </button>
              </li>
              <li>
                <button className="text-red-600 hover:text-red-700 transition-colors font-semibold">Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
