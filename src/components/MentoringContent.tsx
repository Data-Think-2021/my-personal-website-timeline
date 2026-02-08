import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getLocalePrefix, getMessage, getTranslation, type Locale } from '@/lib/i18n';

const AREA_KEYS = ['transitionToTech', 'careerGrowth', 'entrepreneurJourney', 'womenEmpowerment'] as const;

interface MentoringArea {
  title: string;
  description: string;
  features: string[];
}

export default function MentoringContent({ locale }: { locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key);
  const prefix = getLocalePrefix(locale);
  const areasObj = getMessage(locale, 'mentoring.areas') as Record<string, MentoringArea> | undefined;
  const mentoringAreas = AREA_KEYS.map((key) => areasObj?.[key]).filter(Boolean) as MentoringArea[];

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t('mentoring.title')}</h1>
          <p className="text-xl text-gray-300 mb-8">{t('mentoring.intro')}</p>

          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t('mentoring.rightForYouTitle')}</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>{t(`mentoring.rightForYou${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {mentoringAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t('mentoring.whyWorkWithMeTitle')}</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>{t(`mentoring.whyWorkWithMe${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12">{t('mentoring.testimonialsTitle')}</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex text-purple-400 text-xl mb-4">{'★★★★★'}</div>
                <p className="text-gray-300 mb-4 italic">{t('mentoring.testimonial1')}</p>
                <p className="text-purple-400 font-semibold">{t('mentoring.testimonial1Author')}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex text-purple-400 text-xl mb-4">{'★★★★★'}</div>
                <p className="text-gray-300 mb-4 italic">{t('mentoring.testimonial2')}</p>
                <p className="text-purple-400 font-semibold">{t('mentoring.testimonial2Author')}</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex text-purple-400 text-xl mb-4">{'★★★★★'}</div>
                <p className="text-gray-300 mb-4 italic">{t('mentoring.testimonial3')}</p>
                <p className="text-purple-400 font-semibold">{t('mentoring.testimonial3Author')}</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-6">{t('mentoring.ctaTitle')}</h2>
            <p className="text-gray-300 mb-8">{t('mentoring.ctaDescription')}</p>
            <Link
              href={`${prefix}/contact`}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t('mentoring.ctaButton')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
