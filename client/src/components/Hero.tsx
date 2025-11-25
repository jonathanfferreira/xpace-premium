
import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import WordRotate from '@/components/ui/word-rotate';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = (api: CarouselApi) => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect(api);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/50 backdrop-blur-sm"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      >
        <ArrowLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/50 backdrop-blur-sm"
        onClick={scrollNext}
        disabled={!canScrollNext}
      >
        <ArrowRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Content */}
      <div className="container relative z-10">
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {/* Slide 1: Main Banner */}
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column (Text Content) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-center md:text-left"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                    <span className="block">A escola de dança</span>
                    <WordRotate
                      className="gradient-xpace-text"
                      words={[
                        "que inspira.",
                        "que conecta.",
                        "que transforma.",
                        "que multiplica.",
                      ]}
                    />
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-10">
                    Do iniciante ao profissional, encontre seu ritmo e sua paixão em um ambiente vibrante e acolhedor.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="group">
                      <a 
                        href="https://wa.me/5547999463474?text=Olá!%20Gostaria%20de%20agendar%20uma%20aula%20experimental%20na%20XPACE."
                        target="_blank"
                        rel="noreferrer"
                      >
                        Agendar Aula Experimental
                        <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                      <a href="#planos">Explorar Planos</a>
                    </Button>
                  </div>
                </motion.div>

                {/* Right Column (Image/Logo) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  className="relative flex items-center justify-center"
                >
                  <a href="https://www.instagram.com/p/C9Yg0iVuWwZ/" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/images/poster.png" 
                      alt="Cartaz do espetáculo Xpaceflix - 7 de Dezembro no Teatro Juarez Machado"
                      className="w-full max-w-xl h-auto rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </motion.div>
              </div>
            </CarouselItem>

            {/* Slide 2: FIH2 Champions */}
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column (Text Content for Video) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-center md:text-left"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                    <span className="block">Pódio na</span>
                    <span className="gradient-xpace-text">América Latina!</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-6">
                    Vice-campeões no FIH2 2025! Um marco histórico como o único grupo de Joinville a conquistar o 2º lugar no maior campeonato de danças urbanas da América Latina.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="group">
                      <a href="#estilos">
                        Faça parte dos campeões
                        <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Right Column (YouTube Video) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  className="relative w-full max-w-xl mx-auto"
                >
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                      src="https://www.youtube.com/embed/TipBGmO_PzY" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>

            {/* Slide 3: Mini Crew Video */}
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column (Text Content for Video) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-center md:text-left"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                    <span className="block">Nossa incrível</span>
                    <span className="gradient-xpace-text">Mini Crew</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-6">
                    Um feito histórico! Esta coreografia de Jhonney foi vice-campeã, ficando atrás apenas dos vice-campeões mundiais do HHI. Um marco para a escola e para o talentoso elenco: Alana Veiga, Isis Lindermann e Julia Isabela.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="group">
                      <a href="#estilos">
                        Conheça as Turmas
                        <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Right Column (YouTube Video) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  className="relative w-full max-w-xl mx-auto"
                >
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                      src="https://www.youtube.com/embed/cyFQmBLISr4" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>

            {/* Slide 4: Junior Crew Video */}
            <CarouselItem>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column (Text Content for Video) */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-center md:text-left"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
                    <span className="block">Nosso Elenco</span>
                    <span className="gradient-xpace-text">Júnior Brilha!</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 mb-6">
                    Estreando no HHI, nosso elenco júnior conquistou um incrível 2º lugar! Parabéns aos nossos talentos: Beatriz Victoria, Giovana de Miranda, Caio Gonçalves, Lorenzzo de Souza, Cassia Minatti, Julia Campos e Sofia Landman.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="lg" className="group">
                      <a href="#estilos">
                        Seja um campeão também
                        <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Right Column (YouTube Video) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                  className="relative w-full max-w-xl mx-auto"
                >
                  <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-2xl">
                    <iframe 
                      src="https://www.youtube.com/embed/wGzmnBXzcUs" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>

          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
