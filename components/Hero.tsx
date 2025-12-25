"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Smartphone, Code2 } from "lucide-react";

export default function Hero() {
  // Variantes para animación escalonada
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 2.2, // Espera a que termine el Preloader (2s + buffer)
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as any } },
  };

  return (
    <section className="section-padding pt-32 min-h-screen flex flex-col justify-center">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-full"
      >
        
        {/* Tarjeta Principal - Intro */}
        <motion.div variants={item} className="md:col-span-2 md:row-span-2 glass rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-500"></div>
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Disponible para proyectos
            </div>
            {/* CORRECCIÓN DE NOMBRE AQUÍ */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Hola, soy Carlos <span className="text-muted-foreground">👋</span>
            </h1>
            <h2 className="text-xl text-primary font-medium mb-4">Ingeniero de Software & Full Stack</h2>
            <p className="text-text-muted text-lg max-w-md text-balance">
              Especialista en crear ecosistemas digitales completos. Desde apps móviles nativas con <strong>Flutter</strong> hasta arquitecturas backend robustas en <strong>AWS</strong>.
            </p>
          </div>

          <div className="flex gap-4 mt-8 z-10">
            <a href="#contact" className="bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
              Contáctame <Mail className="w-4 h-4" />
            </a>
            <a href="#projects" className="px-6 py-3 rounded-xl font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
              Ver Trabajo
            </a>
          </div>
        </motion.div>

        {/* Tarjeta Avatar */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-2 glass rounded-3xl p-4 flex items-center justify-center relative overflow-hidden card-hover group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="text-center z-10">
             <div className="w-32 h-32 mx-auto bg-gradient-to-br from-gray-800 to-black rounded-full flex items-center justify-center border-4 border-surface shadow-2xl mb-4">
                <span className="text-4xl">👨‍💻</span>
             </div>
             <p className="text-sm text-text-muted font-medium">H2Go Project Lead</p>
             <p className="text-xs text-text-muted/60">IoT & Mobile Dev</p>
          </div>
        </motion.div>

        {/* Tarjeta Mapa */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-1 glass rounded-3xl p-6 flex flex-col justify-center items-start card-hover">
          <MapPin className="w-8 h-8 text-accent mb-2" />
          <h3 className="text-lg font-bold text-white">Trujillo, Perú</h3>
          <p className="text-xs text-text-muted">Zona horaria GMT-5</p>
        </motion.div>

        {/* Tarjeta Tech Stack Rápido 1 */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-1 glass rounded-3xl p-6 flex flex-col justify-between card-hover border-l-4 border-l-blue-500">
           <Smartphone className="w-8 h-8 text-blue-400" />
           <div>
             <h3 className="font-bold text-white">Flutter Expert</h3>
             <p className="text-xs text-text-muted">Dart, Bloc, Clean Arch</p>
           </div>
        </motion.div>

        {/* Tarjeta Social Links */}
        <motion.div variants={item} className="md:col-span-1 md:row-span-1 glass rounded-3xl p-6 flex items-center justify-around">
          <a href="https://github.com/CarlosCarrascal" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/20 hover:text-white transition-all text-text-muted">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-all text-text-muted">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Tarjeta Tech Stack Rápido 2 - Backend */}
        <motion.div variants={item} className="md:col-span-3 md:row-span-1 glass rounded-3xl p-8 flex items-center justify-between card-hover relative overflow-hidden">
           <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent"></div>
           <div className="z-10">
             <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
               <Code2 className="w-6 h-6 text-primary" /> Backend & Cloud
             </h3>
             <p className="text-text-muted">Experiencia sólida desplegando en AWS (EC2, RDS) e integrando dispositivos IoT.</p>
           </div>
           <div className="hidden md:flex gap-3 z-10">
              {['Node.js', 'PostgreSQL', 'AWS', 'Firebase', 'IoT'].map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-surface border border-white/10 text-xs font-mono text-primary">
                  {tech}
                </span>
              ))}
           </div>
        </motion.div>

      </motion.div>
    </section>
  );
}