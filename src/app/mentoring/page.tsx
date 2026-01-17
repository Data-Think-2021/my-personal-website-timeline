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
          
          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">This mentorship is right for you if:</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>you are transitioning into the tech industry and need guidance and clarity</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>you are a woman working in a male-dominated field and want strategies to thrive with confidence</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>you are returning to the job market after a career break and want to relaunch your career successfully</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>you are an international professional aiming to work and build a career in Germany</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>you are a woman and a mother seeking practical ways to balance career growth with family life</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>you feel ready to make a change and take the next step in your professional journey</span>
              </li>
            </ul>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {mentoringAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">{area.title}</h2>
                <p className="text-gray-300 mb-6">{area.description}</p>
                <ul className="space-y-2">
                  {area.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Work With Me</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>Successfully transitioned from a stay-at-home international mother of two to a data leadership position</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>Broad experience across research institutes as well as small, medium, and large consulting organizations in data and AI</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>Proven ability to navigate career transitions and change roles strategically in a fast-moving job market</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3 mt-1">•</span>
                <span>Hands-on experience across multiple data roles, including Data Analyst, Data Engineer, Data Scientist, and now Data Leader</span>
              </li>
            </ul>
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
            <h2 className="text-2xl font-semibold mb-6">Ready to take the next step in your journey?</h2>
            <p className="text-gray-300 mb-8">
              Let&apos;s discuss how mentorship can help you build confidence, develop skills, and find direction in your career.
            </p>
            <a
              href="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
