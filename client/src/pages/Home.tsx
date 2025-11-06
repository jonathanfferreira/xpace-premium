import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import DanceStyles from "@/components/DanceStyles";
import Schedule from '@/components/Schedule';
import Teachers from '@/components/Teachers';
import Contact from '@/components/Contact';
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Values />
      <DanceStyles />
      <Schedule />
      <Teachers />
      <Pricing />
      <Contact />
      
      {/* Placeholder for other sections */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Mais seções em breve...</h2>
          <p className="text-muted-foreground">Professores, Horários e Galeria!</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
