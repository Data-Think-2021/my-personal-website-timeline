'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useLocale } from '@/hooks/useLocale';

const Navigation = () => {
  const { locale, prefix, t, localizedPath } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: prefix || '/', label: t('nav.home') },
    { href: `${prefix}/ai-kickstart-sprint`, label: t('nav.aiSprint') },
    { href: '/blog', label: t('nav.blog') },
    { href: `${prefix}/mentoring`, label: t('nav.mentoring') },
    { href: '/book-call', label: t('nav.bookCall') },
    { href: `${prefix}/contact`, label: t('nav.contact') },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[6.5rem]">
          <div className="flex-shrink-0">
            <Link href={prefix || '/'}>
              <Image
                src="/logo.png"
                alt="Xia He-Bleinagel"
                width={200}
                height={50}
                className="h-[5.5rem] w-auto object-contain"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${pathname === link.href
                      ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold'
                      : 'text-gray-300 hover:text-white'}
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="ml-4 flex items-center border-l border-gray-600 pl-4">
              <Link
                href={localizedPath('de')}
                className={`text-sm font-medium px-2 py-1 rounded ${locale === 'de' ? 'text-purple-400 font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                DE
              </Link>
              <span className="text-gray-500 mx-1">|</span>
              <Link
                href={localizedPath('en')}
                className={`text-sm font-medium px-2 py-1 rounded ${locale === 'en' ? 'text-purple-400 font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-900/95 px-4 pb-4 pt-2">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${pathname === link.href
                    ? 'bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text font-bold'
                    : 'text-gray-300 hover:text-white'}
                `}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2 border-t border-gray-700">
              <Link
                href={localizedPath('de')}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium px-2 py-1 rounded ${locale === 'de' ? 'text-purple-400 font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                DE
              </Link>
              <span className="text-gray-500">|</span>
              <Link
                href={localizedPath('en')}
                onClick={() => setMenuOpen(false)}
                className={`text-sm font-medium px-2 py-1 rounded ${locale === 'en' ? 'text-purple-400 font-bold' : 'text-gray-400 hover:text-white'}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
