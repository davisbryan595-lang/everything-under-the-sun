"use client"

import { useState, use } from "react"
import { useStore } from "@/lib/store"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Heart, Share2, ShoppingCart } from "lucide-react"

const productDetails: Record<string, any> = {
  "black-casual-dress": {
    id: "1",
    name: "Classic Black Dress",
    price: 49,
    salePrice: 39,
    sale: true,
    image: "/products/p1.jpg",
    images: ["/products/p1.jpg", "/products/p1.jpg", "/products/p1.jpg"],
    description:
      "A timeless classic black dress that works for any occasion. Perfect for work, casual outings, or dressing up with accessories from our collection.",
    details: ["Soft cotton blend", "Easy to care for", "Comfortable fit", "Available in XS-XL"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["2", "3", "4"],
  },
  "white-cotton-dress": {
    id: "2",
    name: "White Linen Top",
    price: 39,
    image: "/products/p2.jpg",
    images: ["/products/p2.jpg", "/products/p2.jpg"],
    description: "A fresh and practical white linen top that pairs beautifully with jeans, skirts, or wear it alone. Perfect for any season.",
    details: ["100% cotton", "Machine washable", "Breathable and comfortable", "Simple classic style"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    related: ["1", "3", "5"],
  },
  "printed-summer-dress": {
    id: "3",
    name: "Colorful Printed Blouse",
    price: 45,
    image: "/products/p3.jpg",
    images: ["/products/p3.jpg", "/products/p3.jpg"],
    description: "A cheerful printed blouse that adds personality to any outfit. Perfect for warm weather, casual days, or dressing up your wardrobe.",
    details: ["Cotton-blend fabric", "Fun print design", "Lightweight", "Perfect for everyday wear"],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Multi", hex: "#FF6B9D" }],
    related: ["1", "2", "4"],
  },
  "denim-shift-dress": {
    id: "4",
    name: "Denim Jacket",
    price: 65,
    salePrice: 49,
    sale: true,
    image: "/products/p4.jpg",
    images: ["/products/p4.jpg", "/products/p4.jpg"],
    description: "A timeless denim jacket that's perfect for layering. Works with dresses, jeans, or casual outfits. A wardrobe essential from Everything Under the Sun.",
    details: ["Durable denim", "Relaxed fit", "Versatile style", "Easy to pair with anything"],
    sizes: ["XS", "M", "L", "XL"],
    colors: [{ name: "Blue", hex: "#4169E1" }],
    related: ["1", "3", "5"],
  },
  "coffee-tumbler": {
    id: "12",
    name: "Ceramic Coffee Mug",
    price: 18,
    salePrice: 12,
    sale: true,
    image: "https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg",
    images: ["https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg", "https://images.pexels.com/photos/6030460/pexels-photo-6030460.jpeg"],
    description: "A stylish ceramic coffee mug perfect for your daily beverage. Part of our lifestyle collection at Everything Under the Sun.",
    details: ["Durable ceramic", "Keeps drinks at perfect temperature", "Easy to clean", "Perfect for everyday use"],
    sizes: ["M"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    related: ["1", "2", "3"],
  },
  "white-sneakers": {
    id: "8",
    name: "White Canvas Sneakers",
    price: 45,
    image: "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg",
    images: ["https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg", "https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg"],
    description: "Classic white canvas sneakers that go with everything. Comfortable and versatile for any casual outfit. An essential from our footwear collection.",
    details: ["Soft canvas material", "Cushioned insole", "Durable rubber sole", "Perfect for everyday wear"],
    sizes: ["S", "M", "L", "XL"],
    colors: [{ name: "White", hex: "#FFFFFF" }],
    related: ["1", "3", "5"],
  },
  "black-leather-handbag": {
    id: "9",
    name: "Black Leather Tote",
    price: 65,
    image: "https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg",
    images: ["https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg", "https://images.pexels.com/photos/27035625/pexels-photo-27035625.jpeg"],
    description: "A classic black leather tote bag that's both stylish and functional. Perfect for work, travel, or everyday use. A timeless piece from our purse collection.",
    details: ["Genuine leather", "Multiple compartments", "Adjustable strap", "Perfect for work or casual"],
    sizes: ["M"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["1", "2", "4"],
  },
  "pink-everyday-dress": {
    id: "5",
    name: "Pink Casual Sweater",
    price: 42,
    image: "/products/p1.jpg",
    images: ["/products/p1.jpg", "/products/p1.jpg"],
    description: "A soft and cozy pink sweater perfect for casual days and layering. Works great with jeans or skirts from our clothing collection.",
    details: ["Soft knit fabric", "Comfortable fit", "Easy care", "Great for layering"],
    sizes: ["S", "M", "L", "XL", "2X"],
    colors: [{ name: "Pink", hex: "#FFB6C1" }],
    related: ["1", "2", "3"],
  },
  "black-casual-flats": {
    id: "6",
    name: "Black Flats",
    price: 35,
    image: "/products/p2.jpg",
    images: ["/products/p2.jpg", "/products/p2.jpg"],
    description: "Classic black flats that go with everything. Comfortable and versatile for work, casual outings, or everyday wear.",
    details: ["Soft leather", "Comfortable insole", "Durable sole", "Perfect with any outfit"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["8", "7", "9"],
  },
  "comfy-walking-sandals": {
    id: "7",
    name: "Tan Sandals",
    price: 32,
    salePrice: 22,
    sale: true,
    image: "/products/p3.jpg",
    images: ["/products/p3.jpg", "/products/p3.jpg"],
    description: "Comfortable sandals perfect for warm weather and casual days. Great for walking or just relaxing.",
    details: ["Soft straps", "Cushioned footbed", "Lightweight", "Perfect for summer"],
    sizes: ["XS", "S", "M", "L"],
    colors: [{ name: "Tan", hex: "#D2B48C" }],
    related: ["6", "8", "4"],
  },
  "canvas-crossbody-bag": {
    id: "10",
    name: "Tan Crossbody Bag",
    price: 42,
    salePrice: 32,
    sale: true,
    image: "/products/p2.jpg",
    images: ["/products/p2.jpg", "/products/p2.jpg"],
    description: "A practical tan crossbody bag perfect for everyday use. Lightweight and spacious with an adjustable strap.",
    details: ["Durable canvas", "Adjustable strap", "Multiple pockets", "Perfect for travel"],
    sizes: ["S"],
    colors: [{ name: "Tan", hex: "#D2B48C" }],
    related: ["9", "11", "3"],
  },
  "neutral-tote-bag": {
    id: "11",
    name: "Beige Shoulder Bag",
    price: 48,
    image: "/products/p3.jpg",
    images: ["/products/p3.jpg", "/products/p3.jpg"],
    description: "A neutral beige shoulder bag that matches any outfit. Perfect for work or casual days out.",
    details: ["Soft materials", "Spacious interior", "Shoulder strap", "Versatile color"],
    sizes: ["M"],
    colors: [{ name: "Beige", hex: "#F5F5DC" }],
    related: ["9", "10", "2"],
  },
  "basic-pendant-necklace": {
    id: "13",
    name: "Silver Pendant Necklace",
    price: 18,
    salePrice: 12,
    sale: true,
    image: "/products/p1.jpg",
    images: ["/products/p1.jpg", "/products/p1.jpg"],
    description: "A delicate silver pendant necklace that adds elegance to any outfit. Perfect for everyday wear or special occasions.",
    details: ["Sterling silver", "Adjustable length", "Classic design", "Hypoallergenic"],
    sizes: ["M"],
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    related: ["12", "15", "1"],
  },
  "casual-canvas-belt": {
    id: "14",
    name: "Canvas Web Belt",
    price: 22,
    image: "/products/p2.jpg",
    images: ["/products/p2.jpg", "/products/p2.jpg"],
    description: "A casual canvas belt perfect for everyday wear. Great for jeans or casual pants.",
    details: ["Durable canvas", "Metal buckle", "Easy adjustment", "Versatile neutral color"],
    sizes: ["M", "L", "XL"],
    colors: [{ name: "Black", hex: "#000000" }],
    related: ["1", "4", "5"],
  },
  "cotton-print-scarf": {
    id: "15",
    name: "Printed Cotton Scarf",
    price: 16,
    image: "/products/p3.jpg",
    images: ["/products/p3.jpg", "/products/p3.jpg"],
    description: "A colorful printed cotton scarf that adds flair to any outfit. Great for layering or accessorizing.",
    details: ["100% cotton", "Soft fabric", "Fun prints", "Machine washable"],
    sizes: ["M"],
    colors: [{ name: "Multi", hex: "#FF6B9D" }, { name: "Blue", hex: "#4169E1" }],
    related: ["14", "13", "2"],
  },
  "everyday-ring-set": {
    id: "16",
    name: "Sterling Silver Ring Set",
    price: 19,
    image: "/products/p4.jpg",
    images: ["/products/p4.jpg", "/products/p4.jpg"],
    description: "A versatile set of sterling silver rings perfect for everyday wear. Mix and match to create your own style.",
    details: ["Sterling silver", "Multiple pieces", "Stackable design", "Comfortable fit"],
    sizes: ["S", "M", "L"],
    colors: [{ name: "Silver", hex: "#C0C0C0" }],
    related: ["13", "15", "1"],
  },
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = productDetails[slug] || productDetails["black-casual-dress"]

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

      <div className="bg-light-yellow min-h-screen py-12">
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
                          ? "bg-gold text-black border-gold"
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
                  className="w-full bg-gold text-white py-4 font-semibold hover:text-white transition-colors flex items-center justify-center gap-2"
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
