import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ShippingPage() {
  return (
    <>
      <Navbar />

      <div className="bg-cream min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-black mb-12">Shipping Information</h1>

          <div className="space-y-8">
            {/* Shipping Methods */}
            <div className="bg-white border border-gold/10 p-8">
              <h2 className="font-serif text-2xl text-black mb-6">Shipping Methods</h2>
              <div className="space-y-6">
                <div className="pb-6 border-b border-gold/10">
                  <h3 className="font-semibold text-black mb-2">Standard Shipping</h3>
                  <p className="text-gray-700">5-7 business days</p>
                  <p className="text-gold font-semibold mt-2">$10 (Free on orders over $100)</p>
                </div>
                <div className="pb-6 border-b border-gold/10">
                  <h3 className="font-semibold text-black mb-2">Expedited Shipping</h3>
                  <p className="text-gray-700">2-3 business days</p>
                  <p className="text-gold font-semibold mt-2">$25</p>
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-2">Overnight Shipping</h3>
                  <p className="text-gray-700">Next business day</p>
                  <p className="text-gold font-semibold mt-2">$50</p>
                </div>
              </div>
            </div>

            {/* Shipping Policy */}
            <div className="bg-white border border-gold/10 p-8">
              <h2 className="font-serif text-2xl text-black mb-6">Shipping Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-black">Order Processing:</strong> Orders are processed Monday through Friday,
                  excluding holidays. Orders placed on weekends or holidays will be processed the next business day.
                </p>
                <p>
                  <strong className="text-black">Tracking:</strong> Once your order ships, you'll receive a tracking
                  number via email. You can track your package using this number.
                </p>
                <p>
                  <strong className="text-black">Delivery:</strong> Delivery timeframes are estimates and not
                  guaranteed. We're not responsible for delays caused by carriers or weather.
                </p>
                <p>
                  <strong className="text-black">Signature:</strong> For orders over $500, signature may be required
                  upon delivery.
                </p>
              </div>
            </div>

            {/* International Shipping */}
            <div className="bg-white border border-gold/10 p-8">
              <h2 className="font-serif text-2xl text-black mb-6">International Shipping</h2>
              <p className="text-gray-700">
                We currently only ship within the United States. International shipping options may become available in
                the future. For inquiries about international orders, please contact us at hello@boutique.com.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
