"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { AdminLogin } from "@/components/admin-login"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Plus, Trash2, Edit2 } from "lucide-react"

interface MockOrder {
  id: string
  customer: string
  total: number
  status: string
  date: string
  items: number
}

const mockOrders: MockOrder[] = [
  {
    id: "#ORD-001",
    customer: "Sarah Johnson",
    total: 599.99,
    status: "Delivered",
    date: "2025-01-10",
    items: 2,
  },
  {
    id: "#ORD-002",
    customer: "Emma Davis",
    total: 249.0,
    status: "Processing",
    date: "2025-01-11",
    items: 1,
  },
  {
    id: "#ORD-003",
    customer: "Maria Garcia",
    total: 879.5,
    status: "Shipped",
    date: "2025-01-12",
    items: 3,
  },
]

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showProductForm, setShowProductForm] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "Dresses",
  })

  useEffect(() => {
    const adminLoggedIn = localStorage.getItem("adminLoggedIn") === "true"
    setIsLoggedIn(adminLoggedIn)
  }, [])

  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />
  }

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn")
    setIsLoggedIn(false)
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (newProduct.name && newProduct.price) {
      alert(`Product "${newProduct.name}" added successfully!`)
      setNewProduct({ name: "", price: "", category: "Dresses" })
      setShowProductForm(false)
    }
  }

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-serif text-4xl text-black">Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white border-2 border-gold p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">15</div>
              <p className="text-gray-600">Total Orders</p>
            </div>
            <div className="bg-white border-2 border-gold p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">$12,450</div>
              <p className="text-gray-600">Total Revenue</p>
            </div>
            <div className="bg-white border-2 border-gold p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">32</div>
              <p className="text-gray-600">Products</p>
            </div>
            <div className="bg-white border-2 border-gold p-6 text-center">
              <div className="text-3xl font-bold text-gold mb-2">248</div>
              <p className="text-gray-600">Customers</p>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white border-2 border-gold p-6 mb-12">
            <h2 className="font-serif text-2xl text-black mb-6">Recent Orders</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gold">
                    <th className="text-left py-3 px-4 font-semibold text-black">Order ID</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Customer</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Items</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Total</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-black">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="border-b-2 border-gold hover:bg-light-yellow">
                      <td className="py-3 px-4 font-semibold text-black">{order.id}</td>
                      <td className="py-3 px-4 text-gray-700">{order.customer}</td>
                      <td className="py-3 px-4 text-gray-700">{order.items}</td>
                      <td className="py-3 px-4 font-semibold text-black">${order.total.toFixed(2)}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`px-3 py-1 text-xs font-semibold ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{order.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Product Management */}
          <div className="bg-white border-2 border-gold p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-2xl text-black">Product Management</h2>
              <button
                onClick={() => setShowProductForm(!showProductForm)}
                className="flex items-center gap-2 bg-gold text-black px-4 py-2 font-semibold hover:bg-gold-dark transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </div>

            {showProductForm && (
              <form onSubmit={handleAddProduct} className="mb-6 p-4 bg-light-yellow border-2 border-gold">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="px-4 py-2 border-2 border-gold bg-white text-black placeholder-gray-500 focus:border-gold outline-none"
                    required
                  />
                  <select
                    value={newProduct.category}
                    onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                    className="px-4 py-2 border border-gold/20 bg-white text-black focus:border-gold outline-none"
                  >
                    <option>Dresses</option>
                    <option>Shoes</option>
                    <option>Purses</option>
                    <option>Accessories</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="bg-gold text-black px-6 py-2 font-semibold hover:bg-gold-dark transition-colors"
                  >
                    Add Product
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowProductForm(false)}
                    className="border-2 border-gold text-black px-6 py-2 font-semibold hover:bg-gold hover:text-black transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-3 px-4 font-semibold text-black">Product</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Price</th>
                  <th className="text-left py-3 px-4 font-semibold text-black">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[...Array(5)].map((_, i) => (
                  <tr key={i} className="border-b-2 border-gold hover:bg-light-yellow">
                    <td className="py-3 px-4 font-semibold text-black">Sample Product {i + 1}</td>
                    <td className="py-3 px-4 text-gray-700">Dresses</td>
                    <td className="py-3 px-4 font-semibold text-black">$299.00</td>
                    <td className="py-3 px-4 flex gap-2">
                      <button className="p-2 text-gold hover:text-gold-dark transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-500 hover:text-red-700 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
