import Navigation from '@/components/Navigation';
import { CalendarIcon, ClockIcon, VideoCameraIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const phases = [
  {
    phase: 'Week 1',
    title: 'Kick-off & The AI Foundation',
    days: '13. February 2026',
    focus: 'Setting up your environment, playing rules, the powerful learning habit system, and understanding how GenAI/LLMs actually work.',
  },
  {
    phase: 'Week 2',
    title: 'The Swiss Army Knife',
    days: '20. February 2026',
    focus: 'AI toolset. Master the essentials of Text, Video, Image, and Audio AI.',
  },
  {
    phase: 'Week 3',
    title: 'AI at Work',
    days: '27. February 2026',
    focus: 'Using AI for high-impact work, presentations, automating routine tasks, and communication.'
  },
  {
    phase: 'Week 4',
    title: 'AI to improve life',
    days: '6. March 2026',
    focus: 'Use AI as personal assistant and be creative with it to enhance your daily life.'
  },
  {
    phase: 'Week 5',
    title: 'Vibe Coding & Personal Website',
    days: '13. March 2026',
    focus: 'Building your own personal website or AI Agent. Experience "Vibe Coding"—creating functional software without programming knowledge.'
  },
  {
    phase: 'Week 6',
    title: 'Final Project',
    days: '20. March 2026',
    focus: '"Build your own project." You will leave this cohort with a finished, functional AI solution tailored to your specific needs.'
  }
];

export default function AIKickstartSprint() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                AI KICKSTART SPRINT: From AI-curious to AI-productive
              </h1>
              <p className="text-2xl text-gray-300 mb-4 font-semibold">
                a 6-week guided program to build real AI habits for work and life
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">The Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                You don&apos;t want to wait another year to &quot;start with AI.&quot; You want to use AI now — to work faster, 
                think clearer, and build real things instead of just consuming content. In this 6-week sprint, you integrate AI 
                into your daily workflow, understand how it actually works, and use the most powerful tools with confidence. 
                You will prototype ideas quickly and build your own personal website using free tools, without programming knowledge. 
                We focus on execution over perfection, progress over overwhelm — so you leave not inspired, but able to apply AI immediately.
              </p>
            </div>

            {/* 6 Weeks */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">The 6-Week Roadmap</h2>
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

            {/* Goal Group */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">The Goal Group</h2>
              <p className="text-gray-300 mb-6 text-lg font-semibold">
                This course is perfect for:
              </p>
              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Anyone who wants to be more productive and organised</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Busy professionals who want to automate tasks and streamline their workflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Anyone curious about using AI to improve work, learning, and everyday life</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>Anyone who wants to invest in personal development and is looking for a structured, practical approach to building lasting habits.</span>
                </li>
              </ul>
            </div>

            {/* Why Learn With Me */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Why Learn With Me?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                From a full-time stay-at-home mom to Head of Data, my journey has been defined by one thing: the power of habit and curiosity. 
                Along the way, I built a strong technical foundation that grounds everything I teach today. I bring both deep technical expertise 
                and real-world perspective to learning AI. My background is in Data Science, with hands-on industry experience in machine learning 
                and deep learning. I began my career in research, working on Natural Language Processing (NLP)—long before AI became a buzzword—and 
                have since applied these technologies across production systems, leadership roles, and data-driven strategy.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                I don&apos;t just explain AI; I help you succeed in the AI age. Whether it&apos;s prototyping, strategy, or coding, 
                I show you how to use AI to achieve more with confidence and clarity. I will guide you in building a &quot;Learning Loop&quot;—a practical 
                approach to breaking complex technology into manageable, repeatable bites—so you can continuously adapt, grow, and master the most important 
                skill of the AI age: <strong>the ability of learning</strong>.
              </p>
            </div>

            {/* 6-Week Structure */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">The 6-Week Structure</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Schedule:</p>
                    <p>Friday</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Time:</p>
                    <p>12:00 – 12:45 Berlin Time (45 minutes per session)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Cohort Dates:</p>
                    <p>13. February – 20. March 2026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <VideoCameraIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Format:</p>
                    <p>6 Weeks of Live Sessions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserGroupIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Platform:</p>
                    <p>Live video calls + Community group + Homework + Recording of live session for later reference</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Language:</p>
                    <p>Live sessions in German (or English), Material in English</p>
                  </div>
                </div>
                <p className="text-purple-300 italic mt-4">
                  <strong>Note:</strong> The agenda above serves as a roadmap; specific topics and tools may vary 
                  slightly to ensure we are using the most current technology available at the time of the sprint.
                </p>
              </div>
            </div>

            {/* Investment */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Investment</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <span className="text-gray-300 text-lg">Standard Price:</span>
                  <span className="text-white text-2xl font-bold">399€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <div>
                    <span className="text-white text-lg font-semibold">First Cohort &quot;Founding Member&quot; Discount:</span>
                    <p className="text-purple-100 text-sm mt-1">This special pricing is only available for our inaugural group starting February 13th, 2026.</p>
                  </div>
                  <span className="text-white text-3xl font-bold">149€</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  <strong>Scholarship Option:</strong> I reserve a small number of scholarship places for people who are motivated but currently financially constrained.{' '}
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeJwiYai6rMMy8gxNyrNsFbikSSqR4sw8ph_KcvN-YKjSRZQA/viewform?usp=publish-editor" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    Apply for scholarship here
                  </a>
                </p>
              </div>
            </div>

            {/* Join Section */}
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your AI Habits?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Join the 6-week sprint and move from AI curious to AI productive. 
                Build the habits and learning lifestyle that achieves more with AI.
              </p>
              <a
                href="/contact"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
