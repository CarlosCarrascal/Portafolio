"use client";

import TickerTape from "./TickerTape";
import EmailAction from "./EmailAction";

// --- SUB-COMPONENTES (Podrías moverlos a archivos separados si prefieres) ---

function Label({ text }: { text: string }) {
  return (
    <span className="block text-[10px] md:text-xs font-mono font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
       [{text}]
    </span>
  );
}

function SocialLink({ text, href }: { text: string, href: string }) {
  return (
    <a 
       href={href}
       target="_blank"
       className="group flex items-center gap-3 text-lg md:text-xl text-white/60 hover:text-white transition-colors duration-300"
    >
       <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300"></span>
       <span className="group-hover:translate-x-1 transition-transform duration-300">{text}</span>
    </a>
  );
}

// --------------------------------------------------------------------------

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 flex flex-col justify-end pt-32">
      
      {/* 1. TICKER TAPE (Extraído para limpieza) */}
      <TickerTape />

      <div className="w-full max-w-[100vw]">
        
        {/* 2. GRID PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[60vh] lg:h-[70vh]">

          {/* COLUMNA 1: INFO ESTÁTICA */}
          <div className="lg:col-span-1 border-r border-white/10 p-6 md:p-12 flex flex-col justify-between border-b lg:border-b-0 border-white/10">
             <div>
                <Label text="Socials" />
                <div className="flex flex-col gap-4 mt-8">
                   <SocialLink text="GitHub" href="https://github.com/CarlosCarrascal" />
                   <SocialLink text="LinkedIn" href="#" />
                   <SocialLink text="Instagram" href="#" />
                   <SocialLink text="Twitter / X" href="#" />
                </div>
             </div>
             
             <div className="mt-12 lg:mt-0">
                <Label text="Local Time" />
                <p className="text-white/80 font-mono mt-2">
                   {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} PE
                </p>
             </div>
          </div>

          {/* COLUMNA 2-4: INTERACCIÓN LÓGICA */}
          {/* Aquí inyectamos el componente que tiene el estado */}
          <EmailAction />

        </div>
      </div>
    </section>
  );
}