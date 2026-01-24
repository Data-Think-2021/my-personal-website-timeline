'use client';

import { useActionState } from 'react';
import { subscribeToSprint } from '@/app/actions/subscribe';

interface EmailSignupProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

const initialState = {
  success: false,
  error: '',
};

export default function EmailSignup({
  title = "Join the AI Kickstart Sprint",
  description = "Enter your email to join the waitlist and get notified when registration opens.",
  buttonText = "Join the Sprint"
}: EmailSignupProps) {
  const [state, formAction, isPending] = useActionState(subscribeToSprint, initialState);

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <p className="text-gray-300 mb-6 text-lg">{description}</p>

      {state?.success ? (
        <div className="bg-green-800/50 border border-green-500 rounded-lg p-6 text-center">
          <p className="text-green-300 text-lg mb-2">🎉 Thank you for joining!</p>
          <p className="text-green-200">Check your email for next steps. We&apos;ll be in touch soon!</p>
        </div>
      ) : (
        <form action={formAction} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white disabled:opacity-50"
              placeholder="your.email@example.com"
              required
              disabled={isPending}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-gray-300">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white disabled:opacity-50"
                placeholder="Jane"
                required
                disabled={isPending}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-white disabled:opacity-50"
                placeholder="Doe"
                required
                disabled={isPending}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            {isPending ? 'Joining...' : buttonText}
          </button>

          {state?.error && (
            <div className="text-red-400 text-sm mt-2">
              {state.error}
            </div>
          )}
        </form>
      )}
    </div>
  );
}
