import { Service } from '@/types';

type Props = {
  service: Service;
  onSelect?: (id: string) => void;
};

export function ServiceCard({ service, onSelect }: Props) {
  return (
    <article className={`glass rounded-2xl p-5 ${service.featured ? 'ring-1 ring-electric/50' : ''}`}>
      {service.featured && (
        <span className="mb-3 inline-block rounded-full bg-electric/20 px-3 py-1 text-xs font-medium text-electric">Mais procurado</span>
      )}
      <h3 className="text-xl font-bold">{service.name}</h3>
      <p className="mt-2 text-sm text-white/75">{service.shortDescription}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-white/80">
        <span>{service.priceFrom}</span>
        <span>{service.eta}</span>
      </div>
      <button className="btn-secondary mt-5 w-full" onClick={() => onSelect?.(service.id)}>
        Agendar
      </button>
    </article>
  );
}
