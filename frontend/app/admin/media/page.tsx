import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  { id: 1, url: "/images/product1.jpg", name: "product1.jpg", size: "245 KB" },
  { id: 2, url: "/images/product2.jpg", name: "product2.jpg", size: "312 KB" },
  { id: 3, url: "/images/product3.jpg", name: "product3.jpg", size: "189 KB" },
  { id: 4, url: "/images/product4.jpg", name: "product4.jpg", size: "276 KB" },
  { id: 5, url: "/images/insta1.jpg", name: "insta1.jpg", size: "156 KB" },
  { id: 6, url: "/images/insta2.jpg", name: "insta2.jpg", size: "198 KB" },
];

export default function MediaPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-serif">Media Library</h1>
        <Button className="bg-black text-white hover:bg-gray-800">
          <Upload className="mr-2 h-4 w-4" />
          Upload Images
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((img) => (
          <Card key={img.id} className="overflow-hidden group cursor-pointer">
            <div className="aspect-square relative">
              <img src={img.url} alt={img.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <ImageIcon className="text-white h-6 w-6" />
              </div>
            </div>
            <CardContent className="p-2">
              <p className="text-xs truncate">{img.name}</p>
              <p className="text-xs text-gray-500">{img.size}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}