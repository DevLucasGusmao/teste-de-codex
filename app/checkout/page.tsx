import Link from 'next/link';
import { beats } from '@/data/content';
import { formatCurrency } from '@/lib/utils';

export default function CheckoutPage({ searchParams }: { searchParams: { beat?: string; license?: string } }) {
  const beat = beats.find((item) => item.slug === searchParams.beat) ?? beats[0];
  const license = searchParams.license ?? 'Premium';
  const subtotal = beat.price;
  const fee = 9.9;
  const total = subtotal + fee;

  return (
    <section className="container-qg py-12">
      <h1 className="section-title">Checkout seguro (simulado)</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold">Resumo do item</h2>
          <p className="mt-2">Beat: {beat.title}</p>
          <p>Licença: {license}</p>
          <div className="mt-6 space-y-2 text-sm text-white/75">
            <p className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></p>
            <p className="flex justify-between"><span>Taxa de processamento</span><span>{formatCurrency(fee)}</span></p>
            <p className="flex justify-between border-t border-white/15 pt-2 text-base font-bold text-white"><span>Total</span><span>{formatCurrency(total)}</span></p>
          </div>
        </div>
        <div className="glass rounded-2xl p-6">
          <h2 className="text-xl font-bold">Pagamento</h2>
          <input className="input mt-4" placeholder="Cupom promocional" />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button className="btn-secondary">PIX</button>
            <button className="btn-secondary">Cartão</button>
          </div>
          <button className="btn-primary mt-6 w-full">Finalizar compra</button>
          <Link href="/beats" className="mt-4 inline-block text-sm text-electric">Voltar para loja</Link>
        </div>
      </div>
    </section>
  );
}
