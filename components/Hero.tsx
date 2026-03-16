import Link from 'next/link';

export function Hero() {
  return (
    <section className="container-qg py-20 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-electric/40 bg-electric/10 px-3 py-1 text-xs font-medium text-electric">
            Estúdio criativo • Rio de Janeiro
          </p>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl">
            O QG da sua <span className="text-electric">mixagem</span> e dos beats que vendem sua identidade.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
            Plataforma completa para agendar serviços musicais profissionais e licenciar beats premium com fluxo rápido, seguro e visual de alto impacto.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/agendar" className="btn-primary">Agendar Mixagem</Link>
            <Link href="/beats" className="btn-secondary">Explorar Beats</Link>
          </div>
        </div>
        <div className="glass rounded-3xl p-6 shadow-neon">
          <h2 className="text-xl font-bold">Experiência premium para artistas e selos</h2>
          <ul className="mt-5 space-y-3 text-sm text-white/80">
            <li>• Agenda inteligente com confirmação visual e resumo.</li>
            <li>• Catálogo de beats com filtros, player e licenciamento claro.</li>
            <li>• Checkout simulado pronto para integração de pagamento real.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
