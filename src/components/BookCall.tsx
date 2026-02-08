'use client';

import Script from 'next/script';
import { useLocale } from '@/hooks/useLocale';

const BookCall = () => {
  const { t } = useLocale();
  return (
    <>
      {/* Intro Section */}
      <div className="pt-32 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">{t('bookCall.title')}</h2>
          <p className="text-gray-300 text-center">
            {t('bookCall.description')}
          </p>
        </div>
      </div>

      {/* Calendly Widget Section - Full Width */}
      <div className="w-full h-screen">
        <div 
          className="calendly-inline-widget w-full h-full" 
          data-url="https://calendly.com/xia-he88/30min"
        ></div>
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </>
  );
};

export default BookCall; 