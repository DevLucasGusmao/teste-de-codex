'use client';

import { useState } from 'react';
import { FAQ } from '@/types';

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={item.question} className="glass rounded-xl p-4">
          <button className="flex w-full items-center justify-between text-left font-semibold" onClick={() => setOpen(open === idx ? null : idx)}>
            {item.question}
            <span>{open === idx ? '−' : '+'}</span>
          </button>
          {open === idx && <p className="mt-2 text-sm text-white/75">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
