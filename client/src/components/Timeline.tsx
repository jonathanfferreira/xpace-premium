import { motion } from 'framer-motion';
import { Award, Calendar, Trophy } from 'lucide-react';

interface AwardItem {
  year: number;
  title: string;
  description: string;
  highlight: boolean;
}

const AWARDS: AwardItem[] = [
  {
    year: 2023,
    title: 'Campeã Nacional - Hip Hop',
    description: 'Conquista do 1º lugar na categoria Hip Hop no Festival Nacional de Dança de Joinville.',
    highlight: true,
  },
  {
    year: 2023,
    title: 'Melhor Coreografia Jazz Funk',
    description: 'Reconhecimento pela coreografia inovadora no estilo Jazz Funk no Festival de Dança de Santa Catarina.',
    highlight: false,
  },
  {
    year: 2022,
    title: 'Prêmio Revelação',
    description: 'A XPACE foi eleita a Escola Revelação do ano pelo Conselho Estadual de Dança.',
    highlight: true,
  },
  {
    year: 2021,
    title: 'Top 3 - Danças Urbanas',
    description: 'Classificação entre as 3 melhores escolas na competição regional de Danças Urbanas.',
    highlight: false,
  },
  {
    year: 2020,
    title: 'Inauguração da Sede Própria',
    description: 'Mudança para a nova e moderna sede, ampliando a capacidade de aulas e eventos.',
    highlight: true,
  },
];

const TimelineItem = ({ award, index }: { award: AwardItem, index: number }) => {
  const isLeft = index % 2 === 0;
  const Icon = award.highlight ? Trophy : Award;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex mb-8 ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`flex w-full ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className="hidden md:flex flex-col items-center mx-4">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${award.highlight ? 'bg-accent border-accent/50' : 'bg-primary border-primary/50'} text-white z-10`}>
            <Icon size={20} />
          </div>
          <div className="w-px h-full bg-border" />
        </div>

        <div className={`w-full md:w-5/12 p-6 rounded-xl border ${award.highlight ? 'border-accent/50 bg-card shadow-xl shadow-accent/10' : 'border-border bg-card/50'} transition-all duration-300 hover:shadow-2xl`}>
          <div className="flex items-center mb-2">
            <Calendar size={16} className="text-muted-foreground mr-2" />
            <span className="text-sm font-medium text-muted-foreground">{award.year}</span>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${award.highlight ? 'text-accent' : 'text-foreground'}`}>{award.title}</h3>
          <p className="text-muted-foreground">{award.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Timeline() {
  return (
    <section id="premiacoes" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            Nossas{' '}
            <span className="gradient-xpace-text">
              Premiações
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma história de dedicação, talento e reconhecimento nos palcos do Brasil.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />
          {AWARDS.map((award, index) => (
            <TimelineItem key={index} award={award} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
