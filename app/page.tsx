import { Hero } from '@/components/Hero';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';
import { beats, faqs, testimonials } from '@/data/content';
import { BeatCard } from '@/components/BeatCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { FAQAccordion } from '@/components/FAQAccordion';
import { CTASection } from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-qg py-14">
        <h2 className="section-title">Serviços em destaque</h2>
        <p className="mt-2 text-white/70">Mixagem em primeiro plano com workflow profissional para artistas e produtores.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {services.slice(0, 3).map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </section>

      <section className="container-qg py-14">
        <h2 className="section-title">Benefícios QGRec</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {['Entrega ágil', 'Qualidade comercial', 'Suporte técnico', 'Estética premium'].map((item) => (
            <div key={item} className="glass rounded-2xl p-4 text-sm text-white/85">{item}</div>
          ))}
        </div>
      </section>

      <section className="container-qg py-14">
        <h2 className="section-title">Beats em destaque</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {beats.filter((beat) => beat.featured).slice(0, 4).map((beat) => <BeatCard key={beat.id} beat={beat} />)}
        </div>
      </section>

      <section className="container-qg py-14">
        <h2 className="section-title">Depoimentos</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => <TestimonialCard key={item.id} testimonial={item} />)}
        </div>
      </section>

      <section className="container-qg py-14">
        <h2 className="section-title">Como funciona</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {['Escolha o serviço', 'Selecione data e horário', 'Revise e envie', 'Receba confirmação'].map((step, idx) => (
            <li key={step} className="glass rounded-2xl p-4 text-sm"><strong>{idx + 1}.</strong> {step}</li>
          ))}
        </ol>
      </section>

      <section className="container-qg py-14">
        <h2 className="section-title">FAQ</h2>
        <div className="mt-6">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
