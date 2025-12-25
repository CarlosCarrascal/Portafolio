import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tu Nombre | Full-Stack Developer",
  description: "Portafolio profesional de Full-Stack Developer especializado en Next.js, React, Node.js y Flutter.",
  openGraph: {
    title: "Tu Nombre | Full-Stack Developer",
    description: "Portafolio profesional con proyectos full-stack y mobile",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Tu Nombre Portfolio",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tu Nombre | Full-Stack Developer",
    description: "Portafolio profesional con proyectos full-stack y mobile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-white text-gray-900 antialiased">
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
