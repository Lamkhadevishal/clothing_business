import Hero from "@/components/store/Hero";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import Categories from "@/components/store/Categories";
import InstagramFeed from "@/components/store/InstagramFeed";
import Testimonials from "@/components/store/Testimonials";
import Newsletter from "@/components/store/Newsletter";
import FloatingWhatsApp from "@/components/store/FloatingWhatsApp";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <Categories />
      <InstagramFeed />
      <Testimonials />
      <Newsletter />
      <FloatingWhatsApp />
    </>
  );
}