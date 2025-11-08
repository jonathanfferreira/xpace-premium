import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { PLANS, XPACE_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Pricing() {
  const [frequency, setFrequency] = useState<'once' | 'twice'>('twice');

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />
      
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
            Planos e{' '}
            <span className="gradient-xpace-text">
              Valores
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Escolha o plano ideal para você e comece a dançar hoje mesmo!
          </p>

          {/* Frequency Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-card border border-border rounded-full">
            <button
              onClick={() => setFrequency('once')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                frequency === 'once'
                  ? 'gradient-xpace text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              1x por semana
            </button>
            <button
              onClick={() => setFrequency('twice')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                frequency === 'twice'
                  ? 'gradient-xpace text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              2x por semana
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {PLANS.plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative group ${plan.popular ? 'md:-mt-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10 w-max">
                  <div className="px-5 py-2 bg-gradient-to-r from-xpace-orange to-xpace-purple rounded-full text-sm font-bold text-white flex items-center gap-2 shadow-lg whitespace-nowrap">
                    <Sparkles size={16} />
                    {plan.highlight}
                  </div>
                </div>
              )}

              <div
                className={`relative bg-card border rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.popular
                    ? 'border-primary shadow-xl shadow-primary/20'
                    : 'border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10'
                }`}
              >
                {/* Gradient Background */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl" />
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.duration}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black text-xpace-purple">
                        R$ {plan.prices[frequency]}
                      </span>
                      <span className="text-muted-foreground">/mês</span>
                    </div>
                    {plan.installments > 1 && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {plan.installments}x de R$ {plan.prices[frequency]}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        {frequency === 'twice' ? '2 aulas por semana' : '1 aula por semana'}
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Escolha sua modalidade favorita</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Acesso a todos os professores</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Participação em eventos</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">Comunidade XPACE</span>
                    </li>
                    {plan.popular && (
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-accent">
                          Economia de até R$ 30/mês
                        </span>
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    asChild
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90'
                        : 'bg-card border-2 border-primary text-primary hover:bg-primary/10'
                    }`}
                    size="lg"
                  >
                    <a
                      href={XPACE_INFO.integrations.nextfit.contracts}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Escolher {plan.name}
                    </a>
                  </Button>
                </div>

                {/* Glow Effect */}
                {plan.popular && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-xl -z-10" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-card border border-border rounded-2xl p-6 max-w-2xl">
            <p className="text-sm text-muted-foreground mb-4">
              <strong className="text-foreground">Taxa de adesão:</strong> R$ {PLANS.enrollment},00 (pagamento único)
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Todos os planos são recorrentes e podem ser cancelados a qualquer momento.
              <br />
              Modalidades adicionais: consulte valores especiais!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                asChild
                className="border-accent/50 hover:bg-accent/10"
              >
                <a
                  href={`https://wa.me/${XPACE_INFO.contact.whatsapp}?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20planos.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Tirar dúvidas no WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
