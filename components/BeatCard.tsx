import Image from 'next/image';
import Link from 'next/link';
import { Beat } from '@/types';
import { formatCurrency } from '@/lib/utils';

export function BeatCard({ beat }: { beat: Beat }) {
  return (
    <article className="glass group overflow-hidden rounded-2xl">
      <div className="relative h-48">
        <Image src={beat.image} alt={beat.title} fill className="object-cover transition duration-500 group-hover:scale-105" />
        {beat.featured && <span className="absolute left-3 top-3 rounded-full bg-sunset px-3 py-1 text-xs font-semibold">Destaque</span>}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{beat.title}</h3>
          <span className="text-sm text-electric">{formatCurrency(beat.price)}</span>
        </div>
        <p className="mt-1 text-xs text-white/65">{beat.genre} • {beat.bpm} BPM • {beat.key}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {beat.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-white/20 px-2 py-1 text-xs text-white/70">#{tag}</span>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          <button className="btn-secondary !px-3 !py-2 text-xs">▶</button>
          <button className="btn-secondary !px-3 !py-2 text-xs">♡</button>
          <Link href={`/beats/${beat.slug}`} className="btn-primary !px-3 !py-2 text-xs">Licenciar</Link>
        </div>
      </div>
    </article>
  );
}
