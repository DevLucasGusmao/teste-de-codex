'use client';

import { useMemo, useState } from 'react';
import { BeatCard } from '@/components/BeatCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { SearchBar } from '@/components/SearchBar';
import { beats } from '@/data/content';

export default function BeatsPage() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState({ genre: 'all', mood: 'all', order: 'recent' });

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase();
    const bySearch = beats.filter((beat) =>
      [beat.title, beat.genre, beat.mood, beat.tags.join(' ')].join(' ').toLowerCase().includes(normalized)
    );
    const byFilters = bySearch.filter((beat) => (filters.genre === 'all' || beat.genre === filters.genre) && (filters.mood === 'all' || beat.mood === filters.mood));
    const ordered = [...byFilters];
    if (filters.order === 'priceAsc') ordered.sort((a, b) => a.price - b.price);
    if (filters.order === 'priceDesc') ordered.sort((a, b) => b.price - a.price);
    if (filters.order === 'popular') ordered.sort((a, b) => Number(b.popular) - Number(a.popular));
    if (filters.order === 'recent') ordered.sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate));
    return ordered;
  }, [query, filters]);

  return (
    <section className="container-qg py-12">
      <h1 className="section-title">Loja de Beats</h1>
      <p className="mt-2 text-white/70">Catálogo premium com prévias, filtros avançados e licenciamento rápido.</p>
      <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
        <FilterSidebar filters={filters} onChange={setFilters} />
        <div>
          <SearchBar query={query} onChange={setQuery} />
          <h2 className="mt-4 text-sm text-white/70">{filtered.length} beats encontrados</h2>
          {filtered.length === 0 ? (
            <div className="glass mt-5 rounded-2xl p-8 text-center text-white/70">Nenhum beat encontrado para os filtros selecionados.</div>
          ) : (
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filtered.map((beat) => <BeatCard key={beat.id} beat={beat} />)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
