import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getLocalePrefix, getMessage, getTranslation, type Locale } from '@/lib/i18n';

type MediaItem = {
  title: string;
  event: string;
  videoId: string;
  watchLabel: string;
};

function MediaSection({
  title,
  items,
}: {
  title: string;
  items: MediaItem[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      <div className="space-y-10">
        {items.map((item) => (
          <div key={item.videoId} className="bg-gray-800 rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 mb-4">{item.event}</p>
            <div className="aspect-video rounded-lg overflow-hidden bg-gray-900 mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
            <a
              href={`https://www.youtube.com/watch?v=${item.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 font-medium"
            >
              {item.watchLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SpeakingContent({ locale }: { locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key);
  const prefix = getLocalePrefix(locale);
  const topics = (getMessage(locale, 'speaking.topics') as string[]) ?? [];
  const formats = (getMessage(locale, 'speaking.formats') as string[]) ?? [];
  const talks = (getMessage(locale, 'speaking.talks') as MediaItem[]) ?? [];
  const podcasts = (getMessage(locale, 'speaking.podcasts') as MediaItem[]) ?? [];

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-start mb-16">
            <div className="md:col-span-3">
              <h1 className="text-4xl font-bold mb-8">{t('speaking.title')}</h1>
              <p className="text-xl text-gray-300">{t('speaking.intro')}</p>
            </div>
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/xia-he-bleinagel-speaking.jpg"
                  alt="Xia He-Bleinagel speaking at PyCon DE & PyData 2026"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 mb-16">
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">{t('speaking.topicsTitle')}</h2>
              <ul className="space-y-3 text-gray-300">
                {topics.map((topic) => (
                  <li key={topic} className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">{t('speaking.formatsTitle')}</h2>
              <ul className="space-y-3 text-gray-300">
                {formats.map((format) => (
                  <li key={format} className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>{format}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <MediaSection title={t('speaking.talksTitle')} items={talks} />
          <MediaSection title={t('speaking.podcastsTitle')} items={podcasts} />

          <div className="text-center bg-gray-800 rounded-lg p-10">
            <h2 className="text-2xl font-semibold mb-4">{t('speaking.ctaTitle')}</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">{t('speaking.ctaDescription')}</p>
            <Link
              href={`${prefix}/book-call`}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              {t('speaking.cta')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
