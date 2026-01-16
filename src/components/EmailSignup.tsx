'use client';

import { useForm, ValidationError } from '@formspree/react';

interface EmailSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

export default function EmailSignup({ 
  title = "Join the AI Kickstart Sprint",
  description = "Enter your email to join the waitlist and get notified when registration opens.",
  buttonText = "Join the Sprint"
}: EmailSignupProps) {
  const [state, handleSubmit] = useForm("mpqqqpjz");

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 mb-6 text-lg">{description}</p>
      
      {state.succeeded ? (
        <div className="bg-green-800/50 border border-green-500 rounded-lg p-6 text-center">
          <p className="text-green-300 text-lg mb-2">🎉 Thank you for joining!</p>
          <p className="text-green-200">Check your email for next steps. We&apos;ll be in touch soon!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="_subject" value="AI Kickstart Sprint - Email Signup" />
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white"
              placeholder="your.email@example.com"
              required
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white"
              placeholder="Your name"
            />
          </div>
          
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {state.submitting ? 'Joining...' : buttonText}
          </button>
          
          <ValidationError errors={state.errors} />
        </form>
      )}
    </div>
  );
}
