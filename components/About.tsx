"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap, SmartphoneCharging } from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "Actualidad",
      title: "Full Stack & IoT Developer",
      desc: "Liderando el desarrollo de H2Go, integrando apps móviles en Flutter con dispositivos IoT y backend en AWS.",
      icon: Briefcase,
      color: "text-secondary"
    },
    {
      year: "2024",
      title: "Desarrollo de Soluciones Móviles",
      desc: "Especialización en arquitecturas limpias (Clean Arch) y gestión de estados complejos con Bloc/Cubit.",
      icon: SmartphoneCharging,
      color: "text-primary"
    },
    {
      year: "2023",
      title: "Inicios en Programación",
      desc: "Fundamentos sólidos en algoritmos y primeras aplicaciones completas usando el ecosistema de JavaScript y Dart.",
      icon: GraduationCap,
      color: "text-accent"
    }
  ];

  // Importamos el icono Smartphone aquí para no romper el array arriba si no está importado
  const { Smartphone } = require("lucide-react"); 

  return (
    <section id="about" className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Columna de Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Más allá del <span className="text-primary">Código</span>
          </h2>
          <p className="text-text-muted text-lg mb-6 text-balance">
            No solo escribo software; construyo soluciones. Mi enfoque combina la precisión técnica de la ingeniería con la creatividad necesaria para resolver problemas reales.
          </p>
          <p className="text-text-muted text-lg mb-8 text-balance">
            Desde la configuración de servidores en la nube hasta el último píxel en la pantalla de un móvil, me obsesiona el "cómo" funcionan las cosas y cómo pueden funcionar mejor.
          </p>
          
          <div className="p-6 rounded-2xl bg-gradient-to-br from-surface to-surfaceHighlight border border-white/5">
            <h3 className="text-xl font-bold text-white mb-2">Mi Filosofía</h3>
            <p className="italic text-text-muted">
              "La complejidad debe ser gestionada, no evitada. Un buen sistema es aquel que hace fácil lo difícil."
            </p>
          </div>
        </motion.div>

        {/* Columna Timeline */}
        <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-8"
            >
              {/* Punto en la línea */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)]"></div>
              
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-mono font-bold ${item.color}`}>{item.year}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <item.icon className="w-5 h-5 text-text-muted" />
                {item.title}
              </h3>
              <p className="text-text-muted text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}