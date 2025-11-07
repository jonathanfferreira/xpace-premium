import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { DANCE_STYLES } from '@/lib/constants';

export default function DanceStyles() {
  const [selectedStyle, setSelectedStyle] = useState<typeof DANCE_STYLES[0] | null>(null);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="estilos" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: ['0%', '100%', '0%'],
            y: ['0%', '50%', '0%'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 -left-20 w-64 h-64 bg-xpace-purple/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: ['100%', '0%', '100%'],
            y: ['50%', '0%', '50%'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 -right-20 w-80 h-80 bg-xpace-orange/10 rounded-full blur-3xl"
        />
      </div>

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
            Estilos de{' '}
            <span className="gradient-xpace-text">
              Dança
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa diversidade de modalidades e encontre o estilo perfeito para você!
          </p>
        </motion.div>

        {/* Styles Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {DANCE_STYLES.map((style) => (
            <motion.div
              key={style.slug}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setSelectedStyle(style)}
              className="group relative cursor-pointer"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 h-48 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${style.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-xpace-purple transition-colors duration-300">
                    {style.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {style.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className="relative z-10 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Saiba mais</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${style.color} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`} />
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
            Não sabe qual estilo escolher? Agende uma aula experimental gratuita!
          </p>
          <a
            href="https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-accent to-primary rounded-full font-bold text-background hover:opacity-90 transition-opacity shadow-lg shadow-accent/30"
          >
            Agendar aula experimental
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStyle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStyle(null)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-card border border-border rounded-3xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedStyle(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X size={24} />
              </button>

              {/* Content */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-br ${selectedStyle.color} opacity-20 rounded-t-3xl`} />
              
              <div className="relative pt-8">
                <h3 className="text-4xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {selectedStyle.name}
                </h3>
                <p className="text-lg text-foreground/90 mb-6">
                  {selectedStyle.description}
                </p>

                <div className="space-y-4">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-bold mb-2 text-primary">Para quem é?</h4>
                    <p className="text-muted-foreground">
                      Aulas disponíveis para todos os níveis, de iniciantes a avançados.
                    </p>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-bold mb-2 text-secondary">O que você vai aprender?</h4>
                    <p className="text-muted-foreground">
                      Técnica, musicalidade, expressão corporal e coreografias incríveis!
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href="#horarios"
                    onClick={() => setSelectedStyle(null)}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-background text-center hover:opacity-90 transition-opacity"
                  >
                    Ver horários
                  </a>
                  <a
                    href="https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 px-6 py-3 border border-primary rounded-full font-bold text-primary text-center hover:bg-primary/10 transition-colors"
                  >
                    Aula experimental
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
