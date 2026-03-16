import { Beat, FAQ, LicensePlan, Testimonial, TimeSlot } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'MC Luma',
    role: 'Artista independente',
    content: 'A mixagem do QGRec elevou meu som de demo para nível streaming. Atendimento rápido e visão artística de verdade.',
    rating: 5
  },
  {
    id: '2',
    name: 'Neto BX',
    role: 'Produtor de trap',
    content: 'Comprei três beats e todos vieram com identidade forte. A loja é prática e passa confiança no checkout.',
    rating: 5
  },
  {
    id: '3',
    name: 'Brenda R.',
    role: 'Cantora pop/R&B',
    content: 'Consegui agendar em poucos minutos, com calendário claro e confirmação imediata. Fluxo impecável.',
    rating: 5
  },
  {
    id: '4',
    name: 'DJ Miro',
    role: 'DJ e beatmaker',
    content: 'A masterização ficou equilibrada e potente. O feedback técnico durante o processo fez toda diferença.',
    rating: 4
  },
  {
    id: '5',
    name: 'Coletivo Norte Sul',
    role: 'Selo urbano',
    content: 'Plataforma profissional e visual premium. Fechamos serviços e licenças no mesmo lugar, sem fricção.',
    rating: 5
  }
];

export const faqs: FAQ[] = [
  {
    question: 'Quanto tempo leva uma mixagem?',
    answer: 'A maioria das mixagens é entregue entre 48h e 5 dias úteis, dependendo da complexidade e quantidade de stems.'
  },
  {
    question: 'Posso enviar referências de sonoridade?',
    answer: 'Sim. No formulário de agendamento você pode inserir links e observações para direcionar estética, dinâmica e ambiência.'
  },
  {
    question: 'Os beats são exclusivos?',
    answer: 'Você escolhe entre licenças não exclusivas e exclusivas. A exclusiva remove o beat do catálogo após a compra.'
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'O checkout simulado já apresenta cartão, PIX e cupom. A integração real pode ser conectada com gateway depois.'
  },
  {
    question: 'Posso revisar a mixagem antes da entrega final?',
    answer: 'Sim. Planos de mixagem incluem rodadas de revisão conforme o escopo contratado.'
  }
];

export const licensingFaq: FAQ[] = [
  {
    question: 'A licença básica permite distribuição digital?',
    answer: 'Sim, com limite de streams e sem direitos de uso comercial amplo em campanhas grandes.'
  },
  {
    question: 'A licença premium inclui stems?',
    answer: 'Sim, a premium já inclui stems separados para facilitar performance e pós-produção.'
  },
  {
    question: 'A licença exclusiva transfere todos os direitos autorais?',
    answer: 'Não. Ela concede uso comercial integral no beat e retira do catálogo, mantendo créditos de produção conforme contrato.'
  }
];

export const licensePlans: LicensePlan[] = [
  {
    name: 'Básica',
    price: 'R$ 149',
    rights: ['Distribuição digital', '1 videoclipe', 'Uso em shows locais'],
    limits: ['Até 100 mil streams', 'Sem campanha nacional de mídia paga'],
    files: ['MP3 320kbps', 'Contrato PDF']
  },
  {
    name: 'Premium',
    price: 'R$ 349',
    rights: ['Distribuição comercial ampliada', 'Até 3 videoclipes', 'Monetização em plataformas'],
    limits: ['Até 1 milhão de streams'],
    files: ['WAV 24bit', 'MP3', 'Stems', 'Contrato PDF']
  },
  {
    name: 'Exclusiva',
    price: 'R$ 2.900',
    rights: ['Uso comercial sem limite de streams', 'Beat removido do catálogo', 'Prioridade de suporte'],
    limits: ['Negociação individual para sync de grande porte'],
    files: ['WAV 24bit', 'Stems completos', 'Trackout', 'Contrato completo']
  }
];

