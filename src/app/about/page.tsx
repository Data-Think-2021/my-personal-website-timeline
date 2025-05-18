import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl mb-6">
              I&apos;m passionate about empowering women in technology through mentorship, coaching, and hands-on guidance in Data Engineering, Cloud Architecture, and AI solutions.
            </p>

            <h2 className="text-2xl font-semibold mt-12 mb-4">My Expertise</h2>
            <ul className="space-y-4">
              <li>
                <strong>Cloud Architecture:</strong> Extensive experience with AWS, Azure, and GCP, designing and implementing scalable cloud solutions.
              </li>
              <li>
                <strong>Data Engineering:</strong> Building robust data pipelines, ETL processes, and data warehousing solutions.
              </li>
              <li>
                <strong>Artificial Intelligence:</strong> Implementing ML models and AI solutions for business problems.
              </li>
              <li>
                <strong>Technical Leadership:</strong> Leading teams and mentoring junior engineers in their technical growth.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">My Mission</h2>
            <p className="mb-6">
              My goal is to bridge the gender gap in technology by providing practical guidance, mentorship, and support to women pursuing careers in tech. Through personalized coaching sessions, I help individuals navigate their technical career paths, overcome challenges, and achieve their professional goals.
            </p>

            <div className="mt-12 p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Ready to Start Your Journey?</h3>
              <p className="mb-4">
                Whether you&apos;re just starting in tech or looking to advance your career, I&apos;m here to help you succeed.
              </p>
              <a
                href="/book-call"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Schedule a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 