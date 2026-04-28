'use client';

import Link from 'next/link';
import { useLocale } from '@/hooks/useLocale';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { prefix, t } = useLocale();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
              Xia He-Bleinagel
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/mentoring`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.mentoring')}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/ai-kickstart-sprint`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('nav.aiSprint')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t('footer.imprint')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex justify-center items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Xia He-Bleinagel. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
