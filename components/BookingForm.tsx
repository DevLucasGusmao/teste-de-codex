'use client';

import { useMemo, useState } from 'react';
import { services } from '@/data/services';
import { availableSlots } from '@/data/content';
import { CalendarPicker } from './CalendarPicker';
import { TimeSlotSelector } from './TimeSlotSelector';
import { phoneMask } from '@/lib/utils';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  genre: string;
  projectDescription: string;
  stems: string;
  deadline: string;
  preferredDate: string;
  preferredTime: string;
  referenceUrl: string;
  notes: string;
};

const initial: FormState = {
  fullName: '', email: '', phone: '', service: 'mixagem', genre: '', projectDescription: '', stems: '', deadline: '', preferredDate: '', preferredTime: '', referenceUrl: '', notes: ''
};

export function BookingForm({ preselectedService }: { preselectedService?: string }) {
  const [form, setForm] = useState<FormState>({ ...initial, service: preselectedService ?? 'mixagem' });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [step, setStep] = useState<'form' | 'review' | 'success'>('form');
  const [loading, setLoading] = useState(false);

  const slots = useMemo(() => availableSlots[form.preferredDate] ?? [], [form.preferredDate]);

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) nextErrors.fullName = 'Informe seu nome completo.';
    if (!/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'E-mail inválido.';
    if (form.phone.replace(/\D/g, '').length < 10) nextErrors.phone = 'Telefone incompleto.';
    if (!form.projectDescription.trim()) nextErrors.projectDescription = 'Descreva o projeto para receber proposta precisa.';
    if (!form.preferredDate) nextErrors.preferredDate = 'Selecione uma data.';
    if (!form.preferredTime) nextErrors.preferredTime = 'Selecione um horário disponível.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setStep('success');
  };

  return (
    <div className="glass rounded-3xl p-6 sm:p-8">
      {step === 'form' && (
        <div className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input className="input" placeholder="Nome completo" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
            <input className="input" placeholder="E-mail" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input className="input" placeholder="Telefone/WhatsApp" value={form.phone} onChange={(e) => setForm({ ...form, phone: phoneMask(e.target.value) })} />
            <select className="input" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
              {services.map((service) => <option key={service.id} value={service.id}>{service.name}</option>)}
            </select>
            <input className="input" placeholder="Estilo musical" value={form.genre} onChange={(e) => setForm({ ...form, genre: e.target.value })} />
            <input className="input" placeholder="Número de faixas/stems" value={form.stems} onChange={(e) => setForm({ ...form, stems: e.target.value })} />
            <input className="input" placeholder="Prazo desejado" value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} />
            <input className="input" placeholder="URL de referência/upload" value={form.referenceUrl} onChange={(e) => setForm({ ...form, referenceUrl: e.target.value })} />
          </div>
          <textarea className="input min-h-24" placeholder="Descrição do projeto" value={form.projectDescription} onChange={(e) => setForm({ ...form, projectDescription: e.target.value })} />
          <textarea className="input min-h-20" placeholder="Observações" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />

          <CalendarPicker selectedDate={form.preferredDate} onSelect={(date) => setForm({ ...form, preferredDate: date, preferredTime: '' })} />
          <TimeSlotSelector slots={slots} selected={form.preferredTime} onSelect={(time) => setForm({ ...form, preferredTime: time })} />

          {Object.values(errors).some(Boolean) && (
            <div className="rounded-xl border border-red-300/40 bg-red-500/10 p-3 text-sm text-red-200">
              {Object.values(errors).filter(Boolean).map((err) => <p key={err}>{err}</p>)}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="btn-primary"
              onClick={() => {
                if (validate()) setStep('review');
              }}
            >
              Revisar solicitação
            </button>
            <a className="btn-secondary" href="https://wa.me/5521988884040" target="_blank">Contato rápido via WhatsApp</a>
          </div>
        </div>
      )}

      {step === 'review' && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Resumo da solicitação</h3>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <p><span className="text-white/60">Cliente:</span> {form.fullName}</p>
            <p><span className="text-white/60">Serviço:</span> {services.find((s) => s.id === form.service)?.name}</p>
            <p><span className="text-white/60">Data:</span> {form.preferredDate}</p>
            <p><span className="text-white/60">Horário:</span> {form.preferredTime}</p>
            <p><span className="text-white/60">Estilo:</span> {form.genre || 'Não informado'}</p>
            <p><span className="text-white/60">Stems:</span> {form.stems || 'Não informado'}</p>
          </div>
          <p className="text-sm text-white/75">{form.projectDescription}</p>
          <div className="flex gap-3">
            <button type="button" className="btn-secondary" onClick={() => setStep('form')}>Editar</button>
            <button type="button" className="btn-primary" onClick={submit} disabled={loading}>{loading ? 'Enviando...' : 'Confirmar agendamento'}</button>
          </div>
        </div>
      )}

      {step === 'success' && (
        <div className="rounded-2xl border border-aqua/40 bg-aqua/10 p-6 text-center">
          <h3 className="text-2xl font-bold text-aqua">Agendamento enviado com sucesso!</h3>
          <p className="mt-2 text-sm text-white/80">Recebemos sua solicitação e entraremos em contato pelo WhatsApp/e-mail com a proposta final.</p>
        </div>
      )}
    </div>
  );
}
