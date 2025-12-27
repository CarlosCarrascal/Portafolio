"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function Label({ text }: { text: string }) {
  return (
    <span className="block text-[10px] md:text-xs font-mono font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
       [{text}]
    </span>
  );
}

export default function EmailAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isPunching, setIsPunching] = useState(false);
  const email = "tu@email.com"; 

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 50);
    setTimeout(() => setIsCopied(false), 2000); 
  };

  return (
    <div className="lg:col-span-3 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group cursor-none">
      
      {/* Fondo hover sutil */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
      
      <div className="relative z-10"> 
        <Label text="Start a Project" />
        
        <div 
            className="relative mt-8 overflow-hidden h-[13vw] md:h-[10vw] cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCopy} 
        >
            {/* Capa 1: Let's Talk */}
            <motion.h2 
              className="text-[12vw] md:text-[9vw] font-bold text-white leading-none tracking-tighter absolute top-0 left-0 pl-1"
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              Let's Talk.
            </motion.h2>

            {/* Capa 2: Copy Email */}
            <motion.h2 
              className="text-[12vw] md:text-[9vw] font-bold text-transparent stroke-text leading-none tracking-tighter absolute top-0 left-0 pl-1"
              style={{ 
                  WebkitTextStroke: "2px #8b5cf6",
                  color: isCopied ? "#8b5cf6" : "transparent",
                  transition: "none" 
              }}
              initial={{ y: "100%" }}
              animate={{ 
                  y: isHovered ? "0%" : "100%",
                  scale: isPunching ? 1.05 : 1
              }}
              transition={{ 
                  y: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
                  scale: { type: "spring", stiffness: 500, damping: 25 }
              }}
            >
              Copy Email
            </motion.h2>
        </div>

        {/* FEEDBACK */}
        <div className="mt-8 h-6 relative overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            {isCopied ? (
              <motion.span 
                key="copied"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-xs uppercase tracking-widest text-primary font-bold"
              >
                  // ADDRESS COPIED TO CLIPBOARD
              </motion.span>
            ) : (
              <motion.div 
                key="default"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 text-white/40 group-hover:text-white transition-colors duration-300"
              >
                  <span className="font-mono text-xs uppercase tracking-widest">
                    Click text to copy address
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}