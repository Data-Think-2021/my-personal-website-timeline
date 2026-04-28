import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getLocalePrefix, getMessage, getTranslation, type Locale } from '@/lib/i18n';

const PACKAGE_KEYS = ['womenEmpowerment', 'transitionToTechAndCareer', 'sideProjectAndEntrepreneurship'] as const;

interface MentoringPackage {
  title: string;
  description: string;
  features: string[];
}

export default function MentoringContent({ locale }: { locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key);
  const prefix = getLocalePrefix(locale);
  const packagesObj = getMessage(locale, 'mentoring.packages') as Record<string, MentoringPackage> | undefined;
  const packages = PACKAGE_KEYS.map((key) => packagesObj?.[key]).filter(Boolean) as MentoringPackage[];

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-5xl mx-auto">
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

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            {packages.map((pkg, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 flex flex-col border border-gray-700 hover:border-purple-500 transition-colors">
                <h2 className="text-xl font-semibold mb-3">{pkg.title}</h2>
                <p className="text-gray-300 text-sm mb-5">{pkg.description}</p>

                <div className="mb-5">
                  <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {t('mentoring.packagePrice')}
                  </span>
                </div>

                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    {t('mentoring.packageDuration')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    {t('mentoring.packageSessions')}
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-2">✓</span>
                    {t('mentoring.packageMaterials')}
                  </li>
                </ul>

                <div className="border-t border-gray-700 pt-5 mb-5">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm">
                        <span className="text-purple-400 mr-2 mt-0.5">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href={`${prefix}/book-call`}
                    className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    {t('mentoring.packageCta')}
                  </Link>
                </div>
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
              href={`${prefix}/book-call`}
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
