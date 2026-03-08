"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";

// Register GSAP ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+1 (234) 567-890",
    href: "https://wa.me/1234567890",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@clothe.com",
    href: "mailto:hello@clothe.com",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@clothe.official",
    href: "https://instagram.com/clothe.official",
  },
  {
    icon: MapPin,
    title: "Store Location",
    value: "123 Fashion Ave, New York, NY 10001",
    href: "https://maps.google.com/?q=123+Fashion+Ave+New+York",
  },
];

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const infoRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP animation for contact cards
    infoRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    // Form entrance animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top bottom-=100",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show an alert. Replace with actual form submission.
    alert("Thank you for your message. We'll get back to you soon!");
    // You could also integrate with a backend or email service here.
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          <img
            src="/images/contact-hero.jpg"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-6xl mb-4"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            We'd love to hear from you. Whether you have a question about our
            products, need styling advice, or just want to say hello.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Contact Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={item.title}
                    ref={(el) => {
                      infoRefs.current[index] = el;
                    }}
                  >
                    <a
                      href={item.href}
                      target={item.title === "Store Location" ? "_blank" : undefined}
                      rel={item.title === "Store Location" ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <item.icon size={24} />
                          </div>
                          <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm break-words">{item.value}</p>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                ))}
              </div>

              {/* Map (optional, using placeholder) */}
              <div className="mt-12">
                <h3 className="font-serif text-2xl mb-4">Visit Our Store</h3>
                <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316f5e2b6b%3A0xf9694e6e8b8a5e8d!2sFashion%20Ave%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h2 className="font-serif text-3xl mb-8">Send Us a Message</h2>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        rows={5}
                        required
                        className="w-full resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-black text-white hover:bg-gray-800 h-12"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button (already present globally, but we can keep it) */}
    </div>
  );
}