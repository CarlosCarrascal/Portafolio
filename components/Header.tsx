"use client";

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Mail, FileText } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "#", icon: Home },
    { name: "Proyectos", href: "#projects", icon: Briefcase },
    { name: "Sobre Mí", href: "#about", icon: User },
    { name: "Contacto", href: "#contact", icon: Mail },
  ];

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <nav 
        className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          transition-all duration-300 border border-white/10
          ${scrolled ? "bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/50" : "bg-surface/50 backdrop-blur-md"}
        `}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="relative group p-2 text-text-muted hover:text-white transition-colors"
            aria-label={item.name}
          >
            <item.icon className="w-5 h-5" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-surface border border-white/10 rounded text-[10px] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.name}
            </span>
          </a>
        ))}
        <div className="w-px h-4 bg-white/20 mx-2"></div>
        <a href="/resume.pdf" target="_blank" className="text-xs font-bold text-primary hover:text-accent transition-colors">
          CV
        </a>
      </nav>
    </div>
  );
}