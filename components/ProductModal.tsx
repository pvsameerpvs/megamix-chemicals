"use client";

import Image from "next/image";
import Link from "next/link";

import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ProductModal({ product, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[85vh] overflow-y-auto p-0">
        {product ? (
          <div>
            <div className="relative h-56 w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between gap-3">
                <div>
                  <Badge variant="subtle" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {product.name}
                  </h3>
                </div>
                <Button asChild variant="cta" className="hidden sm:inline-flex">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>

            <div className="p-6 space-y-8">
              <DialogHeader className="space-y-2">
                <DialogTitle className="sr-only">{product.name}</DialogTitle>
                <DialogDescription className="text-base text-slate-700">
                  {product.fullDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {product.keyBenefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-yellow)]" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                    Recommended Applications
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {product.recommendedApplications.map((a) => (
                      <li key={a} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--brand-navy)]" aria-hidden />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-600">
                  Need dosage guidance or project-specific recommendations? Our technical team can help.
                </p>
                <Button asChild variant="cta">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
