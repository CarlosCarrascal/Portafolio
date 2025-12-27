"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const targetRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  // SOLUCIÓN AQUÍ: 
  // Cambiamos ["0%", "-85%"] a ["0%", "-55%"].
  // Al reducir este porcentaje negativo, el carrusel se mueve menos distancia 
  // hacia la izquierda, evitando que quede ese gran espacio vacío al final.
  // Si aún sobra espacio, reduce a -50%. Si falta ver contenido, sube a -60%.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section id="projects" className="relative z-10">
      
      {/* =========================================
          VERSIÓN DESKTOP (Horizontal Scroll) 
          Mantenemos h-[300vh] como pediste
         ========================================= */}
      <div ref={targetRef} className="hidden md:block h-[300vh] relative">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          
          {/* Título de Fondo */}
          <div className="absolute top-20 left-20 z-0 opacity-10 pointer-events-none">
             <h2 className="text-[10vw] font-bold text-white leading-none tracking-tighter">
                 SELECTED
             </h2>
          </div>

          <motion.div 
            style={{ x }} 
            className="flex gap-20 px-20 z-10 relative items-center" // Mantenemos el mt-32/mt-20 que prefieras
          >
            
            {/* 1. Intro Card */}
            <div className="flex flex-col justify-center min-w-[400px]">
               <h3 className="text-6xl font-bold text-white mb-6 leading-tight">
                 Trabajos <br/> <span className="text-primary">Recientes</span>
               </h3>
               <p className="text-white/60 text-lg max-w-sm">
                 Una selección de mis proyectos más ambiciosos. <br/>
                 (Scroll para explorar)
               </p>
               <div className="mt-8 text-white/40 text-sm font-mono animate-pulse">
                 → SCROLL DOWN TO EXPLORE
               </div>
            </div>

            {/* 2. Proyectos Mapeados */}
            {projectsData.map((project) => (
              <ProjectItemDesktop key={project.id} project={project} />
            ))}

            {/* 3. Outro Card */}
            <div className="min-w-[300px] flex items-center justify-center border-l border-white/10 pl-20 ml-10">
               <a href="https://github.com/CarlosCarrascal" target="_blank" className="group flex flex-col items-center gap-4 text-white/50 hover:text-white transition-colors">
                  <div className="p-6 rounded-full border border-white/10 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Github className="w-8 h-8" />
                  </div>
                  <span className="font-mono text-sm tracking-widest">VER TODO EN GITHUB</span>
               </a>
            </div>

          </motion.div>
        </div>
      </div>


      {/* =========================================
          VERSIÓN MOBILE (Sin cambios)
         ========================================= */}
      <div className="block md:hidden py-20 px-6">
        <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-2">Proyectos</h2>
            <p className="text-white/60">Desliza hacia abajo para ver más.</p>
        </div>
        
        <div className="flex flex-col gap-16">
          {projectsData.map((project) => (
             <ProjectItemMobile key={project.id} project={project} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
             <a href="https://github.com/CarlosCarrascal" target="_blank" className="inline-block px-6 py-3 rounded-full border border-white/20 text-white font-medium">
                Ver GitHub
             </a>
        </div>
      </div>

    </section>
  );
}

// --- Componentes Auxiliares ---

function ProjectItemDesktop({ project }: { project: any }) {
  return (
    <div className="relative group min-w-[60vw] lg:min-w-[45vw] flex flex-col gap-6">
      <div className="relative h-[50vh] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
         
         {project.image ? (
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
         ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-white/20">NO PREVIEW</div>
         )}

         <a href={project.demoUrl || project.repoUrl} target="_blank" className="absolute bottom-6 right-6 z-20 p-4 bg-white rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-6 h-6 text-black" />
         </a>
      </div>

      <div className="flex justify-between items-start">
         <div>
            <span className="text-primary text-xs font-mono tracking-widest uppercase mb-1 block">{project.category}</span>
            <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-white/60 text-sm max-w-md line-clamp-2">{project.description}</p>
         </div>
         <div className="flex gap-2 mt-2">
            {project.tech.slice(0, 2).map((t: string) => (
               <span key={t} className="px-2 py-1 text-[10px] border border-white/10 text-white/40 rounded uppercase tracking-wider">{t}</span>
            ))}
         </div>
      </div>
    </div>
  );
}

function ProjectItemMobile({ project }: { project: any }) {
    return (
      <div className="flex flex-col gap-4">
        <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
           {project.image && <Image src={project.image} alt={project.title} fill className="object-cover" />}
        </div>
        <div>
           <h3 className="text-2xl font-bold text-white">{project.title}</h3>
           <p className="text-white/60 text-sm mt-2 line-clamp-3">{project.description}</p>
           <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t: string) => (
                 <span key={t} className="px-2 py-1 text-xs bg-white/5 text-white/60 rounded">{t}</span>
              ))}
           </div>
           <div className="mt-4 flex gap-4">
               {project.demoUrl && <a href={project.demoUrl} className="text-primary text-sm font-bold underline">Ver Demo</a>}
               {project.repoUrl && <a href={project.repoUrl} className="text-white text-sm font-bold underline">Código</a>}
           </div>
        </div>
      </div>
    );
}