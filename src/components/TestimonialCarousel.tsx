'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
}

export default function TestimonialCarousel({
  title,
  testimonials,
  seeMoreLabel = 'See more',
}: {
  title: string;
  testimonials: Testimonial[];
  seeMoreLabel?: string;
}) {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, page * perPage + perPage);
  const hasMultiplePages = totalPages > 1;

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">{title}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {visible.map((t, i) => (
          <div
            key={page * perPage + i}
            className="bg-gray-800 rounded-lg p-8 flex flex-col items-center text-center gap-4"
          >
            {t.imageSrc ? (
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={t.imageSrc}
                  alt={`Photo of ${t.author}`}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-2xl font-bold">
                  {t.author.charAt(0)}
                </span>
              </div>
            )}
            <div>
              <p className="text-gray-300 italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-white font-semibold">{t.author}</p>
              <p className="text-purple-400 text-sm">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      {hasMultiplePages && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-30 hover:bg-gray-700 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === page ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="p-2 rounded-full bg-gray-800 text-white disabled:opacity-30 hover:bg-gray-700 transition-colors"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      )}
      <div className="mt-4 text-center">
        <button
          onClick={() => hasMultiplePages && setPage((p) => (p + 1) % totalPages)}
          className={`text-sm underline transition-colors ${
            hasMultiplePages
              ? 'text-purple-400 hover:text-purple-300'
              : 'text-gray-400 cursor-not-allowed'
          }`}
          aria-disabled={!hasMultiplePages}
        >
          {seeMoreLabel}
        </button>
      </div>
    </div>
  );
}
