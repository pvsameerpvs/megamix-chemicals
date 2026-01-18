import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

const strengths = [
  {
    title: "High-Performance Formulations",
    description: "PCE-based admixtures and coatings designed for consistent workability, early strength, and premium finishes.",
    image: "/images/strength_performance_1768724166619.png"
  },
  {
    title: "Quality-Controlled Manufacturing",
    description: "Batch-to-batch reliability through structured QC, controlled raw materials, and documentation.",
    image: "/images/strength_quality_1768724180947.png"
  },
  {
    title: "Project-Focused Technical Support",
    description: "Guidance on mix design, dosage optimization, and job-site application for smooth execution.",
    image: "/images/strength_support_1768724196278.png"
  }
];

export function StrengthsSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="container">
        <div className="mb-12 md:mb-16">
           <SectionHeading
             eyebrow="Our Core Strengths"
             title="Engineered to perform on-site"
             description="Reliable, premium construction chemistry backed by process control and practical support."
           />
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {strengths.map((s) => (
            <Card key={s.title} className="group overflow-hidden rounded-2xl border-0 bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-60 transition-opacity group-hover:opacity-70" />
                <div className="absolute bottom-0 left-0 p-6">
                   <div className="mb-2 h-1 w-12 rounded-full bg-[color:var(--brand-yellow)]" />
                   <h3 className="text-xl font-bold text-white leading-tight">{s.title}</h3>
                </div>
              </div>
              <CardContent className="p-6 md:p-8">
                <p className="text-slate-600 leading-relaxed">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
