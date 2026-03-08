"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
  };
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
        <div className="relative h-64 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm" className="gap-2">
              <Eye className="h-4 w-4" />
              Quick View
            </Button>
          </div>
          <Badge className="absolute top-2 left-2 bg-white/90 text-black border-0">
            {product.category}
          </Badge>
        </div>
        <CardContent className="p-4 text-center">
          <h3 className="font-serif text-lg font-semibold mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-gray-600 font-medium">${product.price}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}