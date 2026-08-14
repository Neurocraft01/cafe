import type { Metadata } from "next";
import { Inter, Playfair_Display, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import Chatbot from "@/components/Chatbot";
import ConditionalLeaves from "@/components/ConditionalLeaves";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cafevanabella.com"),
  title: "Café VanaBella | Pure Veg Café & Coworking Space in Pimple Nilakh, Pune",
  description:
    "A 100% pure veg café in Pimple Nilakh, Pune offering artisan coffee, farm-to-table food, and a serene coworking space. Open daily 11 AM–11 PM. Reserve your table today.",
  keywords: [
    "Café VanaBella",
    "Pure Veg Café Pune",
    "Coworking Space Pimple Nilakh",
    "Vegetarian Café Pimple Nilakh",
    "Artisan Coffee Pune",
    "Café in Vishal Nagar",
    "Best Café in Pimple Nilakh",
    "Work from café Pune",
    "Private events café Pune"
  ],
  authors: [{ name: "Café VanaBella" }],
  creator: "Café VanaBella",
  publisher: "Café VanaBella",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        alt: "Café VanaBella logo - pure veg café Pimple Nilakh Pune",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png" },
    ],
    apple: "/logo.png",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Café VanaBella",
  "image": "https://www.cafevanabella.com/logo.jpg",
  "url": "https://www.cafevanabella.com/",
  "telephone": "+91-82620-22502",
  "servesCuisine": "Vegetarian, Café, Continental",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "3, GK Ln., near Srimal Hospital, Nandanwan Society, Vishal Nagar, Pimple Nilakh",
    "addressLocality": "Pimpri-Chinchwad",
    "addressRegion": "Maharashtra",
    "postalCode": "411027",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.5908",
    "longitude": "73.7997"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "11:00",
    "closes": "23:00"
  },
  "sameAs": [
    "https://www.instagram.com/cafevanabella"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cinzel.variable} font-sans antialiased bg-white text-black`}
      >
        <ConditionalLeaves />
        <Navbar />
        <main className="min-h-screen relative">
          {children}
        </main>
        <FloatingContact />
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}

