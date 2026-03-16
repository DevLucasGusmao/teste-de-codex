import { LicensePlan } from '@/types';

export function PricingTable({ plans }: { plans: LicensePlan[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <article key={plan.name} className="glass rounded-2xl p-5">
          <h3 className="text-xl font-bold">{plan.name}</h3>
          <p className="mt-2 text-2xl font-black text-electric">{plan.price}</p>
          <p className="mt-3 text-sm font-semibold">Inclui:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/75">
            {plan.rights.map((right) => <li key={right}>{right}</li>)}
          </ul>
          <p className="mt-3 text-sm font-semibold">Limites:</p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-white/75">
            {plan.limits.map((limit) => <li key={limit}>{limit}</li>)}
          </ul>
        </article>
      ))}
    </div>
  );
}
