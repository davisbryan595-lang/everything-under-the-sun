import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function GalleryPage() {
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Gallery image ${i + 1}`,
    query: "casual everyday outfit styling",
  }))

  return (
    <>
      <Navbar />

      <div className="bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="font-serif text-5xl text-black mb-4 text-center">Gallery</h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how our customers style their favorite pieces for everyday wear.
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
                    src={`/generic-placeholder-icon.png?height=${idx % 3 === 1 ? 500 : 300}&width=400&query=${image.query}`}
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
