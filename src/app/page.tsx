import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Left Content - Takes up 2 columns */}
            <div className="md:col-span-2 text-left">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Helping people thrive in Data, Cloud & AI through learning and mentorship
              </h1>
              <p className="text-xl text-gray-300 mb-8">
              From stay-at-home mom to Head of Data — now mentoring others to build confidence, skills, and direction to succeed in the age of AI.
              </p>
              <a
                href="/book-call"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book Your Free Discovery Call
              </a>
            </div>

            {/* Right Profile - Takes up 1 column */}
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

      {/* Timeline Section */}
      <Timeline />
    </>
  );
}
