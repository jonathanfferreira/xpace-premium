import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, TrendingUp, Sparkles } from 'lucide-react';

interface ScheduleClass {
  time: string;
  style: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  ageGroup: string;
  isNew?: boolean;
}

interface DaySchedule {
  day: string;
  classes: ScheduleClass[];
}

const SCHEDULE_DATA: DaySchedule[] = [
  {
    day: 'Segunda e Quarta',
    classes: [
      { time: '18:00', style: 'Contemporâneo', level: 'Iniciante', ageGroup: 'Adulto' },
      { time: '19:00', style: 'Danças Urbanas', level: 'Iniciante', ageGroup: 'Infantil' },
      { time: '20:00', style: 'Danças Urbanas', level: 'Avançado', ageGroup: 'Sênior' },
      { time: '21:00', style: 'Jazz', level: 'Intermediário', ageGroup: 'Adulto' }
    ]
  },
  {
    day: 'Terça e Quinta',
    classes: [
      { time: '18:30', style: 'FitDance', level: 'Iniciante', ageGroup: 'Adulto' },
      { time: '19:15', style: 'Danças Urbanas', level: 'Avançado', ageGroup: 'Junior' },
      { time: '20:15', style: 'Acrobacia', level: 'Iniciante', ageGroup: 'Adulto' },
      { time: '21:15', style: 'Dança de Salão', level: 'Iniciante', ageGroup: 'Adulto', isNew: true }
    ]
  },
  {
    day: 'Sexta-feira',
    classes: [
      { time: '19:00', style: 'Danças Urbanas', level: 'Iniciante', ageGroup: 'Adulto' },
      { time: '20:30', style: 'Ensaio CIA', level: 'Avançado', ageGroup: 'Companhia' }
    ]
  },
  {
    day: 'Sábado',
    classes: [
      { time: '09:00', style: 'Jazz Funk', level: 'Iniciante', ageGroup: 'Adulto' },
      { time: '10:00', style: 'Danças Urbanas', level: 'Intermediário', ageGroup: 'Adulto' },
      { time: '11:00', style: 'Heels', level: 'Iniciante', ageGroup: 'Adulto' }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Iniciante':
      return 'bg-xpace-blue/20 text-xpace-blue border-xpace-blue/30';
    case 'Intermediário':
      return 'bg-xpace-purple/20 text-xpace-purple border-xpace-purple/30';
    case 'Avançado':
      return 'bg-xpace-orange/20 text-xpace-orange border-xpace-orange/30';
    default:
      return 'bg-primary/20 text-primary border-primary/30';
  }
};

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="horarios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-xpace-purple/5 to-background pointer-events-none" />

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
            Grade de{' '}
            <span className="gradient-xpace-text">
              Horários
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre o horário perfeito para você e comece a dançar hoje mesmo!
          </p>
        </motion.div>

        {/* Day Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedDay(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedDay === null
                ? 'gradient-xpace text-white shadow-lg shadow-xpace-purple/30'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-xpace-purple/50'
            }`}
          >
            Todos os dias
          </button>
          {SCHEDULE_DATA.map((schedule) => (
            <button
              key={schedule.day}
              onClick={() => setSelectedDay(schedule.day)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedDay === schedule.day
                  ? 'gradient-xpace text-white shadow-lg shadow-xpace-purple/30'
                  : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-xpace-purple/50'
              }`}
            >
              {schedule.day}
            </button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SCHEDULE_DATA.filter(
            (schedule) => selectedDay === null || schedule.day === selectedDay
          ).map((schedule) => (
            <motion.div
              key={schedule.day}
              variants={cardVariants}
              className="bg-card border border-border rounded-3xl p-6 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Day Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                <div className="p-2 rounded-full bg-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg">{schedule.day}</h3>
              </div>

              {/* Classes */}
              <div className="space-y-4">
                {schedule.classes.map((classItem, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="relative bg-muted/30 rounded-xl p-4 cursor-pointer group"
                  >
                    {/* New Badge */}
                    {classItem.isNew && (
                      <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-primary rounded-full px-3 py-1 text-xs font-bold text-background flex items-center gap-1 shadow-lg">
                        <Sparkles size={12} />
                        NEW
                      </div>
                    )}

                    {/* Time */}
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-black text-primary">
                        {classItem.time}
                      </span>
                    </div>

                    {/* Style */}
                    <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {classItem.style}
                    </h4>

                    {/* Details */}
                    <div className="flex flex-wrap gap-2">
                      {/* Level Badge */}
                      <span
                        className={`text-xs px-2 py-1 rounded-full border font-medium ${getLevelColor(
                          classItem.level
                        )}`}
                      >
                        {classItem.level}
                      </span>

                      {/* Age Group Badge */}
                      <span className="text-xs px-2 py-1 rounded-full border bg-muted/50 text-muted-foreground border-border flex items-center gap-1">
                        <Users size={12} />
                        {classItem.ageGroup}
                      </span>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <TrendingUp size={16} className="text-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Não encontrou o horário ideal? Entre em contato e vamos encontrar a melhor opção para você!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-background hover:opacity-90 transition-opacity shadow-lg shadow-primary/30"
            >
              Agendar aula experimental
            </a>
            <a
              href="https://wa.me/5547989227002?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20horários."
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-3 border-2 border-primary rounded-full font-bold text-primary hover:bg-primary/10 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
