import Navigation from '@/components/Navigation';

export default function Mentoring() {
  const mentoringAreas = [
    {
      title: 'Transition to Tech',
      description: 'Guidance for career changers and those entering the tech industry for the first time.',
      features: [
        'Identifying your transferable skills',
        'Building technical foundations',
        'Navigating the job market as a newcomer',
        'Overcoming imposter syndrome and building confidence'
      ]
    },
    {
      title: 'Career Growth',
      description: 'Strategic mentorship to advance your tech career and reach your professional goals.',
      features: [
        'Career path planning and goal setting',
        'Technical interview preparation',
        'Leadership skill development',
        'Personal brand building and networking'
      ]
    },
    {
      title: 'Entrepreneur Journey',
      description: 'Mentorship for building side projects and transitioning to entrepreneurship in tech.',
      features: [
        'Side project development and monetization',
        'Consulting business setup and growth',
        'Client acquisition and relationship building',
        'Balancing full-time work with entrepreneurial ventures'
      ]
    },
    {
      title: 'Women Empowerment',
      description: 'Specialized mentorship for women navigating and thriving in the tech industry.',
      features: [
        'Overcoming industry challenges and biases',
        'Building confidence in technical and leadership roles',
        'Networking strategies and community building',
        'Work-life balance and self-advocacy'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Mentoring Services</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            As a data leader, I provide personalized mentorship to help you excel in your tech career, with a focus on practical guidance, real-world experience, and professional growth.
          </p>
          
         
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {mentoringAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12">What My Mentees Say</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-purple-400 text-xl">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;I had a one-time consultation with Xia He that truly felt like a mentorship moment. As a data engineer navigating the job market in Germany—and also a future mom looking to continue growing professionally—I found the session incredibly valuable. It provided not only practical advice about the industry and local opportunities but also reassurance that balancing career and family is possible.&quot;
                </p>
                <p className="text-purple-400 font-semibold">— Iliana C., Data Engineer</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-purple-400 text-xl">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;Xia is a wonderful mentor. She has helped me tremendously with mock interviews, deepened my understanding of different roles in data, and clarified how my desired role as a data analyst collaborates with other data positions. She also encouraged me to join DataTalks to gain hands-on experience with data engineering projects. I had a great time learning from her and highly recommend Xia as both a mentor and a data peer.&quot;
                </p>
                <p className="text-purple-400 font-semibold">— Tien N., Recent Graduate</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-purple-400 text-xl">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">
                  &quot;As a single mom returning to work after 5 years, Xia helped me rebuild my confidence and create a clear path to financial independence. Her structured approach and encouragement made all the difference. I got 2 opportunities after just two months!&quot;
                </p>
                <p className="text-purple-400 font-semibold">— Katharina S., Freelancer</p>
              </div>
            </div>
          </div>


          <div className="mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-6">Ready to achieve your next big thing?</h2>
            <p className="text-gray-300 mb-8">
              Book your free discovery call to explore how we can accelerate your success and turn your ambitions into reality.
            </p>
            <a
              href="/book-call"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Schedule Your Free Session
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 