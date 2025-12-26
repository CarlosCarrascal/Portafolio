"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isPunching, setIsPunching] = useState(false);
  const email = "tu@email.com"; 

  const handleCopy = (e: React.MouseEvent) => {
    // Evita que el click se propague si hubiera algo más
    e.stopPropagation();
    
    navigator.clipboard.writeText(email);
    setIsCopied(true);
    
    // Efecto de golpe
    setIsPunching(true);
    setTimeout(() => setIsPunching(false), 50);

    setTimeout(() => setIsCopied(false), 2000); 
  };

  const marqueeItems = [
    "Available for Freelance",
    "Open to Collaborations",
    "Frontend Architecture",
    "Creative Development",
  ];

  return (
    <section id="contact" className="relative z-10 flex flex-col justify-end pt-32">
      
      {/* 1. TICKER TAPE */}
      <div className="w-full border-t border-b border-white/10 py-4 overflow-hidden bg-white/5 backdrop-blur-sm">
        <div className="flex w-full"> 
          <motion.div 
            className="flex"
            animate={{ x: "-50%" }} 
            transition={{ 
              duration: 10, 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[0, 1].map((i) => (
              <div key={i} className="flex flex-shrink-0 items-center gap-12 pr-12"> 
                {marqueeItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-12 text-sm font-mono tracking-[0.2em] text-primary/80 uppercase">
                    <span>{item}</span>
                    <span className="text-primary">•</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="w-full max-w-[100vw]">
        
        {/* 2. GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[60vh] lg:h-[70vh]">

          {/* COLUMNA 1: INFO */}
          <div className="lg:col-span-1 border-r border-white/10 p-6 md:p-12 flex flex-col justify-between border-b lg:border-b-0 border-white/10">
             <div>
                <Label text="Socials" />
                <div className="flex flex-col gap-4 mt-8">
                   <SocialLink text="GitHub" href="https://github.com/CarlosCarrascal" />
                   <SocialLink text="LinkedIn" href="#" />
                   <SocialLink text="Instagram" href="#" />
                   <SocialLink text="Twitter / X" href="#" />
                </div>
             </div>
             
             <div className="mt-12 lg:mt-0">
                <Label text="Local Time" />
                <p className="text-white/80 font-mono mt-2">
                   {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} PE
                </p>
             </div>
          </div>

          {/* COLUMNA 2-4: INTERACCIÓN */}
          {/* CAMBIO: Quité el onClick de aquí */}
          <div className="lg:col-span-3 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group cursor-none">
             
             {/* Fondo hover sutil (decorativo) */}
             <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />
             
             <div className="relative z-10"> 
                <Label text="Start a Project" />
                
                {/* CAMBIO: El onClick ahora está SOLO en este div que envuelve el texto */}
                <div 
                    className="relative mt-8 overflow-hidden h-[13vw] md:h-[10vw] cursor-pointer" // Añadí cursor-pointer para que sepa que es clickeable
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

                {/* ZONA DE FEEDBACK INFERIOR */}
                <div className="mt-8 h-6 relative overflow-hidden flex items-center">
                  <AnimatePresence mode="wait">
                    {isCopied ? (
                      // MENSAJE TÉCNICO AL COPIAR
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
                      // ESTADO NORMAL
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

        </div>
      </div>
    </section>
  );
}

// Sub-componentes
function Label({ text }: { text: string }) {
   return (
      <span className="block text-[10px] md:text-xs font-mono font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
         [{text}]
      </span>
   );
}

function SocialLink({ text, href }: { text: string, href: string }) {
   return (
      <a 
         href={href}
         target="_blank"
         className="group flex items-center gap-3 text-lg md:text-xl text-white/60 hover:text-white transition-colors duration-300"
      >
         <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300"></span>
         <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
      </a>
   );
}