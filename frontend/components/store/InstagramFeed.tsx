import { ExternalLink } from "lucide-react";

const posts = [
  { id: 1, image: "/images/insta1.jpg", link: "https://instagram.com/p/xyz" },
  { id: 2, image: "/images/insta2.jpg", link: "https://instagram.com/p/xyz" },
  { id: 3, image: "/images/insta3.jpg", link: "https://instagram.com/p/xyz" },
  { id: 4, image: "/images/insta4.jpg", link: "https://instagram.com/p/xyz" },
];

export default function InstagramFeed() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-center mb-4">Instagram</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Follow us <span className="font-semibold">@brandname</span> for daily style inspiration.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden group rounded-2xl shadow-lg"
            >
              <img
                src={post.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <ExternalLink className="w-8 h-8 text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}