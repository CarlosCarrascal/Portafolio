"use client";

import { motion } from "framer-motion";
import {
  SiFlutter,
  SiDart,
  SiFirebase,
  SiNodedotjs,
  SiDocker,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiCplusplus,
  SiGit,
  SiFigma,
  SiTailwindcss,
  SiGraphql,
} from "react-icons/si";

const TECH_STACK = [
  { name: "Flutter", Icon: SiFlutter, color: "#02569B" },
  { name: "Dart", Icon: SiDart, color: "#0175C2" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "C++", Icon: SiCplusplus, color: "#00599C" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
];

export default function Skills() {
  return (
    <section className="relative z-10 py-12 overflow-hidden bg-white/[0.02] backdrop-blur-sm border-y border-white/10">
      
      {/* Título */}
      <div className="container mx-auto px-6 mb-12 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
          Tech 
          <span className="text-primary/80 ml-2">Stack</span>
        </h2>
      </div>

      {/* Sombras laterales */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-48 z-20 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-48 z-20 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

      {/* CARRUSELES */}
      <div className="flex flex-col gap-6 relative z-10">
        <InfiniteLoopSlider duration={50} reverse={false}>
          {TECH_STACK.map((tech, i) => (
            <TechCard key={`row1-${i}`} tech={tech} />
          ))}
        </InfiniteLoopSlider>

        <InfiniteLoopSlider duration={60} reverse={true}>
          {[...TECH_STACK].reverse().map((tech, i) => (
            <TechCard key={`row2-${i}`} tech={tech} />
          ))}
        </InfiniteLoopSlider>
      </div>
    </section>
  );
}

// --- CARD MEJORADA (Borde sutil en lugar de línea) ---
function TechCard({ tech }: { tech: (typeof TECH_STACK)[0] }) {
  const { Icon, color, name } = tech;

  return (
    <div
      className="group relative flex items-center gap-4 px-5 py-3 rounded-xl border border-white/5 bg-transparent transition-colors duration-500 hover:border-[var(--tech-color)] overflow-hidden cursor-default"
      style={{ "--tech-color": color } as React.CSSProperties}
    >
      {/* 1. FONDO DE COLOR (Sutil) */}
      <div className="absolute inset-0 bg-[var(--tech-color)] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none" />

      {/* ELIMINADO: La línea inferior "tipo láser" que no te gustaba */}

      {/* Contenedor del Icono */}
      <div className="relative h-10 w-10 flex items-center justify-center z-10">
        <Icon
          size={28}
          className="transition-all duration-300 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[var(--tech-color)]"
        />
      </div>

      {/* Texto */}
      <span className="text-lg font-medium text-white/40 group-hover:text-white transition-colors duration-300 tracking-wide pr-2 z-10">
        {name}
      </span>
    </div>
  );
}

// --- LÓGICA DEL LOOP ---
function InfiniteLoopSlider({
  children,
  duration,
  reverse = false,
}: {
  children: React.ReactNode;
  duration: number;
  reverse?: boolean;
}) {
  return (
    <div className="flex w-full overflow-hidden relative">
      <motion.div
        className="flex items-center"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: duration,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{ width: "max-content" }}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-6 px-3 pr-6"
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}