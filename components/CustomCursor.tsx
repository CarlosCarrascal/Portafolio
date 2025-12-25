"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Posición del mouse (valores crudos)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Física del cursor (Spring suave)
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    const manageMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detectamos botones, enlaces o cualquier elemento clicable
      if ( target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button') ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    window.addEventListener("mouseover", manageMouseOver); // Usamos mouseover global para mejor performance

    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
      window.removeEventListener("mouseover", manageMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998] hidden md:block mix-blend-difference">
      <motion.div 
        className="absolute bg-white rounded-full flex items-center justify-center"
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          width: isHovered ? 80 : 12, // Crece significativamente al hacer hover
          height: isHovered ? 80 : 12,
          opacity: isHovered ? 1 : 1, // Siempre visible, el mix-blend hace el truco
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        {/* Texto opcional que aparece dentro del cursor al hacer hover */}
        <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
            className="text-[10px] font-bold text-black uppercase tracking-widest"
        >
            OPEN
        </motion.span>
      </motion.div>
    </div>
  );
}