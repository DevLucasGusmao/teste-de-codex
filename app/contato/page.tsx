'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  return (
    <section className="container-qg py-12">
      <h1 className="section-title">Contato</h1>
      <p className="mt-2 text-white/75">Envie sua mensagem e retornaremos com proposta em até 24h.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <form
          className="glass space-y-4 rounded-2xl p-6"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await new Promise((res) => setTimeout(res, 900));
            setLoading(false);
            setDone(true);
          }}
        >
          <input className="input" placeholder="Nome" required />
          <input className="input" type="email" placeholder="E-mail" required />
          <textarea className="input min-h-32" placeholder="Mensagem" required />
          <button className="btn-primary" disabled={loading}>{loading ? 'Enviando...' : 'Enviar mensagem'}</button>
          {done && <p className="text-sm text-aqua">Mensagem enviada com sucesso.</p>}
        </form>
        <div className="glass rounded-2xl p-6 text-sm text-white/75">
          <p><strong>E-mail:</strong> contato@qgrec.com.br</p>
          <p><strong>WhatsApp:</strong> +55 (21) 98888-4040</p>
          <p><strong>Instagram:</strong> @qgrec.oficial</p>
          <p><strong>Atendimento:</strong> Seg a Sáb, 09h às 20h</p>
          <div className="mt-5 h-48 rounded-xl border border-white/15 bg-white/5 p-4">Mapa (opcional)</div>
        </div>
      </div>
    </section>
  );
}
