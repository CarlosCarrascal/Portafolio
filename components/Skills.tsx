"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const skills = {
    Frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express", "REST APIs", "GraphQL"],
    Database: ["MongoDB", "PostgreSQL", "Firebase"],
    Mobile: ["Flutter", "Dart", "React Native"],
    DevOps: ["Git", "GitHub Actions", "Docker", "Vercel", "AWS"],
    Tools: ["VS Code", "Figma", "Postman", "Jest"],
  };

  return (
    <section id="skills" className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">Skills & Tecnologías</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Herramientas y tecnologías que uso en mis proyectos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <h3 className="text-xl font-bold mb-4 text-gray-900">{category}</h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
