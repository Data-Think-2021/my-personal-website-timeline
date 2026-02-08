import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';
import { getLocalePrefix, getTranslation, type Locale } from '@/lib/i18n';

export default function HomeContent({ locale }: { locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key);
  const prefix = getLocalePrefix(locale);

  return (
    <>
      <Navigation />
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 text-left">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                {t('home.headline')}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {t('home.subheadline')}
              </p>
              <Link
                href={`${prefix}/book-call`}
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                {t('home.cta')}
              </Link>
            </div>
            <div className="flex justify-center md:justify-center">
              <div className="relative w-80 h-96">
                <Image
                  src="/profile.png"
                  alt="Xia He-Bleinagel"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Timeline locale={locale} timelineTitle={t('home.timelineTitle')} />
    </>
  );
}
