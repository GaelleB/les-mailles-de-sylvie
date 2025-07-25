import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Les Mailles de Sylvie - Créations tricot artisanales",
  description: "Découvrez l'univers chaleureux du tricot de Sylvie : pulls, couvertures, écharpes et créations uniques faites main avec amour.",
  keywords: "tricot, artisanal, pulls, écharpes, couvertures, fait main, laine, créations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="pastel">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-pink-50 via-blue-50 to-yellow-50 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}