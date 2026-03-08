"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Filter } from "lucide-react";

interface FilterSidebarProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  categories: string[];
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

export default function FilterSidebar({
  selectedCategory,
  onCategoryChange,
  categories,
  priceRange,
  onPriceRangeChange,
}: FilterSidebarProps) {
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  const handlePriceChange = (value: number[]) => {
    setLocalPriceRange([value[0], value[1]]);
  };

  const applyPriceFilter = () => {
    onPriceRangeChange(localPriceRange);
  };

  const clearFilters = () => {
    onCategoryChange(null);
    onPriceRangeChange([0, 500]);
    setLocalPriceRange([0, 500]);
  };

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category Filter */}
      <div>
        <h3 className="font-medium mb-3">Category</h3>
        <RadioGroup
          value={selectedCategory || ""}
          onValueChange={(val) => onCategoryChange(val || null)}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="" id="all" />
            <Label htmlFor="all">All</Label>
          </div>
          {categories.map((cat) => (
            <div key={cat} className="flex items-center space-x-2">
              <RadioGroupItem value={cat} id={cat} />
              <Label htmlFor={cat}>{cat}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <Separator />

      {/* Price Range Filter */}
      <div>
        <h3 className="font-medium mb-3">Price Range</h3>
        <Slider
          value={[localPriceRange[0], localPriceRange[1]]}
          onValueChange={handlePriceChange}
          max={500}
          step={10}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>${localPriceRange[0]}</span>
          <span>${localPriceRange[1]}+</span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={applyPriceFilter}
          className="mt-2 w-full"
        >
          Apply Price
        </Button>
      </div>

      <Separator />

      {/* Size Filter (optional) */}
      <div>
        <h3 className="font-medium mb-3">Size</h3>
        <div className="flex flex-wrap gap-2">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <Button key={size} variant="outline" size="sm" className="h-8 w-8 p-0">
              {size}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      <Button
        variant="ghost"
        className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
        onClick={clearFilters}
      >
        Clear All Filters
      </Button>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <Card className="hidden lg:block sticky top-24">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <FilterContent />
        </CardContent>
      </Card>

      {/* Mobile Filter Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="lg:hidden w-full mb-4">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <div className="py-4">
            <h2 className="font-serif text-lg font-semibold mb-4">Filters</h2>
            <FilterContent />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}