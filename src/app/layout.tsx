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
  title: {
    default: "Les Mailles de Sylvie - Créations Tricot Artisanales Made in France",
    template: "%s | Les Mailles de Sylvie"
  },
  description: "✨ Portfolio tricot de Sylvie : 55 ans de passion pour créer pulls, écharpes et couvertures uniques. Découvrez un savoir-faire artisanal français authentique transmis de mère en fille.",
  keywords: [
    "tricot artisanal",
    "portfolio tricot", 
    "pulls faits main",
    "écharpes tricot",
    "couvertures laine",
    "artisan tricoteur France",
    "Sylvie tricoteuse",
    "laine naturelle",
    "tricot traditionnel",
    "savoir-faire français",
    "passion tricot",
    "créations uniques",
    "art textile",
    "heritage artisanal"
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
  icons: {
    apple: '/apple-touch-icon.svg',
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Les Mailles de Sylvie - Portfolio Tricot Artisanal",
    description: "✨ Portfolio tricot de Sylvie : 55 ans de passion pour créer des pièces uniques. Découvrez un savoir-faire artisanal français transmis de mère en fille.",
    url: 'https://les-mailles-de-sylvie.vercel.app',
    siteName: 'Les Mailles de Sylvie',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/apple-touch-icon.svg',
        width: 180,
        height: 180,
        alt: 'Les Mailles de Sylvie - Portfolio tricot artisanal avec pelote de laine et aiguilles',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Mailles de Sylvie - Portfolio Tricot',
    description: '✨ 55 ans de passion tricot : découvrez des créations uniques faites main avec amour et savoir-faire artisanal français',
    images: ['/apple-touch-icon.svg'],
    creator: '@LesMaillesDeSylvie',
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