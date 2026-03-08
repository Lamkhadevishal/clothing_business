"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  { name: "Alex", text: "Amazing quality and super fast shipping! I'm in love with my new jacket.", role: "Verified Buyer" },
  { name: "Sam", text: "The fabric is so soft and the fit is perfect. Will definitely order again.", role: "Fashion Blogger" },
  { name: "Jordan", text: "Customer service via WhatsApp was incredibly helpful. Highly recommend!", role: "Loyal Customer" },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-gray-900">What Our Customers Say</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Real feedback from people who love our brand.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-gray-300 mb-4" />
                  <p className="text-gray-600 italic mb-6 text-lg">"{t.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}