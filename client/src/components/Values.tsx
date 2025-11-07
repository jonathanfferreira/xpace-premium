import { motion } from 'framer-motion';
import { VALUES } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';

// Mapeamento para obter o componente do ícone
const Icon = ({ name, ...props }: { name: keyof typeof LucideIcons, [key: string]: any }) => {
  const LucideIcon = LucideIcons[name];
  return LucideIcon ? <LucideIcon {...props} /> : null;
};

export default function Values() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  return (
    <section id="valores" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background pointer-events-none" />
      
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
            Nossos{' '}
            <span className="gradient-xpace-text">
              Valores
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Os pilares que guiam nossa comunidade e fazem da XPACE um lugar especial para dançar e crescer.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {VALUES.map((value, index) => (
            <motion.div
              key={value.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon */}
                <div className="relative mb-4 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(155,135,245,0.3)] text-primary">
                  <Icon name={value.icon as keyof typeof LucideIcons} size={48} strokeWidth={2.5} />
                </div>
                
                {/* Name */}
                <h3 className="relative text-lg font-bold text-foreground">
                  {value.name}
                </h3>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Faça parte da nossa família e viva esses valores todos os dias!
          </p>
          <a
            href="#planos"
            className="inline-block px-8 py-3 gradient-xpace rounded-full font-bold text-white hover:opacity-90 transition-opacity shadow-lg shadow-xpace-purple/30"
          >
            Conheça nossos planos
          </a>
        </motion.div>
      </div>
    </section>
  );
}
