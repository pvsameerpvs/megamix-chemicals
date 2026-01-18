"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

// List of products to display in the hero
const heroProducts = [
  { id: "maxset", src: "/images/maxset.png", width: 140, height: 160 },
  { id: "sbr", src: "/images/sbr-latex.png", width: 140, height: 160 },
  { id: "acrylic", src: "/images/acrylic-waterproofing.png", width: 140, height: 160 },
  { id: "pucool", src: "/images/pu-coolcoat-waterproofing.png", width: 140, height: 160 },
  { id: "speedmix", src: "/images/speedmix.png", width: 120, height: 180 },
  { id: "setplus", src: "/images/set-plus.png", width: 120, height: 180 },
  { id: "ultramax", src: "/images/ultra-max.png", width: 120, height: 180 },
  { id: "slump", src: "/images/slump-retarder-admixture.png", width: 130, height: 170 },
  { id: "rmc", src: "/images/rmc-pce-admixture.png", width: 130, height: 170 },
  { id: "gypsum", src: "/images/gypsum-plaster.png", width: 100, height: 140 }
];

export function Hero() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-200">
      {/* Concrete Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_concrete_bg_1768723439861.png"
          alt="Concrete Background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay to dim result slightly for text readability */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center py-20 text-center">
        <div className="container space-y-12">
          
          

          {/* Heading Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-black uppercase text-slate-800 sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter mix-blend-multiply opacity-90">
              Chemical Solutions
            </h1>
            <h2 className="text-2xl font-black uppercase text-slate-600 sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mix-blend-multiply opacity-80">
              For Modern Construction
            </h2>
          </div>

          {/* Product Lineup - Simulated Group Photo */}
          <div className="relative mt-8 flex flex-wrap items-end justify-center gap-2 sm:gap-4 md:mt-16 lg:mt-20 px-4">
             {/* We manually map them a bit to "stack" visually or just spread them out */}
             {heroProducts.map((p) => (
               <div key={p.id} className="relative transition-transform hover:scale-110 hover:z-20">
                 <Image
                   src={p.src}
                   alt={p.id}
                   width={p.width}
                   height={p.height}
                   className="h-24 w-auto object-contain sm:h-32 md:h-40 lg:h-52 drop-shadow-2xl"
                 />
               </div>
             ))}
          </div>
          
          {/* CTA - Because it's a website hero */}
          <div className="pt-10">
            <Button asChild size="lg" className="bg-[color:var(--brand-navy)] h-12 px-8 text-lg hover:bg-[color:var(--brand-navy)]/90 shadow-xl">
               <Link href="/products">View All Products</Link>
            </Button>
          </div>

          {/* Website URL text like in the image */}
        

        </div>
      </div>
    </section>
  );
}
