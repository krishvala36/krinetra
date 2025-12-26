'use client';

import Image from 'next/image';
import { ParticleCard } from './MagicBento';
import ShinyText from './ShinyText';

const highlights: { title: string; description: string; icon: string }[] = [
  {
    title: 'Clean code',
    description: 'Writing maintainable, scalable code that stands the test of time.',
    icon: '⚡',
  },
  {
    title: 'Creative design',
    description: 'Crafting intuitive and visually stunning user interfaces.',
    icon: '✨',
  },
  {
    title: 'Performance',
    description: 'Building fast, optimized applications for the best user experience.',
    icon: '🚀',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-center mb-10">
          <div className="inline-block px-6 py-2 rounded-lg shadow-md" style={{ backgroundColor: '#1f1f1f' }}>
            <ShinyText text="About" className="text-3xl font-bold" speed={3} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item) => (
              <ParticleCard
                key={item.title}
                className="rounded-xl p-4 sm:p-5 shadow-sm flex gap-4 items-start"
                style={{ backgroundColor: 'rgba(232, 224, 209, 0.5)' }}
                glowColor="195, 143, 47"
                enableTilt={true}
                clickEffect={true}
                enableMagnetism={true}
                particleCount={8}
              >
                <IconBadge type={item.icon} />
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{item.description}</p>
                </div>
              </ParticleCard>
            ))}
          </div>

          {/* Image */}
          <div className="relative w-full h-64 sm:h-80 md:h-full min-h-[260px] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/img-4.jpg"
              alt="Developer at work"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IconBadge({ type }: { type: string }) {
  return (
    <span
      className="inline-flex p-[1px] rounded-xl"
      style={{
        backgroundImage: 'linear-gradient(135deg, #FFFFFF 0%, #F7B602 52%, rgba(255,255,255,0.08) 87%)',
      }}
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-[10px] text-2xl"
        style={{ backgroundColor: '#d6d9d6' }}
      >
        {type}
      </span>
    </span>
  );
}