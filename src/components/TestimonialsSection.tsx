'use client';

import { ParticleCard } from './MagicBento';
import ShinyText from './ShinyText';

const testimonials = [
  {
    name: 'Client Name',
    text: 'Krinetra is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I\'ve witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-10">
          <div className="inline-block px-6 py-2 rounded-lg shadow-md" style={{ backgroundColor: '#1f1f1f95' }}>
            <ShinyText text="Testimonials" className="text-3xl font-bold" speed={3} />
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <ParticleCard
              key={index}
              className="rounded-xl p-6 sm:p-8 shadow-md"
              style={{ backgroundColor: '#e8e0d180' }}
              glowColor="195, 143, 47"
              enableTilt={true}
              clickEffect={true}
              enableMagnetism={false}
              particleCount={12}
            >
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed mb-4">
                "{testimonial.text}"
              </p>
              <p className="text-sm font-semibold text-gray-700">— {testimonial.name}</p>
            </ParticleCard>
          ))}
        </div>
      </div>
    </section>
  );
}
