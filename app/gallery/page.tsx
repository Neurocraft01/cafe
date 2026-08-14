import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Café VanaBella - Pimple Nilakh, Pune",
  description:
    "Take a visual tour of Café VanaBella's serene interiors, artisan coffee, and signature dishes at our Pimple Nilakh café in Pune.",
  alternates: {
    canonical: "https://www.cafevanabella.com/gallery",
  },
  openGraph: {
    title: "Gallery | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Take a visual tour of Café VanaBella's serene interiors, artisan coffee, and signature dishes at our Pimple Nilakh café in Pune.",
    url: "https://www.cafevanabella.com/gallery",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Café VanaBella Visual Tour Pimple Nilakh Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Take a visual tour of Café VanaBella's serene interiors, artisan coffee, and signature dishes at our Pimple Nilakh café in Pune.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
