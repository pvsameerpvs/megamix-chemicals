import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, FlaskConical, HardHat, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Megamix Chemicals - A leader in advanced construction chemical manufacturing, committed to quality, innovation, and site performance."
};

const values = [
  {
    title: "Vision",
    description: "To be the most trusted partner for the construction industry, delivering chemistry that builds stronger, longer-lasting structures.",
    icon: FlaskConical
  },
  {
    title: "Commitment",
    description: "Unwavering dedication to quality control. We ensure every batch meets rigorous standards before it leaves our facility.",
    icon: Check
  },
  {
    title: "Collaboration",
    description: "We work alongside engineers and contractors, providing on-site expertise to solve complex challenges.",
    icon: Users
  }
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about_hero_facility_1768725229589.png"
            alt="Megamix Manufacturing Plant"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 text-center">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] uppercase text-[color:var(--brand-yellow)]">
            About Megamix Chemicals
          </p>
          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Built on Chemistry.<br />
            <span className="text-slate-300">Driven by Performance.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 leading-relaxed">
            We develop advanced construction chemical solutions designed for real job-site needs—engineered for strength, reliability, and long-term durability.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v) => (
              <Card key={v.title} className="relative overflow-hidden border-0 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl bg-white group">
                <CardContent className="p-8 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[color:var(--brand-navy)]/5 text-[color:var(--brand-navy)] transition-colors group-hover:bg-[color:var(--brand-navy)] group-hover:text-white">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{v.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </CardContent>
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[color:var(--brand-navy)] to-[color:var(--brand-yellow)] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
             <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl group">
               <Image
                 src="/images/about_lab_testing_1768725245138.png"
                 alt="Quality Control Laboratory"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-gradient-to-tr from-[color:var(--brand-navy)]/80 to-transparent opacity-60" />
               <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <FlaskConical className="h-6 w-6 text-[color:var(--brand-yellow)]" />
                    <p className="font-bold tracking-wider uppercase text-sm">R&D Center</p>
                  </div>
                  <p className="text-lg font-medium opacity-90">Precision testing for every batch.</p>
               </div>
             </div>

             <div className="space-y-8">
               <SectionHeading 
                 eyebrow="Our Process" 
                 title="Science meets Site Reality"
                 description="We don't just mix chemicals; we engineer solutions. Our rigorous quality control ensures that every product performs exactly as specified, even in challenging conditions."
               />
               
               <div className="space-y-5">
                 {[
                   "Rigorous raw material inspection and sourcing",
                   "Advanced batch testing for consistency",
                   "Custom formulations for coastal and tropical climates",
                   "Full traceability and comprehensive documentation"
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4 items-start">
                     <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-yellow)]/20 text-[color:var(--brand-navy)]">
                       <Check className="h-3.5 w-3.5" />
                     </div>
                     <p className="text-slate-700 font-medium">{item}</p>
                   </div>
                 ))}
               </div>

               <Button asChild variant="outline" size="lg" className="border-[color:var(--brand-navy)] text-[color:var(--brand-navy)] hover:bg-[color:var(--brand-navy)] hover:text-white">
                 <Link href="/products">View Our Solutions</Link>
               </Button>
             </div>
          </div>
        </div>
      </section>

      {/* Team & Support Section */}
      <section className="relative py-20 bg-[color:var(--brand-navy)] overflow-hidden">
        {/* Abstract shapes/bg */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-[color:var(--brand-yellow)]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="container relative z-10">
           <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="order-2 lg:order-1 space-y-8 text-white">
                <div>
                   <p className="text-sm font-bold tracking-[0.2em] uppercase text-[color:var(--brand-yellow)] mb-3">
                     Technical Support
                   </p>
                   <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                     Partners in Your Project's Success
                   </h2>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed">
                  We believe that great products need great support. Our team of engineers and technical experts works directly with you—from the design phase to the final pour—to ensure smooth execution and superior results.
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                   <div className="rounded-xl bg-white/5 p-5 border border-white/10">
                      <HardHat className="h-8 w-8 text-[color:var(--brand-yellow)] mb-3" />
                      <h4 className="font-bold text-lg mb-1">On-Site Training</h4>
                      <p className="text-sm text-slate-400">We train your team on proper application techniques.</p>
                   </div>
                   <div className="rounded-xl bg-white/5 p-5 border border-white/10">
                      <Users className="h-8 w-8 text-[color:var(--brand-yellow)] mb-3" />
                      <h4 className="font-bold text-lg mb-1">Mix Design Support</h4>
                      <p className="text-sm text-slate-400">Optimizing concrete mixes for specific project requirements.</p>
                   </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                 <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <Image
                      src="/images/about_team_meeting_1768725260842.png"
                      alt="Megamix Technical Team on Site"
                      fill
                      className="object-cover"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Legacy CTA */}
      <section className="py-20 bg-slate-50 text-center">
         <div className="container">
            <h2 className="text-3xl font-bold text-[color:var(--brand-navy)] sm:text-4xl mb-6">
              Ready to build better?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
              Contact our team today to discuss your project requirements and discover how Megamix can improve your construction outcomes.
            </p>
            <Button asChild size="lg" variant="cta" className="h-14 px-10 text-lg shadow-xl shadow-yellow-500/20">
               <Link href="/contact">Get in Touch</Link>
            </Button>
         </div>
      </section>
    </div>
  );
}
