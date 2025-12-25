"use client";

export default function Skills() {
  const skills = [
    "Flutter", "Dart", "Clean Architecture", "Bloc", "Firebase", 
    "AWS", "Node.js", "Docker", "PostgreSQL", "React", "Next.js", 
    "TypeScript", "IoT", "C++", "Git", "Figma"
  ];

  return (
    <section className="py-24 bg-[#020617] overflow-hidden border-b border-white/5">
      {/* Título pequeño */}
      <div className="px-6 md:px-12 mb-12">
        <h2 className="text-sm font-mono text-white/40 uppercase tracking-[0.2em]">
          Technical Arsenal
        </h2>
      </div>

      {/* Marquee (Texto Infinito) */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex gap-16 md:gap-32">
          {/* Repetimos 2 veces para el efecto infinito */}
          {[...skills, ...skills].map((skill, i) => (
            <span 
              key={i} 
              className="text-6xl md:text-9xl font-bold text-transparent stroke-text hover:text-white transition-colors duration-300 cursor-default select-none"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex gap-16 md:gap-32">
          {[...skills, ...skills].map((skill, i) => (
            <span 
              key={i} 
              className="text-6xl md:text-9xl font-bold text-transparent stroke-text hover:text-white transition-colors duration-300 cursor-default select-none"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}