"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const textVariant = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration: 1,
        ease: [0.76, 0, 0.24, 1] as any,
        delay: i * 0.1 + 2.2,
      },
    }),
  };

  return (
    // ELIMINADO: bg-[#020617]
    // AÑADIDO: z-10 para asegurar interacción sobre el fondo fixed
    <section className="relative min-h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden z-10">
      
      {/* ELIMINADO: Divs de luces ambientales (ahora están en layout.tsx) */}

      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Columna Izquierda */}
        <div className="lg:col-span-8 flex flex-col">
          <motion.div 
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }} 
             transition={{ delay: 2.5, duration: 1 }}
             className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-[1px] bg-white/30"></span>
            <span className="text-sm font-mono tracking-widest text-white/60 uppercase">
              Full Stack & IoT Engineer
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1 
                custom={0} 
                variants={textVariant} 
                initial="hidden" 
                animate="visible"
                className="text-[12vw] lg:text-[140px] leading-[0.9] font-bold tracking-tighter text-white uppercase"
            >
              Carlos
            </motion.h1>
          </div>
          <div className="overflow-hidden">
             <motion.h1 
                custom={1} 
                variants={textVariant} 
                initial="hidden" 
                animate="visible"
                className="text-[12vw] lg:text-[140px] leading-[0.9] font-bold tracking-tighter text-gray-500 uppercase"
            >
              Carrascal
            </motion.h1>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="lg:col-span-4 flex flex-col justify-end pb-4">
           <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3, duration: 1 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-md"
           >
             Ingeniero de software especializado en arquitecturas escalables. Transformo conceptos complejos en ecosistemas digitales fluidos usando 
             <span className="text-white font-medium"> Flutter</span>, 
             <span className="text-white font-medium"> AWS</span> y 
             <span className="text-white font-medium"> IoT</span>.
           </motion.p>

           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 3.2, duration: 1 }}
             className="flex items-center gap-8"
           >
              <a href="#projects" className="group flex items-center gap-2 text-white font-bold text-lg hover:text-primary transition-colors">
                 Ver Proyectos
                 <ArrowDownRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
              </a>
              
              <div className="flex gap-4">
                 <SocialLink href="https://github.com/CarlosCarrascal" icon={<Github className="w-5 h-5" />} />
                 <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
                 <SocialLink href="mailto:tu@email.com" icon={<Mail className="w-5 h-5" />} />
              </div>
           </motion.div>
        </div>
      </div>

      {/* Footer del Hero */}
      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 3.5, duration: 1 }}
         className="absolute bottom-12 left-0 w-full px-6 md:px-24"
      >
        <div className="w-full h-[1px] bg-white/10 mb-6"></div>
        <div className="flex flex-wrap justify-between items-center gap-6 text-sm font-mono text-white/40 uppercase tracking-widest">
            <span>Based in Peru</span>
            <div className="flex gap-8">
               <span>Flutter</span>
               <span>React / Next.js</span>
               <span>Node.js</span>
               <span>AWS Cloud</span>
            </div>
            <span>(2025 Edition)</span>
        </div>
      </motion.div>

    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/60 hover:text-white hover:border-white hover:bg-white/5 transition-all duration-300"
    >
      {icon}
    </a>
  );
}