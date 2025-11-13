import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { XPACE_INFO, DANCE_STYLES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [currentStyle, setCurrentStyle] = useState(0);
  const whatsappLink = `https://wa.me/${XPACE_INFO.contact.whatsapp}?text=Olá!%20Quero%20informações%20sobre%20matrículas%20na%20XPACE.`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStyle((prev) => (prev + 1) % DANCE_STYLES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('valores');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['-10%', '20%', '-10%'],
            y: ['-10%', '10%', '-10%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ['10%', '-20%', '10%'],
            y: ['10%', '-10%', '10%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ['-5%', '15%', '-5%'],
            y: ['15%', '-5%', '15%'],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/25 rounded-full blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block"
            >
              <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
                <span className="text-sm font-medium text-primary">
                  Matrículas abertas • Joinville/SC
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight mb-6"
            >
              <span className="block text-white">Escola de</span>
              <span className="block gradient-xpace-text">Dança</span>
            </motion.h1>

            {/* Tagline with rotating styles */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90"
            >
              A escola de dança que multiplica talentos em{' '}
              <motion.span
                key={currentStyle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block text-primary font-bold"
              >
                {DANCE_STYLES[currentStyle].name}
              </motion.span>
              !
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl"
            >
              Aulas para todas as idades e níveis. Companhia de competição e comunidade vibrante.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="gradient-xpace text-white hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 font-bold"
                asChild
              >
                <a
                  href={XPACE_INFO.integrations.nextfit.trial}
                  target="_blank"
                  rel="noreferrer"
                >
                  Agendar aula experimental
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 font-bold"
                asChild
              >
                <a href="#horarios">Ver horários</a>
              </Button>
            </motion.div>

            {/* Contact Info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-muted-foreground pt-4"
            >
              📍 {XPACE_INFO.location.fullAddress}
              <br />
              ✉️ {XPACE_INFO.contact.email}
            </motion.p>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-2xl shadow-primary/20 aspect-square">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-tl from-accent via-primary to-secondary opacity-60 animate-pulse" />
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.img
                  src="/01.png"
                  alt="XPACE Logo"
                  className="w-2/3 h-auto opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-50"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-40"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.button>
    </section>
  );
}
