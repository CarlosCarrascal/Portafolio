"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import projectsData from "@/data/projects.json";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "web", "mobile", "full-stack"];

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section-padding relative">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        {/* Encabezado de Sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Una selección de soluciones técnicas donde la arquitectura robusta se encuentra con un diseño funcional.
          </p>
        </div>

        {/* Filtros Neón */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                px-6 py-2 rounded-full font-medium transition-all duration-300 border
                ${filter === category
                  ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                  : "bg-surface border-white/10 text-text-muted hover:border-white/30 hover:text-white"
                }
              `}
            >
              {category === "all" ? "Todos" : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            // @ts-ignore - Ignoramos error de tipado temporal si el JSON no coincide exactamente
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}