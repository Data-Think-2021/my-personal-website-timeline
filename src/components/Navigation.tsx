'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navigation = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/ai-kickstart-sprint', label: 'AI Kickstart Sprint' },
    { href: '/blog', label: 'Blog' },
    { href: '/mentoring', label: 'Mentoring' },
    { href: '/book-call', label: 'Book a Call' },
    { href: '/contact', label: 'Contact' },
  ];

  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Xia He-Bleinagel
            </Link>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
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
          </div>
          {/* Mobile menu button */}
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
      {/* Mobile menu */}
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation; 