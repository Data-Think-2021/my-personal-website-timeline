import Navigation from '@/components/Navigation';
import { AcademicCapIcon, ChartBarIcon, CpuChipIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: ChartBarIcon,
    title: 'Data Strategy',
    description: 'Develop comprehensive data strategies that align with your business objectives and drive measurable outcomes.',
    features: [
      'Data governance framework design',
      'Data architecture planning',
      'Data quality and management processes',
      'ROI measurement and analytics roadmap',
      'Stakeholder alignment and change management'
    ],
    benefits: 'Transform your organization into a data-driven powerhouse with clear, actionable strategies.'
  },
  {
    icon: CpuChipIcon,
    title: 'AI Strategy',
    description: 'Navigate the AI landscape with confidence through strategic planning and implementation guidance.',
    features: [
      'AI readiness assessment',
      'Use case identification and prioritization',
      'Technology stack recommendations',
      'Ethical AI and compliance frameworks',
      'Implementation roadmap and timeline'
    ],
    benefits: 'Leverage AI technologies strategically to gain competitive advantage and operational efficiency.'
  },
  {
    icon: BookOpenIcon,
    title: 'Data Literacy',
    description: 'Empower your teams with the knowledge and skills needed to work effectively with data.',
    features: [
      'Customized training programs',
      'Data storytelling workshops',
      'Analytics tool training',
      'Data interpretation skills',
      'Cultural transformation support'
    ],
    benefits: 'Build a data-literate organization where everyone can make informed, data-driven decisions.'
  },
  {
    icon: AcademicCapIcon,
    title: 'AI Literacy',
    description: 'Equip your organization with the understanding and skills to effectively work with AI technologies.',
    features: [
      'AI fundamentals and concepts training',
      'AI tool proficiency workshops',
      'Ethical AI and responsible use guidelines',
      'AI integration best practices',
      'Change management for AI adoption'
    ],
    benefits: 'Create an AI-ready workforce that can confidently leverage AI tools and make informed decisions about AI implementation.'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery & Assessment',
    description: 'We start by understanding your current state, challenges, and objectives through comprehensive discovery sessions.'
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Based on our findings, we develop tailored strategies that align with your business goals and technical capabilities.'
  },
  {
    step: '03',
    title: 'Implementation Planning',
    description: 'We create detailed implementation roadmaps with clear milestones, timelines, and success metrics.'
  },
  {
    step: '04',
    title: 'Execution Support',
    description: 'We provide ongoing support and guidance throughout the implementation process to ensure successful outcomes.'
  }
];

export default function ConsultingPage() {
  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Data & AI Consulting
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your organization with strategic data and AI guidance. From full-time mom to Head of Data & Cloud, 
                I bring real-world experience and proven strategies to help you succeed.
              </p>
              <a
                href="/book-call"
                className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book Your Free Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">My Services</h2>
              <p className="text-xl text-gray-300">
                Comprehensive consulting services to accelerate your data and AI journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-8 hover:bg-gray-750 transition-colors">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-purple-600 rounded-lg mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300">
                          <span className="text-purple-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-700 rounded-lg p-4">
                    <p className="text-purple-300 font-medium">{service.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">My Process</h2>
              <p className="text-xl text-gray-300">
                A proven methodology to ensure successful outcomes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Me Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Me?</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-600 rounded-lg mr-4 mt-1">
                      <AcademicCapIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Real-World Experience</h3>
                      <p className="text-gray-300">
                        Help organizations create data strategy and AI strategy and enable Data / AI Literacy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-600 rounded-lg mr-4 mt-1">
                      <ChartBarIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Proven Track Record</h3>
                      <p className="text-gray-300">
                        Being a data generalist with proven experience in analytics, engineering and cloud, 
                        successfully led data teams and delivered measurable business outcomes.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-2 bg-purple-600 rounded-lg mr-4 mt-1">
                      <BookOpenIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Empathetic Leadership</h3>
                      <p className="text-gray-300">
                        Focus on professional leadership that understands team dynamics and drives collaborative success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Let&apos;s discuss how I can help transform your organization&apos;s data and AI capabilities. 
                  Book your free discovery call to explore your specific needs and challenges.
                </p>
                <div className="space-y-4">
                  <a
                    href="/book-call"
                    className="block w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    Book Free Discovery Call
                  </a>
                  <a
                    href="/contact"
                    className="block w-full border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                  >
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
