import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="container max-w-3xl mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 text-gray-900">Join the Club</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Subscribe to get special offers, free giveaways, and exclusive deals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white border-gray-300 rounded-full px-6 py-3"
          />
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
}