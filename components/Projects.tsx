"use client";

import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  // Hook de Scroll: Detecta el progreso de scroll en este contenedor
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transformación Mágica: Convierte scroll Vertical (0% a 100%) en movimiento Horizontal (1% a -95%)
  // Ajusta el "-95%" dependiendo de cuántos proyectos tengas para que llegue al final
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    // CONTENEDOR GIGANTE (H-300VH) PARA DAR ESPACIO AL SCROLL
    <section ref={targetRef} id="projects" className="relative h-[300vh] bg-[#020617]">
      
      {/* CONTENEDOR STICKY: Se pega a la pantalla mientras scrolleas el padre */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* TÍTULO FIJO DE FONDO (Opcional, da profundidad) */}
        <div className="absolute top-10 left-10 md:left-20 z-0">
            <h2 className="text-[12vw] font-bold text-white/5 leading-none tracking-tighter select-none">
                WORKS
            </h2>
        </div>

        {/* CARRUSEL HORIZONTAL MOVIBLE */}
        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-12 md:px-24 z-10 relative">
          
          {/* Tarjeta de INTRODUCCIÓN (La primera del carrusel) */}
          <div className="flex flex-col justify-center min-w-[300px] md:min-w-[400px]">
             <h3 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
               Proyectos <br/> <span className="text-primary">Destacados</span>
             </h3>
             <p className="text-white/60 text-lg max-w-sm">
               Una colección de soluciones técnicas. Desliza para explorar la galería horizontal.
             </p>
             <div className="mt-8 flex items-center gap-2 text-white/40 font-mono text-sm">
                <span>SCROLL DOWN</span>
                <span className="animate-bounce">↓</span>
             </div>
          </div>

          {/* MAPEO DE PROYECTOS */}
          {projectsData.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}

          {/* Tarjeta FINAL (Call to Action) */}
          <div className="flex flex-col justify-center items-center min-w-[300px] md:min-w-[400px] h-[50vh] border-l border-white/10 pl-24">
             <h3 className="text-3xl font-bold text-white mb-4">¿Quieres ver más?</h3>
             <a href="https://github.com/CarlosCarrascal" target="_blank" className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 font-bold flex items-center gap-2">
                <Github className="w-5 h-5" /> GitHub Profile
             </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// SUB-COMPONENTE PARA CADA PROYECTO (Diseño limpio y grande)
function ProjectItem({ project }: { project: any }) {
  return (
    <div className="relative group min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] flex flex-col gap-6">
      
      {/* IMAGEN DEL PROYECTO (Aspecto Cinematic 16:9 o ultra-wide) */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden rounded-2xl bg-white/5 border border-white/10 group-hover:border-primary/50 transition-colors duration-500">
         {/* Overlay oscuro que desaparece al hover */}
         <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
         
         {project.image ? (
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
         ) : (
            <div className="w-full h-full flex items-center justify-center bg-zinc-900">
               <span className="text-white/20 font-mono text-xl">NO PREVIEW</span>
            </div>
         )}

         {/* Botón flotante que aparece al hover */}
         <a 
           href={project.demoUrl || project.repoUrl} 
           target="_blank"
           className="absolute bottom-6 right-6 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
         >
            <ArrowUpRight className="w-8 h-8 text-black" />
         </a>
      </div>

      {/* INFO DEL PROYECTO (Debajo de la imagen) */}
      <div className="flex flex-col gap-2">
         <div className="flex justify-between items-end border-b border-white/10 pb-4">
            <div>
                <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">
                    {project.category}
                </span>
                <h3 className="text-3xl md:text-5xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                </h3>
            </div>
            <span className="text-white/20 font-mono text-xl hidden md:block">
                0{project.id}
            </span>
         </div>
         
         <div className="flex justify-between items-start mt-2">
             <p className="text-white/60 max-w-md text-sm md:text-base line-clamp-2">
                 {project.description}
             </p>
             {/* Tech Stack Mini Tags */}
             <div className="flex gap-2">
                {project.tech.slice(0, 2).map((t: string) => (
                    <span key={t} className="px-2 py-1 text-xs border border-white/10 text-white/50 rounded-md">
                        {t}
                    </span>
                ))}
             </div>
         </div>
      </div>

    </div>
  );
}