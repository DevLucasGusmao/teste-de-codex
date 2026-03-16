'use client';

type Props = {
  filters: {
    genre: string;
    mood: string;
    order: string;
  };
  onChange: (next: Props['filters']) => void;
};

export function FilterSidebar({ filters, onChange }: Props) {
  return (
    <aside className="glass space-y-4 rounded-2xl p-4">
      <h2 className="font-bold">Filtros</h2>
      <select className="input" value={filters.genre} onChange={(e) => onChange({ ...filters, genre: e.target.value })}>
        <option value="all">Gênero</option>
        {['Trap', 'R&B', 'Funk', 'Pop', 'Drill', 'Hip Hop', 'Soul', 'Reggaeton', 'Lo-Fi', 'Afrobeats', 'Boom Bap'].map((g) => <option key={g} value={g}>{g}</option>)}
      </select>
      <select className="input" value={filters.mood} onChange={(e) => onChange({ ...filters, mood: e.target.value })}>
        <option value="all">Mood</option>
        {['Sombrio', 'Energético', 'Suave', 'Nostálgico', 'Solar', 'Reflexivo', 'Luxuoso', 'Chill'].map((m) => <option key={m} value={m}>{m}</option>)}
      </select>
      <select className="input" value={filters.order} onChange={(e) => onChange({ ...filters, order: e.target.value })}>
        <option value="recent">Mais recentes</option>
        <option value="popular">Mais populares</option>
        <option value="priceAsc">Preço: menor</option>
        <option value="priceDesc">Preço: maior</option>
      </select>
    </aside>
  );
}
