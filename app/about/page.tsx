import type { Metadata } from "next";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Megamix Chemicals, our commitment to quality control, R&D, and technical support."
};

const visionCards = [
  {
    title: "Vision",
    description:
      "Be a trusted partner for contractors, precast yards, and RMC plants through dependable chemistry and responsive support."
  },
  {
    title: "Commitment",
    description:
      "Maintain consistent quality with process control, documented testing, and continuous improvement in every batch."
  },
  {
    title: "Customer Focus",
    description:
      "Recommend the right product and dosage based on project conditions, timelines, and performance targets."
  }
];

const qcPoints = [
  "Incoming raw-material checks and controlled sourcing",
  "Batch-wise quality testing for consistency and performance",
  "R&D-driven formulation improvements for field conditions",
  "Documentation and process discipline across production"
];

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[color:var(--brand-navy)]">
        <div className="container py-16 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                About Megamix
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Built on chemistry. Driven by performance.
              </h1>
              <p className="mt-4 text-lg text-white/80">
                We develop construction chemical solutions designed for real job-site needs—strength, reliability, and long-term durability.
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-card">
                <div className="relative h-[280px] sm:h-[340px]">
                  <Image
                    src="/images/about-hero.svg"
                    alt="Megamix Chemicals manufacturing and quality control"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <SectionHeading
            eyebrow="About Us"
            title="Who we are"
            description="A premium industrial manufacturer focused on formulation quality, consistent production, and technical support."
          />

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-7 shadow-card">
            <p className="text-sm leading-7 text-slate-700 whitespace-pre-line">
              {`[include full About Us text as provided]`}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {visionCards.map((c) => (
              <Card
                key={c.title}
                className="transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <CardContent className="p-7 space-y-3">
                  <p className="text-lg font-semibold text-[color:var(--brand-navy)]">
                    {c.title}
                  </p>
                  <p className="text-sm text-slate-600">{c.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container">
          <SectionHeading
            eyebrow="Capability"
            title="Quality control & R&D"
            description="Structured testing, controlled processes, and continuous improvement for reliable, premium outputs."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7 space-y-4">
              {qcPoints.map((p) => (
                <div
                  key={p}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-700">{p}</p>
                </div>
              ))}

              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold tracking-[0.18em] uppercase text-slate-500">
                  Technical support highlight
                </p>
                <p className="mt-3 text-base font-semibold text-[color:var(--brand-navy)]">
                  On-site guidance that protects your schedule
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  From admixture selection to waterproofing system guidance, we support contractors and engineers with practical recommendations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Card className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/quality-lab.svg"
                    alt="Quality control and R&D"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-7">
                  <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
                    Partner-ready documentation
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    We emphasize consistent production records and testing to support predictable performance in the field.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
