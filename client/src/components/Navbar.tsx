import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { XPACE_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, switchable } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#horarios', label: 'Horários' },
    { href: '#professores', label: 'Professores' },
    { href: '#planos', label: 'Planos' },
    { href: '#premiacoes', label: 'Premiações' },
    { href: '#contato', label: 'Contato' }
  ];

  const whatsappLink = `https://wa.me/${XPACE_INFO.contact.whatsapp}?text=Olá!%20Quero%20informações%20sobre%20matrículas%20na%20XPACE.`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group cursor-pointer">
              <motion.img
                src="/01b.png"
                alt="XPACE Dance Company"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
              <span className="font-bold text-lg text-foreground hidden sm:inline-block">
                {XPACE_INFO.name}
              </span>
            </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Theme Toggle */}
            {switchable && toggleTheme && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-foreground" />
                ) : (
                  <Moon size={20} className="text-foreground" />
                )}
              </button>
            )}
            
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-primary/50 hover:bg-primary/10"
            >
              <a href={XPACE_INFO.integrations.nextfit.trial} target="_blank" rel="noreferrer">
                Aula Experimental
              </a>
            </Button>

            <Button
              size="sm"
              asChild
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                Matrículas
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {link.label}
                </motion.a>
              ))}
              
              {/* Theme Toggle Mobile */}
              {switchable && toggleTheme && (
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium py-2"
                >
                  {theme === 'dark' ? (
                    <>
                      <Sun size={20} />
                      <span>Modo Claro</span>
                    </>
                  ) : (
                    <>
                      <Moon size={20} />
                      <span>Modo Escuro</span>
                    </>
                  )}
                </button>
              )}
              
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  variant="outline"
                  asChild
                  className="border-primary/50 hover:bg-primary/10 w-full"
                >
                  <a href={XPACE_INFO.integrations.nextfit.trial} target="_blank" rel="noreferrer">
                    Aula Experimental
                  </a>
                </Button>

                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity w-full"
                >
                  <a href={whatsappLink} target="_blank" rel="noreferrer">
                    Matrículas
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
