import type { Metadata } from "next";
import ReservationsClient from "./ReservationsClient";

export const metadata: Metadata = {
  title: "Reserve a Table | Café VanaBella - Pimple Nilakh, Pune",
  description:
    "Book your table at Café VanaBella, Pune's pure veg urban oasis café. Quick and easy online reservation for lunch, dinner, or coworking sessions.",
  alternates: {
    canonical: "https://www.cafevanabella.com/reservations",
  },
  openGraph: {
    title: "Reserve a Table | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Book your table at Café VanaBella, Pune's pure veg urban oasis café. Quick and easy online reservation for lunch, dinner, or coworking sessions.",
    url: "https://www.cafevanabella.com/reservations",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Book a Table at Café VanaBella Pimple Nilakh Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reserve a Table | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Book your table at Café VanaBella, Pune's pure veg urban oasis café. Quick and easy online reservation for lunch, dinner, or coworking sessions.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function ReservationsPage() {
  return <ReservationsClient />;
}
