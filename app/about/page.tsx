import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | Café VanaBella - Our Story in Pimple Nilakh, Pune",
  description:
    "Discover the story behind Café VanaBella, Pune's nature-inspired urban oasis. Learn about our philosophy of blending fresh, organic food with a tranquil dining experience.",
  alternates: {
    canonical: "https://www.cafevanabella.com/about",
  },
  openGraph: {
    title: "About Us | Café VanaBella - Our Story in Pimple Nilakh, Pune",
    description:
      "Discover the story behind Café VanaBella, Pune's nature-inspired urban oasis. Learn about our philosophy of blending fresh, organic food with a tranquil dining experience.",
    url: "https://www.cafevanabella.com/about",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "About Café VanaBella Pure Veg Café Pimple Nilakh Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Café VanaBella - Our Story in Pimple Nilakh, Pune",
    description:
      "Discover the story behind Café VanaBella, Pune's nature-inspired urban oasis. Learn about our philosophy of blending fresh, organic food with a tranquil dining experience.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
