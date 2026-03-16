import { Testimonial } from '@/types';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="glass rounded-2xl p-5">
      <p className="text-sm text-white/85">“{testimonial.content}”</p>
      <p className="mt-4 font-semibold">{testimonial.name}</p>
      <p className="text-xs text-white/60">{testimonial.role} • {'★'.repeat(testimonial.rating)}</p>
    </article>
  );
}
