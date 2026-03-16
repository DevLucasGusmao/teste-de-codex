'use client';

export function SearchBar({ query, onChange }: { query: string; onChange: (value: string) => void }) {
  return <input className="input" placeholder="Buscar por nome, gênero, mood ou tags..." value={query} onChange={(e) => onChange(e.target.value)} />;
}
