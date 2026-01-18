import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-4xl font-bold text-[color:var(--brand-navy)]">404</h2>
      <p className="text-lg text-slate-600">Could not find requested resource</p>
      <Button asChild variant="cta" className="mt-4">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}
