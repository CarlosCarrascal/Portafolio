"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Image from "next/image";

// Actualizamos la interfaz para que coincida con tu JSON real
interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];      // Antes era 'tags'
  repoUrl?: string;    // Antes era 'githubUrl'
  demoUrl?: string;    // Antes era 'liveUrl'
  category: string;
}

export default function ProjectCard({ project, index }: { project: ProjectProps; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-3xl overflow-hidden bg-surface/50 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
    >
      {/* Imagen del Proyecto con Overlay */}
      <div className="relative h-48 w-full overflow-hidden">
        {/* Gradiente overlay para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 opacity-60" />
        
        {/* Imagen */}
        <div className="relative h-full w-full group-hover:scale-110 transition-transform duration-700 ease-out">
           {project.image ? (
             <Image 
               src={project.image} 
               alt={project.title} 
               fill 
               className="object-cover"
             />
           ) : (
             <div className="w-full h-full bg-surfaceHighlight flex items-center justify-center">
                <Code2 className="w-12 h-12 text-white/20" />
             </div>
           )}
        </div>
        
        {/* Categoría flotante */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow z-20">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted text-sm mb-6 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Tags (Aquí estaba el error, ahora usamos project.tech) */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech && project.tech.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-md bg-white/5 text-primary border border-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-4 mt-auto">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" /> Código
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors ml-auto"
            >
              Ver Demo <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}