"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Hello", "Hola", "Bonjour", "Ciao", "Olà", "Hallå", "Guten Tag", "Salam"];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ciclo de palabras
    if (index === words.length - 1) return;
    
    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 180); // Velocidad de cambio de palabra

    return () => clearTimeout(timeout);
  }, [index]);

  useEffect(() => {
    // Tiempo total de carga simulada
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos totales

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ top: 0 }}
          exit={{ 
            top: "-100vh", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any, delay: 0.2 } 
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] text-white overflow-hidden"
        >
          {/* Palabra Central */}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={index} // Importante para re-animar al cambiar
            className="text-5xl md:text-7xl font-bold tracking-tighter flex items-center gap-3"
          >
            <span className="w-3 h-3 rounded-full bg-primary inline-block"></span>
            {words[index]}
          </motion.p>
          
          {/* Indicador de progreso (Barra inferior minimalista) */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end text-sm text-gray-500 font-mono uppercase">
            <span>Loading Experience</span>
            <motion.span
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
            >
              {Math.min((index + 1) * 15, 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}