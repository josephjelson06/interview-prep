'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, BookOpen, Code, Map as MapIcon } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/questions', label: 'Questions', icon: BookOpen },
    { href: '/practice', label: 'Practice', icon: Code },
    { href: '/roadmap', label: 'Roadmap', icon: MapIcon },
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-outline-variant h-20">
        <div className="flex justify-between items-center px-6 md:px-12 h-full w-full max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-headline text-[12px] tracking-[0.3em] uppercase text-on-surface-variant hidden sm:block">INTERVIEW PREP</span>
            <span className="font-headline text-[12px] tracking-[0.3em] uppercase text-on-surface-variant sm:hidden">PREP</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 h-full">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-label text-[10px] uppercase tracking-[0.1em] transition-colors h-full flex items-center border-b-[1px] pt-1 ${
                    isActive 
                      ? 'text-primary border-primary' 
                      : 'text-on-surface-variant hover:text-primary border-transparent opacity-80 hover:opacity-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 pt-2 bg-surface border-t border-outline-variant z-50">
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
                isActive 
                  ? 'text-primary' 
                  : 'text-on-surface-variant hover:text-primary opacity-60 hover:opacity-100'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" strokeWidth={1.5} />
              <span className="font-label text-[8px] uppercase tracking-[0.1em]">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
