'use client';

const dates = ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23'];

type Props = {
  selectedDate?: string;
  onSelect: (date: string) => void;
};

export function CalendarPicker({ selectedDate, onSelect }: Props) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium">Data preferida</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {dates.map((date) => (
          <button
            key={date}
            type="button"
            onClick={() => onSelect(date)}
            className={`rounded-xl border px-3 py-3 text-sm transition ${
              selectedDate === date
                ? 'border-electric bg-electric/20 text-electric'
                : 'border-white/20 bg-white/5 hover:border-white/40'
            }`}
          >
            {new Date(`${date}T00:00:00`).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
          </button>
        ))}
      </div>
    </div>
  );
}
