import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/60 py-12">
      <div className="container-qg grid gap-8 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold">QGRec</h3>
          <p className="mt-3 text-sm text-white/70">Mixagem premium e beats exclusivos com assinatura carioca.</p>
        </div>
        <div>
          <h4 className="font-semibold">Navegação</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/agendar">Agendar</Link></li>
            <li><Link href="/beats">Beats</Link></li>
            <li><Link href="/licencas">Licenças</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contato</h4>
          <p className="mt-3 text-sm text-white/70">contato@qgrec.com.br</p>
          <p className="text-sm text-white/70">+55 (21) 98888-4040</p>
        </div>
        <div>
          <h4 className="font-semibold">Atendimento</h4>
          <p className="mt-3 text-sm text-white/70">Seg a Sáb — 09h às 20h</p>
          <p className="text-sm text-white/70">Rio de Janeiro, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
