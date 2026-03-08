"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MessageCircle, Instagram, X, Check, ExternalLink } from "lucide-react";
import { WhatsAppShare, LinkedInShare } from "./ShareButtons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    images: string[];
    sizes: string[];
    colors: string[];
    fabric: string;
    category: string;
  } | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  if (!product) return null;

  const whatsappMessage = `Hi, I'm interested in ${product.name} ($${product.price}).\n\nDetails: ${product.description}\nSize: ${selectedSize || "N/A"}\nColor: ${selectedColor || "N/A"}`;
  const productUrl = typeof window !== "undefined" ? `${window.location.origin}/product/${product.id}` : "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Use max-w-7xl for a much wider modal, and w-[95vw] on small screens */}
      <DialogContent className="min-w-7xl w-[100vw] max-h-[90vh] overflow-y-auto p-0">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-black/5 p-2 backdrop-blur-sm hover:bg-black/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <AnimatePresence>
          {product && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-3xl md:text-4xl font-serif">{product.name}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                {/* Left: Image Carousel */}
                <div>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {product.images.map((img, i) => (
                        <CarouselItem key={i}>
                          <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                            <img
                              src={img}
                              alt={`${product.name} ${i+1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  <div className="flex gap-2 mt-4">
                    {product.images.map((img, i) => (
                      <div
                        key={i}
                        className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 cursor-pointer border-2 border-transparent hover:border-black transition"
                      >
                        <img src={img} alt={`thumb ${i+1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Product Info */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="text-4xl font-bold">${product.price}</p>
                    <Badge variant="outline" className="text-base px-4 py-1">
                      {product.category}
                    </Badge>
                  </div>

                  <Tabs defaultValue="details">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="details">Details</TabsTrigger>
                      <TabsTrigger value="specs">Specifications</TabsTrigger>
                    </TabsList>
                    <TabsContent value="details" className="pt-4">
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </TabsContent>
                    <TabsContent value="specs" className="pt-4 space-y-3">
                      <p><span className="font-semibold">Fabric:</span> {product.fabric}</p>
                      <div>
                        <span className="font-semibold">Sizes:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.sizes.map((size) => (
                            <Button
                              key={size}
                              variant={selectedSize === size ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedSize(size)}
                              className={`rounded-full ${
                                selectedSize === size ? "bg-black text-white" : ""
                              }`}
                            >
                              {size}
                              {selectedSize === size && <Check className="ml-1 h-3 w-3" />}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="font-semibold">Colors:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {product.colors.map((color) => (
                            <Button
                              key={color}
                              variant={selectedColor === color ? "default" : "outline"}
                              size="sm"
                              onClick={() => setSelectedColor(color)}
                              className={`rounded-full ${
                                selectedColor === color ? "bg-black text-white" : ""
                              }`}
                            >
                              {color}
                              {selectedColor === color && <Check className="ml-1 h-3 w-3" />}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Action Buttons */}
                  <div className="space-y-4 pt-4">
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700 text-white h-12 text-lg"
                      onClick={() => window.open(`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`, "_blank")}
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Order on WhatsApp
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-pink-600 text-pink-600 hover:bg-pink-50 h-12"
                      asChild
                    >
                      <a href="https://instagram.com/yourstore" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2 h-5 w-5" />
                        View on Instagram
                      </a>
                    </Button>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={`https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                          <WhatsAppShare className="mr-2 h-4 w-4" />
                          Share
                        </a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(productUrl)}`} target="_blank" rel="noopener noreferrer">
                          <LinkedInShare className="mr-2 h-4 w-4" />
                          Share
                        </a>
                      </Button>
                    </div>

                    {/* New: Link to full product page */}
                    <Link href={`/product/${product.id}`} passHref>
                      <Button variant="ghost" className="w-full text-gray-600 hover:text-black">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Full Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}