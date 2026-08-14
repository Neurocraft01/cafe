import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Café VanaBella | Pure Veg Café & Coworking Space in Pimple Nilakh, Pune",
  description:
    "A 100% pure veg café in Pimple Nilakh, Pune offering artisan coffee, farm-to-table food, and a serene coworking space. Open daily 11 AM–11 PM. Reserve your table today.",
  alternates: {
    canonical: "https://www.cafevanabella.com/",
  },
  openGraph: {
    title: "Café VanaBella | Pure Veg Café & Coworking Space in Pimple Nilakh, Pune",
    description:
      "Where nature meets flavor — a pure veg café, coworking space, and event venue in Pimple Nilakh, Pune.",
    url: "https://www.cafevanabella.com/",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Café VanaBella Pure Veg Café & Coworking Space in Pimple Nilakh, Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Café VanaBella | Pure Veg Café & Coworking Space in Pimple Nilakh, Pune",
    description:
      "Where nature meets flavor — a pure veg café, coworking space, and event venue in Pimple Nilakh, Pune.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function HomePage() {
  return <HomeClient />;
}
