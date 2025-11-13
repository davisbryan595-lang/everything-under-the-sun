import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ReturnsPage() {
  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl text-black mb-12">Returns & Exchanges</h1>

          <div className="space-y-8">
            {/* Return Policy */}
            <div className="bg-white border-2 border-gold p-8">
              <h2 className="font-serif text-2xl text-black mb-6">Return Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong className="text-black">30-Day Guarantee:</strong> We offer a 30-day return window from the
                  date of purchase. Items must be returned within this timeframe for a refund or exchange.
                </p>
                <p>
                  <strong className="text-black">Condition:</strong> Items must be in original, unworn condition with
                  all tags attached. Items that have been worn, washed, or altered cannot be returned.
                </p>
                <p>
                  <strong className="text-black">Refund Method:</strong> Refunds are issued to the original payment
                  method within 5-7 business days of receiving your return.
                </p>
              </div>
            </div>

            {/* How to Return */}
            <div className="bg-white border-2 border-gold p-8">
              <h2 className="font-serif text-2xl text-black mb-6">How to Return an Item</h2>
              <ol className="space-y-4 text-gray-700">
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-lg min-w-max">1.</span>
                  <span>Contact our customer service team at hello@boutique.com with your order number</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-lg min-w-max">2.</span>
                  <span>Receive a return shipping label and instructions</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-lg min-w-max">3.</span>
                  <span>Package the item securely and include the return label</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-lg min-w-max">4.</span>
                  <span>Ship the item to us using the provided label</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-bold text-lg min-w-max">5.</span>
                  <span>Receive your refund once we receive and inspect the item</span>
                </li>
              </ol>
            </div>

            {/* Exchanges */}
            <div className="bg-white border-2 border-gold p-8">
              <h2 className="font-serif text-2xl text-black mb-6">Exchanges</h2>
              <p className="text-gray-700 mb-4">
                We offer free exchanges for different sizes or colors of the same item within 30 days of purchase.
              </p>
              <p className="text-gray-700">
                To exchange an item, contact us at hello@boutique.com with your order number and specify the desired
                size or color. We'll provide a prepaid return label and ship your replacement item once we receive the
                original.
              </p>
            </div>

            {/* Non-Returnable Items */}
            <div className="bg-white border-2 border-gold p-8">
              <h2 className="font-serif text-2xl text-black mb-6">Non-Returnable Items</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Intimates (for hygiene reasons)</li>
                <li>• Final sale or clearance items</li>
                <li>• Items without original tags</li>
                <li>• Worn, washed, or altered items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
