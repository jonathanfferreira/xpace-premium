import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

// Função para normalizar o nome e obter o caminho da imagem
const getTeacherImagePath = (name: string) => {
  const normalizedName = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s/g, "");
  return `/images/teachers/${normalizedName}.jpg`;
};

interface Teacher {
  name: string;
  styles: string[];
  ig: string;
}

const TEACHERS: Teacher[] = [
  { name: 'Alana Veiga', styles: ['Hip Hop'], ig: 'veigalanaa' },
  { name: 'Alisson Felipe', styles: ['Hip Hop'], ig: 'alissonfelipes' },
  { name: 'Alisson Morpheu', styles: ['Locking'], ig: 'alisson_morpheu' },
  { name: 'Bianca Marcela', styles: ['Contemporâneo', 'Jazz'], ig: 'biancamarceela' },
  { name: 'Dil', styles: ['Vogue', 'Jazz Funk', 'Waacking', 'Hip Hop', 'House'], ig: 'dilschulz' },
  { name: 'Duda Biz', styles: ['Hip Hop'], ig: 'dudabizs' },
  { name: 'Eduarda Rodrigues', styles: ['Jazz Funk', 'Heels'], ig: 'eduarda.r.l' },
  { name: 'Engels', styles: ['Vogue', 'Waacking', 'Jazz Funk'], ig: 'engelsmatheus_' },
  { name: 'Gus', styles: ['Waacking', 'Jazz Funk', 'House'], ig: 'gusjoesting' },
  { name: 'Guilherme Riku', styles: ['Acrobacias'], ig: 'guilhermeriku' },
  { name: 'Isis', styles: ['Hip Hop'], ig: 'isislkr' },
  { name: 'Jhonney', styles: ['Hip Hop', 'Dancehall', 'Jazz Funk', 'Waacking'], ig: 'jhonney.xp' },
  { name: 'Lóren Stefany', styles: ['Hip Hop', 'House'], ig: 'ftloren' },
  { name: 'Lucas Maciel', styles: ['Dancehall'], ig: 'lucasmacieldx' },
  { name: 'Marcelinho', styles: ['Hip Hop'], ig: 'marcelinho_hiphop' },
  { name: 'Natália Lessin', styles: ['Ritmos'], ig: 'nataliatflessin' },
  { name: 'Ruan Amorim', styles: ['Hip Hop', 'House'], ig: 'ruan_amrm' },
  { name: 'Ruan Santos', styles: ['Hip Hop'], ig: 'ruansanttoz' },
  { name: 'Samuel Maros', styles: ['Danças Urbanas'], ig: 'samuzek' }
];

export default function Teachers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="professores" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-xpace-orange/5 to-background pointer-events-none" />

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
              Professores
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça o time de profissionais apaixonados que vão te guiar na sua jornada da dança!
          </p>
        </motion.div>

        {/* Teachers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {TEACHERS.map((teacher) => (
            <motion.div
              key={teacher.ig}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl p-6 h-full flex flex-col items-center text-center transition-all duration-300 hover:border-xpace-purple/50 hover:shadow-xl hover:shadow-xpace-purple/10">
                {/* // Avatar
                <div className="w-20 h-20 rounded-full mb-4 overflow-hidden border-2 border-xpace-purple/50 shadow-lg shadow-xpace-purple/20">
                  <img
                    src={getTeacherImagePath(teacher.name)}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.onerror = null; // Evita loop infinito
                      e.currentTarget.src = '/04.png'; // Imagem de fallback
                    }}
                  />
                </div>

                {/* Name */}
                <h3 className="font-bold text-lg mb-2 text-foreground">
                  {teacher.name}
                </h3>

                {/* Styles */}
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {teacher.styles.slice(0, 2).map((style, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-xpace-purple/10 text-xpace-purple border border-xpace-purple/20"
                    >
                      {style}
                    </span>
                  ))}
                  {teacher.styles.length > 2 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      +{teacher.styles.length - 2}
                    </span>
                  )}
                </div>

                {/* Instagram Link */}
                <a
                  href={`https://instagram.com/${teacher.ig}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto flex items-center gap-2 text-sm text-muted-foreground hover:text-xpace-purple transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @{teacher.ig}
                </a>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-xpace-purple to-xpace-orange rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
