import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Mailles de Sylvie - Créations Tricot Artisanales Made in France",
  description: "✨ Découvrez l'univers chaleureux de Sylvie : pulls tricotés main, couvertures douillettes, écharpes uniques. 20 ans d'expérience, créations sur-mesure, livraison France. Artisanat français authentique.",
  keywords: [
    "tricot artisanal",
    "pulls faits main", 
    "écharpes tricot",
    "couvertures laine",
    "créations sur mesure",
    "artisan tricoteur France",
    "Sylvie tricoteuse",
    "laine naturelle",
    "tricot traditionnel",
    "cadeau fait main",
    "mode éthique",
    "savoir-faire français"
  ].join(", "),
  authors: [{ name: "Sylvie - Les Mailles de Sylvie" }],
  creator: "Sylvie",
  publisher: "Les Mailles de Sylvie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://les-mailles-de-sylvie.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Les Mailles de Sylvie - Tricot Artisanal Authentique",
    description: "Créations tricot uniques faites main avec 20 ans d'expérience. Pulls, écharpes, couvertures sur-mesure. Artisanat français authentique.",
    url: 'https://les-mailles-de-sylvie.vercel.app',
    siteName: 'Les Mailles de Sylvie',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Les Mailles de Sylvie - Créations tricot artisanales',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Mailles de Sylvie - Tricot Artisanal',
    description: 'Créations tricot uniques faites main avec passion',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'Artisanat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="dark-pastel">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-800 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}