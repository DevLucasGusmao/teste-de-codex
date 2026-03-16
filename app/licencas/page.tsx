import { Metadata } from 'next';
import { PricingTable } from '@/components/PricingTable';
import { FAQAccordion } from '@/components/FAQAccordion';
import { licensePlans, licensingFaq } from '@/data/content';

export const metadata: Metadata = {
  title: 'Licenças | QGRec',
  description: 'Compare licenças básica, premium e exclusiva para beats do QGRec.'
};

export default function LicensesPage() {
  return (
    <section className="container-qg py-12">
      <h1 className="section-title">Licenças claras para decisões seguras</h1>
      <p className="mt-2 text-white/75">Entenda direitos, limites de uso e arquivos entregues em cada plano.</p>
      <div className="mt-8"><PricingTable plans={licensePlans} /></div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Perguntas frequentes</h2>
        <div className="mt-4"><FAQAccordion items={licensingFaq} /></div>
      </div>
    </section>
  );
}
