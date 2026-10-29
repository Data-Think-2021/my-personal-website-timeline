import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { getLocalePrefix, getMessage, getTranslation, type Locale } from '@/lib/i18n';

type PostPreview = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

type FaqItem = { q: string; a: string };
type FaqSection = { title: string; items: FaqItem[] };

export default function HomeContent({
  locale,
  posts,
}: {
  locale: Locale;
  posts: PostPreview[];
}) {
  const t = (key: string) => getTranslation(locale, key);
  const prefix = getLocalePrefix(locale);
  const aboutParagraphs = (getMessage(locale, 'home.aboutParagraphs') as string[]) ?? [];
  const faqSections = (getMessage(locale, 'home.faqSections') as FaqSection[]) ?? [];
  const faqs = faqSections.flatMap((section) => section.items);
  const dateLocale = locale === 'de' ? 'de-DE' : 'en-US';
  const storyEmbedUrl = 'https://www.youtube.com/embed/vdXRkCE5NrM';
  const storyWatchUrl = 'https://www.youtube.com/watch?v=vdXRkCE5NrM';

  const offerings = [
    {
      title: t('home.offeringSpeakingTitle'),
      text: t('home.offeringSpeakingText'),
      cta: t('home.offeringSpeakingCta'),
      href: `${prefix}/speaking`,
    },
    {
      title: t('home.offeringTrainingTitle'),
      text: t('home.offeringTrainingText'),
      cta: t('home.offeringTrainingCta'),
      href: `${prefix}/training`,
    },
    {
      title: t('home.offeringMentoringTitle'),
      text: t('home.offeringMentoringText'),
      cta: t('home.offeringMentoringCta'),
      href: `${prefix}/mentoring`,
    },
  ];

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
              <p className="text-xl text-gray-300 mb-8">{t('home.subheadline')}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`${prefix}/book-call`}
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  {t('home.cta')}
                </Link>
                <a
                  href="#about"
                  className="inline-block border border-gray-600 hover:border-gray-400 text-gray-200 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  {t('home.ctaSecondary')}
                </a>
              </div>
            </div>
            <div className="flex justify-center">
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

      <section id="about" className="py-16 border-t border-gray-800 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">{t('home.aboutTitle')}</h2>
          <div className="max-w-3xl space-y-4 mb-8">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-lg text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={storyWatchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-purple-400 hover:text-purple-300 font-medium mb-6"
          >
            {t('home.aboutStoryLabel')}
          </a>
          <div className="max-w-3xl aspect-video rounded-lg overflow-hidden bg-gray-800">
            <iframe
              src={storyEmbedUrl}
              title={t('home.aboutStoryLabel')}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">{t('home.offeringsTitle')}</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {offerings.map((item) => (
              <div key={item.href} className="bg-gray-800/60 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-6 flex-1">{item.text}</p>
                <Link href={item.href} className="text-purple-400 hover:text-purple-300 font-medium">
                  {item.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-3">{t('home.insightsTitle')}</h2>
              <p className="text-gray-300 max-w-2xl">{t('home.insightsIntro')}</p>
            </div>
            <Link href={`${prefix}/blog`} className="text-purple-400 hover:text-purple-300 font-medium">
              {t('home.insightsCta')}
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`${prefix}/blog/${post.slug}`}
                className="block bg-gray-800/60 rounded-lg p-6 hover:bg-gray-800 transition-colors"
              >
                <p className="text-sm text-gray-400 mb-2">
                  {new Date(post.date).toLocaleDateString(dateLocale, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-300 line-clamp-3">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">{t('home.faqTitle')}</h2>
          <div className="max-w-3xl divide-y divide-gray-800 border-y border-gray-800">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-4">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-lg font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <span
                    aria-hidden
                    className="mt-1 shrink-0 text-purple-400 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 pr-8 text-gray-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('home.closingTitle')}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">{t('home.closingText')}</p>
          <Link
            href={`${prefix}/book-call`}
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {t('home.closingCta')}
          </Link>
        </div>
      </section>
    </>
  );
}
