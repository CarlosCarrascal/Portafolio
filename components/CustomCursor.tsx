"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Coordenadas
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Física muy suave para el seguidor (ajustado para que no "tiemble")
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver);

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* 1. SEGUIDOR GRANDE (CÍRCULO) */}
      <motion.div 
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:flex items-center justify-center"
        style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
        }}
      >
        <motion.div
            animate={{
                width: isHovered ? 50 : 20,  // Crece sutilmente
                height: isHovered ? 50 : 20,
                backgroundColor: isHovered ? "white" : "transparent",
                border: isHovered ? "none" : "1px solid white",
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
            className="rounded-full flex items-center justify-center"
        >
             {/* AQUÍ QUITAMOS EL TEXTO "VIEW/OPEN" */}
        </motion.div>
      </motion.div>

      {/* 2. PUNTO CENTRAL FIJO (PRECISIÓN) */}
      <motion.div 
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference hidden md:block"
        style={{
          x: mouseX, 
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      >
        {/* El punto desaparece al hacer hover para dejar ver el círculo lleno */}
        <div className={`w-1.5 h-1.5 bg-white rounded-full transition-opacity duration-200 ${isHovered ? 'opacity-0' : 'opacity-100'}`} />
      </motion.div>
    </>
  );
}