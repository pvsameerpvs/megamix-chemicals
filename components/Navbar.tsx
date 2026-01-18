"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Megamix Chemicals"
            width={48}
            height={48}
            priority
          />
          <div className="leading-tight">
            <p className="text-lg font-bold tracking-tight text-[color:var(--brand-navy)]">
              Megamix Chemicals
            </p>
            <p className="hidden text-xs text-slate-500 sm:block">
              Construction Chemical Manufacturing
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "text-sm font-medium text-slate-700 transition-colors hover:text-[color:var(--brand-navy)]",
                pathname === l.href && "text-[color:var(--brand-navy)]"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="cta" className="shadow-sm">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </nav>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pt-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/images/logo.png"
                    alt="Megamix Chemicals"
                    width={48}
                    height={48}
                  />
                  <div className="leading-tight">
                    <p className="text-base font-bold text-[color:var(--brand-navy)]">
                      Megamix Chemicals
                    </p>
                    <p className="text-xs text-slate-500">
                      Premium industrial solutions
                    </p>
                  </div>
                </div>

                <div className="grid gap-2">
                  {navLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-4 py-3 text-sm font-medium text-slate-800 hover:bg-slate-100",
                        pathname === l.href && "bg-slate-100"
                      )}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>

                <Button asChild variant="cta" className="w-full" onClick={() => setOpen(false)}>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
