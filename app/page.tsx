import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Advanced construction chemical solutions engineered for strength, durability, and performance."
};

const strengths = [
  {
    title: "High-Performance Formulations",
    description:
      "PCE-based admixtures and coatings designed for consistent workability, early strength, and premium finishes."
  },
  {
    title: "Quality-Controlled Manufacturing",
    description:
      "Batch-to-batch reliability through structured QC, controlled raw materials, and documentation."
  },
  {
    title: "Project-Focused Technical Support",
    description:
      "Guidance on mix design, dosage optimization, and job-site application for smooth execution."
  }
];

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

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Key Strengths */}
      <section className="py-16">
        <div className="container">
          <SectionHeading
            eyebrow="Strengths"
            title="Engineered to perform on-site"
            description="Reliable, premium construction chemistry backed by process control and practical support."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengths.map((s) => (
              <Card key={s.title} className="transition-all hover:-translate-y-0.5 hover:shadow-cardHover">
                <CardContent className="p-7 space-y-3">
                  <p className="text-lg font-semibold text-[color:var(--brand-navy)]">{s.title}</p>
                  <p className="text-sm text-slate-600">{s.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
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

      {/* Why Megamix */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="Why Megamix"
                title="Confidence from formulation to finish"
                description="Our approach balances advanced chemistry with practical site support — so your teams build faster and better."
              />
              <div className="mt-8 space-y-4">
                {[
                  "Consistent raw-material sourcing and structured QC",
                  "Solutions optimized for Kerala and coastal conditions",
                  "Support for contractors, precast yards, and RMC plants"
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--brand-yellow)]" aria-hidden />
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-xl bg-[color:var(--brand-navy)] p-8 text-white shadow-card">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  Authority section
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                  Industrial-grade production. Premium on-site performance.
                </h3>
                <p className="mt-3 text-white/80">
                  Megamix chemicals are engineered to improve productivity, achieve stronger concrete, and protect structures
                  against moisture, UV exposure, and harsh site conditions.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    { label: "Workability", value: "Optimized" },
                    { label: "Durability", value: "Enhanced" },
                    { label: "Support", value: "Responsive" }
                  ].map((i) => (
                    <div key={i.label} className="rounded-xl bg-white/10 p-4">
                      <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/70">
                        {i.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold">{i.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild variant="cta" size="lg">
                    <Link href="/contact">Talk to our team</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
    </div>
  );
}
