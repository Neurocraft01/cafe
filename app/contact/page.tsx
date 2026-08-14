import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact & Location | Café VanaBella - Pimple Nilakh, Pune",
  description:
    "Visit Café VanaBella at Vishal Nagar, Pimple Nilakh, Pune. Call, WhatsApp, or get directions. Open daily 11 AM–11 PM.",
  alternates: {
    canonical: "https://www.cafevanabella.com/contact",
  },
  openGraph: {
    title: "Contact & Location | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Visit Café VanaBella at Vishal Nagar, Pimple Nilakh, Pune. Call, WhatsApp, or get directions. Open daily 11 AM–11 PM.",
    url: "https://www.cafevanabella.com/contact",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Contact and Visit Café VanaBella in Pimple Nilakh Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Location | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Visit Café VanaBella at Vishal Nagar, Pimple Nilakh, Pune. Call, WhatsApp, or get directions. Open daily 11 AM–11 PM.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
