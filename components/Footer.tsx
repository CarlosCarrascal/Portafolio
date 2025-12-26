export default function Footer() {
  return (
    // AÑADIDO: bg-black/40 y backdrop-blur para "separarlo" visualmente del resto
    // Mantenemos border-t para la línea divisoria
    <footer className="relative z-10 py-8 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Izquierda: Copyright */}
        <p className="text-white/40 text-xs font-mono uppercase tracking-widest text-center md:text-left">
          © {new Date().getFullYear()} Carlos Carrascal.
        </p>

        {/* Derecha: Tech Stack (Sin versión) */}
        <p className="text-white/40 text-xs font-mono text-center md:text-right">
          Construido con <span className="text-white/70">Next.js 15</span> & <span className="text-white/70">Tailwind</span>
        </p>

      </div>
    </footer>
  );
}