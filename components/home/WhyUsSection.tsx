import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function WhyUsSection() {
  return (
    <section className="relative w-full overflow-hidden py-24 lg:py-32">
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
          <Image
            src="/images/why_us_bg_1768724879676.png"
            alt="Megamix Manufacturing Facility"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[2px]" />
       </div>

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left Column: Stats & Authority */}
           <div className="order-2 lg:order-1">
             <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md lg:p-10">
                <div className="mb-8 border-b border-white/10 pb-8">
                   <h3 className="text-3xl font-bold text-white mb-2">Industrial Scale.</h3>
                   <h3 className="text-3xl font-bold text-[color:var(--brand-yellow)]">Precision Quality.</h3>
                   <p className="mt-4 text-slate-300 leading-relaxed">
                     Megamix chemicals are engineered to standards that exceed industry norms. Our facility combines automated production with rigorous lab testing for every single batch.
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                   <div>
                      <p className="text-4xl font-bold text-white">100%</p>
                      <p className="text-sm font-medium text-slate-400 mt-1 uppercase tracking-wider">Quality Tested</p>
                   </div>
                   <div>
                      <p className="text-4xl font-bold text-white">24/7</p>
                      <p className="text-sm font-medium text-slate-400 mt-1 uppercase tracking-wider">Site Support</p>
                   </div>
                   <div>
                      <p className="text-4xl font-bold text-white">50+</p>
                      <p className="text-sm font-medium text-slate-400 mt-1 uppercase tracking-wider">Major Projects</p>
                   </div>
                   <div>
                      <p className="text-4xl font-bold text-white">ISO</p>
                      <p className="text-sm font-medium text-slate-400 mt-1 uppercase tracking-wider">Certified</p>
                   </div>
                </div>
             </div>
           </div>

          {/* Right Column: Content & Features */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                Why Choose Megamix
              </p>
              <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl leading-tight">
                Confidence from <br /> formulation to finish.
              </h2>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-lg">
                Our approach balances advanced chemistry with practical site support — so your teams build faster, safer, and better.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Consistent Sourcing", desc: "Premium raw materials ensuring stable product performance." },
                { title: "Coastal Optimization", desc: "Formulations specifically designed for humid and saline environments." },
                { title: "End-to-End Support", desc: "From mix design in the lab to application training on-site." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-yellow)]/10">
                    <Check className="h-6 w-6 text-[color:var(--brand-yellow)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button asChild variant="cta" size="lg" className="h-14 px-8 text-base shadow-xl shadow-yellow-500/20">
                <Link href="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
