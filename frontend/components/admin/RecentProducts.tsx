import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recent = [
  { name: "Linen Shirt", price: "$89", image: "/images/product1.jpg", date: "2 hours ago" },
  { name: "Slim Jeans", price: "$129", image: "/images/product2.jpg", date: "5 hours ago" },
  { name: "Cashmere Sweater", price: "$199", image: "/images/product3.jpg", date: "1 day ago" },
];

export default function RecentProducts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Uploads</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recent.map((item) => (
          <div key={item.name} className="flex items-center gap-3">
            <Avatar className="h-10 w-10 rounded-md">
              <AvatarImage src={item.image} />
              <AvatarFallback>{item.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{item.name}</p>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
            <span className="text-sm font-semibold">{item.price}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}