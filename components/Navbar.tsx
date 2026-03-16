'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Início' },
  { href: '/agendar', label: 'Agendar' },
  { href: '/beats', label: 'Beats' },
  { href: '/licencas', label: 'Licenças' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="container-qg flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-wide text-white">
          QG<span className="text-electric">Rec</span>
        </Link>
        <nav className="hidden gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active ? 'bg-white/15 text-white' : 'text-white/75 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/agendar" className="btn-primary text-xs sm:text-sm">
          Agendar Mixagem
        </Link>
      </div>
    </header>
  );
}
