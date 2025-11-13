"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all items. Items must be in original condition with tags attached. Contact our customer service team to initiate a return.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we ship within the United States only. International shipping may be available in the future. Contact us for more information.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping takes 5-7 business days. Expedited shipping (2-3 business days) is also available at checkout. Orders are processed Monday-Friday.",
  },
  {
    question: "Is shipping free?",
    answer: "We offer free shipping on all orders over $50. Orders under $50 have a flat shipping rate of $8.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website.",
  },
  {
    question: "Can I modify or cancel my order?",
    answer:
      "Orders can be modified or cancelled within 24 hours of placement. Contact us immediately if you need to make changes.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer: "Yes! Premium gift wrapping is available at checkout for a small fee. Perfect for special occasions.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay for secure checkout.",
  },
]

export default function FAQPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <>
      <Navbar />

      <div className="bg-light-yellow min-h-screen py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-serif text-5xl text-black mb-4">Frequently Asked Questions</h1>
            <p className="text-gray-600">Find answers to common questions about our boutique</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border-2 border-gold overflow-hidden">
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-light-yellow transition-colors"
                >
                  <h3 className="font-semibold text-black text-left">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-gold transition-transform flex-shrink-0 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedIndex === index && (
                  <div className="px-6 py-4 border-t-2 border-gold bg-light-yellow text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-white border-2 border-gold p-8 text-center">
            <h2 className="font-serif text-2xl text-black mb-4">Didn't find your answer?</h2>
            <p className="text-gray-600 mb-6">Contact our customer service team for personalized assistance.</p>
            <a
              href="/contact"
              className="inline-block bg-gold text-white px-8 py-3 font-semibold hover:text-white transition-colors btn-lift"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
