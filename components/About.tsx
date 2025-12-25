"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-2 mb-8 text-center">Sobre Mí</h2>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            {/* Intro */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Soy un <span className="font-semibold text-gray-900">Full-Stack Developer</span> con experiencia en desarrollo web y móvil. 
              Me especializo en construir aplicaciones escalables y accesibles usando tecnologías modernas como Next.js, React, Node.js y Flutter.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Mi enfoque está en escribir código limpio y mantenible, optimizar el rendimiento y garantizar una excelente experiencia de usuario. 
              Me apasiona resolver problemas complejos y aprender constantemente nuevas tecnologías.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Actualmente busco oportunidades <span className="font-semibold text-gray-900">remotas o híbridas</span> donde pueda contribuir 
              en proyectos desafiantes y seguir creciendo como desarrollador.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Ubicación</p>
                  <p className="text-gray-600 text-sm">Trujillo, Perú</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                <GraduationCap className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Educación</p>
                  <p className="text-gray-600 text-sm">Tecsup</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <Briefcase className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Disponibilidad</p>
                  <p className="text-gray-600 text-sm">Remoto / Híbrido</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block">
                Descargar CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
