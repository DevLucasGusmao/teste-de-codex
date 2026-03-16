import { Metadata } from 'next';
import { BookingForm } from '@/components/BookingForm';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Agendar Serviços | QGRec',
  description: 'Agende mixagem, masterização e serviços musicais profissionais no QGRec.'
};

export default function BookingPage() {
  return (
    <section className="container-qg py-12">
      <h1 className="section-title">Agende sua Mixagem com atendimento premium</h1>
      <p className="mt-3 max-w-3xl text-white/75">
        Defina serviço, data, horário e briefing em um fluxo inteligente. Mixagem é nosso foco principal, com suporte para masterização, edição vocal, produção e consultoria.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-5">
        {services.map((service) => <ServiceCard key={service.id} service={service} />)}
      </div>
      <div className="mt-10">
        <BookingForm preselectedService="mixagem" />
      </div>
    </section>
  );
}
