'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/coaching', label: 'Coaching' },
    { href: '/book-call', label: 'Book a Call' },
    { href: '/contact', label: 'Contact' },
  ];

  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              Xia He-Bleinagel
            </Link>
          </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 