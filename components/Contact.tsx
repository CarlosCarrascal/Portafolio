"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);
  const email = "tu@email.com"; // 📧 Tu email

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    // Feedback visual opcional
  };

  return (
    // relative z-10 para mantener la transparencia sobre el fondo global
    // pt-32 para separar del contenido anterior
    <section
      id="contact"
      className="relative z-10 flex flex-col justify-end pt-20 pb-0"
    >
      {/* 1. TICKER TAPE (La versión editorial del "Status") */}
      <div className="w-full border-t border-b border-white/10 py-4 overflow-hidden bg-white/5 backdrop-blur-sm">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-mono tracking-[0.2em] text-primary/80 uppercase">
          <span>Available for Freelance</span>
          <span>•</span>
          <span>Open to Collaborations</span>
          <span>•</span>
          <span>Frontend Architecture</span>
          <span>•</span>
          <span>Creative Development</span>
          <span>•</span>
          <span>Available for Freelance</span>
          <span>•</span>
          <span>Open to Collaborations</span>
        </div>
      </div>

      <div className="w-full max-w-[100vw]">
        {/* 2. GRID PRINCIPAL (Layout estilo tabla editorial) */}
        {/* Eliminamos el border-b inferior porque el Footer pondrá el suyo o cerrará visualmente */}
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[60vh] lg:h-[70vh]">
          {/* COLUMNA 1: INFO / META (Estilo índice) */}
          <div className="lg:col-span-1 border-r border-white/10 p-6 md:p-12 flex flex-col justify-between border-b lg:border-b-0 border-white/10">
            <div>
              <Label text="Socials" />
              <div className="flex flex-col gap-4 mt-8">
                <SocialLink
                  text="GitHub"
                  href="https://github.com/CarlosCarrascal"
                />
                <SocialLink text="LinkedIn" href="#" />
                <SocialLink text="Instagram" href="#" />
                <SocialLink text="Twitter / X" href="#" />
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <Label text="Local Time" />
              <p className="text-white/80 font-mono mt-2">
                {new Date().toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                PE
              </p>
            </div>
          </div>

          {/* COLUMNA 2-4: EL CONTACTO GIGANTE (Kinetic Interaction) */}
          <div
            className="lg:col-span-3 p-6 md:p-12 flex flex-col justify-center relative overflow-hidden group cursor-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCopy}
          >
            {/* Fondo hover sutil */}
            <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-colors duration-500" />

            <div className="relative z-10">
              <Label text="Start a Project" />

              {/* Texto Gigante Kinetic */}
              <div className="relative mt-8 overflow-hidden h-[16vw] md:h-[11vw]">
                {/* Capa 1: Email (Normal) */}
                <motion.h2
                  className="text-[14vw] md:text-[10vw] font-bold text-white leading-none tracking-tighter absolute top-0 left-0"
                  animate={{ y: isHovered ? "-100%" : "0%" }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  Let's Talk.
                </motion.h2>

                {/* Capa 2: Copiar (Reveal al hover) */}
                <motion.h2
                  className="text-[14vw] md:text-[10vw] font-bold text-transparent stroke-text leading-none tracking-tighter absolute top-0 left-0"
                  style={{ WebkitTextStroke: "2px #8b5cf6" }} // Color primary
                  initial={{ y: "100%" }}
                  animate={{ y: isHovered ? "0%" : "100%" }}
                  transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                >
                  Copy Email
                </motion.h2>
              </div>

              <div className="mt-8 flex items-center gap-4 text-white/40 group-hover:text-white transition-colors duration-300">
                <span className="font-mono text-xs uppercase tracking-widest">
                  Click area to copy address
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-componentes visuales
function Label({ text }: { text: string }) {
  return (
    <span className="block text-[10px] md:text-xs font-mono font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
      [{text}]
    </span>
  );
}

function SocialLink({ text, href }: { text: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group flex items-center gap-3 text-lg md:text-xl text-white/60 hover:text-white transition-colors duration-300"
    >
      <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300"></span>
      <span className="group-hover:translate-x-1 transition-transform duration-300">
        {text}
      </span>
    </a>
  );
}
