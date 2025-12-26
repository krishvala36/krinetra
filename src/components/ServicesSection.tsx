'use client';

import { useEffect, useState } from 'react';
import { ParticleCard } from './MagicBento';
import ShinyText from './ShinyText';

const services = [
  {
    title: 'Product Strategy',
    description: 'Discovery, roadmapping, KPIs, and measurable outcomes for launch and growth.',
    chip: 'Business-first',
  },
  {
    title: 'Web Experiences',
    description: 'High-performance websites, landing pages, and dashboards built for conversion.',
    chip: 'Web',
  },
  {
    title: 'Mobile Apps',
    description: 'iOS and Android apps with polished UI, offline readiness, and analytics baked in.',
    chip: 'Mobile',
  },
  {
    title: 'Brand & Visual',
    description: 'Identity systems, design systems, and marketing assets that stay consistent.',
    chip: 'Branding',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Scalable infra, CI/CD, observability, and cost optimization for reliable releases.',
    chip: 'Cloud',
  },
  {
    title: 'SEO & Performance',
    description: 'Technical SEO, Core Web Vitals, and speed optimization to keep users (and search) happy.',
    chip: 'Optimization',
  },
];

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="services" className="relative py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)' }}>
              <ShinyText text="Services" className="text-sm font-semibold" speed={3} />
              <span className="h-1 w-1 rounded-full" style={{ backgroundColor: '#C38F2F' }}></span>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-600">For Business Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Technical services crafted for ambitious teams
            </h2>
            <p className="text-gray-700 max-w-2xl leading-relaxed">
              Full-stack product help — from brand to build to launch — optimized for mobile-first users and measurable business outcomes.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-sm text-gray-600">
              <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: '#15c47e' }}></span>
              Mobile-first, fast, and reliable
            </div>
            <button
              className="px-5 py-2 rounded-lg text-white text-sm font-semibold shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-95"
              style={{ backgroundImage: 'linear-gradient(135deg, #5E94FF, #164952)' }}
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ParticleCard
              key={service.title}
              className={`rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-sm p-5 sm:p-6 shadow-sm transition-all duration-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
              glowColor="195, 143, 47"
              enableTilt={true}
              clickEffect={true}
              enableMagnetism={true}
              particleCount={10}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: 'rgba(195, 143, 47, 0.12)', color: '#C38F2F' }}>
                  {service.chip}
                </span>
                <div className="h-9 w-9 rounded-full flex items-center justify-center text-sm font-bold text-gray-700" style={{ backgroundColor: 'rgba(0,0,0,0.05)' }}>
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">{service.title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <button className="text-sm font-semibold" style={{ color: '#164952' }}>
                Learn more →
              </button>
            </ParticleCard>
          ))}
        </div>
      </div>
    </section>
  );
}
