'use client';

import { useRef } from 'react';

export function BeatPlayer({ src }: { src: string }) {
  const ref = useRef<HTMLAudioElement>(null);

  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/30 p-3">
      <button className="btn-secondary !px-4 !py-2" onClick={() => ref.current?.play()} type="button">Ouvir</button>
      <audio ref={ref} src={src} preload="none" className="w-full" controls />
    </div>
  );
}
