import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'mixagem',
    name: 'Mixagem',
    shortDescription: 'Equilíbrio, impacto e profundidade para sua música soar profissional em qualquer plataforma.',
    priceFrom: 'R$ 350',
    eta: '48h a 5 dias úteis',
    featured: true
  },
  {
    id: 'masterizacao',
    name: 'Masterização',
    shortDescription: 'Volume competitivo, clareza e consistência para lançamento digital e performance ao vivo.',
    priceFrom: 'R$ 180',
    eta: '24h a 3 dias úteis'
  },
  {
    id: 'producao',
    name: 'Produção Musical',
    shortDescription: 'Do conceito ao resultado final com direção artística e estética sonora estratégica.',
    priceFrom: 'R$ 900',
    eta: 'sob briefing'
  },
  {
    id: 'edicao-vocal',
    name: 'Edição Vocal',
    shortDescription: 'Correção fina de afinação, timing e limpeza de ruídos para vocais sólidos e naturais.',
    priceFrom: 'R$ 250',
    eta: '24h a 4 dias úteis'
  },
  {
    id: 'consultoria',
    name: 'Consultoria Musical',
    shortDescription: 'Sessão estratégica para revisar arranjo, identidade sonora e plano de lançamento.',
    priceFrom: 'R$ 200',
    eta: '60 minutos'
  }
];
