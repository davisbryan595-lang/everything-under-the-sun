import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function OrdersPage() {
  const mockOrders = [
    {
      id: "#ORD-2025-001",
      date: "2025-01-10",
      total: 599.99,
      status: "Delivered",
      items: 2,
    },
    {
      id: "#ORD-2025-002",
      date: "2025-01-05",
      total: 249.0,
      status: "Delivered",
      items: 1,
    },
  ]

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-serif text-4xl text-black mb-4">My Orders</h1>
            <Link href="/account" className="text-gold hover:text-gold-dark transition-colors">
              ← Back to Account
            </Link>
          </div>

          {mockOrders.length > 0 ? (
            <div className="bg-white border-2 border-gold overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gold bg-light-yellow">
                    <th className="text-left py-4 px-6 font-semibold text-black">Order ID</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Date</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Items</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Total</th>
                    <th className="text-left py-4 px-6 font-semibold text-black">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {mockOrders.map((order) => (
                    <tr key={order.id} className="border-b-2 border-gold hover:bg-light-yellow transition-colors">
                      <td className="py-4 px-6 font-semibold text-black">{order.id}</td>
                      <td className="py-4 px-6 text-gray-700">{order.date}</td>
                      <td className="py-4 px-6 text-gray-700">{order.items}</td>
                      <td className="py-4 px-6 font-semibold text-black">${order.total.toFixed(2)}</td>
                      <td className="py-4 px-6">
                        <span className="bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold rounded">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="bg-white border-2 border-gold p-8 text-center">
              <p className="text-gray-600 mb-4">You haven't placed any orders yet</p>
              <Link
                href="/shop"
                className="inline-block bg-gold text-white px-6 py-2 font-semibold hover:text-white transition-colors btn-lift"
              >
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
