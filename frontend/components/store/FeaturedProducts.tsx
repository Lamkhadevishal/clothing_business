"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Eye } from "lucide-react";
import ProductModal from "./ProductModal"; // We'll create this if not already

// Enhanced product data with more fields
const products = [
  { 
    id: 1, 
    name: "Linen Blend Shirt", 
    price: 89, 
    image: "/images/product1.jpg",
    images: ["/images/product1.jpg", "/images/product1-2.jpg"],
    category: "Men",
    description: "Breathable linen shirt perfect for summer. Regular fit with button-down collar.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Blue", "Black"],
    fabric: "100% Linen"
  },
  { 
    id: 2, 
    name: "Slim Fit Jeans", 
    price: 129, 
    image: "/images/product2.jpg",
    images: ["/images/product2.jpg"],
    category: "Men",
    description: "Classic slim fit jeans with slight stretch for comfort.",
    sizes: ["30", "32", "34", "36"],
    colors: ["Blue", "Black"],
    fabric: "98% Cotton, 2% Elastane"
  },
  { 
    id: 3, 
    name: "Cashmere Sweater", 
    price: 199, 
    image: "/images/product3.jpg",
    images: ["/images/product3.jpg"],
    category: "Women",
    description: "Luxuriously soft cashmere sweater, perfect for layering.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Gray", "Beige", "Burgundy"],
    fabric: "100% Cashmere"
  },
  { 
    id: 4, 
    name: "Leather Jacket", 
    price: 349, 
    image: "/images/product4.jpg",
    images: ["/images/product4.jpg"],
    category: "Women",
    description: "Classic biker jacket in genuine leather. Asymmetrical zip.",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Brown"],
    fabric: "Genuine Leather"
  },
];

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleProductClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <>
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl mb-4 text-gray-900">Featured Products</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Handpicked just for you – our latest and most loved styles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => handleProductClick(product)}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-80 overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    {/* Overlay with icons on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(`https://wa.me/1234567890?text=Hi, I'm interested in ${product.name}`, "_blank");
                        }}
                      >
                        <MessageCircle className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="rounded-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProductClick(product);
                        }}
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                    </div>
                    {/* Category badge */}
                    <Badge className="absolute top-3 left-3 bg-white/90 text-black border-0">
                      {product.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-serif text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-lg mb-4">${product.price}</p>
                    <Button
                      variant="outline"
                      className="border-black text-black hover:bg-black hover:text-white rounded-full px-6"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(`https://wa.me/1234567890?text=Hi, I'm interested in ${product.name}`, "_blank");
                      }}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Inquire on WhatsApp
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  );
}