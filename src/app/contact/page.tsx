'use client';

import Navigation from '@/components/Navigation';
import { useForm, ValidationError } from '@formspree/react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [state, handleSubmit] = useForm("mzzronla");

  return (
    <>
      <Navigation />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              {state.succeeded ? (
                <div className="bg-green-800/50 border border-green-500 rounded-lg p-6 text-center">
                  <p className="text-green-300 text-lg mb-2">Thank you for your message!</p>
                  <p className="text-green-200">I&apos;ll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      required
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-red-400" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      required
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-red-400" />
                  </div>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Connect With Me</h2>
              <div className="space-y-6">
                <p className="text-gray-300">
                  Whether you have questions about coaching, want to discuss collaboration opportunities, or just want to say hello, I&apos;d love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Me</h3>
                    <div className="flex space-x-6">
                      <a
                        href="https://www.linkedin.com/in/xia-he-bleinagel-51773585/"
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedin className="w-6 h-6" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://github.com/Data-Think-2021"
                        className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2 text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-6 h-6" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Quick Response?</h3>
                  <p className="text-gray-300 mb-4">
                    Book a free consultation call for immediate assistance.
                  </p>
                  <a
                    href="/book-call"
                    className="inline-block text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Schedule Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 