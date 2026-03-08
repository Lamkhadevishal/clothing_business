"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "@/components/store/ProductCard";
import FilterSidebar from "@/components/store/FilterSidebar";
import ProductModal from "@/components/store/ProductModal";

// Mock product data – replace with real data from API later
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

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  // Filter products by category and search
  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      default:
        return 0; // featured (keep original order)
    }
  });

  const handleProductClick = (product: typeof allProducts[0]) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Shop All</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Discover our latest collection of premium clothing and accessories.
          </p>
        </motion.div>

        {/* Search and Sort Bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="name-asc">Name: A to Z</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={["Men", "Women", "Kids", "Accessories"]}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
            />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <p className="text-center text-gray-500 py-12">No products found.</p>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {sortedProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
}