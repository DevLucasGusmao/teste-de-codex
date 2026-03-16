# QGRec

Plataforma web completa para **agendamento de serviços musicais** (com foco em mixagem) e **loja de beats** com licenciamento.

## Stack
- Next.js 14 (App Router)
- React + TypeScript
- Tailwind CSS

## Estrutura
- `app/` rotas e páginas
- `components/` componentes reutilizáveis
- `data/` dados mockados (beats, serviços, FAQ, depoimentos, licenças)
- `lib/` utilitários
- `types/` tipagens globais
- `public/` assets estáticos
- `styles/` espaço para estilos adicionais

## Funcionalidades implementadas
- Home com hero, serviços, benefícios, beats em destaque, depoimentos, como funciona, FAQ e CTA
- Página de agendamento com cards de serviços e formulário completo
- Fluxo de agendamento com validação, calendário visual, horários, revisão e tela de sucesso
- Loja de beats com busca e filtros (gênero, mood e ordenação)
- Página individual de beat com player, infos técnicas, tabela de licenças, relacionados e FAQ
- Página de licenças com comparativo completo
- Página sobre e contato
- Checkout simulado
- CTA flutuante de WhatsApp

## Rodando localmente
```bash
npm install
npm run dev
```
Acesse `http://localhost:3000`.

## Qualidade e produção
- Tipagem forte em TypeScript
- Componentes reutilizáveis
- Metadados por página principal
- Layout responsivo e acessível