export const beats: Beat[] = [
  {
    id: 'b1', slug: 'lapa-midnight', title: 'Lapa Midnight', genre: 'Trap', mood: 'Sombrio', bpm: 142, key: 'F#m', duration: '2:41', tags: ['808', 'dark', 'club'], price: 219,
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', featured: true, popular: true, releaseDate: '2026-02-01', description: 'Beat trap com ambiência urbana, hats agressivos e graves encorpados para refrões de impacto.'
  },
  { id: 'b2', slug: 'ipanema-wave', title: 'Ipanema Wave', genre: 'R&B', mood: 'Suave', bpm: 96, key: 'Dmaj', duration: '3:12', tags: ['neo soul', 'clean', 'vibe'], price: 189, image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', featured: true, releaseDate: '2026-01-15', description: 'Groove sofisticado com teclas quentes e bateria orgânica para vozes melódicas.' },
  { id: 'b3', slug: 'favela-bounce', title: 'Favela Bounce', genre: 'Funk', mood: 'Energético', bpm: 130, key: 'Am', duration: '2:20', tags: ['baile', 'percussão', 'hit'], price: 249, image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', popular: true, releaseDate: '2026-03-01', description: 'Beat de funk com kick marcante e synth moderno, ideal para pista e viralização.' },
  { id: 'b4', slug: 'botafogo-sun', title: 'Botafogo Sun', genre: 'Pop', mood: 'Inspirador', bpm: 115, key: 'Gmaj', duration: '2:57', tags: ['radio', 'uplift'], price: 199, image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-02-14', description: 'Pop contemporâneo com refrão expansivo e timbres brilhantes.' },
  { id: 'b5', slug: 'arcos-808', title: 'Arcos 808', genre: 'Drill', mood: 'Agressivo', bpm: 145, key: 'Em', duration: '2:35', tags: ['drill', 'uk', 'heavy'], price: 229, image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-01-29', description: 'Drill com slides intensos e texturas densas, pronto para barras fortes.' },
  { id: 'b6', slug: 'copacabana-neon', title: 'Copacabana Neon', genre: 'Trap Soul', mood: 'Nostálgico', bpm: 120, key: 'Cm', duration: '3:04', tags: ['soul', 'night'], price: 205, image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', featured: true, releaseDate: '2026-02-18', description: 'Atmosfera noturna com pianos texturizados e baixo quente.' },
  { id: 'b7', slug: 'atlantica-drive', title: 'Atlântica Drive', genre: 'Afrobeats', mood: 'Solar', bpm: 108, key: 'Bmaj', duration: '2:52', tags: ['dance', 'summer'], price: 179, image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-03-05', description: 'Percussões leves e synth tropical para hits dançantes.' },
  { id: 'b8', slug: 'cinelandia-lofi', title: 'Cinelândia Lo-Fi', genre: 'Lo-Fi', mood: 'Chill', bpm: 82, key: 'Amaj', duration: '2:48', tags: ['study', 'jazz'], price: 139, image: 'https://images.unsplash.com/photo-1461784121038-f088ca1e7714?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-02-27', description: 'Lo-fi com textura de fita, ideal para storytelling intimista.' },
  { id: 'b9', slug: 'urca-cinema', title: 'Urca Cinema', genre: 'Boom Bap', mood: 'Clássico', bpm: 90, key: 'Dm', duration: '3:18', tags: ['vinyl', 'rap'], price: 169, image: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-01-08', description: 'Boom bap cinematográfico com samples elegantes e bateria seca.' },
  { id: 'b10', slug: 'vidigal-horizon', title: 'Vidigal Horizon', genre: 'Reggaeton', mood: 'Sensual', bpm: 100, key: 'Fmaj', duration: '2:43', tags: ['latin', 'club'], price: 199, image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-03-07', description: 'Reggaeton moderno com groove de pista e synth quente.' },
  { id: 'b11', slug: 'rio-noble', title: 'Rio Noble', genre: 'Soul', mood: 'Luxuoso', bpm: 88, key: 'Gm', duration: '3:06', tags: ['live', 'keys'], price: 259, image: 'https://images.unsplash.com/photo-1458560871784-56d23406c091?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', featured: true, popular: true, releaseDate: '2026-03-09', description: 'Soul premium com arranjo refinado e espaço vocal amplo.' },
  { id: 'b12', slug: 'quinta-da-boa', title: 'Quinta da Boa', genre: 'Hip Hop', mood: 'Reflexivo', bpm: 94, key: 'C#m', duration: '2:59', tags: ['poético', 'smooth'], price: 159, image: 'https://images.unsplash.com/photo-1516223725307-6f76b9ec8742?q=80&w=1200&auto=format&fit=crop', audioPreview: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', releaseDate: '2026-02-08', description: 'Hip hop introspectivo com piano emotivo e bateria suave.' }
];

export const availableSlots: Record<string, TimeSlot[]> = {
  '2026-03-20': [
    { time: '10:00', available: true },
    { time: '11:30', available: false },
    { time: '14:00', available: true },
    { time: '16:30', available: true }
  ],
  '2026-03-21': [
    { time: '09:30', available: true },
    { time: '13:00', available: true },
    { time: '15:30', available: false },
    { time: '18:00', available: true }
  ]
};
