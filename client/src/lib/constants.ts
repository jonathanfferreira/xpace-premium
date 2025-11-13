// XPACE Dance Company - Constants

export const XPACE_INFO = {
  name: "XPACE Escola de Dança",
  tagline: "A escola de dança que multiplica talentos",
  location: {
    address: "R. do Ouro, 185 - Iririú",
    city: "Joinville",
    state: "SC",
    zip: "89227-002",
    fullAddress: "R. do Ouro, 185 - Iririú, Joinville - SC, 89227-002"
  },
  contact: {
    email: "xpacedancecompany@gmail.com",
    phone: "+55 47 99946-3474",
    whatsapp: "5547999463474",
    cnpj: "30.006.509/0001-02"
  },
  social: {
    instagram: "https://www.instagram.com/xpacedance/",
    tiktok: "https://www.tiktok.com/@xpacedance",
    youtube: "https://www.youtube.com/@xpacedancecompany"
  },
  integrations: {
    nextfit: {
      trial: "https://agendamento.nextfit.com.br/f9b1ea53-0e0e-4f98-9396-3dab7c9fbff4",
      contracts: "https://venda.nextfit.com.br/54a0cf4a-176f-46d3-b552-aad35019a4ff/contratos",
      store: "https://venda.nextfit.com.br/a73fa303-44ae-47e4-b2d0-314298a94dc4/produtos"
    },
    formspree: "https://formspree.io/f/xknldwgy"
  }
};

export const DANCE_STYLES = [
  {
    slug: 'dancas-urbanas',
    name: 'Danças Urbanas',
    description: 'Hip Hop, Breaking, Popping, Locking e toda a cultura urbana. Grooves, freestyle e foundations para todos os níveis.',
    color: 'from-primary to-secondary'
  },
  {
    slug: 'jazz',
    name: 'Jazz',
    description: 'Estilo clássico com técnica refinada, isolações e expressão artística. Base para diversos estilos de dança.',
    color: 'from-secondary to-accent'
  },
  {
    slug: 'jazzfunk',
    name: 'Jazz Funk',
    description: 'Mistura do jazz com a estética pop/comercial. Ênfase em precisão, performance e atitude.',
    color: 'from-accent to-primary'
  },
  {
    slug: 'heels',
    name: 'Heels',
    description: 'Dança de salto alto combinando técnica, sensualidade e empoderamento. Confiança e expressão feminina.',
    color: 'from-neon-pink to-secondary'
  },
  {
    slug: 'contemporaneo',
    name: 'Contemporâneo',
    description: 'Dança expressiva que combina técnicas clássicas e modernas com liberdade criativa e emoção.',
    color: 'from-primary to-electric-blue'
  },
  {
    slug: 'danca-de-salao',
    name: 'Dança de Salão',
    description: 'Ritmos latinos e de salão. Samba, salsa, forró, bolero e muito mais para dançar a dois.',
    color: 'from-accent to-neon-pink'
  },
  {
    slug: 'acrobacia',
    name: 'Acrobacia',
    description: 'Movimentos acrobáticos e aéreos. Força, flexibilidade e controle corporal para complementar coreografias.',
    color: 'from-primary to-accent'
  },
  {
    slug: 'fitdance',
    name: 'FitDance',
    description: 'Dança fitness com coreografias animadas. Queime calorias enquanto se diverte dançando!',
    color: 'from-electric-blue to-primary'
  }
];

export const VALUES = [
  { name: 'Família', icon: '👨‍👩‍👧‍👦' },
  { name: 'Respeito', icon: '🤝' },
  { name: 'Disciplina', icon: '🎯' },
  { name: 'Diversão', icon: '🎉' },
  { name: 'Dedicação', icon: '💪' },
  { name: 'Compromisso', icon: '⭐' }
];

export const PLANS = {
  enrollment: 80,
  plans: [
    {
      id: 'annual',
      name: 'Plano Anual',
      duration: '12 meses',
      installments: 12,
      popular: true,
      highlight: 'Melhor custo-benefício',
      prices: {
        twice: 130,
        once: 100
      }
    },
    {
      id: 'semester',
      name: 'Plano Semestral',
      duration: '6 meses',
      installments: 6,
      popular: false,
      prices: {
        twice: 150,
        once: 110
      }
    },
    {
      id: 'monthly',
      name: 'Plano Mensal',
      duration: '1 mês',
      installments: 1,
      popular: false,
      prices: {
        twice: 160,
        once: 120
      }
    }
  ]
};

export const MODALITIES = [
  'Acrobacia',
  'Contemporâneo',
  'Dança de Salão',
  'Danças Urbanas',
  'FitDance',
  'Heels',
  'Jazz',
  'JazzFunk'
];
