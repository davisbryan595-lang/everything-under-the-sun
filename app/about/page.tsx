import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <div className="bg-cream min-h-screen">
        {/* Hero Section */}
        <div className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-5xl mb-4">Our Story</h1>
            <p className="text-xl text-gold">Everything Under the Sun Boutique</p>
          </div>
        </div>

        {/* About Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-serif text-4xl text-black mb-6">Great Style, Fair Prices</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Everything Under the Sun Boutique was founded with a simple mission: to make quality fashion
                accessible and affordable for everyone. We believe that every woman deserves to look and feel great
                without breaking the bank.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our collection features affordable dresses, shoes, bags, and accessories that are
                practical for everyday wear. Each piece is selected by our team for comfort, durability,
                and value.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're proud to serve our community and have become Hazel Crest's go-to shop for stylish,
                affordable women's fashion. Thank you for supporting us.
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg h-96 overflow-hidden">
              <Image
                src="/products/p1.jpg"
                alt="Boutique Collection"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-black text-center mb-12">Why Shop With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Affordable",
                  description: "Great quality pieces at prices that work for your budget.",
                },
                {
                  title: "Practical",
                  description: "Fashion designed for real life and everyday wear.",
                },
                {
                  title: "Friendly",
                  description: "Helpful service and a welcoming shopping experience.",
                },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-serif text-2xl text-gold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white border border-gold/10 p-8 text-center">
            <h2 className="font-serif text-2xl text-black mb-4">Visit Us Today</h2>
            <p className="text-lg text-gray-700 mb-2">1911 West 170th Street</p>
            <p className="text-lg text-gray-700 mb-2">Hazel Crest, IL 60429</p>
            <p className="text-lg text-gold font-semibold mb-4">312-929-0496</p>
            <div className="bg-gray-200 h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.9819862822377!2d-87.6817!3d41.5478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDMynDU0LjAiTiA4N8OmMDcnMDEuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
