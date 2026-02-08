import Image from 'next/image';
import { CalendarIcon, ClockIcon, VideoCameraIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Navigation from '@/components/Navigation';
import EmailSignup from '@/components/EmailSignup';
import { getMessage, getTranslation, type Locale } from '@/lib/i18n';

interface Phase {
  phase: string;
  title: string;
  days: string;
  focus: string;
}

export default function AISprintContent({ locale }: { locale: Locale }) {
  const t = (key: string) => getTranslation(locale, key);
  const phases = (getMessage(locale, 'aiSprint.phases') as Phase[]) ?? [];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900">
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2 text-left">
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                  {t('aiSprint.headline')}
                </h1>
                <p className="text-2xl text-gray-300 mb-8 font-semibold">
                  {t('aiSprint.subheadline')}
                </p>
                <p className="text-gray-400 mb-6">
                  {t('aiSprint.cohortFullNote')}
                </p>
                <a
                  href="#join-sprint"
                  className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  {t('aiSprint.cta')}
                </a>
              </div>
              <div className="flex justify-center md:justify-end">
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

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">{t('aiSprint.missionTitle')}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{t('aiSprint.mission')}</p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('aiSprint.roadmapTitle')}</h2>
              <div className="space-y-6">
                {phases.map((phase, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-6">
                    <div className="flex items-start mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-2 flex-wrap">
                          <span className="text-purple-400 font-semibold mr-3">{phase.phase}</span>
                          <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                          <span className="text-gray-400 ml-3">({phase.days})</span>
                        </div>
                        <div className="space-y-2 text-gray-300">
                          <p><strong className="text-white">Focus:</strong> {phase.focus}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">{t('aiSprint.goalGroupTitle')}</h2>
              <p className="text-gray-300 mb-6 text-lg font-semibold">{t('aiSprint.goalGroupIntro')}</p>
              <ul className="space-y-4 text-gray-300 text-lg">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-3 mt-1">•</span>
                    <span>{t(`aiSprint.goal${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">{t('aiSprint.whyLearnTitle')}</h2>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">{t('aiSprint.whyLearn1')}</p>
              <br />
              <p className="text-gray-300 text-lg leading-relaxed">
                {t('aiSprint.whyLearn2')}{' '}
                <a
                  href="https://www.youtube.com/live/D2rw52SOFfM?si=FzSQ151S-NG7eZsB"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  {t('aiSprint.whyLearnLink')}
                </a>
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">{t('aiSprint.structureTitle')}</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('aiSprint.schedule')}</p>
                    <p>{t('aiSprint.scheduleValue')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('aiSprint.time')}</p>
                    <p>{t('aiSprint.timeValue')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('aiSprint.cohortDates')}</p>
                    <p>{t('aiSprint.cohortDatesValue')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <VideoCameraIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('aiSprint.format')}</p>
                    <p>{t('aiSprint.formatValue')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserGroupIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('aiSprint.platform')}</p>
                    <p>{t('aiSprint.platformValue')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">{t('aiSprint.language')}</p>
                    <p>{t('aiSprint.languageValue')}</p>
                  </div>
                </div>
                <p className="text-purple-300 italic mt-4">
                  {t('aiSprint.structureNote')}
                </p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">{t('aiSprint.investmentTitle')}</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <span className="text-gray-300 text-lg">{t('aiSprint.standardPrice')}</span>
                  <span className="text-white text-2xl font-bold">399€</span>
                </div>
                <a
                  href="#join-sprint"
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all cursor-pointer group"
                >
                  <div>
                    <span className="text-white text-lg font-semibold">{t('aiSprint.foundingMember')}</span>
                    <p className="text-purple-100 text-sm mt-1">{t('aiSprint.foundingMemberSub')}</p>
                  </div>
                  <span className="text-white text-3xl font-bold group-hover:scale-110 transition-transform">149€</span>
                </a>
                <p className="text-gray-400 text-sm mt-2">
                  {t('aiSprint.scholarship')}{' '}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJwiYai6rMMy8gxNyrNsFbikSSqR4sw8ph_KcvN-YKjSRZQA/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    {t('aiSprint.scholarshipLink')}
                  </a>
                </p>
              </div>
            </div>

            <div id="join-sprint" className="scroll-mt-32">
              <EmailSignup
                title={t('aiSprint.emailSignupTitle')}
                description={t('aiSprint.emailSignupDescription')}
                buttonText={t('aiSprint.emailSignupButton')}
                successTitle={t('aiSprint.emailSignupSuccessTitle')}
                successDescription={t('aiSprint.emailSignupSuccessDescription')}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
