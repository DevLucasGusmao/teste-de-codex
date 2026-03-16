'use client';

import { TimeSlot } from '@/types';

type Props = {
  slots: TimeSlot[];
  selected?: string;
  onSelect: (time: string) => void;
};

export function TimeSlotSelector({ slots, selected, onSelect }: Props) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">Horários disponíveis</p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {slots.map((slot) => (
          <button
            key={slot.time}
            disabled={!slot.available}
            type="button"
            onClick={() => onSelect(slot.time)}
            className={`rounded-xl border px-3 py-2 text-sm ${
              !slot.available
                ? 'cursor-not-allowed border-white/10 bg-black/40 text-white/35'
                : selected === slot.time
                  ? 'border-aqua bg-aqua/20 text-aqua'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            {slot.time} {slot.available ? '• Livre' : '• Ocupado'}
          </button>
        ))}
      </div>
    </div>
  );
}
