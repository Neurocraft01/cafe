import type { Metadata } from "next";
import CelebrationClient from "./CelebrationClient";

export const metadata: Metadata = {
  title: "Celebrations & Private Events | Café VanaBella - Pimple Nilakh, Pune",
  description:
    "Host your birthday, anniversary, or private celebration at Café VanaBella, Pune. A serene, nature-inspired venue with customizable menus for your special day.",
  alternates: {
    canonical: "https://www.cafevanabella.com/celebration",
  },
  openGraph: {
    title: "Celebrations & Private Events | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Host your birthday, anniversary, or private celebration at Café VanaBella, Pune. A serene, nature-inspired venue with customizable menus for your special day.",
    url: "https://www.cafevanabella.com/celebration",
    siteName: "Café VanaBella",
    images: [
      {
        url: "https://www.cafevanabella.com/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Host Celebrations & Events at Café VanaBella Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebrations & Private Events | Café VanaBella - Pimple Nilakh, Pune",
    description:
      "Host your birthday, anniversary, or private celebration at Café VanaBella, Pune. A serene, nature-inspired venue with customizable menus for your special day.",
    images: ["https://www.cafevanabella.com/logo.jpg"],
  },
};

export default function CelebrationPage() {
  return <CelebrationClient />;
}
