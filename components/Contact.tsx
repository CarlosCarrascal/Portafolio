"use client";

import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    // ELIMINADO: bg-[#020617]
    // AÑADIDO: relative z-10
    <section id="contact" className="relative z-10 py-32 px-6 md:px-12 min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <p className="text-white/40 font-mono text-sm uppercase tracking-widest mb-8">
          ¿Tienes una idea?
        </p>
        
        <a 
          href="mailto:tu@email.com" 
          className="group block w-full relative"
        >
          <h2 className="text-[8vw] md:text-[10vw] font-bold text-white leading-none tracking-tighter group-hover:text-primary transition-colors duration-300">
            Hablemos.
          </h2>
          <ArrowUpRight className="absolute top-2 right-0 w-[5vw] h-[5vw] text-white/20 group-hover:text-primary group-hover:top-0 group-hover:right-[-20px] transition-all duration-500" />
        </a>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-24 gap-8">
           <div className="flex gap-8">
              <FooterLink href="#" text="LinkedIn" />
              <FooterLink href="#" text="GitHub" />
              <FooterLink href="#" text="Instagram" />
           </div>
           <p className="text-white/20 text-sm">
             © 2025 Carlos Carrascal. All rights reserved.
           </p>
        </div>
      </div>
    </section>
  );
}

function FooterLink({ href, text }: { href: string; text: string }) {
  return (
    <a href={href} className="text-white text-lg font-medium hover:underline decoration-primary underline-offset-4">
      {text}
    </a>
  );
}