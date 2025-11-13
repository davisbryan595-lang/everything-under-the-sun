"use client"

import { useState } from "react"
import { useStore } from "@/lib/store"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Heart, Share2, ShoppingCart } from "lucide-react"

const productDetails: Record<string, any> = {
  "classic-black-evening-gown": {
    id: "1",
    name: "Classic Black Evening Gown",
    price: 299,
    salePrice: 249,
    sale: true,
    image: "/product-1.jpg",
    images: ["/product-1.jpg", "/product-1-2.jpg", "/product-1-3.jpg"],
    description:
      "Timeless elegance meets modern sophistication in this stunning evening gown. Perfect for formal events, galas, or special occasions.",
    details: ["Premium polyester blend", "Fully lined for comfort", "Hidden side zipper", "Available in XS-XL"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["2", "3", "4"],
  },
  "white-silk-dress": {
    id: "2",
    name: "White Silk Dress",
    price: 249,
    image: "/product-2.jpg",
    images: ["/product-2.jpg", "/product-2-2.jpg"],
    description: "A fresh and elegant white silk dress perfect for day or evening wear.",
    details: ["100% pure silk", "Machine washable", "Breathable and comfortable", "Classic cut"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    related: ["1", "3", "5"],
  },
  "gold-sequin-dress": {
    id: "3",
    name: "Gold Sequin Dress",
    price: 350,
    image: "/product-3.jpg",
    images: ["/product-3.jpg", "/product-3-2.jpg"],
    description: "Dazzle and shine in this glamorous gold sequin dress.",
    details: ["Hand-sewn sequins", "Silk lining", "Statement piece", "Perfect for celebrations"],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Gold", hex: "#FFD700" }],
    related: ["1", "2", "4"],
  },
  "red-velvet-gown": {
    id: "4",
    name: "Red Velvet Gown",
    price: 399,
    salePrice: 299,
    sale: true,
    image: "/product-4.jpg",
    images: ["/product-4.jpg", "/product-4-2.jpg"],
    description: "A luxurious red velvet gown that exudes elegance and sophistication.",
    details: ["Premium velvet fabric", "Full length gown", "Adjustable back", "Red velvet only"],
    sizes: ["XS", "M", "L", "XL"],
    colors: [{ name: "Red", hex: "#FF0000" }],
    related: ["1", "3", "5"],
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const product = productDetails[slug] || productDetails["classic-black-evening-gown"]

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(product.images[0])
  const { addToCart, toggleWishlist, isInWishlist } = useStore()

  const inWishlist = isInWishlist(product.id)
  const displayPrice = product.salePrice || product.price

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: displayPrice,
      image: product.image,
      quantity,
      size: selectedSize,
      color: selectedColor || product.colors[0].name,
    })
    alert("Added to cart!")
  }

  return (
    <>
      <Navbar />

      <div className="bg-cream min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link href="/shop" className="text-gray-600 hover:text-gold">
              Shop
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-black font-semibold">{product.name}</span>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Images */}
            <div>
              <div className="bg-white border border-gold/10 mb-4 aspect-square flex items-center justify-center overflow-hidden">
                <Image
                  src={mainImage || "/placeholder.svg"}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square border-2 overflow-hidden ${
                      mainImage === img ? "border-gold" : "border-gold/20"
                    }`}
                  >
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`View ${idx + 1}`}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="font-serif text-4xl text-black mb-2">{product.name}</h1>

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                {product.sale ? (
                  <>
                    <span className="text-3xl font-semibold text-gold">${product.salePrice}</span>
                    <span className="text-lg text-gray-400 line-through">${product.price}</span>
                    <span className="bg-gold text-black px-3 py-1 text-sm font-semibold">Sale</span>
                  </>
                ) : (
                  <span className="text-3xl font-semibold text-black">${product.price}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-6">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-3">Size</label>
                <div className="grid grid-cols-4 gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 text-sm font-semibold border-2 transition-colors ${
                        selectedSize === size
                          ? "bg-black text-gold border-black"
                          : "bg-white text-black border-gold/20 hover:border-gold"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              {product.colors.length > 1 && (
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-black mb-3">Color</label>
                  <div className="flex gap-3">
                    {product.colors.map((color: any) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === color.name ? "border-black scale-125" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-black mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gold/20 hover:border-gold text-black"
                  >
                    −
                  </button>
                  <span className="text-lg font-semibold w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gold/20 hover:border-gold text-black"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-gold text-black py-4 font-semibold hover:bg-gold-dark transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button
                  onClick={() =>
                    toggleWishlist({
                      id: product.id,
                      name: product.name,
                      price: displayPrice,
                      image: product.image,
                    })
                  }
                  className={`w-full border-2 py-3 font-semibold transition-colors flex items-center justify-center gap-2 ${
                    inWishlist ? "bg-gold border-gold text-black" : "border-gold/20 text-black hover:border-gold"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${inWishlist ? "fill-black" : ""}`} />
                  {inWishlist ? "In Wishlist" : "Add to Wishlist"}
                </button>
              </div>

              {/* Details */}
              <div className="bg-white border border-gold/10 p-4 space-y-2 mb-6">
                {product.details.map((detail: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-1">✓</span>
                    <span className="text-gray-700">{detail}</span>
                  </div>
                ))}
              </div>

              {/* Share */}
              <button className="flex items-center gap-2 text-gold hover:text-gold-dark transition-colors">
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>
          </div>

          {/* Sizing Chart */}
          <div className="bg-white border border-gold/10 p-8 mb-16">
            <h2 className="font-serif text-2xl text-black mb-4">Sizing Guide</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left py-2 px-4 font-semibold text-black">Size</th>
                    <th className="text-left py-2 px-4 font-semibold text-black">Bust</th>
                    <th className="text-left py-2 px-4 font-semibold text-black">Waist</th>
                    <th className="text-left py-2 px-4 font-semibold text-black">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "XS", bust: '32"', waist: '24"', hips: '34"' },
                    { size: "S", bust: '34"', waist: '26"', hips: '36"' },
                    { size: "M", bust: '36"', waist: '28"', hips: '38"' },
                    { size: "L", bust: '38"', waist: '30"', hips: '40"' },
                    { size: "XL", bust: '40"', waist: '32"', hips: '42"' },
                  ].map((row) => (
                    <tr key={row.size} className="border-b border-gold/10">
                      <td className="py-2 px-4 text-black">{row.size}</td>
                      <td className="py-2 px-4 text-gray-600">{row.bust}</td>
                      <td className="py-2 px-4 text-gray-600">{row.waist}</td>
                      <td className="py-2 px-4 text-gray-600">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
