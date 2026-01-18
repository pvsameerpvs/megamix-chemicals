"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { Mail, MapPin, Phone, ArrowRight, Building2, Clock } from "lucide-react";

import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const company = {
  address: "GODAMBU ROAD MUKKAM KOZHIKKODE KERALA INDIA",
  phone: "+919747843000",
  email: "Megamixchemicals@gmail.com"
};

type FormState = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export default function ContactClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // No backend: simulate a short submit and show toast.
    await new Promise((r) => setTimeout(r, 400));

    toast.success("Message sent", {
      description: "Thanks — our team will contact you shortly."
    });

    setForm({ name: "", phone: "", email: "", message: "" });
    setSubmitting(false);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-10 lg:py-20">
      <div className="container">
        <div className="grid overflow-hidden rounded-2xl shadow-2xl lg:grid-cols-2">
          
          {/* Left Side: Contact Info & Branding */}
          <div className="relative bg-[color:var(--brand-navy)] p-10 text-white lg:p-14 flex flex-col justify-between">
            {/* Background Texture/Image */}
            <div className="absolute inset-0 z-0 opacity-20">
               <Image 
                 src="/images/why_us_bg_1768724879676.png" 
                 alt="Background" 
                 fill 
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-[color:var(--brand-navy)] mix-blend-multiply" />
            </div>

            <div className="relative z-10 space-y-8">
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--brand-yellow)]">
                  Contact Us
                </p>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Let's Build Together
                </h2>
                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                  Have a project in mind? Looking for product recommendations or technical support? Our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <MapPin className="h-6 w-6 text-[color:var(--brand-yellow)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Our Facility</h3>
                    <p className="mt-1 text-sm text-slate-300 max-w-xs">{company.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <Phone className="h-6 w-6 text-[color:var(--brand-yellow)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Call Us</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">
                        {company.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-400 mt-1">Mon-Sat from 9am to 6pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm">
                    <Mail className="h-6 w-6 text-[color:var(--brand-yellow)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email Us</h3>
                    <p className="mt-1 text-sm text-slate-300">
                      <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">
                        {company.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-10">
               <div className="flex items-center gap-2 text-sm text-[color:var(--brand-yellow)]">
                  <Clock className="w-4 h-4" />
                  <span>Fast Response Guarantee</span>
               </div>
               <p className="text-xs text-slate-400 mt-1 pl-6">
                  We typically respond to inquiries within 24 hours.
               </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-10 lg:p-14">
            <div className="space-y-6">
               <div className="space-y-2">
                 <h3 className="text-2xl font-bold text-[color:var(--brand-navy)]">Send a Message</h3>
                 <p className="text-slate-600">
                   Fill out the form below and we'll get back to you shortly.
                 </p>
               </div>

               <form onSubmit={onSubmit} className="space-y-5">
                 <div className="grid gap-5 sm:grid-cols-2">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-slate-700" htmlFor="name">
                       Full Name
                     </label>
                     <Input
                       id="name"
                       required
                       value={form.name}
                       onChange={(e) => update("name", e.target.value)}
                       placeholder="John Doe"
                       className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                     />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                       Phone Number
                     </label>
                     <Input
                       id="phone"
                       required
                       value={form.phone}
                       onChange={(e) => update("phone", e.target.value)}
                       placeholder="+91 90000 00000"
                       className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                     />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700" htmlFor="email">
                     Email Address
                   </label>
                   <Input
                     id="email"
                     type="email"
                     required
                     value={form.email}
                     onChange={(e) => update("email", e.target.value)}
                     placeholder="john@company.com"
                     className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-colors"
                   />
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-700" htmlFor="message">
                     Project Requirements
                   </label>
                   <Textarea
                     id="message"
                     required
                     value={form.message}
                     onChange={(e) => update("message", e.target.value)}
                     placeholder="Tell us about your project, required products, or specific challenges..."
                     className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-colors resize-none p-4"
                   />
                 </div>

                 <Button 
                   type="submit" 
                   variant="cta" 
                   size="lg" 
                   disabled={submitting}
                   className="w-full h-12 text-base shadow-lg shadow-yellow-500/20"
                 >
                   {submitting ? "Sending..." : "Send Message"}
                   {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
                 </Button>

                 <p className="text-center text-xs text-slate-500 mt-4">
                    Your details are safe with us. We value your privacy.
                 </p>
               </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
