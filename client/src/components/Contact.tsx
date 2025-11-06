import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { XPACE_INFO } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: XPACE_INFO.contact.phone,
      href: `tel:${XPACE_INFO.contact.phone}`,
      color: 'text-xpace-purple'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: XPACE_INFO.contact.email,
      href: `mailto:${XPACE_INFO.contact.email}`,
      color: 'text-xpace-orange'
    },
    {
      icon: MapPin,
      label: 'Endereço',
      value: XPACE_INFO.location.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(XPACE_INFO.location.fullAddress)}`,
      color: 'text-xpace-purple'
    }
  ];

  return (
    <section id="contato" className="py-24 relative overflow-hidden">
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
            Entre em{' '}
            <span className="gradient-xpace-text">
              Contato
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas, agende uma aula experimental ou venha nos visitar!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Fale Conosco</h3>
              <p className="text-muted-foreground mb-8">
                Estamos prontos para te atender! Entre em contato pelos canais abaixo ou preencha o formulário.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Endereço' ? '_blank' : undefined}
                  rel={info.label === 'Endereço' ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-4 p-4 bg-card border border-border rounded-xl hover:border-xpace-purple/50 transition-all duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-xpace-purple/10 ${info.color} group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-gradient-to-br from-xpace-purple/10 to-xpace-orange/10 border border-xpace-purple/20 rounded-2xl"
            >
              <h4 className="font-bold mb-2 text-lg">Atendimento Rápido</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Fale conosco agora pelo WhatsApp e tire suas dúvidas em tempo real!
              </p>
              <Button
                asChild
                className="w-full gradient-xpace text-white hover:opacity-90 transition-opacity"
              >
                <a
                  href={`https://wa.me/${XPACE_INFO.contact.whatsapp}?text=Olá!%20Quero%20informações%20sobre%20a%20XPACE.`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chamar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card border border-border rounded-2xl">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-xpace-purple/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-xpace-purple/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-xpace-purple/50 transition-all"
                  placeholder="(47) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-xpace-purple/50 transition-all resize-none"
                  placeholder="Conte-nos como podemos te ajudar..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || submitted}
                className="w-full gradient-xpace text-white hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : submitted ? (
                  <>
                    ✓ Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Enviar mensagem
                  </>
                )}
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-center text-green-500"
                >
                  Obrigado! Entraremos em contato em breve.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
