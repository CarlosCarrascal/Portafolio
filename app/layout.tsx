import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Carrascal | Full-Stack Developer",
  description: "Full-Stack Developer especializado en Next.js, Node.js, MongoDB y Flutter. Construyo aplicaciones web y móviles escalables y accesibles.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "Node.js", "Flutter", "TypeScript", "MongoDB"],
  authors: [{ name: "Carlos Carrascal" }],
  openGraph: {
    title: "Carlos Carrascal | Full-Stack Developer",
    description: "Full-Stack Developer especializado en Next.js, Node.js, MongoDB y Flutter.",
    url: "https://tudominio.com",
    siteName: "Carlos Carrascal Portfolio",
    locale: "es_PE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
