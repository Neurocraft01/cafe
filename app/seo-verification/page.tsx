import type { Metadata } from "next";
import SeoVerificationClient from "./SeoVerificationClient";

export const metadata: Metadata = {
  title: "SEO Health & Verification Portal | Café VanaBella",
  description:
    "Live SEO implementation and verification report for Café VanaBella. Inspect Google Search snippets, OpenGraph cards, Schema JSON-LD, and image metadata.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SeoVerificationPage() {
  return <SeoVerificationClient />;
}
