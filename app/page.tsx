import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills"; // ¡No olvides este import!
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden selection:bg-primary/30">
      <Header />
      
      {/* Componentes en orden lógico */}
      <Hero />
      <Projects />
      <Skills />  {/* Nueva sección Bento Grid de habilidades */}
      <About />   {/* Nueva sección Timeline */}
      <Contact />
      <Footer />
    </main>
  );
}