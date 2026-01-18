import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin } from "lucide-react";

const company = {
  name: "Megamix Chemicals",
  address: "Godambu Road, Mukkam, Kozhikode, Kerala, India",
  phone: "+91 9747 843 000",
  email: "Megamixchemicals@gmail.com",
  website: "www.megamixchemicals.com"
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Our Products" },
  { href: "/contact", label: "Contact Sales" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="bg-[color:var(--brand-navy)] text-white">
      <div className="container pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-12 lg:gap-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-6">
             <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2">
                   <Image
                     src="/images/logo.png"
                     alt="Megamix Chemicals"
                     width={40}
                     height={40}
                   />
                </div>
                <div className="leading-none">
                  <p className="text-lg font-bold">Megamix Chemicals</p>
                  <p className="text-xs text-white/60 mt-1">Industrial Construction Solutions</p>
                </div>
             </div>
             
             <p className="text-slate-300 leading-relaxed max-w-sm">
               Engineering the future of construction with high-performance operational chemistry. Built for strength, designed for durability.
             </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-3 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[color:var(--brand-yellow)]">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3 text-sm">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className="text-slate-300 transition-colors hover:text-white hover:translate-x-1 inline-block"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4 lg:col-span-4 space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.15em] text-[color:var(--brand-yellow)]">
              Get in Touch
            </h4>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex gap-3 items-start">
                 <MapPin className="h-5 w-5 text-[color:var(--brand-yellow)] shrink-0 mt-0.5" />
                 <p className="leading-relaxed">{company.address}</p>
              </div>
              <div className="flex gap-3 items-center">
                 <Phone className="h-5 w-5 text-[color:var(--brand-yellow)] shrink-0" />
                 <a href={`tel:${company.phone}`} className="hover:text-white transition-colors">{company.phone}</a>
              </div>
              <div className="flex gap-3 items-center">
                 <Mail className="h-5 w-5 text-[color:var(--brand-yellow)] shrink-0" />
                 <a href={`mailto:${company.email}`} className="hover:text-white transition-colors">{company.email}</a>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col gap-4 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="/privacy" className="hover:text-white transition-colors">Terms of Service</Link>
             <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
