import DashboardStats from "@/components/admin/DashboardStats";
import RecentProducts from "@/components/admin/RecentProducts";
import ActivityChart from "@/components/admin/ActivityChart";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif">Dashboard</h1>
        <Link href="/admin/products/new">
          <Button className="bg-black text-white hover:bg-gray-800">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Product
          </Button>
        </Link>
      </div>

      <DashboardStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActivityChart />
        </div>
        <div>
          <RecentProducts />
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link href="/admin/products" className="block">
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Manage Products</h3>
            <p className="text-gray-500 text-sm">Add, edit, or remove products</p>
          </div>
        </Link>
        <Link href="/admin/categories" className="block">
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Categories</h3>
            <p className="text-gray-500 text-sm">Organize your catalog</p>
          </div>
        </Link>
        <Link href="/admin/media" className="block">
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="font-semibold text-lg">Media Library</h3>
            <p className="text-gray-500 text-sm">Upload and manage images</p>
          </div>
        </Link>
      </div>
    </div>
  );
}