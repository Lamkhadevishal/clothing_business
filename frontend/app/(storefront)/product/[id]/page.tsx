"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Heart, MessageCircle, Instagram, Check, Share2 } from "lucide-react";
import { WhatsAppShare, LinkedInShare } from "@/components/store/ShareButtons";
import ProductCard from "@/components/store/ProductCard";

// Mock product data (in real app, fetch from API)
const allProducts = [
  {
    id: 1,
    name: "Linen Blend Shirt",
    price: 89,
    category: "Men",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    fabric: "100% Linen",
    description: "Breathable linen shirt perfect for summer. Regular fit with button-down collar.",
    image: "/images/product1.jpg",
    images: ["/images/product1.jpg", "/images/product1-2.jpg"],
    tags: ["shirt", "men", "linen"],
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    price: 129,
    category: "Men",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    fabric: "98% Cotton, 2% Elastane",
    description: "Classic slim fit jeans with slight stretch for comfort.",
    image: "/images/product2.jpg",
    images: ["/images/product2.jpg"],
    tags: ["jeans", "men", "denim"],
  },
  {
    id: 3,
    name: "Cashmere Sweater",
    price: 199,
    category: "Women",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gray", "Beige", "Burgundy"],
    fabric: "100% Cashmere",
    description: "Luxuriously soft cashmere sweater, perfect for layering.",
    image: "/images/product3.jpg",
    images: ["/images/product3.jpg"],
    tags: ["sweater", "women", "cashmere"],
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 349,
    category: "Women",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Brown"],
    fabric: "Genuine Leather",
    description: "Classic biker jacket in genuine leather. Asymmetrical zip.",
    image: "/images/product4.jpg",
    images: ["/images/product4.jpg"],
    tags: ["jacket", "women", "leather"],
  },
  {
    id: 5,
    name: "Kids Hoodie",
    price: 59,
    category: "Kids",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    colors: ["Blue", "Red", "Green"],
    fabric: "80% Cotton, 20% Polyester",
    description: "Soft hoodie for kids with kangaroo pocket.",
    image: "/images/product5.jpg",
    images: ["/images/product5.jpg"],
    tags: ["hoodie", "kids"],
  },
  {
    id: 6,
    name: "Silk Scarf",
    price: 45,
    category: "Accessories",
    sizes: ["One Size"],
    colors: ["Multicolor"],
    fabric: "100% Silk",
    description: "Hand-rolled silk scarf with floral pattern.",
    image: "/images/product6.jpg",
    images: ["/images/product6.jpg"],
    tags: ["scarf", "accessories", "silk"],
  },
];

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  const product = allProducts.find((p) => p.id === id);

  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found</p>
      </div>
    );
  }

  const whatsappMessage = `Hi, I'm interested in ${product.name} ($${product.price}).\n\nDetails: ${product.description}\nSize: ${selectedSize || "N/A"}\nColor: ${selectedColor || "N/A"}`;
  const productUrl = typeof window !== "undefined" ? window.location.href : "";

  // Related products (same category)
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-black transition"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                width={1200}
                height={1600}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                      activeImage === i ? "border-black" : "border-transparent hover:border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt=""
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Right: Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <Badge variant="outline" className="mb-2 text-xs uppercase tracking-wider">
                {product.category}
              </Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-3">{product.name}</h1>
              <p className="text-3xl font-light text-gray-900">${product.price}</p>
            </div>

            <Separator />

            <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-900">Size</span>
                <span className="text-xs text-gray-500 cursor-pointer hover:text-black">Size guide</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 text-sm font-medium rounded-full border transition ${
                      selectedSize === size
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <span className="text-sm font-medium text-gray-900 block mb-3">Color</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-5 py-2 text-sm font-medium rounded-full border transition flex items-center gap-1 ${
                      selectedColor === color
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {color}
                    {selectedColor === color && <Check className="h-3 w-3 ml-1" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Fabric */}
            <div>
              <span className="text-sm font-medium text-gray-900 block mb-1">Fabric</span>
              <p className="text-gray-600">{product.fabric}</p>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-base rounded-full"
                onClick={() =>
                  window.open(
                    `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Order on WhatsApp
              </Button>

              <Button
                variant="outline"
                className="w-full border-gray-200 hover:bg-gray-50 h-12 text-base rounded-full"
                asChild
              >
                <a
                  href="https://instagram.com/yourstore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  View on Instagram
                </a>
              </Button>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  className="border-gray-200 hover:bg-gray-50 rounded-full"
                  asChild
                >
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppShare className="mr-2 h-4 w-4" />
                    Share
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-200 hover:bg-gray-50 rounded-full"
                  asChild
                >
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                      productUrl
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedInShare className="mr-2 h-4 w-4" />
                    Share
                  </a>
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full text-gray-600 hover:text-black"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart className={`mr-2 h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
                {isLiked ? "Saved to Wishlist" : "Add to Wishlist"}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="details"
                className="rounded-none px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-none px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none"
              >
                Shipping & Returns
              </TabsTrigger>
              <TabsTrigger
                value="reviews"
                className="rounded-none px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:shadow-none"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <p className="text-gray-600 leading-relaxed">
                {product.description} This product is made with high-quality materials and
                crafted with attention to detail. Perfect for everyday wear and special occasions.
              </p>
            </TabsContent>
            <TabsContent value="shipping" className="pt-6">
              <p className="text-gray-600 leading-relaxed">
                Free shipping on orders over $100. Standard delivery: 3-5 business days.
                Returns accepted within 30 days of purchase. Items must be unworn and with original tags.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-3xl mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <ProductCard
                    product={product}
                    onClick={() => {}} // We're using Link, so no need for onClick
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}