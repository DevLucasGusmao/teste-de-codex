import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre | QGRec',
  description: 'Conheça a história, visão e posicionamento artístico/comercial da QGRec.'
};

export default function AboutPage() {
  return (
    <section className="container-qg py-12">
      <h1 className="section-title">Sobre a QGRec</h1>
      <p className="mt-4 max-w-4xl text-white/75">
        Nascemos no Rio para unir técnica de estúdio e visão de mercado. A QGRec posiciona artistas com mixagens de impacto e beats com assinatura autoral,
        oferecendo experiência confiável para quem precisa lançar com padrão profissional.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ['Missão', 'Transformar ideias musicais em produtos sonoros competitivos.'],
          ['Visão', 'Ser referência brasileira em serviços de áudio e licenciamento criativo.'],
          ['Valores', 'Excelência técnica, transparência comercial e respeito à arte.']
        ].map(([title, text]) => (
          <article key={title} className="glass rounded-2xl p-5">
            <h2 className="text-xl font-bold">{title}</h2>
            <p className="mt-2 text-sm text-white/75">{text}</p>
          </article>
        ))}
      </div>
      <div className="glass mt-8 rounded-2xl p-6">
        <h2 className="text-2xl font-bold">Branding do produtor/engenheiro</h2>
        <p className="mt-2 text-white/75">Espaço dedicado para foto oficial, assinatura sonora e portfólio de lançamentos.</p>
      </div>
    </section>
  );
}
