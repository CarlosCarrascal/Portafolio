"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Smartphone, Cpu, ArrowUpRight } from "lucide-react";

export default function About() {
  const [activeCard, setActiveCard] = useState<number>(1);

  const cards = [
    {
      id: 0,
      title: "Backend Architect",
      subtitle: "Cloud & Scalability",
      description: "Diseño la lógica invisible que mantiene todo funcionando. Arquitecturas en AWS que escalan automáticamente, bases de datos optimizadas y APIs que responden en milisegundos.",
      tags: ["Node.js", "Docker", "PostgreSQL", "AWS"],
      icon: <Database className="w-8 h-8 md:w-12 md:h-12" />,
      bgGradient: "from-blue-600/20 to-indigo-900/20",
      borderColor: "border-blue-500/50",
      accent: "text-blue-400"
    },
    {
      id: 1,
      title: "Mobile Expert",
      subtitle: "Flutter & UX",
      description: "No hago pantallas estáticas. Creo experiencias nativas fluidas a 60fps. Cada animación, cada transición y cada toque están pensados para sentirse naturales y reactivos.",
      tags: ["Flutter", "Dart", "Clean Arch", "Bloc"],
      icon: <Smartphone className="w-8 h-8 md:w-12 md:h-12" />,
      bgGradient: "from-emerald-600/20 to-teal-900/20",
      borderColor: "border-emerald-500/50",
      accent: "text-emerald-400"
    },
    {
      id: 2,
      title: "IoT Integrator",
      subtitle: "Hardware & Real World",
      description: "Rompo la barrera de la pantalla. Conecto sensores y microcontroladores a la nube, permitiendo monitoreo y control en tiempo real del mundo físico.",
      tags: ["C++", "MQTT", "ESP32", "Sockets"],
      icon: <Cpu className="w-8 h-8 md:w-12 md:h-12" />,
      bgGradient: "from-purple-600/20 to-fuchsia-900/20",
      borderColor: "border-purple-500/50",
      accent: "text-purple-400"
    }
  ];

  return (
    <section id="about" className="relative bg-[#020617] py-24 px-4 md:px-12 min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER */}
      <div className="max-w-7xl mx-auto w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
         <div>
            <span className="text-white/40 font-mono text-sm tracking-widest uppercase mb-2 block">
               (002) — My Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
               Áreas de <br/> <span className="text-primary">Dominio.</span>
            </h2>
         </div>
      </div>

      {/* CONTENEDOR DE PILARES */}
      <div className="w-full max-w-7xl mx-auto h-[500px] md:h-[600px] flex flex-col md:flex-row gap-4 relative z-10">
         
         {cards.map((card, index) => {
            const isActive = activeCard === index;
            
            return (
                <div
                   key={card.id}
                   onClick={() => setActiveCard(index)}
                   // CLAVE: Usamos 'flex-[x]' de Tailwind con transición CSS nativa.
                   // duration-500 y ease-out es la combinación más estable.
                   className={`
                      relative rounded-3xl overflow-hidden border cursor-pointer transition-[flex] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                      ${isActive ? 'flex-[3.5] border-white/20 bg-white/5' : 'flex-[0.5] border-white/5 bg-transparent hover:bg-white/5'}
                   `}
                >
                   
                   {/* FONDO ACTIVO */}
                   <div className={`absolute inset-0 bg-gradient-to-b ${card.bgGradient} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                   
                   {/* CONTENIDO FLOTANTE (ABSOLUTO)
                       Al ser absoluto, no afecta el tamaño del padre, evitando el "lag".
                       Usamos min-w para asegurar que el texto siempre tenga espacio.
                   */}
                   <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                      
                      {/* --- CABECERA --- */}
                      <div className="flex justify-between items-start z-20">
                         <div className={`p-3 rounded-xl backdrop-blur-md transition-colors duration-300 ${isActive ? `bg-white/10 ${card.accent} border border-white/10` : 'text-white/20 bg-transparent'}`}>
                            {card.icon}
                         </div>
                         <ArrowUpRight className={`w-6 h-6 transition-all duration-300 ${isActive ? 'text-white rotate-45 opacity-100' : 'text-white/20 rotate-0 opacity-50'}`} />
                      </div>

                      {/* --- CUERPO --- */}
                      <div className="relative h-full flex flex-col justify-end overflow-hidden">
                         
                         {/* TÍTULO VERTICAL (Inactivo) */}
                         <div className={`hidden md:block absolute bottom-12 left-0 origin-bottom-left -rotate-90 translate-x-8 w-[400px] transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 delay-200'}`}>
                            <span className="text-2xl font-bold text-white/40 tracking-wider whitespace-nowrap">
                               {card.title}
                            </span>
                         </div>

                         {/* INFORMACIÓN (Activo) */}
                         {/* AnimatePresence maneja la entrada/salida suave del texto */}
                         <div className="relative w-full min-w-[300px] md:min-w-[500px]">
                             <AnimatePresence mode="wait">
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, transition: { duration: 0.1 } }}
                                        transition={{ duration: 0.3, delay: 0.2 }} // Delay pequeño para esperar que se abra un poco
                                    >
                                        <span className="font-mono text-xs uppercase tracking-widest text-white/50 mb-2 block">
                                        0{index + 1} — {card.subtitle}
                                        </span>
                                        
                                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
                                        {card.title}
                                        </h3>

                                        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                                        {card.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2">
                                        {card.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 rounded-md bg-white/10 border border-white/10 text-xs md:text-sm font-mono text-white/90">
                                                {tag}
                                            </span>
                                        ))}
                                        </div>
                                    </motion.div>
                                )}
                             </AnimatePresence>
                         </div>
                      </div>

                   </div>
                </div>
            );
         })}

      </div>
    </section>
  );
}