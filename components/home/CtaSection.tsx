import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-card sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                Get started
              </p>
              <p className="text-2xl font-semibold tracking-tight text-[color:var(--brand-navy)]">
                Request a quote for your next project
              </p>
              <p className="text-sm text-slate-600">
                Share your requirements and our team will recommend the right product and dosage.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="cta" size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
