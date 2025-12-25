"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Saludo */}
          <p className="text-blue-600 font-semibold text-lg mb-4">
            Hola, soy
          </p>

          {/* Nombre */}
          <h1 className="heading-1 mb-6 text-balance">
            Carlos Carrascal
          </h1>

          {/* Rol */}
          <h2 className="text-2xl md:text-3xl text-gray-700 font-medium mb-6">
            Full-Stack Developer
          </h2>

          {/* Propuesta de valor */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 text-balance">
            Construyo aplicaciones web y móviles escalables con{" "}
            <span className="font-semibold text-gray-900">Next.js, Node.js, MongoDB y Flutter</span>.
            Enfocado en código limpio, performance y accesibilidad.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#projects" className="btn-primary w-full sm:w-auto">
              Ver Proyectos
            </a>
            <a href="#contact" className="btn-secondary w-full sm:w-auto">
              Contrátame
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/CarlosCarrascal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:tu@email.com"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a href="#projects" aria-label="Scroll hacia proyectos">
            <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
    