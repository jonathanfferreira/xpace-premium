
import { lazy, Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import Footer from "@/components/Footer";

// Lazy Loaded Components
const Values = lazy(() => import("@/components/Values"));
const DanceStyles = lazy(() => import("@/components/DanceStyles"));
const Schedule = lazy(() => import("@/components/Schedule"));
const Teachers = lazy(() => import("@/components/Teachers"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Timeline = lazy(() => import("@/components/Timeline"));
const Contact = lazy(() => import("@/components/Contact"));
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <Values />
        <DanceStyles />
        <Schedule />
        <Teachers />
        <Timeline />
        <Pricing />
        <Contact />
      </Suspense>
      
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
