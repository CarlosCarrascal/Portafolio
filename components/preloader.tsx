"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["System", "Design", "Code", "Stack", "Future"];

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1);
    }, 400); // Cambio de palabra
  }, [index]);

  useEffect(() => {
    // Bloquear scroll
    document.body.style.overflow = "hidden";
    
    // Simular carga
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timeout);
  }, []);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} 0 Q${dimension.width / 2} 0 0 0 L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => {
        document.body.style.overflow = "auto";
        window.scrollTo(0, 0);
    }}>
      {isLoading && (
        <motion.div
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.1, delay: 0.9 } } // Espera a que termine la curva
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#0f0f0f] cursor-wait"
        >
          {/* Contenido Minimalista */}
          <div className="relative z-50 w-full h-full p-10 flex flex-col justify-between text-white">
            {/* Top: Palabras cambiantes */}
            <div className="text-xl font-mono flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="opacity-50">Initializing:</span> 
                <motion.span 
                    key={index} 
                    initial={{ y: 20, opacity: 0 }} 
                    animate={{ y: 0, opacity: 1 }} 
                    className="font-bold text-white"
                >
                    {words[index]}...
                </motion.span>
            </div>

            {/* Bottom: Porcentaje Gigante */}
            <h1 className="text-[15vw] leading-none font-bold text-white/10 select-none absolute bottom-0 right-0 pointer-events-none">
                {index * 20 + 20}%
            </h1>
          </div>

          {/* Curva SVG */}
          <svg className="absolute top-0 left-0 w-full h-[120%] pointer-events-none fill-[#0f0f0f]">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            ></motion.path>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}