import type { Metadata } from "next";

import ContactClient from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Megamix Chemicals for product recommendations, technical support, and quotes."
};

export default function ContactPage() {
  return <ContactClient />;
}
