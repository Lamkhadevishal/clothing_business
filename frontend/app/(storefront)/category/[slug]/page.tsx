"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/store/ProductCard";
import ProductModal from "@/components/store/ProductModal";
import { Button } from "@/components/ui/button";

// Mock product data (same as before)
const allProducts = [
  { id: 1, name: "Linen Blend Shirt", price: 89, category: "Men", slug: "men", image: "/images/product1.jpg", images: ["/images/product1.jpg"], sizes: ["S","M","L"], colors: ["White"], fabric: "Linen", description: "Breathable linen shirt." },
  { id: 2, name: "Slim Fit Jeans", price: 129, category: "Men", slug: "men", image: "/images/product2.jpg", images: ["/images/product2.jpg"], sizes: ["30","32"], colors: ["Blue"], fabric: "Denim", description: "Classic slim fit." },
  { id: 3, name: "Cashmere Sweater", price: 199, category: "Women", slug: "women", image: "/images/product3.jpg", images: ["/images/product3.jpg"], sizes: ["S","M"], colors: ["Gray"], fabric: "Cashmere", description: "Soft cashmere sweater." },
  { id: 4, name: "Leather Jacket", price: 349, category: "Women", slug: "women", image: "/images/product4.jpg", images: ["/images/product4.jpg"], sizes: ["M","L"], colors: ["Black"], fabric: "Leather", description: "Classic biker jacket." },
  { id: 5, name: "Kids Hoodie", price: 59, category: "Kids", slug: "kids", image: "/images/product5.jpg", images: ["/images/product5.jpg"], sizes: ["2-3Y"], colors: ["Blue"], fabric: "Cotton", description: "Soft hoodie for kids." },
  { id: 6, name: "Silk Scarf", price: 45, category: "Accessories", slug: "accessories", image: "/images/product6.jpg", images: ["/images/product6.jpg"], sizes: ["One"], colors: ["Multi"], fabric: "Silk", description: "Hand-rolled silk scarf." },
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Filter products by category slug (case-insensitive)
  const categoryProducts = allProducts.filter(
    (p) => p.slug.toLowerCase() === slug.toLowerCase()
  );

  const categoryName = categoryProducts[0]?.category || slug;

  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProductClick = (product: typeof allProducts[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/categories">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl">{categoryName}</h1>
        </div>

        {categoryProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-12">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => handleProductClick(product)}
              />
            ))}
          </div>
        )}
      </div>

      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}