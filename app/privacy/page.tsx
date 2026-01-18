import type { Metadata } from "next";

import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Megamix Chemicals privacy policy."
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Legal"
          title="Privacy Policy"
          description="This page outlines how Megamix Chemicals collects and uses information on this website."
        />

        <div className="mt-10 space-y-6 rounded-xl border border-slate-200 bg-white p-8 shadow-card">
          <p className="text-sm leading-7 text-slate-700">
            Megamix Chemicals respects your privacy. This Privacy Policy explains what information we collect, how we use it,
            and the choices you have.
          </p>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-[color:var(--brand-navy)]">Information we collect</h2>
            <p className="text-sm leading-7 text-slate-700">
              If you contact us using the form, we may collect your name, phone number, email address, and message content.
              We may also collect basic analytics data (such as pages visited and device type) to improve the site.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-[color:var(--brand-navy)]">How we use information</h2>
            <p className="text-sm leading-7 text-slate-700">
              We use your information to respond to inquiries, provide quotes, offer technical support, and improve customer service.
              We do not sell your personal information.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-[color:var(--brand-navy)]">Data retention</h2>
            <p className="text-sm leading-7 text-slate-700">
              We retain inquiry data only as long as needed to respond and for reasonable business records.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-[color:var(--brand-navy)]">Third-party services</h2>
            <p className="text-sm leading-7 text-slate-700">
              If you embed a map or external content, third-party providers may collect data according to their policies.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-base font-semibold text-[color:var(--brand-navy)]">Contact</h2>
            <p className="text-sm leading-7 text-slate-700">
              For privacy questions, email Megamixchemicals@gmail.com.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>
      </div>
    </section>
  );
}
