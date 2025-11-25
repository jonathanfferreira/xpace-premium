
import * as React from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEWS_URL = "https://share.google.com/l0a1p9qB1g4vTItI";

const testimonials = [
  { name: "Andrea Veiga da Silva", rating: 5, text: "A Xpace é a melhor escola de dança de Joinville! Um espaço incrível onde a paixão pela dança é sentida. O ambiente é seguro e acolhedor..." },
  { name: "graciela kirinus", rating: 5, text: "A escola xpace vai muito além da dança, onde incentivam valores de amizade, união, de pertencimento ao grupo e responsabilidade." },
  { name: "Delcio Camelo", rating: 5, text: "Lugar abençoado, acolhedor para todas as pessoas, não precisa saber dançar, lá você aprende desde do básico até o competitivo..." },
  { name: "ana matiola rosa", rating: 5, text: "Não tenho palavras pra expressar tamanha gratidão pela Xpace, todos super receptivos, clima familiar onde se preza o respeito e amizade." },
  { name: "Vanessa Ferreira", rating: 5, text: "Escola incrível, ambiente maravilhoso, uma vista externa linda, ótimos professores, a sala de aula é enorme, eu super indico!" },
  { name: "Marcos Aurélio Rosa", rating: 5, text: "Excelente espaço, professores atenciosos e qualidade no ensino! Parabéns a todos os profissionais!" },
  { name: "Dany Medeiros", rating: 5, text: "Escola respeitosa, buscar o melhor para o aluno. Tem meu respeito e admiração. ❣️🙏🏻" },
  { name: "Matheus Rodrigues", rating: 5, text: "Uma das melhores escolas de dança de Joinville! Amo todas as aulas, professores incríveis e atendimento excelente!" },
  { name: "Rodrigo Hiago de Amorim", rating: 5, text: "A escola foca na experiência da pessoa e na sua evolução com a dança, seja ela iniciante ou avançada." },
  { name: "Alana Veiga", rating: 5, text: "Uma escola com profissionais únicos e pessoas acolhedoras, só tenho a agradecer a tudo que me proporcionou, sem medo!🤍" },
  { name: "Paulo Moura", rating: 5, text: "As aulas de danças urbanas com o professor Ruan são excelentes, possui experiência e ótima didática, turma perfeita para quem está começando do zero." },
  { name: "Laura Helena", rating: 5, text: "Professores muito talentosos! Ambiente perfeito para quem quer se desenvolver na dança!" },
  { name: "Jonathan Ferreira", rating: 5, text: "A melhor de Joinville e SC, com qualidade e disciplina." },
  { name: "Atais Minatti", rating: 5, text: "Incrível esse lugar faz a gente se alegrar e recomendo a todos(as) essa escola incrível." },
  { name: "Alceu Miranda", rating: 5, text: "A melhor escola do sul do Brasil!!!!!! SEM MEDOOOOOOOO" },
  { name: "Leticia Tais", rating: 5, text: "Uma Ótima escola e professores excelentes super Dedicados recomendo muitooo !!!" },
  { name: "Carlos Saavedra", rating: 5, text: "Eles são mais que um grupo, uma família e não é só isso, mas também transmitem isso e isso é algo que admiro nesta escola." },
  { name: "Luísa Kinas", rating: 5, text: "Professores atenciosos e ambiente amigável! Adoro fazer aula com vcs" },
  { name: "Loren Stefany de Oliveira", rating: 5, text: "Melhor lugar para se fazer parte, estrutura ótima, professores preparados, ambiente acolhedor ❤️" },
  { name: "Rodrigo Antunes", rating: 5, text: "Essa escola é top demais!!! Super recomendo!!! Só gratidão!!" },
  { name: "Letícia B. Cordeiro", rating: 5, text: "Escola excelente, ótimos professores! Recomendo demais" },
  { name: "Beatriz Nakaniwa", rating: 5, text: "É muito bom eu adoro dançar lá" },
  { name: "Ananda", rating: 5, text: "Minha experiência foi ótima.amo dançar lá" },
  { name: "Leonardo Holand", rating: 5, text: "Melhor escola de Danças Urbanas de Joinville! Ambiente e pessoas incríveis" },
  { name: "Tonholi", rating: 5, text: "Ambiente incrível assim como os professores! Aulas perfeitas! Obrigado por tudo 🫶🏻" },
  { name: "Janaina Pereira", rating: 5, text: "Escola que acolhe, ensina e proporciona diversas oportunidades!" },
  { name: "Luís Fernando Demetrio", rating: 5, text: "Ótima escola, atende todas as idades recomendo!" },
  { name: "Cintya Fidelis", rating: 5, text: "Amo esse ambiente, lá existe paz e alegria" },
  { name: "Andrea Silva", rating: 5, text: "Escola organizada, Professores experientes. Recomendo" },
  { name: "Maria Gabriela", rating: 5, text: "ótima escola de dança, professores incríveis" },
  { name: "Matheus Engels", rating: 5, text: "Experiência incrível de está dançando nesse grupo" },
  { name: "Prod. Soares", rating: 5, text: "Local bacana, professore super gente boa 👏🏽" },
  { name: "Guta Selhorst", rating: 5, text: "A melhor de joinville mesmo!!" },
  { name: "Alzira Sandra HIlle", rating: 5, text: "Adoro a escola." },
  { name: "dany Leoni", rating: 5, text: "Ótimo professor" },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className={i < rating ? "fill-current" : "text-gray-300"} size={20} />
    ))}
  </div>
);

export default function Testimonials() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  const onSelect = (api: CarouselApi) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black gradient-xpace-text mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Avaliações reais de quem faz parte da nossa família.
          </p>
        </motion.div>

        <Carousel setApi={setApi} className="relative">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4 h-full">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card border border-border/50 rounded-lg p-6 flex flex-col justify-between hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full"
                  >
                    <div>
                      <StarRating rating={testimonial.rating} />
                      <p className="text-muted-foreground italic my-4">
                        \"{testimonial.text}\"
                      </p>
                    </div>
                    <p className="font-bold text-foreground mt-4">- {testimonial.name}</p>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/50 backdrop-blur-sm"
            onClick={() => api?.scrollPrev()}
            disabled={!canScrollPrev}
          >
            <ArrowLeft className="h-6 w-6" />
            <span className="sr-only">Previous testimonial</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-background/50 backdrop-blur-sm"
            onClick={() => api?.scrollNext()}
            disabled={!canScrollNext}
          >
            <ArrowRight className="h-6 w-6" />
            <span className="sr-only">Next testimonial</span>
          </Button>
        </Carousel>
      </div>
    </section>
  );
}
