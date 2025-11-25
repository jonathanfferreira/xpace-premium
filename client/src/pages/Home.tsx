
import { lazy, Suspense } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy Loaded Components
const About = lazy(() => import("@/components/About"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Values = lazy(() => import("@/components/Values"));
const DanceStyles = lazy(() => import("@/components/DanceStyles"));
const Schedule = lazy(() => import("@/components/Schedule"));
const Teachers = lazy(() => import("@/components/Teachers"));
const Timeline = lazy(() => import("@/components/Timeline"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Xpaceflix = lazy(() => import("@/components/Xpaceflix"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <div className="min-h-screen">
      <JsonLd />
      <ScrollProgress />
      <WhatsAppButton />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <Testimonials />
        <Values />
        <DanceStyles />
        <Schedule />
        <Teachers />
        <Timeline />
        <Pricing />
        <Xpaceflix />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
