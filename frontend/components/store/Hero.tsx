"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lottie from "lottie-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// Import your Lottie animation JSON (place it in public/animations/)
import fashionAnimation from "@/public/lottie/Shopping.json"; // adjust path

export default function Hero() {
  const headlineRef = useRef(null);
  const sublineRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headlineRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(sublineRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 to-white">
      {/* Background Lottie */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Lottie
          animationData={fashionAnimation}
          loop={true}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 text-center px-4 mx-auto">
        <h1
          ref={headlineRef}
          className="font-serif text-5xl md:text-7xl font-bold mb-4 text-gray-900"
        >
          Elevate Your Style
        </h1>
        <p
          ref={sublineRef}
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600"
        >
          Discover the latest trends in sustainable fashion, crafted for the
          modern individual.
        </p>
        <div ref={ctaRef} className="flex gap-4 justify-center">
          <Button size="lg" className="group bg-black text-white hover:bg-gray-800 rounded-full px-8">
            Shop Now
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
          </Button>
          <Button size="lg" variant="outline" className="border-black text-black hover:bg-black/10 rounded-full px-8">
            Explore Collections
          </Button>
        </div>
      </div>
    </section>
  );
}