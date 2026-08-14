import type { Metadata } from "next";
import CoworkingClient from "./CoworkingClient";

export const metadata: Metadata = {
  title: "Coworking Space | Café VanaBella - Pimple Nilakh, Pune",
  description:
    "Work from Café VanaBella's coworking space in Pimple Nilakh, Pune. High-speed fiber internet, a calm green environment, and great coffee on tap.",
  alternates: {
    canonical: "https://www.cafevanabella.com/coworking",
  },
  openGraph: {
    title: "Coworking Space | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Work from Café VanaBella's coworking space in Pimple Nilakh, Pune. High-speed fiber internet, a calm green environment, and great coffee on tap.",
    url: "https://www.cafevanabella.com/coworking",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Coworking Space at Café VanaBella Pimple Nilakh Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coworking Space | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Work from Café VanaBella's coworking space in Pimple Nilakh, Pune. High-speed fiber internet, a calm green environment, and great coffee on tap.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function CoworkingPage() {
  return <CoworkingClient />;
}
