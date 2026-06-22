import type { Metadata } from "next";
import "./globals.css";

import { Bebas_Neue, Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebas_neue = Bebas_Neue({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-bebas_neue",
});

const inter = Inter({
  subsets: ["latin", "greek"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Π.Ο. Ξηροκρήνης | Ακαδημία Ποδοσφαίρου",
    template: "%s | Π.Ο. Ξηροκρήνης Academy",
  },
  description:
    "Η Ακαδημία Ποδοσφαίρου του Π.Ο. Ξηροκρήνης. Από το 1943 διαμορφώνουμε τους αυριανούς ποδοσφαιριστές. Τμήματα Κ8, Κ10, Κ12 για αγόρια και κορίτσια. Εγγραφές ανοιχτές.",
  keywords: [
    "ακαδημία ποδοσφαίρου",
    "Π.Ο. Ξηροκρήνης",
    "POX Academy",
    "παιδικό ποδόσφαιρο",
    "Θεσσαλονίκη",
    "αθλητισμός",
    "ποδοσφαιρική εκπαίδευση",
    "youth football",
    "football academy",
  ],
  authors: [
    {
      name: "Π.Ο. Ξηροκρήνης",
      url: "https://www.instagram.com/pox_academy/",
    },
  ],
  creator: "Π.Ο. Ξηροκρήνης",
  publisher: "Π.Ο. Ξηροκρήνης",
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: "Π.Ο. Ξηροκρήνης | Ακαδημία Ποδοσφαίρου",
    title: "Π.Ο. Ξηροκρήνης | Ακαδημία Ποδοσφαίρου",
    description:
      "Η Ακαδημία Ποδοσφαίρου του Π.Ο. Ξηροκρήνης. Από το 1943 διαμορφώνουμε τους αυριανούς ποδοσφαιριστές.",
    images: [
      {
        url: "/assets/team-logo-v3.png",
        width: 1200,
        height: 630,
        alt: "Π.Ο. Ξηροκρήνης Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Π.Ο. Ξηροκρήνης | Ακαδημία Ποδοσφαίρου",
    description:
      "Η Ακαδημία Ποδοσφαίρου του Π.Ο. Ξηροκρήνης. Από το 1943 διαμορφώνουμε τους αυριανούς ποδοσφαιριστές.",
    images: ["/assets/team-logo-v3.png"],
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚽</text></svg>",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Sports",
  applicationName: "POX Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el">
      <body className={`${bebas_neue.variable} ${inter.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
