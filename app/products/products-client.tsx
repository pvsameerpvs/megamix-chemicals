"use client";

import { useMemo, useState } from "react";

import { products, type Product, type ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Filter = "All" | ProductCategory;

const filters: Filter[] = ["All", "Admixture", "Waterproofing", "Plaster"];

export default function ProductsClient() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Product | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesFilter = filter === "All" ? true : p.category === filter;
      const matchesQuery = q.length === 0
        ? true
        : [p.name, p.shortDescription, p.fullDescription, p.category]
            .join(" ")
            .toLowerCase()
            .includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div>
      <section className="bg-slate-50">
        <div className="container py-16 sm:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Products"
              title="Product portfolio"
              description="Browse by category and view details in a modal — no separate product pages."
            />

            <div className="w-full max-w-md">
              <Input
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search products"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f === filter;
              return (
                <Button
                  key={f}
                  type="button"
                  variant={active ? "default" : "outline"}
                  onClick={() => setFilter(f)}
                  className={active ? "bg-[color:var(--brand-navy)]" : ""}
                >
                  {f}
                </Button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProductCard key={p.id} product={p} onClick={() => setSelected(p)} />
            ))}
          </div>

          {visible.length === 0 ? (
            <div className="mt-12 rounded-xl border border-slate-200 bg-white p-10 text-center shadow-card">
              <Badge variant="subtle" className="mx-auto w-fit">No results</Badge>
              <p className="mt-3 text-lg font-semibold text-[color:var(--brand-navy)]">
                No products match your search
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Try a different keyword or switch categories.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <ProductModal
        product={selected}
        open={!!selected}
        onOpenChange={(o) => {
          if (!o) setSelected(null);
        }}
      />
    </div>
  );
}
