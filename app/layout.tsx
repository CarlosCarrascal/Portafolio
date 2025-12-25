import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google"; // Asegúrate de tener tus fuentes aquí
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader";     // Nuevo
import CustomCursor from "@/components/CustomCursor"; // Nuevo

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Si usas otra fuente display, defínela aquí, si no, borra la referencia a Calistoga
// const calistoga = Calistoga({ weight: "400", subsets: ["latin"], variable: "--font-cal" });

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
      <body className={`${inter.variable} bg-background text-text-main antialiased`}>
        {/* Componentes Globales de UI */}
        <Preloader />
        <CustomCursor />
        
        {/* Layout Principal */}
        <Header />
        
        <main className="min-h-screen relative overflow-x-hidden">
          {children}
        </main>

        <Footer /> 
      </body>
    </html>
  );
}