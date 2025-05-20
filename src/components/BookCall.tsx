'use client';

import Script from 'next/script';

const BookCall = () => {
  return (
    <>
      {/* Intro Section */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Book a Free Consultation</h2>
          <p className="text-gray-300 text-center">
            I offer two free consultation slots every Friday. Let&apos;s discuss how I can help you advance your career in tech.
          </p>
        </div>
      </div>

      {/* Calendly Widget Section - Full Width */}
      <div className="w-full h-screen">
        <div 
          className="calendly-inline-widget w-full h-full" 
          data-url="https://calendly.com/xia-he88/30min"
        ></div>
        <Script 
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </div>
    </>
  );
};

export default BookCall; 