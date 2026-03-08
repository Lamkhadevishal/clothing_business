import Link from "next/link";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Men", slug: "men", image: "/images/category-men.jpg", count: 45 },
  { name: "Women", slug: "women", image: "/images/category-women.jpg", count: 62 },
  { name: "Kids", slug: "kids", image: "/images/category-kids.jpg", count: 28 },
  { name: "Accessories", slug: "accessories", image: "/images/category-accessories.jpg", count: 17 },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-center mb-4">Shop by Category</h1>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore our collections curated just for you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link href={`/category/${cat.slug}`} key={cat.slug}>
              <Card className="relative h-80 overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col items-center justify-end pb-8">
                  <h2 className="text-white text-3xl font-serif font-semibold">{cat.name}</h2>
                  <p className="text-white/80 text-sm mt-1">{cat.count} Products</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}