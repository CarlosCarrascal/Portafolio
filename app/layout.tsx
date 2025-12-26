import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Eliminada Calistoga si no se usa
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader"; // Ojo: tu archivo se llama 'preloader.tsx' (minúscula)
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Carlos Carrascal | Full Stack Developer",
  description: "Portafolio profesional de Carlos Carrascal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Movemos overflow-x-hidden aquí para proteger el sticky */}
      <body className={`${inter.variable} bg-background text-text-main antialiased overflow-x-hidden`}>
        <Preloader />
        <CustomCursor />
        
        <Header />
        
        {/* Main limpio para que el sticky funcione perfecto */}
        <main className="min-h-screen relative">
          {children}
        </main>

        <Footer /> 
      </body>
    </html>
  );
}