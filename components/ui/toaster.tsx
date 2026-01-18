"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "bg-white border border-slate-200 shadow-card text-slate-900",
          description: "text-slate-600",
          actionButton:
            "bg-[color:var(--brand-yellow)] text-[color:var(--brand-navy)]",
          cancelButton: "bg-slate-100 text-slate-900"
        }
      }}
    />
  );
}
