import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = [
    { id: 1, src: "/products/p1.jpg", alt: "Classic Black Dress styling" },
    { id: 2, src: "/products/p2.jpg", alt: "White Linen Top outfit" },
    { id: 3, src: "/products/p3.jpg", alt: "Crossbody Shoulder Bag styling" },
    { id: 4, src: "/products/p4.jpg", alt: "Designer handbag collection" },
    { id: 5, src: "https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg", alt: "Black Leather Tote styling" },
    { id: 6, src: "/products/p6.jpg", alt: "Fashion accessories display" },
    { id: 7, src: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg", alt: "White Canvas Sneakers outfit" },
    { id: 8, src: "https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg", alt: "Ceramic Coffee Mug lifestyle" },
    { id: 9, src: "/products/Hitube_6au0Wfzkah_2025_11_14_00_14_12.jpg", alt: "Fashion styling inspiration 1" },
    { id: 10, src: "/products/Hitube_9JGmjDuhhg_2025_11_14_00_16_18.jpg", alt: "Fashion styling inspiration 2" },
    { id: 11, src: "/products/Hitube_XYVGHmvq1N_2025_11_14_00_08_07.jpg", alt: "Fashion styling inspiration 3" },
    { id: 12, src: "/products/Hitube_cB6QRKbVua_2025_11_14_00_15_22.jpg", alt: "Fashion styling inspiration 4" },
  ]

  return (
    <>
      <Navbar />

      <div className="bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-5xl text-black mb-4 text-center">Style Inspiration</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how our customers style their favorite clothing, accessories, and purses from Everything Under the Sun.
          </p>

          {/* Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div
                key={image.id}
                className={`group overflow-hidden bg-gray-200 rounded-lg hover:shadow-lg transition-shadow ${
                  idx % 3 === 1 ? "lg:col-span-1 lg:row-span-2" : ""
                } ${idx % 5 === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`relative ${idx % 3 === 1 ? "h-96 md:h-[500px]" : "h-64"}`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
