export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-background text-center">
      <div className="container-custom">
        <p className="text-text-muted text-sm">
          © {new Date().getFullYear()} Carlos Carrascal. Construido con <span className="text-primary">Next.js 15</span> & <span className="text-primary">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}