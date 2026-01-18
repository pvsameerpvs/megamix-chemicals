"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "sonner";

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
    <div>
      <section className="py-16 sm:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Talk to our sales & technical team"
                description="Share your requirement and we’ll recommend the right solution, dosage, and application guidance."
              />

              <div className="rounded-xl bg-[color:var(--brand-navy)] p-6 text-white shadow-card">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-white/70">
                  Contact details
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p className="text-white/80">{company.address}</p>
                  <p>
                    <a className="font-semibold hover:underline" href={`tel:${company.phone}`}>
                      {company.phone}
                    </a>
                  </p>
                  <p>
                    <a className="font-semibold hover:underline" href={`mailto:${company.email}`}>
                      {company.email}
                    </a>
                  </p>
                </div>
                <Separator className="my-6 bg-white/15" />
                <div className="flex items-start gap-3">
                  <Image src="/images/icon-support.svg" alt="Support" width={36} height={36} />
                  <div>
                    <p className="text-sm font-semibold">Fast response</p>
                    <p className="text-sm text-white/80">
                      We typically respond within one business day.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
                  Google Map
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Embed your Google Map here (placeholder section).
                </p>
                <div className="mt-4 h-48 rounded-xl border border-slate-200 bg-white" aria-label="Map placeholder" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <Card className="overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
                    Send a message
                  </p>
                  <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--brand-navy)]">
                    Contact Sales
                  </h1>
                  <p className="mt-2 text-sm text-slate-600">
                    Fill the form below — no login required.
                  </p>

                  <form onSubmit={onSubmit} className="mt-8 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-800" htmlFor="name">
                          Name
                        </label>
                        <Input
                          id="name"
                          required
                          value={form.name}
                          onChange={(e) => update("name", e.target.value)}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-800" htmlFor="phone">
                          Phone
                        </label>
                        <Input
                          id="phone"
                          required
                          value={form.phone}
                          onChange={(e) => update("phone", e.target.value)}
                          placeholder="Phone number"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-800" htmlFor="email">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-800" htmlFor="message">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        required
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        placeholder="Tell us about your project, concrete grade, quantity, or waterproofing area..."
                      />
                    </div>

                    <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs text-slate-500">
                        By submitting, you agree we can contact you about your request.
                      </p>
                      <Button type="submit" variant="cta" size="lg" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Message"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
