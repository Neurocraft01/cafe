import type { Metadata } from "next";
import WorkshopClient from "./WorkshopClient";

export const metadata: Metadata = {
  title: "Workshops | Café VanaBella - Pimple Nilakh, Pune",
  description:
    "Join hands-on workshops and creative sessions at Café VanaBella, Pune. A relaxed, nature-filled space for learning, community, and connection.",
  alternates: {
    canonical: "https://www.cafevanabella.com/workshop",
  },
  openGraph: {
    title: "Workshops | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Join hands-on workshops and creative sessions at Café VanaBella, Pune. A relaxed, nature-filled space for learning, community, and connection.",
    url: "https://www.cafevanabella.com/workshop",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Workshops and Community Events at Café VanaBella Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshops | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Join hands-on workshops and creative sessions at Café VanaBella, Pune. A relaxed, nature-filled space for learning, community, and connection.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function WorkshopPage() {
  return <WorkshopClient />;
}
