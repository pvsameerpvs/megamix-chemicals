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
        "group cursor-pointer overflow-hidden border-slate-200 transition-all hover:-translate-y-0.5 hover:shadow-cardHover",
        "focus-visible:ring-2 focus-visible:ring-[color:var(--brand-yellow)]"
      )}
      aria-label={`Open details for ${product.name}`}
    >
      <div className="relative h-44 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/35 to-transparent" />
        <div className="absolute left-4 top-4">
          <Badge variant="subtle">{product.category}</Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-[color:var(--brand-navy)]">{product.name}</span>
        </CardTitle>
        <CardDescription>{product.shortDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-slate-700 group-hover:text-[color:var(--brand-navy)]">
          View details →
        </p>
      </CardContent>
    </Card>
  );
}
