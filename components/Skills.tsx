"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Cloud, Terminal, Layout } from "lucide-react";

const SkillItem = ({ name }: { name: string }) => (
  <div className="flex items-center gap-2 bg-white/5 px-3 py-2 rounded-lg border border-white/5 hover:border-white/20 transition-colors">
    <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
    <span className="text-sm text-text-main/90">{name}</span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Encabezado dentro del Grid (Estilo Bento) */}
        <div className="md:col-span-1 md:row-span-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-text-muted">
            Mi caja de herramientas para construir productos digitales escalables y de alto rendimiento.
          </p>
        </div>

        {/* Tarjeta Mobile (Tu fuerte) */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 glass p-6 rounded-3xl border-l-4 border-l-blue-500"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <Smartphone className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white">Mobile Dev</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Flutter", "Dart", "Clean Architecture", "Bloc/Cubit", "Provider", "Method Channels"].map(s => <SkillItem key={s} name={s} />)}
          </div>
        </motion.div>

        {/* Tarjeta Backend & Cloud */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 glass p-6 rounded-3xl border-l-4 border-l-primary"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Cloud className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Backend & Cloud</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["AWS (EC2, RDS)", "Node.js", "Firebase", "PostgreSQL", "Docker", "API REST"].map(s => <SkillItem key={s} name={s} />)}
          </div>
        </motion.div>

        {/* Tarjeta Frontend Web */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 glass p-6 rounded-3xl border-l-4 border-l-accent flex flex-col md:flex-row gap-6"
        >
          <div className="flex-shrink-0">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Layout className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-white">Frontend Web</h3>
              </div>
              <p className="text-sm text-text-muted max-w-xs">
                Experiencia creando interfaces modernas y responsivas con las últimas tecnologías del ecosistema React.
              </p>
          </div>
          <div className="flex flex-wrap content-start gap-2 flex-grow">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"].map(s => <SkillItem key={s} name={s} />)}
          </div>
        </motion.div>

        {/* Tarjeta Herramientas & IoT */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-1 glass p-6 rounded-3xl border-l-4 border-l-secondary"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-secondary/10 rounded-xl">
              <Terminal className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-white">Tools & IoT</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Git/GitHub", "IoT (ESP8266)", "C++ (Arduino)", "Scrum", "Figma"].map(s => <SkillItem key={s} name={s} />)}
          </div>
        </motion.div>

      </div>
    </section>
  );
}