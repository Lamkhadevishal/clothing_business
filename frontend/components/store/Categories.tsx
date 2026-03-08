import { Card } from "@/components/ui/card";
import Link from "next/link";

const categories = [
  { name: "Men", slug: "men", image: "/images/pexels-shkrabaanthony-5264935.jpg" },
  { name: "Women", slug: "women", image: "/images/pexels-ron-lach-8306378.jpg" },
  { name: "Kids", slug: "kids", image: "/images/pexels-amina-filkins-5560028.jpg" },
  { name: "Accessories", slug: "accessories", image: "/images/pexels-ferarcosn-190819.jpg" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4 text-gray-900">Shop by Category</h2>
        <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
          Explore our curated collections for every style and occasion.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <Link href={`/category/${cat.slug}`} key={cat.name}>
              <Card className="relative h-80 overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-center pb-8">
                  <h3 className="text-white text-3xl font-serif font-semibold">{cat.name}</h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}