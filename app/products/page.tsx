import type { Metadata } from "next";

import ProductsClient from "./products-client";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Megamix Chemicals product portfolio. View details in a modal without leaving the page."
};

export default function ProductsPage() {
  return <ProductsClient />;
}
