import { Card, CardContent } from "@/components/ui/card";
import { Package, Users, Eye, ShoppingBag, TrendingUp, DollarSign } from "lucide-react";

const stats = [
  { title: "Total Products", value: "124", icon: Package, change: "+12%", iconBg: "bg-blue-100", iconColor: "text-blue-600" },
  { title: "Categories", value: "8", icon: ShoppingBag, change: "+2", iconBg: "bg-green-100", iconColor: "text-green-600" },
  { title: "Monthly Views", value: "23.5k", icon: Eye, change: "+18%", iconBg: "bg-purple-100", iconColor: "text-purple-600" },
  { title: "Inquiries", value: "341", icon: Users, change: "+24%", iconBg: "bg-amber-100", iconColor: "text-amber-600" },
  { title: "Revenue", value: "$12,450", icon: DollarSign, change: "+8%", iconBg: "bg-emerald-100", iconColor: "text-emerald-600" },
  { title: "Conversion", value: "3.2%", icon: TrendingUp, change: "+0.4%", iconBg: "bg-rose-100", iconColor: "text-rose-600" },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <Card key={stat.title} className="border-0 shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
                <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}