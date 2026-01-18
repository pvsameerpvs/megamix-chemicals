import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

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

export function StrengthsSection() {
  return (
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
  );
}
