import type { Metadata } from "next";
import MenuClient from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu | Café VanaBella - Pure Veg Café in Pimple Nilakh, Pune",
  description:
    "Explore Café VanaBella's menu — artisan coffee, chef special sandwiches, wraps, and more. 100% pure vegetarian dishes made with organic, farm-fresh ingredients.",
  alternates: {
    canonical: "https://www.cafevanabella.com/menu",
  },
  openGraph: {
    title: "Menu | Café VanaBella - Pure Veg Café in Pimple Nilakh, Pune",
    description:
      "Explore Café VanaBella's menu — artisan coffee, chef special sandwiches, wraps, and more. 100% pure vegetarian dishes made with organic, farm-fresh ingredients.",
    url: "https://www.cafevanabella.com/menu",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Café VanaBella Pure Veg Menu in Pimple Nilakh Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Café VanaBella - Pure Veg Café in Pimple Nilakh, Pune",
    description:
      "Explore Café VanaBella's menu — artisan coffee, chef special sandwiches, wraps, and more. 100% pure vegetarian dishes made with organic, farm-fresh ingredients.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function MenuPage() {
  return <MenuClient />;
}