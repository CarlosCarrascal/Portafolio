"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    problem: string;
    role: string;
    tech: string[];
    challenges: string;
    result: string;
    image: string;
    demoUrl: string;
    repoUrl: string;
    category: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
    >
      {/* Imagen */}
      <div className="relative h-56 bg-gray-100">
        <Image
          src={project.image}
          alt={`Screenshot de ${project.title}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Contenido */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Título */}
        <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>

        {/* Descripción corta */}
        <p className="text-gray-600 mb-4">{project.description}</p>

        {/* Problema */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Problema</h4>
          <p className="text-sm text-gray-600">{project.problem}</p>
        </div>

        {/* Rol */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Mi Rol</h4>
          <p className="text-sm text-gray-600">{project.role}</p>
        </div>

        {/* Tecnologías */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Retos */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-900 mb-1">Reto Principal</h4>
          <p className="text-sm text-gray-600">{project.challenges}</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        </div>
      </div>
    </motion.article>
  );
}
