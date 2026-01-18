import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const categories = [
  {
    label: "Admixtures",
    description: "PCE admixtures for precast and ready-mix performance.",
    image: "/images/category_admixtures_1768724562759.png"
  },
  {
    label: "Waterproofing",
    description: "Flexible, durable systems for roofs, walls, and wet areas.",
    image: "/images/category_waterproofing_1768724578955.png"
  },
  {
    label: "Plaster",
    description: "Premium gypsum plaster for smooth interior finishes.",
    image: "/images/category_plaster_1768724597226.png"
  }
];

export function CategoriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="mb-12 md:mb-16">
            <SectionHeading
              eyebrow="Our Portfolio"
              title="Specialized Chemical Solutions"
              description="Solutions built around productivity, protection, and premium finishes for every stage of construction."
            />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((c) => (
            <Card key={c.label} className="group relative overflow-hidden rounded-2xl border-0 shadow-lg transition-all hover:shadow-2xl">
              <div className="relative h-80 w-full overflow-hidden">
                <Image 
                    src={c.image} 
                    alt={c.label} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 transition-opacity group-hover:opacity-90" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                   <div className="mb-3 flex items-center gap-3">
                     <span className="h-px w-8 bg-[color:var(--brand-yellow)]" />
                     <p className="text-sm font-bold uppercase tracking-widest text-[color:var(--brand-yellow)]">Category</p>
                   </div>
                   <h3 className="mb-3 text-2xl font-bold text-white md:text-3xl">{c.label}</h3>
                   <p className="mb-6 text-slate-300 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-base leading-relaxed">
                     {c.description}
                   </p>
                   <Button asChild variant="cta" className="opacity-0 transform translate-y-4 transition-all duration-500 delay-100 group-hover:opacity-100 group-hover:translate-y-0">
                     <Link href="/products">Explore Products</Link>
                   </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
