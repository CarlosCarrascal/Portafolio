export default function Footer() {
  return (
    // ELIMINADO: bg-background
    // AÑADIDO: relative z-10 y backdrop-blur opcional si quieres separar
    <footer className="relative z-10 py-8 border-t border-white/5 text-center">
      <div className="container mx-auto px-6">
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Carlos Carrascal. Construido con{" "}
          <span className="text-primary">Next.js 15</span> &{" "}
          <span className="text-primary">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}
