import Link from 'next/link';

export function CTASection() {
  return (
    <section className="container-qg py-16">
      <div className="glass flex flex-col items-start justify-between gap-6 rounded-3xl p-8 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-bold">Pronto para elevar seu som?</h2>
          <p className="mt-2 text-white/75">Agende sua mixagem agora e garanta prioridade no calendário.</p>
        </div>
        <Link href="/agendar" className="btn-primary">Quero agendar</Link>
      </div>
    </section>
  );
}
