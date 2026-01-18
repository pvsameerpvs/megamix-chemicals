import Image from "next/image";

import { Product } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Props = {
  product: Product;
  onClick: () => void;
};

export function ProductCard({ product, onClick }: Props) {
  return (
    <Card
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={cn(
        "group cursor-pointer overflow-hidden border-slate-200 transition-all hover:-translate-y-1 hover:shadow-cardHover",
        "focus-visible:ring-2 focus-visible:ring-[color:var(--brand-yellow)]"
      )}
      aria-label={`Open details for ${product.name}`}
    >
      <div className="relative aspect-square w-full bg-slate-100 p-6">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4">
          <Badge variant="subtle" className="bg-white/90 shadow-sm backdrop-blur-sm">
            {product.category}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-lg font-bold text-[color:var(--brand-navy)]">{product.name}</span>
        </CardTitle>
        <CardDescription className="line-clamp-2">{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-bold text-[color:var(--brand-yellow)] group-hover:underline decoration-2 underline-offset-4">
          View Product Details →
        </p>
      </CardContent>
    </Card>
  );
}
