import Navigation from '@/components/Navigation';
import { LightBulbIcon, CalendarIcon, StarIcon, ClockIcon, VideoCameraIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const phases = [
  {
    phase: 'Phase 1',
    title: 'Kick-off & The AI Foundation',
    days: 'Days 1-5',
    focus: 'Setting up your environment, playing rules, the "Star" habit system, and understanding how GenAI/LLMs actually work.',
    check: 'Day 2 is the "Alignment Check." If you find this daily rhythm doesn\'t fit your life, you can opt-out with full integrity.'
  },
  {
    phase: 'Phase 2',
    title: 'The Swiss Army Knife',
    days: 'Days 6-10',
    focus: 'One/two tools every day. Master the essentials of Text, Video, Image, and Audio AI.',
  },
  {
    phase: 'Phase 3',
    title: 'AI at Work & Life',
    days: 'Days 11-15',
    focus: 'Using AI for high-impact work, presentations, automating routine tasks, and communication. Use AI as personal assistant and be creative with it.'
  },
  {
    phase: 'Phase 4',
    title: 'Vibe Coding & Personal Branding',
    days: 'Days 16-20',
    focus: 'Building your own personal website or AI Agent. Experience "Vibe Coding"—creating functional software without programming knowledge.'
  },
  {
    phase: 'Phase 5',
    title: 'Mastering AI',
    days: 'Days 21-25',
    focus: 'Strategies, multi-step workflows, and integrating AI into your existing professional toolstack.'
  },
  {
    phase: 'Phase 6',
    title: 'Final Project',
    days: 'Days 26-30',
    focus: '"Build your own project." You will leave this cohort with a finished, functional AI solution tailored to your specific needs.'
  }
];

export default function AILearningGroup() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                AI Learning Group: The 30-Day Sprint
              </h1>
              <p className="text-2xl text-gray-300 mb-4 font-semibold">
                A 30-Day Habit Transformation for Professionals
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
                Most people are &quot;AI Curious,&quot; but few are &quot;AI Productive.&quot; This is not a lecture series; 
                it is a 30-day sprint designed to integrate Artificial Intelligence into your daily life through small, 
                30-minute compound wins. We don&apos;t just talk about tools; we build the habit and learning lifestyle 
                required to thrive in the age of AI.
              </p>
            </div>

            {/* 6 Phases */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">The 30-Day Roadmap</h2>
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
                          {phase.check && (
                            <p className="text-purple-300 italic mt-2"><strong>The Check:</strong> {phase.check}</p>
                          )}
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
                  <span>Anyone who invests 30 minutes of focused time per day and needs a structured approach to build a good habit</span>
                </li>
              </ul>
            </div>

            {/* Why Learn With Me */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Why Learn With Me?</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                From a full-time stay-at-home mom to Head of Data, my journey has been defined by one thing: 
                The power of habit and curiosity. I don&apos;t just explain AI; I help you succeed in the AI age. 
                Whether it&apos;s prototyping, strategy, or coding, I show you how to use AI to achieve more. 
                I will show you how to build a &quot;Learning Loop&quot;—breaking complex tech into 30-minute bites—to 
                master the most important skill of the AI age: the ability of learning.
              </p>
            </div>

            {/* 30-Day Structure */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">The 30-Day Structure</h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Schedule:</p>
                    <p>Sunday – Thursday (Friday & Saturday are for rest/catch-up)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Time:</p>
                    <p>20:30 – 21:00 Berlin Time (The &quot;Deep Work&quot; Half-Hour)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CalendarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Cohort Dates:</p>
                    <p>25. Jan – 12. March 2026</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <VideoCameraIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Format:</p>
                    <p>30 Live Sessions (30-minute Sprints)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <UserGroupIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0 text-purple-400" />
                  <div>
                    <p className="font-semibold text-white mb-1">Platform:</p>
                    <p>Live video calls + Community accountability group</p>
                  </div>
                </div>
                <p className="text-purple-300 italic mt-4">
                  <strong>Note:</strong> The agenda above serves as a roadmap; specific topics and tools may vary 
                  slightly to ensure we are using the most current technology available at the time of the sprint.
                </p>
              </div>
            </div>

            {/* Star Reward System */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">The &quot;Star&quot; Reward System</h2>
              <div className="space-y-4 text-white">
                <div className="flex items-start">
                  <StarIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">The Rule:</p>
                    <p>Earn one &quot;Star&quot; per day by attending the live session and completing the 30-minute sprint.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <LightBulbIcon className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">The Reward:</p>
                    <p>Complete 26 out of 30 stars to unlock the Graduation Reward: A private 30-minute 1:1 mentoring 
                    and workflow audit session with me.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment */}
            <div className="bg-gray-800 rounded-lg p-8 mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Investment</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                  <span className="text-gray-300 text-lg">Standard Price:</span>
                  <span className="text-white text-2xl font-bold">599€</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                  <div>
                    <span className="text-white text-lg font-semibold">First Cohort &quot;Founding Member&quot; Discount:</span>
                    <p className="text-purple-100 text-sm mt-1">This special pricing is only available for our inaugural group starting January 25th, 2026.</p>
                  </div>
                  <span className="text-white text-3xl font-bold">399€</span>
                </div>
              </div>
            </div>

            {/* Join Section */}
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your AI Habits?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Join the 30-day sprint and move from AI curious to AI productive. 
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
