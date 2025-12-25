"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "tu@email.com"; // ¡REEMPLAZA ESTO!

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding pb-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden"
      >
        {/* Fondo decorativo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-xl text-text-muted mb-10">
            Siempre estoy abierto a discutir nuevos proyectos, ideas de productos o oportunidades de colaboración tecnológica.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Botón de Email con Copiar */}
            <button 
              onClick={handleCopy}
              className="group relative flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              <span>{email}</span>
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100" />}
            </button>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/tuusuario" // ¡REEMPLAZA ESTO!
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all w-full sm:w-auto"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}