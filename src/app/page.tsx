declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Calendly: any;
  }
}

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
                Data & Cloud Expert | AWS Specialist
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Experienced in ETL pipelines, AWS infrastructure, and data analytics. Passionate about empowering women, moms, people with migration background to chase their careers and financial independence.
              </p>
              <a
                href="/book-call"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book Your Free Consultation
              </a>
            </div>

            {/* Right Profile - Takes up 1 column */}
            <div className="flex justify-center md:justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-purple-500 ring-offset-4 ring-offset-gray-900">
                <Image
                  src="/profile.jpg"
                  alt="Xia He-Bleinagel"
                  fill
                  priority
                  className="object-cover"
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
