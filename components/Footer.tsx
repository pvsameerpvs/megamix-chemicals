import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const company = {
  name: "Megamix Chemicals",
  address: "GODAMBU ROAD MUKKAM KOZHIKKODE KERALA INDIA",
  phone: "+919747843000",
  email: "Megamixchemicals@gmail.com",
  website: "www.megamixchemicals.com"
};

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6 space-y-3">
            <p className="text-sm font-semibold text-[color:var(--brand-navy)]">
              {company.name}
            </p>
            <p className="text-sm text-slate-600 max-w-md">
              Premium construction chemical solutions engineered for strength, durability, and performance.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
              Quick Links
            </p>
            <div className="grid gap-2 text-sm">
              <Link href="/products" className="text-slate-700 hover:text-[color:var(--brand-navy)]">
                Products
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-[color:var(--brand-navy)]">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-[color:var(--brand-navy)]">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-500">
              Contact
            </p>
            <div className="space-y-1 text-sm text-slate-700">
              <p>{company.address}</p>
              <p>
                <a className="hover:text-[color:var(--brand-navy)]" href={`tel:${company.phone}`}>
                  {company.phone}
                </a>
              </p>
              <p>
                <a className="hover:text-[color:var(--brand-navy)]" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
              <p>
                <a
                  className="hover:text-[color:var(--brand-navy)]"
                  href={`https://${company.website}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-[color:var(--brand-navy)]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
