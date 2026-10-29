import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getLocalePrefix, getTranslation, type Locale } from '@/lib/i18n';

export default function TrainingContent({ locale }: { locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key);
  const prefix = getLocalePrefix(locale);

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('training.title')}</h1>
          <p className="text-xl text-gray-300 mb-12">{t('training.intro')}</p>

          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('training.programTitle')}</h2>
            <p className="text-gray-300 mb-6">{t('training.programDescription')}</p>
            <Link
              href={`${prefix}/ai-kickstart-sprint`}
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              {t('training.programCta')}
            </Link>
          </div>

          <div className="text-center bg-gray-800 rounded-lg p-10">
            <h2 className="text-2xl font-semibold mb-4">{t('training.ctaTitle')}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t('training.ctaDescription')}</p>
            <Link
              href={`${prefix}/book-call`}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t('training.cta')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
