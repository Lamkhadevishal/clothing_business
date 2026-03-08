import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold">CLOTHE</Link>
      <nav className="hidden md:flex gap-8">
  <Link href="/" className="hover:text-gray-600 transition">Home</Link>
  <Link href="/shop" className="hover:text-gray-600 transition">Shop</Link>
  <Link href="/categories" className="hover:text-gray-600 transition">Categories</Link>
  <Link href="/contact" className="hover:text-gray-600 transition">Contact</Link>
</nav>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" target="_blank"><Instagram size={20} /></Link>
            <Link href="https://facebook.com" target="_blank"><Facebook size={20} /></Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="bg-black text-white py-12">
        <div className="container text-center">
          <p>© 2025 CLOTHE. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}