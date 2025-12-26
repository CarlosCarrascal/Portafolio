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
    // AJUSTE 1: Altura equilibrada (py-20)
    <section className="relative z-10 py-20 border-b border-white/5 bg-[#020617]/40 backdrop-blur-sm overflow-hidden">
      {/* Título */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
          Tech <span className="text-white/20">Stack</span>
        </h2>
      </div>

      {/* Sombras laterales */}
      <div className="absolute inset-y-0 left-0 w-32 z-20 bg-gradient-to-r from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 z-20 bg-gradient-to-l from-[#020617] to-transparent pointer-events-none" />

      {/* CARRUSELES */}
      {/* AJUSTE 2: Más separación entre las filas (gap-16) */}
      <div className="flex flex-col gap-16">
        {/* Fila 1 */}
        <InfiniteLoopSlider duration={50} reverse={false}>
          {TECH_STACK.map((tech, i) => (
            <TechItem key={`row1-${i}`} tech={tech} />
          ))}
        </InfiniteLoopSlider>

        {/* Fila 2 (Inversa) */}
        <InfiniteLoopSlider duration={60} reverse={true}>
          {[...TECH_STACK].reverse().map((tech, i) => (
            <TechItem key={`row2-${i}`} tech={tech} />
          ))}
        </InfiniteLoopSlider>
      </div>
    </section>
  );
}

// --- ITEM INDIVIDUAL ---
function TechItem({ tech }: { tech: (typeof TECH_STACK)[0] }) {
  const { Icon, color, name } = tech;

  return (
    <div className="group flex items-center gap-6 cursor-default min-w-max px-4">
      {/* AJUSTE 3: Icono más grande (size 50) */}
      <div className="relative flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <Icon
          size={50}
          className="transition-all duration-300 filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100"
          style={{ color: "currentColor" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "")}
        />
      </div>

      {/* AJUSTE 4: Texto más grande y grueso (text-2xl/3xl bold) */}
      <span className="text-2xl md:text-4xl font-bold text-white/30 group-hover:text-white transition-colors duration-300 tracking-tight">
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
        // AJUSTE 5: Gap horizontal generoso (gap-20)
        className="flex items-center gap-20 md:gap-32 px-4 hover:[animation-play-state:paused]"
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
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}
