'use client';

import { useEffect, useState } from 'react';
import ShinyText from './ShinyText';
import ScrollStack from './ScrollStack';

const services = [
  {
    title: 'Web Development',
    description:
      'Custom web applications built with modern technologies like React, Next.js, and TypeScript for optimal performance.',
    points: ['Responsive Design', 'Fast Loading', 'SEO Optimized'],
  },
  {
    title: 'Backend Development',
    description:
      'Robust server-side solutions with scalable architecture, secure APIs, and efficient database management.',
    points: ['Express.js', 'Mongo DB', 'Cloud integration'],
  },
  {
    title: 'App Development',
    description:
      'Cross-platform mobile applications that deliver native-like experiences on both iOS and Android devices.',
    points: ['React Native', 'Expo', 'Progressive Web Apps'],
  },
  {
    title: 'E-commerce Solutions',
    description:
      'Complete online store development with secure payment integration, inventory management, and seamless checkout experience.',
    points: ['Payment Gateway', 'Product Management', 'Order Tracking'],
  },
  {
    title: 'UI/UX Design',
    description:
      'Beautiful and intuitive user interfaces designed to engage users and enhance their experience with your product.',
    points: ['User Research', 'Wireframing', 'Prototyping'],
  },
  {
    title: 'Maintenance & Support',
    description:
      'Ongoing technical support and maintenance to keep your applications running smoothly with regular updates and bug fixes.',
    points: ['24/7 Support', 'Regular Updates', 'Bug Fixes'],
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

        {/* Animated Scroll Stack */}
        <div className="mt-6">
          <ScrollStack
            cards={services.map((s) => ({
              title: s.title,
              subtitle: s.description,
              // pass points through for rendering inside ScrollStack
              // @ts-ignore
              points: s.points || s.points,
            }))}
            cardHeight="56vh"
            sectionHeightMultiplier={3}
            className="pb-24"
          />
        </div>
      </div>
    </section>
  );
}
