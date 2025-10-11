import Navigation from '@/components/Navigation';

export default function Coaching() {
  const coachingAreas = [
    {
      title: 'Technical Skills Development',
      description: 'Hands-on guidance in cloud architecture, data engineering, and AI/ML implementation.',
      features: [
        'Cloud platform expertise (AWS, Azure, GCP)',
        'Data pipeline design and implementation',
        'Machine learning model deployment',
        'Infrastructure as Code practices'
      ]
    },
    {
      title: 'Career Growth Strategy',
      description: 'Strategic planning and guidance for advancing your tech career.',
      features: [
        'Career path planning',
        'Technical interview preparation',
        'Leadership skill development',
        'Personal brand building'
      ]
    },
    {
      title: 'Entrepreneur Journey',
      description: 'Guidance for building side projects and transitioning to entrepreneurship in tech.',
      features: [
        'Side project development and monetization',
        'Consulting business setup and growth',
        'Client acquisition and relationship building',
        'Balancing full-time work with entrepreneurial ventures'
      ]
    },
    {
      title: 'Women in Tech Mentorship',
      description: 'Specialized support for women navigating the tech industry.',
      features: [
        'Overcoming industry challenges',
        'Building confidence in technical roles',
        'Networking strategies',
        'Work-life balance guidance'
      ]
    }
  ];

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Coaching Services</h1>
          
          <p className="text-xl text-gray-300 mb-8">
            Personalized coaching to help you excel in your tech career, with a focus on practical skills and professional growth.
          </p>
          
         
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {coachingAreas.map((area, index) => (
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

          <div className="bg-gray-800 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Entrepreneurial Experience Matters</h2>
            <p className="text-gray-300 mb-4">
              As someone who successfully built side projects and consulting business while maintaining a full-time career, 
              I understand the unique challenges of the entrepreneur journey. My experience includes:
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• <strong>Side project development</strong> - From idea to execution and monetization</li>
              <li>• <strong>Consulting business growth</strong> - Building client relationships and sustainable income streams</li>
            </ul>
            <p className="text-gray-300 mt-4">
              This real-world experience allows me to provide practical, actionable guidance for your entrepreneurial journey.
            </p>
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