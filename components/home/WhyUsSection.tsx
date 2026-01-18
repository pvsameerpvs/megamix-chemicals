import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";

export function WhyUsSection() {
  return (
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
  );
}
