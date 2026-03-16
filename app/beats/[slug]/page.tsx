import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BeatPlayer } from '@/components/BeatPlayer';
import { FAQAccordion } from '@/components/FAQAccordion';
import { PricingTable } from '@/components/PricingTable';
import { beats, licensePlans, licensingFaq } from '@/data/content';

export default function BeatDetailPage({ params }: { params: { slug: string } }) {
  const beat = beats.find((item) => item.slug === params.slug);
  if (!beat) return notFound();

  const related = beats.filter((item) => item.genre === beat.genre && item.id !== beat.id).slice(0, 3);

  return (
    <section className="container-qg py-12">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="relative h-[360px] overflow-hidden rounded-3xl">
          <Image src={beat.image} alt={beat.title} fill className="object-cover" />
        </div>
        <div>
          <h1 className="section-title">{beat.title}</h1>
          <p className="mt-2 text-white/75">{beat.description}</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80">
            <p>Gênero: {beat.genre}</p><p>Mood: {beat.mood}</p><p>BPM: {beat.bpm}</p><p>Tonalidade: {beat.key}</p>
          </div>
          <div className="mt-5"><BeatPlayer src={beat.audioPreview} /></div>
          <Link href={`/checkout?beat=${beat.slug}&license=Premium`} className="btn-primary mt-5">Comprar licença</Link>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="section-title">Tabela de licenças</h2>
        <div className="mt-5"><PricingTable plans={licensePlans} /></div>
      </div>

      <div className="mt-12">
        <h2 className="section-title">Beats relacionados</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.id} href={`/beats/${item.slug}`} className="glass rounded-2xl p-4">
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-white/60">{item.genre} • {item.bpm} BPM</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="section-title">FAQ de licenciamento</h2>
        <div className="mt-4"><FAQAccordion items={licensingFaq} /></div>
      </div>
    </section>
  );
}
