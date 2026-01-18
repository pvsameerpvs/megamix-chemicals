import type { Metadata } from "next";

import { Hero } from "@/components/Hero";
import { StrengthsSection } from "@/components/home/StrengthsSection";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { CtaSection } from "@/components/home/CtaSection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Advanced construction chemical solutions engineered for strength, durability, and performance."
};

export default function HomePage() {
  return (
    <div>
      <Hero />
      <StrengthsSection />
      <CategoriesSection />
      <WhyUsSection />
      <CtaSection />
    </div>
  );
}
