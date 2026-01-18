import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const categories = [
  {
    label: "Admixtures",
    description: "PCE admixtures for precast and ready-mix performance.",
    image: "/images/category-admixture.svg"
  },
  {
    label: "Waterproofing",
    description: "Flexible, durable systems for roofs, walls, and wet areas.",
    image: "/images/category-waterproofing.svg"
  },
  {
    label: "Plaster",
    description: "Premium gypsum plaster for smooth interior finishes.",
    image: "/images/category-plaster.svg"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Product categories"
          description="Solutions built around productivity, protection, and premium finishes."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.label} className="overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-cardHover">
              <div className="relative h-40">
                <Image src={c.image} alt={c.label} fill className="object-cover" />
              </div>
              <CardContent className="p-7 space-y-2">
                <p className="text-lg font-semibold text-[color:var(--brand-navy)]">{c.label}</p>
                <p className="text-sm text-slate-600">{c.description}</p>
                <Button asChild variant="outline" className="mt-3">
                  <Link href="/products">Explore</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
