import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/preloader";
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
      <body className={`${inter.variable} text-text-main antialiased overflow-x-hidden relative`}>
        
        {/* === FONDO UNIFICADO (KINETIC/EDITORIAL) === */}
        <div className="fixed inset-0 z-[-1] w-full h-full pointer-events-none overflow-hidden">
            
            {/* 1. Color Base */}
            <div className="absolute inset-0 bg-[#020617]" />

            {/* 2. Luces Ambientales (Blobs) */}
            {/* Al estar en fixed, se quedan sutilmente mientras bajas */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40 mix-blend-screen animate-pulse-slow" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-30" />
            
            {/* 3. (Opcional) Capa de Ruido/Grano para textura de papel */}
            {/* Si tienes una imagen noise.png en public, descomenta la siguiente línea: */}
            {/* <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('/noise.png')] bg-repeat" /> */}
        </div>

        <Preloader />
        <CustomCursor />
        
        <Header />
        
        {/* Main transparente */}
        <main className="min-h-screen relative">
          {children}
        </main>

        <Footer /> 
      </body>
    </html>
  );
}